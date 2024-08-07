import Button from '../../layout/button/Button';
import classes from './Contact.module.css';

const Contact = () => {
  return (
    <section className={classes.contact_container} >
      <div className={classes.contact_messagebox}> 

        <div className={classes.contact_message}>
          <h2>Contact</h2>
          <p>I would love to hear about your project and how I can help. 
            Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>

        <form action="" className={classes.contact_formbox}>
          <label htmlFor="name">
            <input type="text" placeholder="Name"/>
          </label>
          <label htmlFor="email">
            <input htmlFor="email" placeholder="Email" />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B"/>
              <rect x="11" y="6" width="2" height="9" rx="1" fill="#FF6F5B"/>
              <rect x="11" y="17" width="2" height="2" rx="1" fill="#FF6F5B"/>
            </svg>
          </label>
          <small>Sorry, invalid format here</small>
          <label htmlFor="message">
            <textarea name="message" id="" placeholder="Message" rows={6} />
          </label>
          <div className={classes.button}>
            <Button text="Send Message"/>
          </div>
          
        </form>

      </div>

    </section>
  )
}

export default Contact;