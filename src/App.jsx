import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Cars from './pages/Cars/Cars'
import CarDetails from './pages/CarDetails/CarDetails'
let routers = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index:"true", element: <Home /> },
      { path:"home", element: <Home /> },
      { path:"cars", element: <Cars /> },
      { path:"cardetails", element: <CarDetails /> },
  ]}
])
function App() {
  return (
    <>
      <RouterProvider router={routers}>

      </RouterProvider>
    </>
  )
}

export default App
