import { useParams } from "react-router-dom";


const ContactAbout = () => {
    const {page, btn} =useParams()
    
    return (
        <div>
            {
                (page === 'contact') && <h2>Contact</h2>
            }
            {
               ( page === 'about') && <h2>About</h2>
            }
            {
                btn && <button>Submit</button>
            }
            
        </div>
    );
};

export default ContactAbout;