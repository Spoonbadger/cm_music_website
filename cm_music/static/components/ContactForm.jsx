import React from 'react'
import { Button } from 'react-bootstrap/Button'

const ContactForm = () => {

    const [form, setForm] = useState({
      name: '',
      email: '',
      message: ''
    })

    const handleSubmit = (e) => {
      e.preventDefault()

      try {
        const response = await fetch('/contact', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(form),
        })
        if (response.ok) {
          console.log('Message submitted successfully')
        } else {
          console.log("Error sending message:", error)
          alert("error sending message, please try again")
        }
      } catch (error) {
          console.error("Error sending message:", error.message)
          alert("error sending messsage, please try again")
      }
    }

    const handleChange = (e) => {
      e.preventDefault()

      setForm({
        ...form,
        [e.target.name]: e.target.value
      })

    } 

    return (
      <div>
        <form className="contact-form" onSubmit={() => handleSubmit()}>
          <div className="name-input">
            <label>Name:</label>
            <input
              type="text"
              placeholder="name..."
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="email-input">
            <label>Email:</label>
            <input
              type="text"
              placeholder="email..."
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="message-input">
            <label>Message:</label>
            <input
              type="text"
              placeholder="Message..."
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" variant="outline-primary">Send</Button>
        </form>
      </div>
    )
  }


export default ContactForm