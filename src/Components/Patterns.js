import illustrations from '../Assets/bddFamma.js'
import Illustrations from './Illustrations.js'
import Illustration_Patterns1 from'../Assets/Illustration_Patterns1.png'



const Patterns =()=> {

    const filteredIllustrations = illustrations.filter ((dessin) =>{
                return dessin.type === "patterns"
            }) 
       

    return(
       
      <div className="patterns">
      

        <section className="titre">
        <h1>PATTERNS</h1>
        <h2>design</h2>
        </section>
        

        <section className="images">
            <img className="image1" src={Illustration_Patterns1}/>
            {filteredIllustrations.map ((dessin)=>{
                
                return <Illustrations imageAddress={dessin.path}/> 

            })}
        </section>

     </div>


)
}

export default Patterns