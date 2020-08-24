import React from "react";
import './ChordsSelect.scss'
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { connect } from "react-redux";
import { changeChords } from '../../../store/chord/action';
import { changeGeneratedEffect } from '../../../store/generat/action'

class ChordsSelect extends React.Component{
    constructor(props){
        super(props)
    }

    drumChange=(e)=>{
        this.props.changeChords(e.target.value)
        this.props.changeGeneratedEffect(e.target.value)
    }

    render(){
        return(
            <div className={'chords_select_all'}>
                <DropdownButton id="dropdown-item-button" title="C#">
                    <Dropdown.Item as="button">C#</Dropdown.Item>
                    <Dropdown.Item as="button">FbA#</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                <select onChange={this.drumChange.bind(this)} value = {this.props.generatEffect} >
                    <option>Clean</option>
                    <option>Rich</option>
                    <option>Rainy</option>
                    <option>Ultra</option>
                </select>
                <select >
                    <option>-Disable-</option>
                    <option>Drumloops_04</option>
                    <option>Drumloops_05</option>
                </select>
            </div>
        )
    }
}

const mapDispatch={
    changeChords:changeChords,
    changeGeneratedEffect:changeGeneratedEffect
};

const mapState=(state)=>{   
	return {
           generatEffect:state.generat.generatedEffect
	}
};


export default connect(mapState, mapDispatch)(ChordsSelect);
