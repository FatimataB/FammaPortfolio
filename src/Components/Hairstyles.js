import illustrations from '../Assets/bddFamma.js'
import Illustrations from './Illustrations.js'

const Hairstyles=()=>{

       const filteredIllustrations= illustrations.filter((dessin)=>{
        return dessin.type==="hairstyles"
    }) 

    return(
        <div className="hairstyles">
            <h1> HAIRSTYLES </h1>
            <section className="images">
            {filteredIllustrations.map ((dessin)=>{
                
                return <Illustrations imageAddress={dessin.path}/> 

            })}
            </section>
        </div>


    )
}
export default Hairstyles