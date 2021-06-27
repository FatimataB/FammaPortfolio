import illustrations from '../Assets/bddFamma.js'
import Illustrations from './Illustrations.js'

const Lifestyle=()=>{

    const filteredIllustrations= illustrations.filter((dessin)=>{
        return dessin.type==="lifestyle"
    })

    return(
        <div className="lifestyle">
            <h1> LIFESTYLE </h1>
            <section className="images">
            {filteredIllustrations.map ((dessin)=>{
                
                return <Illustrations imageAddress={dessin.path}/> 

            })}
            </section>
        </div>
    )
}
export default Lifestyle