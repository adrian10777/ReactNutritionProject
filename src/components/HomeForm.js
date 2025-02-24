import React, {useState} from "react";
import { Form, Button} from "react-bootstrap"
import axios from "axios";
import '../CSSFiles/home.css'
import { SyncLoader } from "react-spinners";



function HomeForm() {
//useState hook = define state variables in functional components
// const [stateVariable, setStateFunction] = useState(initialValue)
// stateVariable = holds current state, setStateFunction updates the state
//initialValue = value state will have when first initialized


//setEmail is the setter function that allows you to change the value of the email state variable
//it is changed when user types something into form
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);  // State to manage loader visibility
    const [clicked, setClicked] = useState(false)


    //function that gets called when user submits email

    // here we use => function, due to binding behavior, lexical this, and readability
    /*
    function handleSubmit(e){
        console.log(this); 'this' depends on how the function is called
    }

    -in a regular function, this can refer to diff things depending on how the function is called
    -if used in a class component, you would need to manually bind this in the constructor

    const handleSubmit = (e) => {
        console.log(this); 'this' is auto bound to the surrounding scope
    } 

    - in an arrow function, 'this' is lexically bound, meaning it always refers to the context where it was defined

    2.async
    used because function handles asynchronous tasks (sending a request to a backend ap)

    const handleSubmit = async (e) => {}

    -the function sends a network request to the backend ( fetch )
    -fetch is asynchronous and returns a Promise
    -the await keyword inside the function ensures that React waits for the request

    3. Preventing default form Submission

    e.preventDefault();
    React apps are single page apps

    1. what is a constructor in a class component?

    A constructor is a special method in JS class components
    that runs when an object (or component) is created.
    
    think of a blueprint for building something

    car factory that produces cars

    car needs: engine, wheels, fuel

    we need to set up these parts before the car can be used

    this is called initialization, and in JS we do this in the constructor

    When a new component is created, the constructor() method runs first to set everything up
    
    ex:

    import React, {Component} from "react";

    class ContactForm extends Component {
        //step 1: Constructor runs first when the component is created
        constructor(props) {
            super(props); // calls the parent class (Component) constructor

            step 2: initialize the state (like installing a car engine)

            this.state = {
                email: ""
            }

            step 3: Bind the handleSubmit function (so 'this' works correctly)

            this.handleSubmit = this.handleSubmit.bind(this);

            handleSubmit(e){
                e.preventDefault();
                console.log("Email submitted:", this.state.email)
            }

            render() {
                return (
                    <form onSubmit={this.handleSubmit}>
                    <input type="email" value = {this.state.email} onChange={(e) => this.setState/>
                )
            }
        }
    }
    */



    //function that gets called when the user submits the form
    const handleSubmit = async (e) => {

        
        e.preventDefault();

        setClicked(true);

        setLoading(true);
        
        alert('Please wait while we send this information over to SDA Nutrition. May take a minute...')
        // alert('Email has been successfully sent, if you do not hear back within two days please email me at sdanutrition@nutritionsda.org...')
    
        // Validate form fields
        if (!email || !firstName || !lastName || !message) {
            alert("Please fill in all fields.");
            setLoading(false);
            setClicked(false);  // Reset clicked state
            return;
        }
    
        try {
            // Send a POST request to the Flask backend
            const response = await fetch("https://flask-nutrition-wesbite.onrender.com/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    message: message,
                }),
            });
    
            // Check if the response is OK (status code 200-299)
            if (response.ok) {
                const data = await response.json();
                console.log("Response data:", data);  // Log the entire response
                
                setLoading(false);

                
                if (data.message) {
                    console.log(data.message);
                    // alert("Email sent successfully!");

                    setEmail("");
                    setFirstName("");
                    setLastName("");
                    setMessage("");
                } else {
                    console.error("No 'message' property in response:", data);
                    alert("Email sent, but no confirmation message received.");
                }
            } else {
                // Handle server errors
                try {
                    const errorData = await response.json();  // Parse the error response
                    console.error('Error sending email:', errorData.error || response.statusText);
                    alert(`Error: ${errorData.error || 'Failed to send email'}`);
                } catch (jsonError) {
                    // Handle cases where the response is not valid JSON
                    console.error('Error parsing error response:', jsonError);
                    alert('Failed to send email. Please try again.');
                }
            }
        } catch (error) {
            // Handle network errors
            console.error("Error sending email:", error);
            alert("An error occurred while sending the email.");
            setLoading(false); // Ensure the loader stops in case of error
        }

          // Reset the "clicked" state after a short delay (so the effect is visible)
    setTimeout(() => {
        setClicked(false);
      }, 1000); // Button will revert after 1 second
    };

    
return (
                 

    //             <Form onSubmit={handleSubmit} id="form1home">
    //             <Form.Group className="mb-3" controlId="formBasicEmail">
    //               <h1 id="homeformtitle">Contact Me</h1>
    //               <Form.Label>Email address</Form.Label>
    //               <Form.Control
    //                 type="email"
    //                 placeholder="Enter email"
    //                 value={email} // bind input value to email state
    //                 onChange={(e) => setEmail(e.target.value)} // update state on change
    //               />
    //             </Form.Group>
          
    //             <Form.Group className="mb-3" controlId="formBasicPassword">
    //               <Form.Label>First Name</Form.Label>
    //               <Form.Control
    //                 type="text"
    //                 placeholder="Enter your first name"
    //                 value={firstName}
    //                 onChange={(e) => setFirstName(e.target.value)}
    //               />
    //             </Form.Group>
          
    //             <Form.Group className="mb-3" controlId="formBasicPassword">
    //               <Form.Label>Last Name</Form.Label>
    //               <Form.Control
    //                 type="text"
    //                 placeholder="Enter your last name"
    //                 value={lastName}
    //                 onChange={(e) => setLastName(e.target.value)}
    //               />
    //             </Form.Group>
          
    //             <Form.Group className="mb-3" controlId="formBasicMessage">
    //               <Form.Label>Message</Form.Label>
    //               <div className="form-group">
    //                 <textarea
    //                   className="form-control"
    //                   rows="7"
    //                   placeholder="Write your message here"
    //                   value={message}
    //                   onChange={(e) => setMessage(e.target.value)}
    //                 />
    //               </div>
    //             </Form.Group>

    //                   {/* Show loader when the form is being submitted */}
    //   {loading && (
    //     <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
    //       <SyncLoader size={20} color={"#43ace8"} loading={loading} />
    //       <br />
    //       <br />
    //     </div>
    //   )}
          
    //       <Button 
    //     id="submitform" 
    //     variant="primary" 
    //     type="submit" 
    //     disabled={loading}
    //     className={clicked ? 'clicked' : ''}
    //   >
    //     Submit
    //   </Button>

    //           </Form>


    <Form onSubmit={handleSubmit} id="form1home">
    <div className="middle">
      <h1 id="homeformtitle">Contact Me</h1>
    </div>

    <div className="middle">
      <h3 >Please send me an email to:</h3>
      <br />
      <br />
      <h3 ><a href="mailto:sdanutrition@nutritionsda.com">sdanutrition@nutritionsda.com</a></h3>
    </div>
  </Form>

                );
}

export default HomeForm; //Export the component so it can be used in other parts of the application