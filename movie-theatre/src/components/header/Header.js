import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
 
return (
    <Navbar style={{ opacity: 0.7}}>
        <Container fluid style={{   "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "height": "100%", "fontWeight":"bold"}}>
            <Navbar.Brand href="/" style={{"color":'white' }}>
                <FontAwesomeIcon icon ={faVideoSlash}/>MovieTheatre
            </Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default Header
