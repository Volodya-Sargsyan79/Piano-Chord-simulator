const acords={
    notes:[
        {
            note:'C4',
            color: 'white',
            key:'q',
            backColor:''
        },
        {
            note:'Db4',
            color: 'black',
            key:'2',
            backColor:''
        },
        {
            note:'D4',
            color: 'white',
            key:'w',
            backColor:''
        },
        {
            note:'Eb4',
            color: 'black',
            key:'4',
            backColor:''
        },
        {
            note:'E4',
            color: 'white',
            key:'e',
            backColor:''
        },
        {
            note:'F4',
            color: 'white',
            key:'r',
            backColor:''
        },
        {
            note:'Gb4',
            color: 'black',
            key:'5',
            backColor:''
        },
        {
            note:'G4',
            color: 'white',
            key:'t',
            backColor:''
        },
        {
            note:'Ab4',
            color: 'black',
            key:'6',
            backColor:''
        },
        {
            note:'A4',
            color: 'white',
            key:'y',
            backColor:''
        },
        {
            note:'Bb4',
            color: 'black',
            key:'7',
            backColor:''
        },
        {
            note:'B4',
            color: 'white',
            key:'u',
            backColor:''
        },
        {
            note:'C5',
            color: 'white',
            key:'z',
            backColor:''
        },
        {
            note:'Db5',
            color: 'black',
            key:'s',
            backColor:''
        },
        {
            note:'D5',
            color: 'white',
            key:'x',
            backColor:''
        },
        {
            note:'Eb5',
            color: 'black',
            key:'d',
            backColor:''
        },
        {
            note:'E5',
            color: 'white',
            key:'c',
            backColor:''
        },
        {
            note:'F5',
            color: 'white',
            key:'v',
            backColor:''
        },
        {
            note:'Gb5',
            color: 'black',
            key:'g',
            backColor:''
        },
        {
            note:'G5',
            color: 'white',
            key:'b',
            backColor:''
        },
        {
            note:'Ab5',
            color: 'black',
            key:'h',
            backColor:''
        },
        {
            note:'A5',
            color: 'white',
            key:'n',
            backColor:''
        },
        {
            note:'Bb5',
            color: 'black',
            key:"j",
            backColor:''
        },
        {
            note:'B5',
            color: 'white',
            key:'m',
            backColor:''
        }
    ]
}

const notesReducer=(state=acords, action)=>{
    if(action.type==="changeBackColore"){
        return {
            ...state,
                notes:state.notes.map(note=>{
                    if(note.key===action.value){
                        return {
                            ...note,
                                backColor:'keyColor'
                        };
                    }else{
                        return note;
                    }
                })
        }
    }else if(action.type==="changeBackColore1"){
        return {
            ...state,
                notes:state.notes.map(note=>{
                    if(note.note===action.value){
                        return {
                            ...note,
                                backColor:'keyColor'
                        };
                    }else{
                        return note;
                    }
                })
        }
    }else if(action.type==="changeBackColore2"){
        return {
            ...state,
                notes:state.notes.map(note=>{
                    if(note.note===action.value){
                        return {
                            ...note,
                                backColor:'keyColor'
                        };
                    }else{
                        return note;
                    }
                })
        }
    }else if(action.type==="changeBackColore3"){
        return {
            ...state,
                notes:state.notes.map(note=>{
                    if(note.note===action.value){
                        return {
                            ...note,
                                backColor:'keyColor'
                        };
                    }else{
                        return note;
                    }
                })
        }
    }else if(action.type==="changeBackColore4"){
        return {
            ...state,
                notes:state.notes.map(note=>{
                    if(note.note===action.value){
                        return {
                            ...note,
                                backColor:'keyColor'
                        };
                    }else{
                        return note;
                    }
                })
        }
    }else if(action.type==="changeBackColoreBack"){  
        return {
            ...state,
                notes:state.notes.map(note=>{
                    if(note.key===action.value){
                        return {
                            ...note,
                                backColor:''
                        };
                    }else{
                        return note;
                    }
                })
        }
    }else if(action.type==="changeBackColoreBack1"){  
        return {
            ...state,
                notes:state.notes.map(note=>{
                    if(note.note===action.value){
                        return {
                            ...note,
                                backColor:''
                        };
                    }else{
                        return note;
                    }
                })
        }
    }else if(action.type==="changeBackColoreBack2"){  
        return {
            ...state,
                notes:state.notes.map(note=>{
                    if(note.note===action.value){
                        return {
                            ...note,
                                backColor:''
                        };
                    }else{
                        return note;
                    }
                })
        }
    }else if(action.type==="changeBackColoreBack3"){  
        return {
            ...state,
                notes:state.notes.map(note=>{
                    if(note.note===action.value){
                        return {
                            ...note,
                                backColor:''
                        };
                    }else{
                        return note;
                    }
                })
        }
    }else if(action.type==="changeBackColoreBack4"){  
        return {
            ...state,
                notes:state.notes.map(note=>{
                    if(note.note===action.value){
                        return {
                            ...note,
                                backColor:''
                        };
                    }else{
                        return note;
                    }
                })
        }
    }else if(action.type=="noteColorFalse"){
        return {
            ...state,
                notes:state.notes.map(note=>{
                        return {
                            ...note,
                                backColor:action.value
                        }
                })
            }
    }else{
        return state;
    }  
}

export default notesReducer;