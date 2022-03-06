import { Layout, Menu, Avatar, Typography, Button } from "antd"
import logo from '../Images/cryptocurrencyLogo.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons/lib/icons";

const { Header, Footer, Content, Sider } = Layout;
const { Item } = Menu;


const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return ()=> window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    const handleToggle = () =>{
        if(screenSize<768){
            setActiveMenu(!activeMenu);
        }
    }

    return (

        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={logo} alt="Cryptoverse logo" size="large" />
                <Typography.Title level={2} className='logo'>
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={()=>setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
            </div>
        
            {
                activeMenu && (
                    <Menu theme="dark" mode="inline">
                        <Item icon={<HomeOutlined />}><Link to='/' onClick={handleToggle}> Home</Link></Item>
                        <Item icon={<FundOutlined />}><Link to='/cryptocurrencies' onClick={handleToggle}> Cryptocurrnecies</Link></Item>
                        <Item icon={<MoneyCollectOutlined />}><Link to='/exchanges' onClick={handleToggle}> Exchanges</Link></Item>
                        <Item icon={<BulbOutlined />}><Link to='/news' onClick={handleToggle}> News</Link></Item>
                    </Menu>

                )
            }
        </div>

    );


}

export default Navbar;