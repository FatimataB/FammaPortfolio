import illustrations from '../Assets/bddFamma.js'
import Illustrations from './Illustrations.js'

const Portraits=()=>{

       const filteredIllustrations= illustrations.filter((dessin)=>{
        return dessin.type==="portraits"
    }) 

    return(
        <div className="portraits">
            <h1> PORTRAITS </h1>
            <section className="images">
            {filteredIllustrations.map ((dessin)=>{
                
                return <Illustrations imageAddress={dessin.path}/> 

            })}
            </section>
        </div>


    )
}
export default Portraits