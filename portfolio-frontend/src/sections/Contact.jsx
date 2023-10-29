
import { useState } from 'react';
import '../App.css';

import axios from 'axios';


const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message , setMessage] = useState('');



                                            


    async function submit(e){
        e.preventDefault();
        try{

           

            await axios.post("http://localhost:4000/post", {
                name :name, 
                email : email, 
                message : message
            })

            console.log("i m contact");



        }catch(e){

            console.log("cannot post data constact.js");
        }
    }
    return (
        <div className="contact section" id="contact" >
                <h2 className="section-title" >Contact</h2>

                <section className="contact__container bd-grid">
                    <form action="" className="contact__form" onSubmit={submit}>
                        <input 
                        onChange={ (event) => {setName(event.target.value)}}
                        type="text" 
                        placeholder="Name" 
                        className="contact__input" 
                        name="name"/>
                        <input type="mail"
                        onChange={(event) => {setEmail(event.target.value)}}
                         placeholder="Email" className="contact__input" 
                         name='email'/>
                        <textarea  type="text"
                        id="" cols="0" rows="10"
                        placeholder='Type Your Message... '
                        onChange={(event) => {setMessage(event.target.value)}} 
                        className="contact__input" 
                        name="message" />
                        <input type="submit" value="Submit" className="contact__button button" 
                        />
                    </form>
                </section>
            </div>
    )
}

export default Contact;