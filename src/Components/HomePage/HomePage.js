import React from "react";
import Octave from './Piano/Octave';
import WorkFiles from "./WorkFiles/WorkFiles";
import Clean from "./Chords/Clean";
import Rich from "./Chords/Rich";
import Rainy from "./Chords/Rainy";
import Ultra from "./Chords/Ultra";
import Instruments from "./Instruments/Instruments";
import Introducing from "./introducing/Introducing";
import ChordsSelect from "./ChordsSelect/ChordsSelect";
import { connect } from 'react-redux'

class HomePage extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        const Chords = () => {
            switch(this.props.changeChord) {
                case "Clean":   return <Clean />;
                case "Rich":   return <Rich />;
                case "Rainy":   return <Rainy />;
                case "Ultra":   return <Ultra />;
            }
        }
        return(
            <div style={{backgroundColor:'#fafafa', paddingTop:'5vh'}}>
                <Instruments/>
                <Octave />
                <WorkFiles/>
                {Chords()}
                {/* <Clean/> */}
                {/* <Rich /> */}
                <ChordsSelect/>
                <section style={{backgroundColor:'white'}}>
                    <Introducing/>
                </section>
            </div>
        )
    }
}

const mapState=(state)=>{   
	return {
        changeChord:state.changeChord.chord
	}
};

export default connect(mapState)(HomePage);