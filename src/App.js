import React from 'react'
import Blog from './component/intern/blog'
import Works from './component/intern/works'
import Contact from './component/intern/contact'
import {Routes, Route, Router} from 'react-router-dom';
import Header from './component/intern/header';
import Footer from './component/intern/footer';
import Home from './component/intern/home';
 import { GlobalStyle } from './component/intern/Globalstyle'


const App = () => {
  return (<>
        <GlobalStyle />
        <Header />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          
          <Route path="/contact" element={<Contact />} />
         
          
       </Routes>

       <Footer />
       </>
  
  )
}

export default App



// import React from 'react'
// import About from './component/website/about'
// import Home from './component/website/home'
// import Contact from './component/website/contact'
// import Services from './component/website/services'
// import {Routes, Route, Router} from 'react-router-dom';
// import Header from './component/website/header'
// import Footer from './component/website/footer'
// import { GlobalStyle } from './component/website/Globalstyle'
// import Error from './component/website/error'


// const App = () => {
  
//   return (
//     <div>
//     <GlobalStyle />
    
//         <Header />
      
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<Error />} />
          
//         </Routes>
//         <Footer />
//     </div>
//   )
// }

// export default App
