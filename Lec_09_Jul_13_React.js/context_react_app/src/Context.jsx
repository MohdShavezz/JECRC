import { createContext } from "react";


export const MyContext=createContext()

const MyContextProvider=({children})=>{
    
    function AddPhoneNumber(num){
        data['phone']=num
    }
    const data={
        name:'john',
        age:25,
        AddPhoneNumber
    }

    return <MyContext.Provider value={data}>
        {children}
    </MyContext.Provider>
}

export default MyContextProvider