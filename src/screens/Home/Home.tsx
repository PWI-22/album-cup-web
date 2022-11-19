import { Link, Outlet } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div>
        <h1>World Cup Album</h1>

        <nav>
          <Link to="list">Lista</Link>
          
          &nbsp;&nbsp;&nbsp;
          
          <Link to="register">Cadastro</Link>
        </nav>
      </div>

      <Outlet />
    </>
  )
}

export default Home
