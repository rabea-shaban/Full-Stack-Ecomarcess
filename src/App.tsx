import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";

function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
