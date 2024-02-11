import '@styles/globals.css';

import Nav from '@components/Nav';
import Prvoider from '@components/Provider';

export const metadata = {
    title: "Prompts",
    description: "Discover & Share AI prompts"
}

const RooLayout = ({children}) => {
  return (
    <html lang="en">
        <div className="main">
            <div className="gradient"/>
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
    </html>
  )
}

export default RooLayout