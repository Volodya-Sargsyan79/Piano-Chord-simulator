import React from "react";
import './Instruments.scss';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import { changeVoice, changeSound } from '../../../store/redux/action';


class Example extends React.Component {
    constructor(props){
        super(props)
        this.state={
            lgShow:false
        }
    }

    lgShowTrue=()=>{
        this.state.lgShow=true
        this.setState({})
    }

    lgShowFalse=()=>{
        this.state.lgShow=false
        this.setState({})
    }

    eventValue=(e)=>{
        this.props.String.map((i,v)=>{
            for(let k in this.props.String[v]){
                if(e===k){
                    this.props.changeVoice(this.props.String[v][k])
                }   	
            }
        })
    }

    changeSound=(e)=>{
        this.props.changeSound(e)
    }

    render(){
        return (
            <div className={'instruments_all'}>
                <Button onClick={this.lgShowTrue}>Instruments Settings</Button>
                <Modal
                    size="lg"
                    show={this.state.lgShow}
                    onHide={this.lgShowFalse}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            <span>Instrument Settings</span>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body className={'modal_body'}>
                        <div className={'body_left_all'}>
                            <Nav variant="pills" className="Poxatc">
                                <Nav.Link className="harc" onClick={this.eventValue.bind(this, "Synth")} eventKey="Synth" href="#">
                                    <p>Synth</p>
                                    <img src={require('./modalimg/piano.png')} width='15%' alt=""/>
                                </Nav.Link>
                                <Nav.Link className="harc" onClick={this.eventValue.bind(this, "Drums")} eventKey="Drums"  href="#">
                                    <p>Drums</p>
                                    <img src={require('./modalimg/drum.png')} width='15%' alt=""/>
                                </Nav.Link>
                                <Nav.Link className="harc" onClick={this.eventValue.bind(this, "String")} eventKey="String" href="#">
                                    <p>String</p>
                                    <img src={require('./modalimg/violin.png')} width='15%' alt=""/>
                                </Nav.Link>
                                <Nav.Link className="harc" onClick={this.eventValue.bind(this, "Brass")} eventKey="Brass" href="#">
                                    <p>Brass</p>
                                    <img src={require('./modalimg/brass.png')} width='15%' alt=""/>
                                </Nav.Link>
                            </Nav>
                        </div>
                        <div className={'body_left_all'}>
                            <Nav variant="pills" className="Poxatc">
                                {this.props.voice.map((v, i)=>(
                                    <Nav.Link key={i} className="harc" onClick={this.changeSound.bind(this, v)} eventKey={v} href="#">
                                        <h3>{v}</h3>
                                        <p>Free</p>
                                    </Nav.Link>
                                ))}
                            </Nav>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

const mapDispatch={
    changeVoice:changeVoice,
    changeSound:changeSound
}

const mapState=(state)=>{   
	return {
        String:state.instrument.voice,
        voice:state.instrument.activeVoice
	}
}

export default connect(mapState, mapDispatch)(Example);
