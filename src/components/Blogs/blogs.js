import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import "./blogs.css"

function Blogs() {
    return(
        <Container fluid className="blogs-list">
            <Particle />
            <Container>
                <h1 className="blogs-heading">
                    Scribbled <strong className="purple">Thoughts</strong>
                    {/* <strong>Scribbled Thoughts</strong> */}
                </h1>
            </Container>
        </Container>
    );
}

export default Blogs;