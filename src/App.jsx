import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
/**
 * portfolio layout
 *                 -Header (component)
 *                        - logo (on left)
 *                        - name in mid
 *                        - navbar
 *                                -about us
 *                                - projects
 *                                - contact us
 * 
 *                 body:
 *                 - about us (page)
 *                           -container
 *                                     -profile photo(left)
 *                                     - buy me a coffee button (left)/ {button component}
 *                                     -about me (on right side)
 *                 - projects (page)
 *                           -cards
 *                                 -card(component)
 *                                      -Title/ description
 *                                      -id
 *                                      -heading
 *                                      -image/ thumbnail
 *                                      -links
 *                 - conatct us(page)
 *                                  -container
 *                                            -form(on left side)
 *                                                 -name
 *                                                 -contact number
 *                                                 -mail
 *                                                 -occupation
 *                                                 -reason of contact
 *                                            -contact options (on right side)
 *                                                 -topmate
 *                                                 -google calender
 *                                                 -button for payment (component)
 *                  -resume (page)
 *                                - resume (component)
 *                  
 *                  -SKills (page)
 *                                -
 *                  -recommended links/ social links (page)
 *                                -github
 *                                -linkedin
 *                                -twitter
 *                                -instagram
 * 
 *                  -footer(page)
 *                              -links
 *                              -copyright claims
 *                                      
 *                                                 
 *                
 * 
 */
function App() {
  return (
    <div>
      <Header/>
      {Outlet}
      <Footer/>
    </div>
  )
}

export default App
