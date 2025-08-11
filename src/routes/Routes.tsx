
import { Route,  Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Page404 from '../pages/Page404'


const DefaultRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/*' element={<Page404/>}/>
   </Routes>
  )
}

export default DefaultRoutes