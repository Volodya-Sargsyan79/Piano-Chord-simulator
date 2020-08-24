import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Note from './note';
import {changeBackColore,changeBackColoreBack} from '../../../store/piano/action';
import './Piano.scss'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin:20px auto;
    width 45%;
    position:relative;
    z-index:2;
`

const Black = styled.button`
  background:#383838;
  width:30px;
  height:85px;
  position:absolute;
  top:0;
  margin:1px;
  margin-left:-15px;
  box-shadow: 0px -2px 2px -1px grey;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border:1px solid #000;
  border-radius:0 0 3px 3px;
  box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5);
  z-index:2;
  // background:linear-gradient(45deg,#222 0%,#555 100%)
  :active {
     background:#e32c2b;
      box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -2px 2px 3px rgba(0,0,0,0.6) inset,0 1px 2px rgba(0,0,0,0.5);
  // background:linear-gradient(to right,#444 0%,#222 100%)
  }
`
const White = styled.button`
  border:none;
  background:white;
  width:40px;
  height:150px;
  margin:1.5px;
  box-shadow: 0 0 5px 0 grey;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  z-index:2;
  
  :active {
      background:#e32c2b;
  box-shadow:2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);
  }   
`

class Octave extends React.Component{
    constructor(props){
        super(props)
        this.currentNotes = {};
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleClickDown = this.handleClickDown.bind(this);
        this.handleClickUp = this.handleClickUp.bind(this);
    }

    handleClickDown(e){
        this.currentNotes[e.currentTarget.value] = new Note(e.currentTarget.value);
    }
    
      handleClickUp(e){
        this.currentNotes[e.currentTarget.value].fadeOut();
      }


    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
        document.addEventListener('keyup', this.handleKeyUp)
    }
    
    handleKeyPress(e){
        this.props.changeBackColore(e.key)
        this.props.notes.map((i,v)=>{
            if(e.key==i.key && !e.repeat){
                this.currentNotes[i.note] = new Note(i.note);
            }
        })
    }

    handleKeyUp(e){
        this.props.changeBackColoreBack(e.key)
        this.props.notes.map((i,v)=>{
            if(e.key==i.key){
                this.currentNotes[i.note].fadeOut()
            }
        })
    }
        
    render(){
        return(
            <div style={{marginTop:'10vh'}}>
                <div className={'piano_blackfon_all'}>
                    <div className={'piano_blackfon'}></div>
                        <Wrapper>
                            {this.props.notes.map((v,i)=>(
                                <div key={i}>
                                    {this.props.notes[i].color === 'white'?
                                        (
                                            <White
                                                value={this.props.notes[i].note}
                                                id={this.props.notes[i].backColor}
                                                onMouseDown={this.handleClickDown}
                                                onMouseUp={this.handleClickUp}
                                            />
                                        )
                                        :(
                                            <Black
                                                value={this.props.notes[i].note}
                                                id={this.props.notes[i].backColor}
                                                onMouseDown={this.handleClickDown}
                                                onMouseUp={this.handleClickUp}
                                            />
                                        )
                                    }
                                </div>
                            ))}
                        </Wrapper>
                </div>
            </div>
        )
    }
}

const mapChangeing={
    changeBackColore:changeBackColore,
    changeBackColoreBack:changeBackColoreBack
}

const mapState=(state)=>{   
	return {
        notes:state.notes.notes,
	}
}

export default connect(mapState, mapChangeing)(Octave);
