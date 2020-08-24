import React, {Component} from "react";
import Generate from "./Generate/Generate";
import Chord_01 from "./Chord/chord_01";
import Chord_02 from "./Chord/chord_02";
import Chord_03 from "./Chord/chord_03";
import Chord_04 from "./Chord/chord_04";
import {connect} from 'react-redux';
import { Sampler, Transport } from "tone";
import Spinner from "../loader/loader";
import { 
    changePlayer,
    changeBackgroundChord_01,
    changeBackgroundChord_02
} from '../../../store/chord/action'
import { 
    noteColorFalse,
    changeBackColore1, 
    changeBackColore2,
    changeBackColore3,
    changeBackColore4, 
    changeBackColoreBack1,
    changeBackColoreBack2,
    changeBackColoreBack3,
    changeBackColoreBack4,
} from  '../../../store/piano/action';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Chords.scss'

const C4 = (require('../../../sound/piano/C4.wav'))
const D4 = (require('../../../sound/piano/D4.wav'))
const E4 = (require('../../../sound/piano/E4.wav'))
const F4 = (require('../../../sound/piano/F4.wav'))
const G4 = (require('../../../sound/piano/G4.wav'))
const A4 = (require('../../../sound/piano/A4.wav'))
const B4 = (require('../../../sound/piano/B4.wav'))
const C5 = (require('../../../sound/piano/C5.wav'))
const D5 = (require('../../../sound/piano/D5.wav'))
const E5 = (require('../../../sound/piano/E5.wav'))
const F5 = (require('../../../sound/piano/F5.wav'))
const G5 = (require('../../../sound/piano/G5.wav'))
const A5 = (require('../../../sound/piano/A5.wav'))
const B5 = (require('../../../sound/piano/B5.wav'))
const Db4 = (require('../../../sound/piano/Db4.wav'))
const Eb4 = (require('../../../sound/piano/Eb4.wav'))
const Gb4 = (require('../../../sound/piano/Gb4.wav'))
const Ab4 = (require('../../../sound/piano/Ab4.wav'))
const Bb4 = (require('../../../sound/piano/Bb4.wav'))
const Db5 = (require('../../../sound/piano/Db5.wav'))
const Eb5 = (require('../../../sound/piano/Eb5.wav'))
const Gb5 = (require('../../../sound/piano/Gb5.wav'))
const Ab5 = (require('../../../sound/piano/Ab5.wav'))
const Bb5 = (require('../../../sound/piano/Bb5.wav'))


class Ultra extends Component{
    constructor(props) {
        super(props);
        this.state={
            tempo:70,
            isLoaded: false
        };
    }

    Ultras = ()=>{
        this.sampler = new Sampler(
            { C4, D4, E4, F4, G4, A4, B4, C5, D5, E5, F5, G5, A5, B5, Db4, Eb4, Gb4, Ab4, Bb4, Db5, Eb5, Gb5, Ab5, Bb5},
            {
              onload: () => {
                  
                      this.setState({ isLoaded: true });
                   
              }
          }
        ).toMaster();

        Transport.cancel()
            Transport.schedule(this.chord_01, 0)
            Transport.schedule(() => '0:0:1')
            Transport.schedule(this.chord_01, '0:0:2')
            Transport.schedule(() => '0:0:3')
            Transport.schedule(this.chord_01, '0:0:3.5')
            Transport.schedule(() => '0:0:4.5')
            Transport.schedule(this.chord_01, '0:0:5.5')
            Transport.schedule(() => '0:0:6.5')
            Transport.schedule(this.chord_01, '0:0:7')
            Transport.schedule(() => '0:0:8')
            Transport.schedule(this.chord_02, '0:2')
            Transport.schedule(() => '0:2:1')
            Transport.schedule(this.chord_02, '0:2:2')
            Transport.schedule(() => '0:2:3')
            Transport.schedule(this.chord_02, '0:2:3.5')
            Transport.schedule(() => '0:2:4.5')
            Transport.schedule(this.chord_02, '0:2:5.5')
            Transport.schedule(() => '0:2:6.5')
            Transport.schedule(this.chord_02, '0:2:7')
            Transport.schedule(() => '0:2:8')
            Transport.schedule(this.chord_03, '0:4')
            Transport.schedule(() => '0:4:1')
            Transport.schedule(this.chord_03, '0:4:2')
            Transport.schedule(() => '0:4:3')
            Transport.schedule(this.chord_03, '0:4:3.5')
            Transport.schedule(() => '0:4:4.5')
            Transport.schedule(this.chord_03, '0:4:5.5')
            Transport.schedule(() => '0:4:6.5')
            Transport.schedule(this.chord_03, '0:4:7')
            Transport.schedule(() => '0:4:8')
            Transport.schedule(this.chord_04, '0:6')
            Transport.schedule(() => '0:6:1')
            Transport.schedule(this.chord_04, '0:6:2')
            Transport.schedule(() => '0:6:3')
            Transport.schedule(this.chord_04, '0:6:3.5')
            Transport.schedule(() => '0:6:4.5')
            Transport.schedule(this.chord_04, '0:6:5.5')
            Transport.schedule(() => '0:6:6.5')
            Transport.schedule(this.chord_04, '0:6:7')
            Transport.schedule(() => '0:6:8')
            Transport.loopEnd = '2m'
            Transport.loop = true
            Transport.bpm.value = this.state.tempo
      }

      componentDidMount() {
        if(this.props.player === true){
          Transport.stop()
          Transport.cancel()
          this.state.isLoaded = false
          this.props.changePlayer(false)
          this.setState({})
          
          
          setTimeout(() => {
              this.state.isLoaded = true
              this.togglePlayback()
            this.setState({})
         }, 2000);
        }
        this.Ultras()
      }
    
      componentDidUpdate(prevProps) {
         
        if(this.props.keyColor !== prevProps.keyColor){
          this.Ultras()
          console.log(this.props.player);
        }

      if(this.props.chord !== prevProps.chord){
        if(this.props.player){
          Transport.stop()
          this.state.isLoaded = false
          this.props.changePlayer(false)
          this.setState({})
          this.Ultras()
            setTimeout(()=>{
              this.props.changePlayer(true)
            Transport.toggle()
            },2000)
        }else{
          Transport.stop()
          this.state.isLoaded = false
          this.props.changePlayer(false)
          this.setState({})
          this.Ultras()
        }
      }
    }
      

      chord_01=(time)=>{
        this.props.noteColorFalse("")
        this.props.changeBackgroundChord_01(1)
        this.props.changeBackgroundChord_02(1)
        var chordNotes = this.props.keyColor.key_01
        this.sampler.triggerAttackRelease(chordNotes, "9n", time)
        this.props.changeBackColore1(this.props.keyColor.key_01[0])
        this.props.changeBackColore2(this.props.keyColor.key_01[1])
        this.props.changeBackColore3(this.props.keyColor.key_01[2])
        this.props.changeBackColore4(this.props.keyColor.key_01[3])
      }

      chord_02=(time)=>{
        this.props.noteColorFalse("")
        this.props.changeBackgroundChord_01(2)
        this.props.changeBackgroundChord_02(2)
        var chordNotes = this.props.keyColor.key_02
        this.sampler.triggerAttackRelease(chordNotes, "9n", time)
        this.props.changeBackColore1(this.props.keyColor.key_02[0])
        this.props.changeBackColore2(this.props.keyColor.key_02[1])
        this.props.changeBackColore3(this.props.keyColor.key_02[2])
        this.props.changeBackColore4(this.props.keyColor.key_02[3])
      }
      
      chord_03=(time)=>{
        this.props.noteColorFalse("")
        this.props.changeBackgroundChord_01(3)
        this.props.changeBackgroundChord_02(3)
        var chordNotes = this.props.keyColor.key_03
        this.sampler.triggerAttackRelease(chordNotes, "9n", time)
        this.props.changeBackColore1(this.props.keyColor.key_03[0])
        this.props.changeBackColore2(this.props.keyColor.key_03[1])
        this.props.changeBackColore3(this.props.keyColor.key_03[2])
        this.props.changeBackColore4(this.props.keyColor.key_03[3])
      }

      chord_04=(time)=>{
        this.props.noteColorFalse("")
        this.props.changeBackgroundChord_01(4)
        this.props.changeBackgroundChord_02(4)
        var chordNotes = this.props.keyColor.key_04
        this.sampler.triggerAttackRelease(chordNotes, "9n", time)
        this.props.changeBackColore1(this.props.keyColor.key_04[0])
        this.props.changeBackColore2(this.props.keyColor.key_04[1])
        this.props.changeBackColore3(this.props.keyColor.key_04[2])
        this.props.changeBackColore4(this.props.keyColor.key_04[3])
      }
    
      togglePlayback=()=>{
        Transport.toggle()
        this.props.changePlayer(!this.props.player)
      }
      
      updateTemp=(e)=>{
        Transport.bpm.value = e.target.value
        this.state.tempo=e.target.value
        this.setState({})
      }

      load = ()=>{
          this.state.isLoaded = false
          this.props.changePlayer(false)
          this.setState({})
          Transport.stop()
          Transport.cancel()
          
          setTimeout(() => {
              this.state.isLoaded = true
              this.togglePlayback()
              this.props.changePlayer(true)
            this.setState({})
         }, 2500);
      }

      stopWhenOpened=()=>{
          Transport.stop()
          this.props.changePlayer(false)
      }

    render() {
       
        return(
            <div className={'chord_files'}>
              
                <div className={'chords'}>
              {  !this.state.isLoaded? <Spinner />:null}
                    <Chord_01 sampler={this.chord_01} opened = {this.stopWhenOpened}/>
                    <Chord_02 sampler={this.chord_02} opened = {this.stopWhenOpened}/>
                    <Chord_03 sampler={this.chord_03} opened = {this.stopWhenOpened}/>
                    <Chord_04 sampler={this.chord_04} opened = {this.stopWhenOpened}/>
                </div>
                <div className={'play_and_range_all'}>
                    <div className={'play_and_range'}>
                        <div className={'play'}>
                            <button onClick={this.togglePlayback}><i className={this.props.player ? 'fa fa-pause' : 'fa fa-play'}></i>{this.props.player ? 'Pause' : 'Play'}</button>
                        </div>
                        <div className={'range'}>
                            <p>BPM:{this.state.tempo*2}</p>
                            <input type="range"  min="35" max="100" onChange={this.updateTemp} defaultValue={this.state.tempo} />
                        </div>
                    </div>
                </div>
                <div>
                    <Generate load = {this.load} isLoaded = {this.state.isLoaded}/>
                </div>
            </div>
        )
    }
}

const mapDispatch={
    changePlayer:changePlayer,
    noteColorFalse:noteColorFalse,
    changeBackColore1:changeBackColore1,
    changeBackColore2:changeBackColore2,
    changeBackColore3:changeBackColore3,
    changeBackColore4:changeBackColore4,
    changeBackColoreBack1:changeBackColoreBack1,
    changeBackColoreBack2:changeBackColoreBack2,
    changeBackColoreBack3:changeBackColoreBack3,
    changeBackColoreBack4:changeBackColoreBack4,
    changeBackgroundChord_01:changeBackgroundChord_01,
    changeBackgroundChord_02:changeBackgroundChord_02,
};

const mapState=(state)=>{   
	return {
        keyColor:state.keyColor,
        generat:state.generat.generate,
        player:state.changeChord.player,
        chord_01:state.generat.chord_01,
        chord_02:state.generat.chord_02,
        chord_03:state.generat.chord_03,
        chord_04:state.generat.chord_04,
        chord_01place:state.generat.chord_01place,
        chord_02place:state.generat.chord_02place,
        chord_03place:state.generat.chord_03place,
        chord_04place:state.generat.chord_04place,      
	}
};

export default connect(mapState, mapDispatch)(Ultra);