import React,{useState} from "react";

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phonenumber: ''
    });
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      phonenumber: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    };

    const validate = () => {
      let formErrors = {};
      if (!form.email) {
        formErrors.email = 'Email is required';
      }
      if (!form.password) {
        formErrors.password = 'Password is required';
      }
      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        console.log('Form is valid:', form);
      }
    };



    return(
        <>
        <div> Form </div>
        <br/>
        <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" 
        name="username" 
        id="name"
        value={form.name} 
        onChange={handleChange}
        placeholder="Enter your name" />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <br/>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" 
        name="email" 
        id="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter your email" />
         {errors.email && <p>{errors.email}</p>}
      </div>
      <br/>
      <div>
        <label htmlFor="phone">phone number:</label>
        <input type="tel" name="phone" id="phone" placeholder="Enter 10 digit number" />
      </div>
      <br/>
      <button type="submit">Submit</button>
    </form>
        </>
    )
}

export default Form;