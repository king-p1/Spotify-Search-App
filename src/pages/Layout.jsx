// Importing the Outlet component from React Router
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      {/* The Outlet component renders the matching child route */}
      <Outlet/>
    </div>
  )
}

export default Layout;
