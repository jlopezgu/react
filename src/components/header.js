import { Link, useLocation } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const Header = () => {
    const location = useLocation()

    return (
        <Nav justify variant='tabs' activeKey={location.pathname}>
            <Nav.Item>
                <Nav.Link as={Link} to='/' eventKey='/'>Users</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/channels' eventKey='/channels'>Channels</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/categories' eventKey='/categories'>Categories</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/messages' eventKey='/messages'>Messages</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/notifications' eventKey='/notifications'>Notifications</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Header
