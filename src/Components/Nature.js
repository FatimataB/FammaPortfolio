import illustrations from '../Assets/bddFamma.js'
import Illustrations from './Illustrations.js'
import Illustration_Nature1 from'../Assets/Illustration_Nature1.jpg'



const Nature =()=> {

    const filteredIllustrations = illustrations.filter ((dessin) =>{
                return dessin.type === "nature"
            }) 
       

    return(
       
      <div className="nature">

        <section className="titre">
        <h1>NATURE</h1>
        <h2>celebration</h2>
        </section>
        

        <section className="images">
            <img className="image1" src={Illustration_Nature1}/>
            {filteredIllustrations.map ((dessin)=>{
                
                return <Illustrations imageAddress={dessin.path}/> 

            })}
        </section>

     </div>


)
}

export default Nature