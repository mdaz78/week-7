import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* <Link to="/">Landing</Link>
      <Link to="/dashboard">Dashboard</Link> */}

      <button onClick={() => navigate("/")}>Landing</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button onClick={() => navigate("/propDrilling")}>propDrilling</button>
    </div>
  );
};

export default Navbar;
