import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://crm-backend-fastapi.vercel.app/';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle responses and errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

export interface User {
  id: number;
  email: string;
  name: string;
  is_active: boolean;
  created_at: string;
}

export interface Client {
  id: number;
  name: string;
  email: string;
  phone?: string;
  created_at: string;
}

export interface Commission {
  id: number;
  client_id: number;
  amount: number;
  source?: string;
  created_at: string;
}

export interface SignInResponse {
  access_token: string;
  token_type: string;
  user: User;
}

export interface CreateClientRequest {
  name: string;
  email: string;
  phone?: string;
}

// Authentication API
export const authAPI = {
  signIn: async (email: string, password: string): Promise<SignInResponse> => {
    const response = await apiClient.post('/auth/signin', { email, password });
    return response.data;
  },

  register: async (email: string, name: string, password: string): Promise<User> => {
    const response = await apiClient.post('/auth/register', { email, name, password });
    return response.data;
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get('/auth/me');
    return response.data;
  },
};

// Clients API
export const clientsAPI = {
  getClients: async (skip = 0, limit = 100): Promise<Client[]> => {
    const response = await apiClient.get(`/clients/?skip=${skip}&limit=${limit}`);
    return response.data;
  },

  getClient: async (clientId: number): Promise<Client> => {
    const response = await apiClient.get(`/clients/${clientId}`);
    return response.data;
  },

  createClient: async (clientData: CreateClientRequest): Promise<Client> => {
    const response = await apiClient.post('/clients/', clientData);
    return response.data;
  },
};

// Health check API
export const healthAPI = {
  checkHealth: async (): Promise<{ status: string }> => {
    const response = await apiClient.get('/healthz');
    return response.data;
  },
};

// Check if backend is connected
export const checkBackendConnection = async (): Promise<boolean> => {
  try {
    await healthAPI.checkHealth();
    return true;
  } catch (error) {
    console.error('Backend connection failed:', error);
    return false;
  }
};

export default apiClient;