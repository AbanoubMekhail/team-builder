import React from "react";


const Form = (props) => {
        const handleChange = event => {
            const { name, value } = event.target;
            props.change( name, value)
        }

        const handelSubmit = event => {
            event.preventDefault();
            props.submit();
        }

    return (
        <form onSubmit={handelSubmit}>
            <label htmlFor="">name
            <input
                placeholder="Enter your name!!"
                value={props.values.name}
                name="name"
                onChange={handleChange}
                />
                </label>
        
        <label>Email
            <input
                placeholder="Enter your E-mail!!"
                value={props.values.email}
                name="email"
                onChange={handleChange}
            />
        </label>

        <label>
            <input
                placeholder="Enter your role!!"
                value={props.values.role}
                name="role"
                onChange={handleChange}
            />
        </label>
            <input type="submit" value="Create your team!!" />
        </form>
    )
}

export default Form;