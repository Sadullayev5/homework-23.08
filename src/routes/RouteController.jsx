import { lazy , Suspense } from 'react';
import { Routes , Route} from 'react-router-dom'
const Home = lazy(() => import('./Home/Home'));
const Register = lazy(() => import('./Register/Register'));

const RouteController = () => {
  return (
    <Routes>
        <Route path='/' element={<Suspense fallback={<h1>Loading...</h1>}><Home/></Suspense>} />
        <Route path='/register' element={<Suspense fallback={<h1>Loading...</h1>}><Register/></Suspense>} />
    </Routes>
  )
}

export default RouteController