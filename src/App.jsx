import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Home } from './Pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { RootLayout } from './RootLayout/RootLayout';
import { AllDoctor } from './Pages/AllDoctor';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { SignUp } from './Pages/SignUp';
import { SignIn } from './Pages/SignIn';
function App() {

  const route = createBrowserRouter(createRoutesFromElements(
    <Route>
          <Route element={<RootLayout/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/allDoc' element={<AllDoctor/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/signUp' element={<SignUp/>} />
            <Route path='/signIn' element={<SignIn/>} />
          </Route>
    </Route>
  ))

  return (
    <>
    <RouterProvider router={route} />
    </>
  )
}

export default App
