import { Container, Header } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import Top from "./Top";
const Layout = (props) => {
    return (
        <Container style={{ marginTop: "35px"}}>
            <Header as="h1" textAlign="center" style={{color: "#66FCF1", fontWeight:"bold", fontSize: "50px" }}>Welcome to MY Ethers and Hardhat NFT Example</Header>
            <Top />
            {props.children}
        </Container>
    );
}

export default Layout;