import illustrations from '../Assets/bddFamma.js'
import Illustrations from './Illustrations.js'


import {
  Link
} from "react-router-dom";

const Home =()=> {

    const filteredIllustrations = illustrations.filter ((dessin) =>{
                return dessin.type === "home"
            })

    return(
       
    <div className="home">
        <h1> Illustrator & Graphic designer </h1>

        <section>       
            {filteredIllustrations.map((dessin)=> {
                return <Link to={dessin.link}><Illustrations imageAddress={dessin.path} tittle={dessin.theme}/></Link>
            })}
        </section>

        
    </div>

)
}

export default Home