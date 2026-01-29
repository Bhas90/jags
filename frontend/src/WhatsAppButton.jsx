import React, { useState, useEffect } from 'react';
import './WhatsAppButton.css'; // 👈 add this line

const WhatsAppButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const message = encodeURIComponent(
    "Hi, I want to know more details about Jagsons Pride. Can you help me?"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={`https://wa.me/918886661686?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-float-btn ${isAnimating ? 'active' : ''}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="whatsapp-icon"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.105.547 4.154 1.586 5.965L0 24l6.311-1.582C8.072 23.453 10.007 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.832 0-3.624-.502-5.165-1.45l-.368-.226-3.743.94.989-3.67-.24-.374C2.502 15.115 2 13.292 2 12 2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm5.037-7.97c-.277-.139-1.64-.807-1.895-.9-.255-.093-.441-.139-.627.139-.186.278-.72.9-.882 1.088-.163.186-.325.209-.602.07-.277-.14-1.17-.43-2.229-1.372-.822-.732-1.377-1.642-1.54-1.92-.163-.278-.018-.428.122-.567.125-.124.278-.325.417-.488.046-.057.083-.107.116-.154.046-.07.023-.14 0-.186-.093-.232-.66-1.602-.904-2.188-.239-.575-.481-.498-.66-.508-.17-.01-.365-.013-.56-.013-.186 0-.488.07-.743.349-.255.278-.97.95-.97 2.317s.993 2.687 1.131 2.875c.139.186 1.947 2.972 4.717 4.167 1.88.807 2.62.87 3.56.729.574-.086 1.64-.669 1.87-1.315.23-.647.23-1.203.162-1.315-.069-.112-.254-.186-.53-.325z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
