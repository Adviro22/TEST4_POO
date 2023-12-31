import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  return (
    <nav className="bg-slate-900 my-3 flex justify-between py-5 px-10 rounded-lg ">
      <h1 className="text-2xl font-bold text-white">
        <Link to={isAuthenticated ? "/products" : "/"}>Productos</Link>
      </h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li className="text-white">
              user: {user.email}
            </li>
            <li>
              <ButtonLink to="/add-product">Ingresar Productos</ButtonLink>
            </li>
            <li>
              <Link to="/" onClick={() => logout()} className="text-white">
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/login">Login</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Register</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
