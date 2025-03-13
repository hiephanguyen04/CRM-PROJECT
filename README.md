# Metaforma CRM Application

This is a CRM (Customer Relationship Management) application built with React and TypeScript according to requirements provided for the JHO TECH COMPANY LIMITED Frontend Development Test.

## Features Implemented

- Authentication (Login) with form validation and Google OAuth integration
- Contacts management page
- Responsive design with a focus on UI/UX details
- Dynamic content using TypeScript interfaces and mock data
- Protected routes requiring authentication
- Proper component structure and organization

## Project Structure

```
metaforma-crm/
├── public/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   └── Sidebar/
│   │   └── modules/
│   ├── config/
│   │   └── mockData.ts
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── models/
│   │   └── types.ts
│   ├── pages/
│   │   ├── Login/
│   │   └── Contacts/
│   ├── styles/
│   │   └── global.css
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Installation and Running

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/metaforma-crm.git
   cd metaforma-crm
   ```

2. Google OAuth Configuration

   - Create a project in the [Google Developer Console](https://console.developers.google.com/)
   - Set up OAuth credentials and get your Client ID
   - Replace `YOUR_GOOGLE_CLIENT_ID` in `src/App.tsx` with your actual Google Client ID

3. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server

   ```bash
   npm start
   # or
   yarn start
   ```

5. Build for production
   ```bash
   npm run build
   # or
   yarn build
   ```

## Login Credentials

You can use the following credentials to log in:

- Email: sebastien@metaforma.com
- Password: password123

## Technologies Used

- React 18
- TypeScript
- React Router v6
- CSS3 (no framework as required)
- Context API for state management

## Notes

- All content is stored in mock data files and rendered dynamically
- The UI closely follows the provided Figma design while maintaining best practices
- The header scrolls with the page as required
- No Bootstrap or other CSS frameworks were used
- Clean code structure with appropriate naming conventions
- Components are built with TypeScript interfaces for type safety

## Future Improvements

- Implement the Tasks, Opportunities, and other remaining pages
- Add form validation for contact creation and editing
- Implement filtering and sorting functionality
- Add dark/light theme toggle
- Integrate with a backend API

## License

This project is part of a technical test and is not licensed for public use.
