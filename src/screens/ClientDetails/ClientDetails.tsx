import React, { useState, useEffect } from "react";
import { clientsAPI, Client, CreateClientRequest } from "../../services/api";

export const ClientDetails = (): JSX.Element => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<CreateClientRequest>({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      setLoading(true);
      const data = await clientsAPI.getClients();
      setClients(data);
    } catch (err) {
      setError("Failed to fetch clients");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await clientsAPI.createClient(formData);
      setFormData({ name: "", email: "", phone: "" });
      setShowForm(false);
      fetchClients(); // Refresh the list
    } catch (err: any) {
      setError(err.response?.data?.detail || "Failed to create client");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading clients...</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Client Management</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {showForm ? "Cancel" : "Add Client"}
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {showForm && (
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Add New Client</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Create Client
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="space-y-4">
          {clients.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-2">No clients found</div>
              <div className="text-gray-400 text-sm">Add your first client to get started</div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-4 gap-4 p-3 bg-gray-100 rounded-lg font-semibold text-sm text-gray-700">
                <div>Name</div>
                <div>Email</div>
                <div>Phone</div>
                <div>Created Date</div>
              </div>
              {clients.map((client) => (
                <div key={client.id} className="grid grid-cols-4 gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-gray-800 font-medium">{client.name}</div>
                  <div className="text-gray-600">{client.email}</div>
                  <div className="text-gray-600">{client.phone || "N/A"}</div>
                  <div className="text-gray-500 text-sm">
                    {new Date(client.created_at).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
