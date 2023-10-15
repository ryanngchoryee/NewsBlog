import React from 'react'
import { Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'

const Home: React.FC = () => {
    return (
        <Container fluid className='text-center'>
            <h1>Welcome to NewsBlog!</h1>
            {/* <Navbar /> */}
        </Container>
    )
}

export default Home