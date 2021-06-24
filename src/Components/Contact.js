


const Contact =()=> {
    return(
      <div className="cm">
        <h1>CONTACT</h1>

        <div className="contact">
           
            <form>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="email" placeholder="Your e-mail address"/>
                <textarea placeholder="Your message"/>
                <input type="submit" value="send"/>
            </form>
        </div>

        
    </div>


)
}

export default Contact