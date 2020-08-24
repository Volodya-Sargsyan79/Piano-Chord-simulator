const acords={
    backgroundChord:[
        {
            id:1,
            color:""
        },
        {
            id:2,
            color:""
        },
        {
            id:3,
            color:""
        },
        {
            id:4,
            color:""
        },
    ],
    chord:"Clean",
    player:false
}

const changeChordReducer=(state=acords, action)=>{
    if(action.type==="changeBackgroundChord_01"){
        return{...state, 
            backgroundChord:state.backgroundChord.map(note=>{
                if(note.id!==action.value){
                    return {
                        ...note,
                            color:''
                    };
                }else{
                    return note;
                }
            })
        }
    }else if(action.type==="changeBackgroundChord_02"){
        return{...state, 
            backgroundChord:state.backgroundChord.map(note=>{
                if(note.id===action.value){
                    return {
                        ...note,
                            color:'chordBacke'
                    };
                }else{
                    return note;
                }
            })
        }
    }else if(action.type==="changeChords"){
        return {...state, chord:action.value}
    }else if(action.type==="changePlayer"){
        return {...state, player:action.value}
    }else{
        return state
    }
}

export default changeChordReducer;