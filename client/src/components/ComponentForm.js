import React, { useState } from 'react';
import { 
  Paper, 
  TextField, 
  Button, 
  Box,
  Alert 
} from '@mui/material';
import axios from 'axios';

const ComponentForm = ({ onComponentAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    serialNumber: '',
    manufacturingDate: ''
  });
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/components', formData);
      setMessage({ type: 'success', text: 'Component added successfully!' });
      setFormData({ name: '', serialNumber: '', manufacturingDate: '' });
      onComponentAdded();
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.message || 'Error adding component' });
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <h2>Add New Component</h2>
      {message && (
        <Alert severity={message.type} sx={{ mb: 2 }}>
          {message.text}
        </Alert>
      )}
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Component Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Serial Number"
          value={formData.serialNumber}
          onChange={(e) => setFormData({...formData, serialNumber: e.target.value})}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          type="date"
          label="Manufacturing Date"
          value={formData.manufacturingDate}
          onChange={(e) => setFormData({...formData, manufacturingDate: e.target.value})}
          margin="normal"
          required
          InputLabelProps={{ shrink: true }}
          sx={{
            '& .MuiInputAdornment-root': {
              cursor: 'pointer'
            },
            '& input[type="date"]::-webkit-calendar-picker-indicator': {
              cursor: 'pointer'
            }
          }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          type="submit"
          sx={{ mt: 2 }}
        >
          Add Component
        </Button>
      </Box>
    </Paper>
  );
};

export default ComponentForm; 