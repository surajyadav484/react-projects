import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Layout, Typography,Space } from "antd"
import { Navbar, HomePage, CryptoDetails, Exchanges, Cryptocurrency, News } from "./Components"
import './App.css'
function App() {
  return (
    <>
    <div className='app'>
      <div className="navbar">
          <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route  path="/" element={<HomePage />}>
                
              </Route>
              <Route  path="/exchanges" element={<Exchanges />}>
                
              </Route>
              <Route  path="/cryptocurrencies" element={<Cryptocurrency />}>
                
              </Route>
              <Route  path="/crypto/:coinId" element={<CryptoDetails />}>
                
              </Route>
              <Route  path="/news" element={<News />}>
                
              </Route>
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
      <div className="footer">

      </div>
      </div>


    </>
  )
}

export default App