import React,{  } from "react";


const Recipes = ({data})=>{

    return (
        <div className='recipes'>
            <h1>Title : {data.label}</h1>
            <p>Calories : {data.cal}</p>
            <img src={data.imgs} alt=""/>
        </div>

    )
}

export default Recipes