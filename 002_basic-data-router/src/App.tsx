import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";

const messageLoader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { message: "Hello Data Router!" };
};

let router = createBrowserRouter([
  {
    path: "/",
    loader: messageLoader,
    Component() {
      // useLoaderDataはloaderで返した値を取得
      let data = useLoaderData() as { message: string };
      return <h1>{data.message}</h1>;
    },
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
