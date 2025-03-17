
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

/**
 * portfolio layout
 * - Header (component)                                   // done
 *   - logo (on left)
 *   - name in mid
 *   - navbar
 *     - about
 *     - projects
 *     - contact
 * 
 * body:  
 * - about us (page)                                       //done
 *   - container
 *     - profile photo (left)
 *     - buy me a coffee button (left) / {button component}
 *     - about me (on right side)
 * - projects (page)                                       //done
 *   - cards
 *     - card (component)
 *       - Title / description
 *       - id
 *       - heading
 *       - image / thumbnail
 *       - links
 * - contact us (page)                                     //done
 *   - container
 *     - form (on left side)
 *       - name
 *       - contact number
 *       - mail
 *       - occupation
 *       - reason of contact
 *     - contact options (on right side)
 *       - topmate
 *       - google calendar
 *       - button for payment (component)
 * - resume (page)                                        //pending
 *   - resume (component)
 * - skills (page)                                     
 * - recommended links / social links (page)              //done
 *   - github
 *   - linkedin
 *   - twitter
 *   - instagram
 * - footer (page)                                        //done
 *   - links
 *   - copyright claims
 */

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
