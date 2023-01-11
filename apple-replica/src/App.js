import { Route, Routes } from 'react-router-dom';
import './App.css';
import './commonResource/css/styles.css'
import Headline from './components/Headline';
import SecOneAndTwo from './components/section-one-two/SecOneAndTwo';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import YouTube from './components/youTube/YouTube';
import Iphone from './components/pages/Iphone';
import Header from './components/header/Header';
import PageNotFound from './components/pages/PageNotFound';
import Iphones from './components/pages/Iphones';
import Ipad from './components/pages/Ipad';
import Watch from './components/pages/Watch';
import Support from './components/pages/Support';
import Tv from './components/pages/Tv';
// import iphonese from './components/pages/iphonese';
console.log(process.env.REACT_APP_API_KEY)

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
      <Route path='/logo' element={<Main/>} />
      <Route path='/mac' element={<Main/>} />
      <Route path='/iPhone' element={<Iphones/>} />
      <Route path='/ipad' element={<Ipad/>} />
      <Route path='/watch' element={<Watch/>} />
      <Route path='/tv' element={<Tv/>} />
      <Route path='/Music' element={<SecOneAndTwo/>} />
      <Route path='/Support' element={<Support/>} />
      <Route path='/cart' element={<Iphone/>} />
      <Route path='*' element={<PageNotFound/>} />
      
      <Route path='/' element={
      <>
      <Headline />
      <SecOneAndTwo />
      <Main />
      <YouTube />
      </>
      } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
