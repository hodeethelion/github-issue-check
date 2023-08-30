import { Route, Routes } from "react-router-dom";
import Issuedetail from "./pages/Issuedetail";
import Issuelist from "./pages/Issuelist";
import SharedLayout from "./components/SharedLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Issuelist />} />
        <Route path="/:id" element={<Issuedetail />} />
      </Route>
    </Routes>
  );
};

export default App;
