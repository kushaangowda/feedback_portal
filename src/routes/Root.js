import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <>
      <div id="sidebar">
        <h1>Customer Feedback Portal</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/home`}>Home</Link>
            </li>
            <li>
              <Link to={`/overall`}>Overall Insight</Link>
            </li>
            <li>
              <Link to={`/reviews`}>Reviews</Link>
            </li>
            <li>
              <Link to={`/playground`}>Add Review</Link>
            </li>
            <li>
              <a
                href="https://github.com/kushaangowda/feedback_portal"
                rel="noreferrer"
                target="_blank"
              >
                GitHub Repo
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
