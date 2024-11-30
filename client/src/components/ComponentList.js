import React from 'react';
import { 
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Alert
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const ComponentList = ({ components, onComponentDeleted }) => {
  const handleDelete = async (id) => {
    try {
      console.log('Attempting to delete component with ID:', id);
      const response = await axios.delete(`http://localhost:5000/api/components/${id}`);
      console.log('Delete response:', response);
      
      if (response.status === 200) {
        console.log('Delete successful');
        onComponentDeleted(); // Refresh the list after successful deletion
      }
    } catch (error) {
      console.error('Full error object:', error);
      console.error('Error deleting component:', error.response?.data?.message || error.message);
      alert('Error deleting component: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <Paper elevation={3}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Serial Number</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Manufacturing Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {components.map((component) => (
              <TableRow key={component._id}>
                <TableCell>{component.name}</TableCell>
                <TableCell>{component.serialNumber}</TableCell>
                <TableCell>{component.status}</TableCell>
                <TableCell>
                  {new Date(component.manufacturingDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <IconButton 
                    onClick={() => {
                      console.log('Delete button clicked for ID:', component._id);
                      handleDelete(component._id);
                    }}
                    color="error"
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ComponentList; 