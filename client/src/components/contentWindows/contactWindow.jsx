import React from "react";
import axios from "axios";
// import serialize from "serialize-javascript";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      content: "",
      formFields: {
        english: ["Contact Us", "Name", "E-mail", "Phone Number", "Subject", "Content"],
        traditional: ["聯繫我們", "名字", "電郵", "電話號碼", "主題", "訊息"],
        simplified: ["联系我们", "名字", "电邮", "电话号码", "主题", "讯息"]
      }
    };
    this.submitForm = this.submitForm.bind(this);
    this.escapeHtml = this.escapeHtml.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  submitForm() {
    const { name, email, phone, subject, content } = this.state;
    if (name && email && content) {
      axios.post('/submitForm', {
        name: this.escapeHtml(name),
        email: this.escapeHtml(email),
        phone: this.escapeHtml(phone),
        subject: this.escapeHtml(subject),
        content: this.escapeHtml(content)
      })
      this.setState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        content: ''
      }, () => {
        window.alert('Message sent!');
      })
    } else {
      window.alert('Please fill in the required information.');
    }
  }

  render() {
    const formFields = this.state.formFields[this.props.language];
    return (
      <div className="contact-canvas">
        <div className="contact-us-div">
          <h1 className="contact-us-text">
            {formFields[0]}
          </h1>
        </div>
        <div className="contact-form-div">
          <form>
            <div>
              <input name="name" placeholder={formFields[1] + "*"} className="name-input" type="text" onChange={(e) => this.handleChange(e)} value={this.state.name} />
            </div>
            <div>
              <input name="email" placeholder={formFields[2] + "*"} className="email-input" type="email" onChange={(e) => this.handleChange(e)} value={this.state.email} />
            </div>
            <div>
              <input name="phone" placeholder={formFields[3]} className="phone-input" type="tel" onChange={(e) => this.handleChange(e)} value={this.state.phone} />
            </div>
            <div>
              <input name="subject" placeholder={formFields[4]} className="subject-input" type="text" onChange={(e) => this.handleChange(e)} value={this.state.subject} />
            </div>
            <div>
              <textarea name="content" placeholder={formFields[5] + "*"} cols="40" rows ="5" className="content-input" onChange={(e) => this.handleChange(e)} value={this.state.content} ></textarea>
            </div>
          </form>
          <button className="form-submit-button" onClick={()=> this.submitForm()}>Submit</button>
        </div>
      </div>
    )
  }
}

export default Contact;