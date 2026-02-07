# React Demo App
## React + Vite and JavaScript

This is simple React application which displays items fetched from JSONplaceholder with Search filter. Clicking on certain item will redirect to its Detail page.

The project contsists of components, pages, hooks, states, context, and routing with React Router.

## Features
- Fetches data from public REST API (jsonplaceholder)
- Displays list of products on the main page
- Search filtering follows user typing
- Navigation between pages using React Router
- Detail page for each product with "return" button

## Login
- Login page with name and phone number validation
- Mock authentication using Context API
- Logout functionality
- Protected routes - Main and Detail pages require login
- Error messages for invalid login inputs

## Project Structure
- App.jsx - Application entry point and route configuration
- SearchContainer - Fetches data, manages search state, and renders filtered results
- SearchInput - Controlled input for dynamic search
- ProductList / ProductCard - Renders the list and separate products
- ProductDetail - Displys detailed info for selected product
- SearchHelper - function for filtering items
- useSearchLogic (custom hook) - manages search input state
- LoginPage - handles user login with validation
- AuthContext - provides authentication state and login/logout functions
- ProtectedRoute (in App.jsx) - allow access only to authenticated users


## Scripts and dependencies
1. npm install
2. npm run dev - start the server
