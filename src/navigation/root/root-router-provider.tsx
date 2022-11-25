import { RouterProvider } from "react-router-dom"
import RootRouter from "./root-router"

const RootRouterProvider = () => {
  return (
    <RouterProvider router={RootRouter} />
  )
}

export default RootRouterProvider