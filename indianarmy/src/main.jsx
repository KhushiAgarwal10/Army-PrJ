import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './Pages/Home.jsx'
import Wars from './Pages/Wars.jsx'
import Contact from './Pages/Contact.jsx'
import Award from './Pages/Award.jsx'
import Mission from './Pages/Mission.jsx'
import Quiz from './Pages/Quiz.jsx'





const router = createBrowserRouter(
  createRoutesFromElements(


    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='wars' element={<Wars />} />
      <Route path='contact' element={<Contact />} />
      <Route path='award' element={<Award />} />
      <Route path='mission' element={<Mission />} />
      <Route path='quiz' element={<Quiz />} />

    </Route>



  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
