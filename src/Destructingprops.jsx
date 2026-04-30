import React from "react";

export default function Destructingprops({name,age,id,mail,role}){
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>ID: {id}</p>
            <p>Email: {mail}</p>
            <p>Role: {role}</p>
        </div>
    )
}