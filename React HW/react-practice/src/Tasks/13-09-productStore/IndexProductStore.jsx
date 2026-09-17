import { RouterProvider } from "react-router-dom";
import routes from "./routes";

const IndexProductStore = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default IndexProductStore;
