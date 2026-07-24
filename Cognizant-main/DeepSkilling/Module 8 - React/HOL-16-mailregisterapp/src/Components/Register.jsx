import { useState } from "react";
import "../Styles/Register.css";

function Register() {

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        password: ""

    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({

            ...formData,

            [name]: value

        });

    };

    const validate = () => {

        let tempErrors = {};

        if (formData.name.length < 5) {

            tempErrors.name = "Name should have atleast 5 characters";

        }

        if (
            !formData.email.includes("@") ||
            !formData.email.includes(".")
        ) {

            tempErrors.email = "Enter a valid Email";

        }

        if (formData.password.length < 8) {

            tempErrors.password = "Password should have atleast 8 characters";

        }

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (validate()) {

            alert("Registration Successful");

            setFormData({

                name: "",

                email: "",

                password: ""

            });

            setErrors({});

        }

    };

    return (

        <div className="container">

            <form className="form" onSubmit={handleSubmit}>

                <h1>Mail Registration</h1>

                <div className="input-group">

                    <label>Name</label>

                    <input

                        type="text"

                        name="name"

                        value={formData.name}

                        onChange={handleChange}

                    />

                    <span>{errors.name}</span>

                </div>

                <div className="input-group">

                    <label>Email</label>

                    <input

                        type="text"

                        name="email"

                        value={formData.email}

                        onChange={handleChange}

                    />

                    <span>{errors.email}</span>

                </div>

                <div className="input-group">

                    <label>Password</label>

                    <input

                        type="password"

                        name="password"

                        value={formData.password}

                        onChange={handleChange}

                    />

                    <span>{errors.password}</span>

                </div>

                <button type="submit">

                    Register

                </button>

            </form>

        </div>

    );

}

export default Register;