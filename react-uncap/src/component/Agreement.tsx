import React, { useState, useRef, useEffect } from 'react';

interface AgreementProps {
  text: string;
  onSubmit: () => void;
}

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

  return (
    <div>
      <div
        ref={textRef}
        style={{
          maxHeight: '300px',
          overflowY: 'scroll',
          border: '1px solid #ccc',
          padding: '10px',
          marginBottom: '10px',
        }}
      >
        {text}
      </div>
      <div>
        <input
          type="checkbox"
          disabled={!hasScrolledToBottom}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label>I herewith accept the above statement</label>
      </div>
      <button
        onClick={onSubmit}
        disabled={!isChecked}
      >
        Submit
      </button>
    </div>
  );
};

export default Agreement;
