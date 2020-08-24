import React from 'react';
import Nav from "react-bootstrap/Nav";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Chords.css'

class ButtonMajMin extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Nav variant="pills" className="majminsKarkas">
                <Nav.Link className="majminKarkas" eventKey="C" href="#" onClick={this.props.changeChordType.bind(this, "Major")}>M</Nav.Link>
                <Nav.Link className="majminKarkas" eventKey="C#"  href="#" onClick={this.props.changeChordType.bind(this, "Minor")}>m</Nav.Link>
                <Nav.Link className="majminKarkas" eventKey="D" href="#" onClick={this.props.changeChordType.bind(this, "7")}>7</Nav.Link>
                <Nav.Link className="majminKarkas" eventKey="D#" href="#" onClick={this.props.changeChordType.bind(this, "m7")}>m7</Nav.Link>
                <Nav.Link className="majminKarkas" eventKey="F" href="#" onClick={this.props.changeChordType.bind(this, "maj7")}>maj7</Nav.Link>
                <Nav.Link className="majminKarkas" eventKey="F#" href="#" onClick={this.props.changeChordType.bind(this, "dim")}>dim</Nav.Link>
                <Nav.Link className="majminKarkas" eventKey="G" href="#" onClick={this.props.changeChordType.bind(this, "sus2")}>sus2</Nav.Link>
                <Nav.Link className="majminKarkas" eventKey="G#" href="#" onClick={this.props.changeChordType.bind(this, "sus4")}>sus4</Nav.Link>
            </Nav>
        )
    }
}
export default ButtonMajMin;