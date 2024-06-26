import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface AgreementProps {
  text: string;
  onSubmit: () => void; // Function to handle submission
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContainer = styled.div`
  max-height: 300px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  width: 80%;
  background-color: #f5f5f5;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 20px;
  height: 50px;
  background-image: linear-gradient(to right, #f9a042, #cd435a);
`;

const SubmitButton = styled.button`
  width: 100%;
  border-radius: 20px;
`;

const Agreement: React.FC<AgreementProps> = ({ text, onSubmit }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (textRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = textRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        setHasScrolledToBottom(true);
      }
    }
  };

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      textElement.addEventListener('scroll', handleScroll);
      return () => {
        textElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleCheckboxChange = () => {
    if (hasScrolledToBottom) {
      setIsChecked(!isChecked);
    }
  };

  const handleConfirmClick = () => {
    if (isChecked) {
      onSubmit(); // Call the onSubmit function passed from props (App.tsx)
      alert('Submitted!');
    }
  };

  return (
    <Container>
      <TextContainer ref={textRef}>
        {text}
      </TextContainer>
      <div>
        <input
          type="checkbox"
          disabled={!hasScrolledToBottom || isChecked}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label>I herewith accept the above statement</label>
      </div>
      <ButtonContainer>
        <SubmitButton
          onClick={handleConfirmClick} // Handle click event for CONFIRM button
          disabled={!isChecked}
        >
          CONFIRM
        </SubmitButton>
      </ButtonContainer>
    </Container>
  );
};

export default Agreement;
