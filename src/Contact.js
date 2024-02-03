import "./App.css";

const Contact = () => {
  const handelOnClick=()=>{
       setTimeout(alert("Email has sent Succesfully"),2000);
  }
  return (
    <>
   <section className='contact-section'>
    <div>
      <h1 className='contact-heading'>Contact Us</h1>
    </div>
    <div className='contact-map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29169.439469566856!2d88.02574359942084!3d23.95407662804585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1705305322417!5m2!1sen!2sin" width="100%" height="350" style={{border:0}}  title="myMap" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className="contact-form">
      <form action="https://formspree.io/f/meqyozyb" method='post'>
        <input type="text" placeholder='username' name='username' required autoComplete="off"/>
        <input type="text" placeholder='email' name='email' required autoComplete="off"/>
        <textarea name="message" id="message" placeholder="Enter your message" cols="45" autoComplete="off" required rows="10"></textarea>
        <input type="submit" onClick={handelOnClick} value="send"/>
      </form>
    </div>
   </section>
   </>
  )
}

export default Contact
