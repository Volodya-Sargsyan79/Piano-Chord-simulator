const acords={
    key_01:["C4","E4","G4"],
    key_02:["G4","B4","D5"],
    key_03:["F4", "A4", "C5"],
    key_04:["F4", "A4", "C5"]
}

const keyColorReducer=(state=acords, action)=>{
    if(action.type==="changeKeyColore_01"){
        return{...state, key_01:action.value}
    }else if(action.type==="changeKeyColore_02"){
        return{...state, key_02:action.value}
    }else if(action.type==="changeKeyColore_03"){
        return{...state, key_03:action.value}
    }else if(action.type==="changeKeyColore_04"){
        return{...state, key_04:action.value}
    }else{
        return state;
    }
}

export default keyColorReducer;