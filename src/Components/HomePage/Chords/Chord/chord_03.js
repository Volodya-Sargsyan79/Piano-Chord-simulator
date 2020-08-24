import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {connect} from 'react-redux';
import { 
        changeChord_03, 
        changeChord_03place,
        chamgeNoteName_03,
    } from '../../../../store/generat/action';
import { 
        changeKeyColore_03
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

class Chord_03 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            chord_03:false,
        };
    }

    chord3=()=>{
        this.props.sampler()
    }

    chord_03=(e,i)=>{
        this.props.changeChord_03(e)
        this.props.changeKeyColore_03(i)
        this.props.chamgeNoteName_03(e)
    }

    changeChordType3 = (e) =>{
        this.props.changeChord_03place(e);
    }


    render(){
        const project_03 = () => {
            switch(this.props.chord_03place) {
              case "Major":   return <ButtonChordMajor chord={this.chord_03}/>;
              case "Minor":   return <ButtonChordMinor chord={this.chord_03}/>;
              case "7":   return <ButtonChord7 chord={this.chord_03}/>;
              case "m7":   return <ButtonChordm7 chord={this.chord_03}/>;
              case "maj7":   return <ButtonChordMaj7 chord={this.chord_03}/>;
              case "dim":   return <ButtonChordDim chord={this.chord_03}/>;
              case "sus2":   return <ButtonChordSus2 chord={this.chord_03}/>;
              case "sus4":   return <ButtonChordSus4 chord={this.chord_03}/>;
            }
          }
        return(
            <div id={this.props.backgroundChord[2].color} className="acord" onClick={this.props.opened}>
                <Button onClick={() => this.setState({chord_03:true})} className={"buttonChop"}></Button>
                <div  onClick={this.chord3}>
                    <h3>{this.props.noteName_03}</h3>
                    <p>{this.props.chord_03place}</p>
                </div>  
                <Modal size="lg" show={this.state.chord_03} onHide={() => this.setState({chord_03:false})} aria-labelledby="example-modal-sizes-title-lg">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            <span>Chord Settings</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={''}>
                        <h3>Note</h3>
                            {project_03()}
                        <h3>Chord Type</h3>
                        <ButtonMajMin changeChordType={this.changeChordType3}/>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

const mapDispatch={
    changeChord_03:changeChord_03,
    chamgeNoteName_03:chamgeNoteName_03,
    changeKeyColore_03:changeKeyColore_03,
    changeChord_03place:changeChord_03place
};
const mapState=(state)=>{   
	return {
        chord_03:state.generat.chord_03,
        noteName_03:state.generat.noteName_03,
        chord_03place:state.generat.chord_03place,
        backgroundChord:state.changeChord.backgroundChord,
	}
};

export default connect(mapState, mapDispatch)(Chord_03);