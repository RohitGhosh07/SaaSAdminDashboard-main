# SaaS Admin Dashboard

A modern, responsive admin dashboard built with React, TypeScript, and Tailwind CSS. This dashboard is designed for financial advisors and investment professionals to manage their clients and monitor business activities.

## Features

### 1. Dashboard
- Overview of key metrics
- Quick access to important features
- Real-time updates and notifications

### 2. Client Management
- Comprehensive client list view
- Detailed client profiles
- Client onboarding and documentation

### 3. Revenue Analysis
- Total revenue overview
- Monthly revenue trends
- Revenue breakdown by source
- Visual charts and graphs

### 4. Client Activity
- Real-time activity tracking
- Filterable activity log
- Transaction history
- Client interactions

### 5. Broking Commission
- Commission tracking
- Commission rates management
- Historical commission data

### 6. Mutual Commission
- Mutual fund commission tracking
- Commission distribution
- Performance metrics

### 7. Details
- General information section
- Company details
- Important documentation

### 8. DO's & DON'Ts
- Best practices guide
- Compliance guidelines
- Important reminders
- Professional standards

### 9. Change Format
- Customizable layout options
- Theme settings
- Display preferences
- User interface customization

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- React Router DOM

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd SaaSAdminDashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   └── ui/              # Basic UI elements
├── screens/             # Main application screens
│   ├── Dashboard/
│   ├── ClientDetails/
│   ├── BrokingCommission/
│   ├── MutualCommission/
│   ├── RevenueAnalysis/
│   ├── ClientActivity/
│   ├── DoDont/
│   └── ChangeFormat/
└── lib/                 # Utilities and helpers
    └── utils.ts
```

## Screens Description

1. **Dashboard**: Main overview screen showing key metrics, recent activities, and quick access to important features.

2. **Client Management**: Handles all client-related operations including viewing client lists, managing client details, and tracking client interactions.

3. **Revenue Analysis**: Provides detailed insights into revenue streams with visual representations and trend analysis.

4. **Client Activity**: Shows real-time client activities, transactions, and interactions with filtering capabilities.

5. **Broking Commission**: Manages and tracks broking commissions with detailed breakdowns and historical data.

6. **Mutual Commission**: Handles mutual fund commission tracking and distribution management.

7. **Details**: Contains general information and important documentation.

8. **DO's & DON'Ts**: Guidelines and best practices for maintaining professional standards and compliance.

9. **Change Format**: Allows users to customize the dashboard layout and appearance according to their preferences.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
