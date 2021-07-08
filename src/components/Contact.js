import React from 'react';
import '../css/contact.css';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            touched:{
                name: false,
                email: false,
                subject: false,
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        // Because the name and state name are similar

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event){
        console.log('Current State: ' + JSON.stringify(this.state));
        alert('Current State: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        })
    }
    validate(name, email,subject){
        const errors = {
            name: '',
            email: '',
            subject: '',
        };
        if(this.state.touched.name && name.length < 3){
            errors.name = "Name should be greater than 3 character";
        } else if(this.state.touched.name && name.length > 25){
            errors.name = "Name should be less than 20 character";
        }
        
        if(this.state.touched.email && email.split('').filter(x => x === '@').length != 1){
            errors.email = "Email should contain a @";
        }

        if(this.state.touched.subject && subject.length < 3){
            errors.subject = "Subject should be greater than 3 character";
        } else if(this.state.touched.name && name.length > 20){
            errors.subject = "Subject should be less than 20 character";
        }
        return errors;
    }
    render(){
        const errors = this.validate(this.state.name, this.state.email, this.state.subject)
        return(
            <div className="contact_container">
            <form className="contact_form" onSubmit={this.handleSubmit}>
                <h1>Contact Us</h1>
                <div className="form_group">
                    <span>Your Name</span>
                    <input type="text" id="name" name="name" placeholder="Enter your name" value={this.state.name} onChange={this.handleInputChange} onBlur={this.handleBlur('name')}/>
                    <span style={{width: '100%',
                                display: 'block',
                                fontSize: '0.9rem',
                                marginTop: '0.3rem',
                                textAlign: 'right',
                                color: 'red'}}>{errors.name}</span>
                </div>
                <div className="form_group">
                    <span>Your Email</span>
                    <input type="email" id="email" name="email" placeholder="Enter your email" value={this.state.email} onChange={this.handleInputChange} onBlur={this.handleBlur('email')}/>
                    <span style={{width: '100%',
                                display: 'block',
                                fontSize: '0.9rem',
                                marginTop: '0.3rem',
                                textAlign: 'right',
                                color: 'red'}}>{errors.email}</span>
                </div>
                <div className="form_group">
                    <span>Subject</span>
                    <input type="text" id="subject" name="subject" placeholder="Enter the subject" value={this.state.subject} onChange={this.handleInputChange} onBlur={this.handleBlur('subject')}/>
                    <span style={{width: '100%',
                                display: 'block',
                                fontSize: '0.9rem',
                                marginTop: '0.3rem',
                                textAlign: 'right',
                                color: 'red'}}>{errors.subject}</span>
                </div>
                <div className="form_group">
                    <span>Message</span>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message" value={this.state.message} onChange={this.handleInputChange}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        );
    }
}

export default Contact;