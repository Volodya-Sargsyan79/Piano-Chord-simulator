import {combineReducers} from 'redux';
import instrumentReducer from './redux/reducer';
import notesReducer from './piano/reducer';
import keyColorReducer from './keyColor/reducer';
import changeChordReducer from './chord/reducer';
import generatReducer from './generat/reducer'
import newGenerate from './newgenerate/reducer'

export default combineReducers({
    instrument:instrumentReducer,
    notes:notesReducer,
    keyColor:keyColorReducer,
    changeChord:changeChordReducer,
    generat:generatReducer,
    newGenerate:newGenerate,
})