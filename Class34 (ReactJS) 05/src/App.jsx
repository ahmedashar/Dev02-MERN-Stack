import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { publicRoute } from './routes/router'

function App() {

  return (
    <>
      <RouterProvider router={publicRoute}/>
    </>
  )
}

export default App

// 1. router.jsx --> createBrowserRouter
// 2. App.jsx --> RouterProvider
// 3. React router dom hooks --> useNavigate (use for navigation)
// 4. Link and NavLink
// 5. React router dom hooks --> useParams (use for getting parameters from url)
// 6. data pass through useNavigate hook 
     // navigate("/home", {state: data })
// 7. useSearchParams() hook

// -------- custom Hook
// example --> counter Hook and fetch api hook