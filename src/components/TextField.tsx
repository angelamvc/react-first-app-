import React from "react";

interface Person{
    firstName:string
    lastName:string
    age:number
    height:number
}

interface Props{
    text:string
    estado?:boolean
    numero?:number
    fn?:(name: string) => string
    person:Person
    obj?:{
        prop1:string
        prop2:number
    }
}

export const TextField: React.FC<Props> = ({text,children}) =>{
    return( 
        <div>
            <h2>{text}</h2>
            <input type="text" />
            {children}
        </div>
    )
}



