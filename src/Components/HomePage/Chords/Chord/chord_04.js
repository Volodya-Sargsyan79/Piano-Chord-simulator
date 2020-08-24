import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {connect} from 'react-redux';
import { 
        changeChord_04, 
        changeChord_04place,
        chamgeNoteName_04,
    } from '../../../../store/generat/action';
import { 
        changeKeyColore_04
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

class Chord_04 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            chord_04:false,
        };
    }

    chord4=()=>{
        this.props.sampler()
    }

    chord_04=(e,i)=>{
        this.props.changeChord_04(e)
        this.props.changeKeyColore_04(i)
        this.props.chamgeNoteName_04(e)
    }

    changeChordType4 = (e) =>{
        this.props.changeChord_04place(e);
    }


    render(){
        const project_04 = () => {
            switch(this.props.chord_04place) {
              case "Major":   return <ButtonChordMajor chord={this.chord_04}/>;
              case "Minor":   return <ButtonChordMinor chord={this.chord_04}/>;
              case "7":   return <ButtonChord7 chord={this.chord_04}/>;
              case "m7":   return <ButtonChordm7 chord={this.chord_04}/>;
              case "maj7":   return <ButtonChordMaj7 chord={this.chord_04}/>;
              case "dim":   return <ButtonChordDim chord={this.chord_04}/>;
              case "sus2":   return <ButtonChordSus2 chord={this.chord_04}/>;
              case "sus4":   return <ButtonChordSus4 chord={this.chord_04}/>;
            }
          }
        return(
            <div id={this.props.backgroundChord[3].color} className="acord acordLast" onClick={this.props.opened}>
                <Button onClick={() => this.setState({chord_04:true})} className={"buttonChop"}></Button>
                <div  onClick={this.chord4}>
                    <h3>{this.props.noteName_04}</h3>
                    <p>{this.props.chord_04place}</p>
                </div>  
                <Modal size="lg" show={this.state.chord_04} onHide={() => this.setState({chord_04:false})} aria-labelledby="example-modal-sizes-title-lg">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            <span>Chord Settings</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={''}>
                        <h3>Note</h3>
                            {project_04()}
                        <h3>Chord Type</h3>
                        <ButtonMajMin changeChordType={this.changeChordType4}/>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

const mapDispatch={
    changeChord_04:changeChord_04,
    chamgeNoteName_04:chamgeNoteName_04,
    changeKeyColore_04:changeKeyColore_04,
    changeChord_04place:changeChord_04place
};
const mapState=(state)=>{   
	return {
        chord_04:state.generat.chord_04,
        noteName_04:state.generat.noteName_04,
        chord_04place:state.generat.chord_04place,
        backgroundChord:state.changeChord.backgroundChord,
	}
};

export default connect(mapState, mapDispatch)(Chord_04);