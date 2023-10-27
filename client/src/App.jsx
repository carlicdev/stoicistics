
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// pages
import { Home } from './pages';

// layouts
import { RootLayout, DashboardLayout } from './layouts';

// loaders


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<RootLayout />} >
      <Route index element={<Home />} />
    </Route>
    <Route path='/dashboard' element={<DashboardLayout />} />
    </>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
