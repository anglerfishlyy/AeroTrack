const Component = require('../models/Component');

// Controller for handling all component-related operations
const componentController = {
    // Create a new component
    async createComponent(req, res) {
        try {
            const { name, serialNumber, manufacturingDate } = req.body;
            
            // Check if component with serial number already exists
            const existingComponent = await Component.findOne({ serialNumber });
            if (existingComponent) {
                return res.status(400).json({ message: 'Serial number already exists' });
            }

            // Create new component with initial history entry
            const component = new Component({
                name,
                serialNumber,
                manufacturingDate,
                history: [{
                    status: 'Manufacturing',
                    timestamp: new Date(),
                    notes: 'Component created'
                }]
            });

            await component.save();
            res.status(201).json(component);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get all components
    async getAllComponents(req, res) {
        try {
            const components = await Component.find().sort({ lastUpdated: -1 });
            res.json(components);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Update component status
    async updateStatus(req, res) {
        try {
            const { id } = req.params;
            const { status, notes } = req.body;

            const component = await Component.findById(id);
            if (!component) {
                return res.status(404).json({ message: 'Component not found' });
            }

            // Update status and add to history
            component.status = status;
            component.lastUpdated = new Date();
            component.history.push({
                status,
                timestamp: new Date(),
                notes: notes || `Status updated to ${status}`
            });

            await component.save();
            res.json(component);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Delete a component
    async deleteComponent(req, res) {
        try {
            const { id } = req.params;
            console.log('Attempting to delete component with ID:', id);
            
            // Check if the component exists first
            const component = await Component.findById(id);
            console.log('Found component:', component);
            
            if (!component) {
                console.log('Component not found');
                return res.status(404).json({ message: 'Component not found' });
            }

            // Delete the component
            await Component.findByIdAndDelete(id);
            console.log('Component deleted successfully');
            res.status(200).json({ message: 'Component deleted successfully' });
        } catch (error) {
            console.error('Delete error:', error);
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = componentController; 