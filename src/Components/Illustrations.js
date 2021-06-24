
import {useState} from 'react'

const Illustrations=(props) =>{

const [textOpacityYesNo, setTextOpacityYesNo]  =useState (false)

    return(
        <div className= "illustrations">

            <div className="titre"> <p className={textOpacityYesNo=== true ? "show": "hide"} 
           onMouseEnter={()=>{
                 setTextOpacityYesNo (true)}}
            onMouseLeave={()=>{
                setTextOpacityYesNo(false)
           }}
                    
                >{props.tittle} </p> 
            </div>

            <div className={textOpacityYesNo=== true? "opacityYes":"opacityNo"}
            //onMouseEnter={()=>{
                //setTextOpacityYesNo(true)}}
            //onMouseLeave={()=>{
                //setTextOpacityYesNo(false)
            //}}
          
                 >
            <img src={props.imageAddress}/>
            </div>

         </div>  
        
    )
}
export default Illustrations