import React, { CSSProperties } from "react";

interface Person{
    firstName:string
    lastName:string
    age:number
    height:number
}

interface Props{
    fn?:(name: string) => string
    person:Person
}

export const Card: React.FC<Props> = ({person}) =>{
    return( 
        <div style={styles.body}>
            <h2>Nombre: {person.firstName}</h2>
            <h3>Apellido: {person.lastName}</h3>
            <h3>Edad: {person.age}</h3>
            <h3>Estatura: {person.height}</h3>
        </div>
    )
}

interface StyleProps{
    body:CSSProperties    
}

const styles:StyleProps = {
    body:{
        color:"white",
        backgroundColor:"blueviolet",
        borderRadius:10,
        width:250,
        padding:10
    }
}