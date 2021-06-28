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
        </section>
        

        <section className="images">
            <video className="image1" width="320" height="400" controls >
                <source poster="https://res.cloudinary.com/dotv9gsm3/image/upload/v1624019540/Illustration_Nature1_byvpjc.jpg" src="https://res.cloudinary.com/dotv9gsm3/video/upload/v1624815459/video-output-E48E942C-948A-48FE-AB54-59DD2C55B9F1_2_tev2nx.mp4" type="video/mp4"/>
                
                Your browser does not support the video tag.
            </video> 
        
             
            {filteredIllustrations.map ((dessin)=>{
                
                return <Illustrations imageAddress={dessin.path}/> 

            })}
        </section>

     </div>


)
}

export default Nature