import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Create from "./pages/Create";
import Delete from "./pages/Delete";
import Describe from "./pages/Describe";
import Find from "./pages/Find";
import Select from "./pages/Select";
import Update from "./pages/Update";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "row", gap: 16 }}>
        <nav>
          <Link to="/describe">Describe</Link>
        </nav>
        |
        <nav>
          <Link to="/find">Find</Link>
        </nav>
        |
        <nav>
          <Link to="/select">Select</Link>
        </nav>
        |
        <nav>
          <Link to="/create">Create</Link>
        </nav>
        |
        <nav>
          <Link to="/update">Update</Link>
        </nav>
        |
        <nav>
          <Link to="/delete">Delete</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/describe" element={<Describe />} />
        <Route path="/find" element={<Find />} />
        <Route path="/select" element={<Select />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </Router>
  );
}

export default App;
