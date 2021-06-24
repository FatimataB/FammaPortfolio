import illustrations from '../Assets/bddFamma.js'
import Illustrations from './Illustrations.js'

const Works =()=> {

  const filteredIllustrations1 = illustrations.filter ((dessin) =>{
                return dessin.type === "work1"})

  const filteredIllustrations2 = illustrations.filter ((dessin) =>{
                return dessin.type === "work2"}) 

  const filteredIllustrations3 = illustrations.filter ((dessin) =>{
                return dessin.type === "work3"}) 

  const filteredIllustrations4 = illustrations.filter ((dessin) =>{
                return dessin.type === "book"})               

    return( 

      <div className="work">
          <h1>WORK </h1>
          <div className="cards">

            <section className="fabricpatterns">
                <h2>FABRIC PATTERNS</h2>
                <div className="work3">
            {filteredIllustrations3.map ((dessin)=>{                
                return <Illustrations imageAddress={dessin.path}/> 
            })}
                </div>

            </section>

             <section className="book">
                <h2> BOOK COVER </h2>
                <div className="bookcover">
            {filteredIllustrations4.map ((dessin)=>{                
                return <Illustrations imageAddress={dessin.path}/> 
            })}
              </div>
            </section>

            <section className="littlestories">
                <h2> LITTLE STORIES </h2>
                <div className="work1">
            {filteredIllustrations1.map ((dessin)=>{                
                return <Illustrations imageAddress={dessin.path}/> 
            })}
                </div>
                <div className="work2">
            {filteredIllustrations2.map ((dessin)=>{                
                return <Illustrations imageAddress={dessin.path}/> 
            })}
              </div>
            </section>

        </div>
      </div>


)
}

export default Works