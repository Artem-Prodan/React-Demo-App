import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";
import { useAuth } from "../context/AuthContext";
import { BrowserRouter } from "react-router-dom";

// mock useAuth
jest.mock("../context/AuthContext");

function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

describe("LoginPage", () => {
  // mock function that replaces real login method from AuthContext
  const mockLogin = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useAuth.mockReturnValue({login: mockLogin});
  });

  // render LoginPage inside BrowserRouter
  test("renders login form", () => {
    renderWithRouter(<LoginPage />);

  // check that all main UI elements are rendered
    // heading
    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();

    // inputs
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();

    // button
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  // simulate successful login
  test("calls login with correct data on submit", () => {
    mockLogin.mockReturnValue(true);

    renderWithRouter(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Artem" },
    });

    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "+48123456789" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(mockLogin).toHaveBeenCalledWith({
      name: "Artem",
      phone: "+48123456789",
    });
  });

   // simulate failed login attempt
  test("shows error message when login fails", () => {
    mockLogin.mockReturnValue(false);

    renderWithRouter(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "A" },
    });

    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "1234" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(
      screen.getByText(/invalid name or phone/i)
    ).toBeInTheDocument();
  });
});
