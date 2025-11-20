import mongoose from 'mongoose';

const DailyMetricsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true,
  },
  hours: {
    type: Number,
    default: 0,
  },
  topicsLearned: {
    type: [String],
    default: [],
  },
  questionsSolved: {
    type: Number,
    default: 0,
  },
  questionsRevisited: {
    type: Number,
    default: 0,
  },
  revisionNotes: {
    type: String,
    default: '',
  },
}, { timestamps: true });

export default mongoose.models.DailyMetrics || mongoose.model('DailyMetrics', DailyMetricsSchema);
