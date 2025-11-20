import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tasks: {
    type: [String],
    default: [],
  },
  hours: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed', 'On Hold'],
    default: 'Not Started',
  },
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
