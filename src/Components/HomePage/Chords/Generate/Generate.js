import React from "react";
import {connect} from 'react-redux';
import { 
    changeChord_01, 
    changeChord_02, 
    changeChord_03,
    changeChord_04,
    changeChord_01place,
    changeChord_02place,
    changeChord_03place,
    changeChord_04place,
    changeGenerat,
    chamgeNoteName_01,
    chamgeNoteName_02,
    chamgeNoteName_03,
    chamgeNoteName_04,
    changeGeneratedEffect
} from '../../../../store/generat/action';
import {    
        changeKeyColore_01,
        changeKeyColore_02,
        changeKeyColore_03,
        changeKeyColore_04
    } from '../../../../store/keyColor/action'
import { changeChords } from '../../../../store/chord/action';
import {noteColorFalse} from '../../../../store/piano/action'
import './Generate.scss'

class Generate extends React.Component{
    constructor(props){
        super(props)
    }

    generateHandler = ()=>{
        
        this.props.noteColorFalse("")
        this.props.load()
        var a = this.props.renderEfect[Math.floor(this.props.renderEfect.length * Math.random())]
        this.props.changeChords(a)
        this.props.changeGeneratedEffect(a)
        var x = this.props.newGenerate[Math.floor(this.props.newGenerate.length * Math.random())]

        this.props.changeKeyColore_01(x[0].kambinac)
        this.props.changeChord_01place(x[0].type)
        this.props.changeChord_01(x[0].note)
        this.props.chamgeNoteName_01(x[0].note)

        this.props.changeKeyColore_02(x[1].kambinac)
        this.props.changeChord_02place(x[1].type)
        this.props.changeChord_02(x[1].note)
        this.props.chamgeNoteName_02(x[1].note)

       
        this.props.changeKeyColore_03(x[2].kambinac)
        this.props.changeChord_03place(x[2].type)
        this.props.changeChord_03(x[2].note)
        this.props.chamgeNoteName_03(x[2].note)

        this.props.changeKeyColore_04(x[3].kambinac)
        this.props.changeChord_04place(x[3].type)
        this.props.changeChord_04(x[3].note)
        this.props.chamgeNoteName_04(x[3].note)
    }

    render(){
        return(
            <div className={'generate_all'}>
                <div className={'custom_generate'} onClick={this.generateHandler}>
                    <i style={{color:'white'}} className="fa fa-random"></i>
                    <div>
                        <p>Generate</p>
                        <p>Type</p>
                    </div>
                </div>
                <div className={'generate_settings'}>
                    <i className="fa fa-cog"></i>
                </div>
            </div>
        )
    }
}

const mapDispatch={
    changeChord_01:changeChord_01,
    changeChord_02:changeChord_02,
    changeChord_03:changeChord_03,
    changeChord_04:changeChord_04,
    changeChord_01place:changeChord_01place,
    changeChord_02place:changeChord_02place,
    changeChord_03place:changeChord_03place,
    changeChord_04place:changeChord_04place,
    changeGenerat:changeGenerat,
    chamgeNoteName_01:chamgeNoteName_01,
    chamgeNoteName_02:chamgeNoteName_02,
    chamgeNoteName_03:chamgeNoteName_03,
    chamgeNoteName_04:chamgeNoteName_04,
    changeKeyColore_01:changeKeyColore_01,
    changeKeyColore_02:changeKeyColore_02,
    changeKeyColore_03:changeKeyColore_03,
    changeKeyColore_04:changeKeyColore_04,
    noteColorFalse:noteColorFalse,
    changeChords:changeChords,
    changeGeneratedEffect:changeGeneratedEffect

};

const mapState=(state)=>{   
	return {
        renderEfect:state.generat.renderEfect,
        generates:state.generat.generates,
        generat:state.generat.generate,
        newGenerate:state.newGenerate.genCombos
	}
};

export default connect(mapState, mapDispatch)(Generate);