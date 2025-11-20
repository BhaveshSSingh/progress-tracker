import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  dateApplied: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Applied', 'Online Test', 'Interview', 'Offer', 'Rejected'],
    default: 'Applied',
  },
  notes: {
    type: String,
    default: '',
  },
}, { timestamps: true });

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema);
