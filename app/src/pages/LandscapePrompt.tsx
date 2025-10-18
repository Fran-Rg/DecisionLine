import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface LandscapePromptProps {
    children: React.ReactNode;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  font-size: 2rem;
  text-align: center;
  padding: 20px;
`;

const PhoneIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
  transform: rotate(90deg);
`;

const LandscapePrompt: React.FC<LandscapePromptProps> = ({ children }) => {
    const [isPortrait, setIsPortrait] = useState<boolean>(false);

    useEffect(() => {
        const checkOrientation = () => {
            const portrait = window.matchMedia("(orientation: portrait)").matches;
            setIsPortrait(portrait);
        };

        // Initial check
        checkOrientation();

        // Add event listeners
        window.addEventListener('resize', checkOrientation);
        window.matchMedia("(orientation: portrait)").addEventListener('change', checkOrientation);

        // Cleanup
        return () => {
            window.removeEventListener('resize', checkOrientation);
            window.matchMedia("(orientation: portrait)").removeEventListener('change', checkOrientation);
        };
    }, []);

    return (
        <>
            {isPortrait && (
                <Overlay>
                    <PhoneIcon>📱</PhoneIcon>
                    <div>You must use this app in landscape mode</div>
                    <div style={{ fontSize: '1.2rem', marginTop: '20px' }}>Please rotate your device</div>
                </Overlay>
            )}
            {children}
        </>
    );
};

export default LandscapePrompt;
