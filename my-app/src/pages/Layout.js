import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div style={{height: "80px", backgroundColor: "black", display: "flex", flexDirection: "vertical", justifyContent: "space-between"}}>
        <Link to="/" style={{color:"white", textDecoration:"none", fontSize:"24px", padding: "20px", alignSelf: "center", fontWeight: "bold"}}>Monkey Assistant 0.1-beta</Link>
        <div style= {{display: "flex", flexDirection: "vertical", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{padding: "20px"}}><Link to="/blogs" style={{color:"white", textDecoration:"none"}}>Blogs</Link></div>
            <div style={{padding: "20px"}}><Link to="/contact" style={{color:"white", textDecoration:"none"}}>Contact</Link></div>
        </div>
      </div>
      <Outlet />
    </>
  )
};


/*
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

*/

export default Layout;