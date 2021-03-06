import React from 'react';
import Nav from "react-bootstrap/Nav";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Chords.css'

class ButtonChordSus2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Nav variant="pills" className="acordsKarkas">
                <Nav.Link className="acordKarkas" eventKey="C" href="#" onClick={this.props.chord.bind(this, "C", ["C4","D4", "A4"])}>C</Nav.Link>
                <Nav.Link className="acordKarkas" eventKey="C#"  href="#" onClick={this.props.chord.bind(this, "Cb",["Db4","Eb4", "Ab4"])}>C#/bD</Nav.Link>
                <Nav.Link className="acordKarkas" eventKey="D" href="#" onClick={this.props.chord.bind(this, "D",["D4","E4", "A4"])}>D</Nav.Link>
                <Nav.Link className="acordKarkas" eventKey="D#" href="#" onClick={this.props.chord.bind(this, "Db",["Eb4","F4", "Bb4"])}>D#/bE</Nav.Link>
                <Nav.Link className="acordKarkas" eventKey="E" href="#" onClick={this.props.chord.bind(this, "E",["E4","Gb4", "B4"])}>E</Nav.Link>
                <Nav.Link className="acordKarkas" eventKey="F" href="#" onClick={this.props.chord.bind(this, "F",["F4","G4", "C5"])}>F</Nav.Link>
                <Nav.Link className="acordKarkas" eventKey="F#" href="#" onClick={this.props.chord.bind(this, "Fb", ["Gb4","Ab4", "Db5"])}>F#/bG</Nav.Link>
                <Nav.Link className="acordKarkas" eventKey="G" href="#" onClick={this.props.chord.bind(this, "G", ["G4","A4", "D5"])}>G</Nav.Link>
                <Nav.Link className="acordKarkas" eventKey="G#" href="#" onClick={this.props.chord.bind(this, "Gb", ["Ab4","Bb4", "Eb5"])}>G#/bA</Nav.Link>
                <Nav.Link className="acordKarkas" eventKey="A" href="#" onClick={this.props.chord.bind(this, "A", ["A4","B4", "E5"])}>A</Nav.Link>
                <Nav.Link className="acordKarkas" eventKey="A#" href="#" onClick={this.props.chord.bind(this, "Ab", ["Bb4","C5", "F5"])}>A#/bB</Nav.Link>
                <Nav.Link className="acordKarkas" eventKey="B" href="#" onClick={this.props.chord.bind(this, "B", ["B4","Db5", "Gb5"])}>B</Nav.Link>
            </Nav>
        )
    }
}


export default ButtonChordSus2;