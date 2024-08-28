// src/helper/formValidation.js

export const validateUserForm = (formData) => {
    const errors = {};
    if (!formData.firstname.trim()) {
        errors.firstname = "First name is required.";
    }

    if (!formData.lastname.trim()) {
        errors.lastname = "Last name is required.";
    }

    if (!formData.email.trim()) {
        errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email address is invalid.";
    }

    if (!formData.phone.trim()) {

        errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
        errors.phone = "Phone number must be 10 digits.";
    }

    return errors;
};
