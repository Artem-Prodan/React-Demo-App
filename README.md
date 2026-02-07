# React Demo App
## React + Vite and JavaScript

This is simple React application which displays items fetched from JSONplaceholder with Search filter. Clicking on certain item will redirect to its Detail page.

The project consists of components, pages, hooks, states, context, tests, custom CSS styling, and routing with React Router.

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
- MainPage - Fetches data, manages search state, and renders filtered results
- SearchInput - Controlled input for dynamic search
- ProductList / ProductCard - Renders the list and separate products
- DetailPage - Displays detailed info for selected product
- SearchHelper - function for filtering items
- useSearchLogic (custom hook) - manages search input state
- LoginPage - handles user login with validation
- AuthContext - provides authentication state and login/logout functions
- ProtectedRoute (in App.jsx) - allow access only to authenticated users

## Testing
- Unit tests written using Jest and React Testing Library
- Mocking of AuthContext for isolated testing
### Login page tests
- Rendering of heading, inputs, and submit button
- Successful login flow (calls login with correct data)
- Failed login flow (displays error message)
- Tests require proper label/input (htmlFor / id) for getByLabelText
- Babel is configured to support JSX and modern JavaScript in tests


## Dependencies
- npm install
- npm install --save-dev jest
- npm install --save-dev @testing-library/react
- npm install --save-dev @testing-library/jest-dom
- npm install --save-dev @babel/preset-env
- npm install --save-dev @babel/preset-react
- npm install --save-dev babel-jest
- npm install --save-dev identity-obj-proxy
## Scripts
- npm test - for testing
- npm run dev - start the server
