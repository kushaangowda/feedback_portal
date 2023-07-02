import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import Tweets from "./routes/Tweets";
import Home from "./routes/Home";
import Reviews from "./routes/Reviews";
import Playground from "./routes/Playground";
import ReviewsOverall from "./routes/ReviewsOverall";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/tweets",
        element: <Tweets />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/overall",
        element: <ReviewsOverall />,
      },
      {
        path: "/playground",
        element: <Playground />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
