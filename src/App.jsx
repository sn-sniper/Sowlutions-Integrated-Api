import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@routes/Routes";

function App() {
  return (
    //Use Browser Router to call the Homepage in the AppRoutes
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
