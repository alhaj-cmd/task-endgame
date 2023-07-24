
import Collagecard from './component/Collagecard/Collagecard'
import Footer from './component/Footer/Footer'
import Gallery from './component/Gallery/Gallery'
import Header from './component/Header/Header'
import Home from './component/Home/Home'

function App() {
 

  return (
  <div className='mx-auto w-[1024px]'>
    <Header></Header>
    <Home></Home>
    <Collagecard></Collagecard>
    <Gallery></Gallery>
    <Footer></Footer>
  </div>
  )
}

export default App
