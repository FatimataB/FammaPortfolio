
import {useState} from 'react'

const Illustrations=(props) =>{

   

    return(
        <div className= "illustrations">
            <div className="titre"> <p>{props.tittle} </p> </div> 
            <img src={props.imageAddress} className={select=== "choice"? 'selectOn': 'selectOff'} />
       
        </div>
    )
}
export default Illustrations