import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../view/Home";
import SortableHoc from "../view/SortableHoc";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/sortable" element={<SortableHoc />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
