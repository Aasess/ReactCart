import React from 'react';
import './Category.css';

const Category = (props) => {
    return (
        <div style={{ fontSize: "0.9rem"}}>
            <p id="category" onMouseEnter={(e)=>props.catFunction(null)}>All</p>
            <p>Food</p>
            <p className="pl-4" id="category" onMouseEnter={(e)=>props.catFunction(e.target.innerText)}>Rice</p>
            <p className="pl-4" id="category" onMouseEnter={(e)=>{props.catFunction(e.target.innerText)}}>Species</p>
            <p className="pl-4" id="category" onMouseEnter={(e)=>{props.catFunction(e.target.innerText)}}>Pulses</p>
            <p className="pl-4" id="category" onMouseEnter={(e)=>{props.catFunction(e.target.innerText)}}>Dry Fruits</p>
            <p className="pl-4" id="category" onMouseEnter={(e)=>{props.catFunction(e.target.innerText)}}>Pizza</p>
            <p className="pl-4" id="category" onMouseEnter={(e)=>{props.catFunction(e.target.innerText)}}>Pasta</p>
            <p>Health Care</p>
            <p className="pl-4" id="category" onMouseEnter={(e)=>{props.catFunction(e.target.innerText)}}>Health Equipments</p>
            <p className="pl-4" id="category" onMouseEnter={(e)=>{props.catFunction(e.target.innerText)}}>Face Masks</p>
            <p className="pl-4" id="category" onMouseEnter={(e)=>{props.catFunction(e.target.innerText)}}>Shampoo</p>
            <p id="category" onMouseEnter={(e)=>{props.catFunction(e.target.innerText)}}>Game</p>
            <p >Furniture</p>
            <p className="pl-4" id="category" onMouseEnter={(e)=>{props.catFunction(e.target.innerText)}}>Chair</p>
            <p className="pl-4" id="category" onMouseEnter={(e)=>{props.catFunction(e.target.innerText)}}>Sofa</p>
            <p>Clothes</p>
            <p className="pl-4" id="category" onMouseEnter={(e)=>{props.catFunction(e.target.innerText)}}>Shirt</p>
            <p className="pl-4" id="category" onMouseEnter={(e)=>{props.catFunction(e.target.innerText)}}>Short</p>
        </div>
    )
}

export default Category
