import Image from "next/image";
const Form = () => {
    return (
        <section id="greySection">
  <div className="info" id="contact">
    <div className="main-info">
      <h3>For More Information:</h3>
      <p>
        <strong>Hotlines:</strong> 07035973706 &amp; 08108112759
      </p>
      <br />
      <p>
        <strong>Email:</strong> info@ijawdancecontest.ng
      </p>
      <br />
      <p>
        <strong>Audition Location:</strong> Nitro Studio,
        <br /> Tamara Hall, Otiotio Road, Yenagoa,
        <br />
        Bayelsa State.
      </p>
    </div>
    <div className="contact-section">
      <form className="form">
        <div className="form1">
          <div className="border">
            <i className="fa-regular fa-user" style={{ opacity: "50%" }} />
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="border">
            <i className="fa-regular fa-envelope" style={{ opacity: "50%" }} />
            <input type="email" name="email" placeholder="Email Address" />
          </div>
        </div>
        <div className="form2">
          <div className="border">
            <i
              className="fa-solid fa-phone-volume"
              style={{ opacity: "50%" }}
            />
            <input type="tel" name="phone" placeholder="Phone" />
          </div>
          <div className="border">
            <i className="fa-solid fa-circle-info" style={{ opacity: "50%" }} />
            <input type="text" name="subject" placeholder="Subject" />
          </div>
        </div>
        <div className="comment">
          <div className="border">
            <i className="fa-solid fa-pencil" style={{ opacity: "50%" }} />
            <textarea
              name="message"
              placeholder="How can we help you? Feel free to get in touch!"
              defaultValue={""}
            />
          </div>
        </div>
        <button className="button3" type="submit">
          Get in Touch
        </button>
      </form>
    </div>
  </div>
</section>

      
    );
};

export default Form;