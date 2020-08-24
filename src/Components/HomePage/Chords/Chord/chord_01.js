import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {connect} from 'react-redux';
import { 
    changeKeyColore_01
} from '../../../../store/keyColor/action';
import { 
        changeChord_01,
        chamgeNoteName_01, 
        changeChord_01place,
} from '../../../../store/generat/action';
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

class Chord_01 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            chord_01:false,
        };
    }

    chord1=()=>{
        this.props.sampler()
    }

    chord_01=(e,i)=>{
        console.log(i)
        this.props.changeChord_01(e)
        this.props.changeKeyColore_01(i)
        this.props.chamgeNoteName_01(e)
    }

    changeChordType1 = (e) =>{
        this.props.changeChord_01place(e);
    }


    render(){
        const project_01 = () => {
            switch(this.props.chord_01place) {
              case "Major":   return <ButtonChordMajor chord={this.chord_01}/>;
              case "Minor":   return <ButtonChordMinor chord={this.chord_01}/>;
              case "7":   return <ButtonChord7 chord={this.chord_01}/>;
              case "m7":   return <ButtonChordm7 chord={this.chord_01}/>;
              case "maj7":   return <ButtonChordMaj7 chord={this.chord_01}/>;
              case "dim":   return <ButtonChordDim chord={this.chord_01}/>;
              case "sus2":   return <ButtonChordSus2 chord={this.chord_01}/>;
              case "sus4":   return <ButtonChordSus4 chord={this.chord_01}/>;
            }
          }
        return(
            <div id={this.props.backgroundChord[0].color} className="acord acordFirst" onClick = {this.props.opened}>
                <Button onClick={() => this.setState({chord_01:true})} className={"buttonChop"}></Button>
                <div  onClick={this.chord1}>
                    <h3>{this.props.noteName_01}</h3>
                    <p>{this.props.chord_01place}</p>
                </div>  
                <Modal size="lg" show={this.state.chord_01} onHide={() => this.setState({chord_01:false})} aria-labelledby="example-modal-sizes-title-lg">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            <span>Chord Settings</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={''}>
                        <h3>Note</h3>
                            {project_01()}
                        <h3>Chord Type</h3>
                        <ButtonMajMin changeChordType={this.changeChordType1}/>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

const mapDispatch={
    changeChord_01:changeChord_01,
    chamgeNoteName_01:chamgeNoteName_01,
    changeKeyColore_01:changeKeyColore_01,
    changeChord_01place:changeChord_01place,
};
const mapState=(state)=>{   
	return {
        chord_01:state.generat.chord_01,
        noteName_01:state.generat.noteName_01,
        chord_01place:state.generat.chord_01place,
        backgroundChord:state.changeChord.backgroundChord
	}
};

export default connect(mapState, mapDispatch)(Chord_01);