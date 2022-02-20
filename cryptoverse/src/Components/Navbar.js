import { Layout, Menu, Avatar, Typography } from "antd"
import logo from '../Images/cryptocurrencyLogo.png'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from "@ant-design/icons/lib/icons";

const { Header, Footer, Content, Sider } = Layout;
const { Item } = Menu;


const Navbar = () => {
    return (

        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={logo} alt="Cryptoverse logo" size="large" />
                <Typography.Title level={2} className='logo'>
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
            </div>

            <Menu theme="dark" mode="inline">
                <Item icon={<HomeOutlined />}><Link to='/'> Home</Link></Item>
                <Item icon={<FundOutlined />}><Link to='/cryptocurrencies'> Cryptocurrnecies</Link></Item>
                <Item icon={<MoneyCollectOutlined />}><Link to='/exchanges'> Exchanges</Link></Item>
                <Item icon={<BulbOutlined />}><Link to='/news'> News</Link></Item>    
            </Menu>
        </div>

    );


}

export default Navbar;