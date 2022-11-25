import { createBrowserRouter } from "react-router-dom";
import { Home, ListStickers, RegisterStickers } from "../../screens";

const RootRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <ListStickers />,
      },
      {
        path: '/list',
        element: <ListStickers />,
      },
      { 
        path: '/register',
        element: <RegisterStickers />
      }    
    ]
  }
])

export default RootRouter