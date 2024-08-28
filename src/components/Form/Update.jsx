// src/components/Update/Update.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import SkillCheckBox from '../SkillCheckBox';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../../features/userSlice';
import { validateUserForm } from "../helper/FormValidation";

const ContentWrapper = styled.div`
`;

const ContentHeading = styled.div`
    text-align: center;
    font-size: 36px;
    line-height: 1.3;
    font-weight: 600;
    padding: 0;
    font-family: Poppins-SemiBold;
    margin: 0 0 20px;
    color: #101828;
`;

const ContentPara = styled.div`
    text-align: center;
    font-size: 16px;
    line-height: 1.6;
    font-weight: 400;
    margin: 0;
    color: #475467;
`;

const FormWrapper = styled.div`
    width: 100%;
    display: block;
    flex: 0 0 55%;
    max-width: 55%;
    height: auto;
    display: flex;
    align-items: center;
`;

const ChildWrapper = styled.div`
    padding: 40px 15px;
    max-width: 461px;
    width: 100%;
    margin: 0 auto;
    .email {
        width: calc(100% - 26px);
    }
`;

const CheckButton = styled.div`
    margin: 10px 0px;
`;

const NameWrapper = styled.div`
    margin: 10px 0px;
    display: flex;
    gap: 20px;
`;

const InWrapper = styled.div`
    input {
        width: calc(100% - 26px);
        margin-bottom: 10px;
    }
`;

const Button = styled.button`
    background: linear-gradient(45deg, #66ff66, #000000);
    width: 100%;
    color: #ffffff;
    margin-top: 32px;
`;

const Error = styled.div`
    color: #dc3545;
    font-size: 14px;
`;

const Update = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Find the existing user
    const existingUser = users.find((user) => user.id === id);

    // Initialize form data with existing user data
    const [formData, setFormData] = useState({
        firstname: existingUser?.firstname || '',
        lastname: existingUser?.lastname || '',
        email: existingUser?.email || '',
        phone: existingUser?.phone || '',
        skills: existingUser?.skills || {
            html: false,
            css: false,
            javascript: false
        }
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (existingUser) {
            setFormData({
                firstname: existingUser.firstname,
                lastname: existingUser.lastname,
                email: existingUser.email,
                phone: existingUser.phone,
                skills: existingUser.skills
            });
        }
    }, [existingUser]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prevState) => ({
                ...prevState,
                skills: {
                    ...prevState.skills,
                    [name]: checked
                }
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateUserForm(formData);

        if (Object.keys(validationErrors).length === 0) {
            dispatch(updateUser({ id, ...formData }));
            navigate('/table'); // Redirect after successful update
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <FormWrapper>
            <ChildWrapper>
                <ContentWrapper>
                    <ContentHeading>Update User</ContentHeading>
                    <ContentPara>Update the user details below.</ContentPara>
                </ContentWrapper>
                <form onSubmit={handleSubmit}>
                    <NameWrapper>
                        <div>
                            <Input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                placeholder="FirstName"
                            />
                            {errors.firstname && <Error>{errors.firstname}</Error>}
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                placeholder="LastName"
                            />
                            {errors.lastname && <Error>{errors.lastname}</Error>}
                        </div>
                    </NameWrapper>
                    <InWrapper>
                        <div>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                            {errors.email && <Error>{errors.email}</Error>}
                        </div>
                        <div>
                            <Input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                            />
                            {errors.phone && <Error>{errors.phone}</Error>}
                        </div>
                    </InWrapper>

                    <CheckButton>
                        <SkillCheckBox
                            skills={formData.skills}
                            onChange={handleChange}
                        />
                    </CheckButton>
                    <Button type="submit">Submit</Button>
                </form>
            </ChildWrapper>
        </FormWrapper>
    );
};

export default Update;
