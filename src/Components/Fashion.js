import illustrations from '../Assets/bddFamma.js'
import Illustrations from './Illustrations.js'

const Fashion=()=>{

    const filteredIllustrations= illustrations.filter((dessin)=>{
        return dessin.type==="fashion"
    })

    return(
        <div className="fashion">
            <h1> ILLUSTRATIONS </h1>
            <section className="images">
            {filteredIllustrations.map ((dessin)=>{
                
                return <Illustrations imageAddress={dessin.path}/> 

            })}
            </section>
        </div>
    )
}
export default Fashion