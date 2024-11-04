import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

function Email() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    form.current['date'].value = currentDate;
    form.current['time'].value = currentTime;

    emailjs
      .sendForm('service_in7qyyc', 'template_4bup6hr', form.current, {
        publicKey: 'Kv3DScLrzKDaFopL3',
      })
      .then(
        () => {
          swal("Done!", "Your message has been sent successfully!", "success");
          console.log('SUCCESS!');
        },
        (error) => {
          swal("Done!", "Your message has been sent successfully!", "success");
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();

  };
  return (
    <div className="container mt-5">
      <div className='card m-3 p-3'  style={{ alignItems: 'center'}}>
        <div className='Forms'>
          <br />
          <center><h2>Contact Us</h2></center>
          <form ref={form} onSubmit={sendEmail} style={{ width: '280px'}}>
            <input type="text" name="user_name" placeholder="Name" required style={{ padding: '10px', marginTop: '25px', width: '100%' }}/>
            <br />
            <input type="email" name="user_email" placeholder="Email" required style={{ padding: '10px', marginTop: '25px', width: '100%' }}/>
            <br />
            <textarea name="message" placeholder="Message" required style={{ padding: '10px', marginTop: '25px', width: '100%' }}/>
            <br />
            <input type="hidden" name="date" />
            <input type="hidden" name="time" />
            <center>
              <input type="submit" value="Submit" className="submit" />
            </center>

          </form>
        </div>
      </div>
      <div className="container mt-3">
      <div className="card">
        <div className="card-header">
        <h3>Note:</h3>
        </div>
        <div className="card-body">
            <p style={{textAlign:'justify'}}>
              <ul>
                <li>I hope you’re doing well! I just finished my portfolio website, and I would love your honest feedback. It’s important to me to make a good impression, so your thoughts would really help!</li>
                <li>If you could take a few minutes to check it out, I would greatly appreciate it. Any feedback you have, whether big or small, would be super helpful.</li>
                <br />
                <h6 style={{textAlign:'center'}}>Thank you so much for your time I really appreciate your support!</h6>
              </ul>  
            </p>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Email