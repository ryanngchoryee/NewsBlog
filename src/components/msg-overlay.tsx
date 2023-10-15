import React from 'react';
import '../css/msg-overlay.css'
import { Container } from 'react-bootstrap';
import { MsgOverlayProps } from '../models/props';

const MsgOverlay: React.FC<MsgOverlayProps> = ({ isLoading, displayMessage = "" }) => {
  if (!isLoading) {
    return null; // Don't render anything if isLoading is false
  }

  return (
    <Container fluid className="view-body loading-overlay">
      <div className="view-content spinner"
        style={{ width: '100px', height: '100px' }}>
      </div>
      <h1 className="view-content fw-600" style={{ color: 'black' }}>{displayMessage}</h1>
    </Container>
  );
};

export default MsgOverlay;
