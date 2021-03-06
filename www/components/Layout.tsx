import { useState, useEffect } from 'react'
import Nav from 'components/Nav/index'
import Footer from 'components/Footer/index'
import Meta from 'components/Meta'

type Props = {
  hideHeader?: boolean
  hideFooter?: boolean
  children: React.ReactNode
}

const Layout = (props: Props) => {
  const { hideHeader = false, hideFooter = false, children } = props
  const [darkMode, setDarkMode] = useState<boolean>(true)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('supabaseDarkMode')
    if (isDarkMode) {
      setDarkMode(isDarkMode === 'true')
      document.documentElement.className = isDarkMode === 'true' ? 'dark' : ''
    }
  }, [])

  const updateTheme = (isDarkMode: boolean) => {
    document.documentElement.className = isDarkMode ? 'dark' : ''
    setDarkMode(isDarkMode)
  }

  return (
    <>
      <Meta />
      {!hideHeader && <Nav darkMode={darkMode} />}
      <div className="min-h-screen bg-gray-100">
        <main>{children}</main>
      </div>
      {!hideFooter && <Footer darkMode={darkMode} updateTheme={updateTheme} />}
    </>
  )
}

export default Layout
