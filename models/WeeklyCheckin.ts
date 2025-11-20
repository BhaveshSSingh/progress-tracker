import mongoose from 'mongoose';

const WeeklyCheckinSchema = new mongoose.Schema({
  weekNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  summary: {
    type: String,
    required: true,
  },
  interviews: {
    type: Number,
    default: 0,
  },
  improvements: {
    type: String,
    default: '',
  },
  progress: {
    type: String, // General text field for progress notes
    default: '',
  }
}, { timestamps: true });

export default mongoose.models.WeeklyCheckin || mongoose.model('WeeklyCheckin', WeeklyCheckinSchema);
