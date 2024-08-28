import styled from 'styled-components'


const CustomInput = styled.input`
background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
    //   width: 350px;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;
`

const Input = ({ type, name, value, onChange, placeholder }) => {


    return (
        <div>
            <CustomInput
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}


export default Input;