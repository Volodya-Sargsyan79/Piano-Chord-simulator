import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {connect} from 'react-redux';
import { 
        changeChord_02, 
        changeChord_02place,
        chamgeNoteName_02,
    } from '../../../../store/generat/action';
import { 
        changeKeyColore_02
    } from '../../../../store/keyColor/action';
import ButtonChordMajor from "../Button/ButtonChordMajor";
import ButtonChordMinor from "../Button/ButtonChordMinor";
import ButtonChord7 from "../Button/ButtonChord7";
import ButtonChordm7 from "../Button/ButtonChordm7";
import ButtonMajMin from "../Button/ButtonMajMin";
import ButtonChordMaj7 from "../Button/ButtonChordmaj7";
import ButtonChordDim from "../Button/ButtonChordDim";
import ButtonChordSus2 from "../Button/ButtonChordSus2";
import ButtonChordSus4 from "../Button/ButtonChordSus4";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Chords.scss'

class Chord_02 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            chord_02:false,
        };
    }

    chord2=()=>{
        this.props.sampler()   
    }

    chord_02=(e,i)=>{
        this.props.changeChord_02(e)
        this.props.changeKeyColore_02(i)
        this.props.chamgeNoteName_02(e)
    }

    changeChordType2 = (e) =>{
        this.props.changeChord_02place(e);
    }


    render(){
        const project_02 = () => {
            switch(this.props.chord_02place) {
              case "Major":   return <ButtonChordMajor chord={this.chord_02}/>;
              case "Minor":   return <ButtonChordMinor chord={this.chord_02}/>;
              case "7":   return <ButtonChord7 chord={this.chord_02}/>;
              case "m7":   return <ButtonChordm7 chord={this.chord_02}/>;
              case "maj7":   return <ButtonChordMaj7 chord={this.chord_02}/>;
              case "dim":   return <ButtonChordDim chord={this.chord_02}/>;
              case "sus2":   return <ButtonChordSus2 chord={this.chord_02}/>;
              case "sus4":   return <ButtonChordSus4 chord={this.chord_02}/>;
            }
          }
        return(
            <div id={this.props.backgroundChord[1].color} className="acord" onClick={this.props.opened}>
                <Button onClick={() => this.setState({chord_02:true})} className={"buttonChop"}></Button>
                <div  onClick={this.chord2}>
                    <h3>{this.props.noteName_02}</h3>
                    <p>{this.props.chord_02place}</p>
                </div>  
                <Modal size="lg" show={this.state.chord_02} onHide={() => this.setState({chord_02:false})} aria-labelledby="example-modal-sizes-title-lg">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            <span>Chord Settings</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={''}>
                        <h3>Note</h3>
                            {project_02()}
                        <h3>Chord Type</h3>
                        <ButtonMajMin changeChordType={this.changeChordType2}/>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

const mapDispatch={
    changeChord_02:changeChord_02,
    chamgeNoteName_02:chamgeNoteName_02,
    changeKeyColore_02:changeKeyColore_02,
    changeChord_02place:changeChord_02place,
};
const mapState=(state)=>{   
	return {
        chord_02:state.generat.chord_02,
        noteName_02:state.generat.noteName_02,
        chord_02place:state.generat.chord_02place,
        backgroundChord:state.changeChord.backgroundChord,
	}
};

export default connect(mapState, mapDispatch)(Chord_02);