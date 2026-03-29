import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export const MemberPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <section className="section">
      <div className="container member-grid">
        <aside className="card member-sidebar">
          <h3>Navigation</h3>
          <ul>
            <li>Dashboard</li>
            <li>Profile</li>
            <li>My meetings (placeholder)</li>
          </ul>
        </aside>
        <div className="member-main">
          <div className="card">
            <h2>Dashboard</h2>
            <p className="section-lead">
              Welcome {user?.name || user?.email}. This is your member area.
            </p>
            <div className="grid two">
              <div className="card subtle">
                <h3>Upcoming meetings</h3>
                <p>
                  This is a placeholder. When you connect your scheduling tool
                  or internal booking system, upcoming meetings can appear here.
                </p>
              </div>
              <div className="card subtle">
                <h3>Profile</h3>
                <p>Name: {user?.name || "Member"}</p>
                <p>Email: {user?.email}</p>
              </div>
            </div>
            <div className="member-cta">
              <Link to="/contact" className="btn btn-primary">
                Book another meeting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

