import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import ComponentForm from './components/ComponentForm';
import ComponentList from './components/ComponentList';
import axios from 'axios';

function App() {
  const [components, setComponents] = useState([]);

  const fetchComponents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/components');
      setComponents(response.data);
    } catch (error) {
      console.error('Error fetching components:', error);
    }
  };

  useEffect(() => {
    fetchComponents();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Container>
        <h1 style={{ color: '#333', marginBottom: '30px' }}>
          AeroTrack - Aircraft Component Tracker
        </h1>
        <ComponentForm onComponentAdded={fetchComponents} />
        <ComponentList 
          components={components} 
          onComponentDeleted={fetchComponents}
        />
      </Container>
     
    </div>
  );
}

export default App;
