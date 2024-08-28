import React from 'react';
import styled from 'styled-components';

// Styled components
const SkillLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  cursor: pointer;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  width: 209px;
  justify-content: space-around;
`;

// Default props
const defaultSkills = {
  html: false,
  css: false,
  javascript: false,
};

const SkillCheckBox = ({ skills = defaultSkills, onChange }) => {
  return (
    <>
      <label>Skills:</label>
      <CheckBoxWrapper>
        {Object.keys(skills).map(skill => (
          <SkillLabel key={skill}>
            <input
              type="checkbox"
              name={skill}
              checked={skills[skill]}
              onChange={onChange}
            />
            {skill.charAt(0).toUpperCase() + skill.slice(1)}
          </SkillLabel>
        ))}
      </CheckBoxWrapper>
    </>
  );
};

export default SkillCheckBox;
