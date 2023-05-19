import MainPage from './pages/MainPage/MainPage'
import  {Routes,Route} from 'react-router-dom'
import UserPage from './pages/UserPage/UserPage'
import AboutMePage from './pages/AboutMePage/AboutMePage'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/:userId' element={<UserPage/>}/>
        <Route path='/about' element={<AboutMePage/>}/>
      </Routes>
    </>
  )
}

export default App
