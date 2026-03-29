import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { isAuthenticated, user, signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            Webion
          </Link>
          <nav className="nav-links">
            <NavLink to="/" end>
              Home
            </NavLink>
            <a href="#about">About</a>
            <a href="#what-we-do">What we do</a>
            <a href="#testimonials">Testimonials</a>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <div className="header-actions">
            {isAuthenticated ? (
              <>
                <NavLink to="/member" className="btn btn-ghost">
                  {user?.name || "Member area"}
                </NavLink>
                <button className="btn btn-ghost" onClick={handleSignOut}>
                  Sign out
                </button>
              </>
            ) : (
              <NavLink to="/auth" className="btn btn-primary">
                Member login
              </NavLink>
            )}
          </div>
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <div className="logo">Webion</div>
            <p>Modern web presence for your business.</p>
          </div>
          <div>
            <h4>Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#what-we-do">What we do</a>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Email: hello@example.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div>
            <h4>Follow</h4>
            <p>LinkedIn · X · Instagram</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Webion.</span>
          <span>Privacy · Terms</span>
        </div>
      </footer>
    </div>
  );
};

