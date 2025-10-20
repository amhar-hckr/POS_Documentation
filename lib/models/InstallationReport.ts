import mongoose, { Schema, Document } from 'mongoose';

export interface IInstallationReport extends Document {
  id: string;
  purpose: string;
  location: string;
  unitNo: string;
  configuredBy: string;
  verifiedBy: string;
  verifiedDate: Date;
  status: 'completed' | 'pending';
  createdAt: Date;
  updatedAt: Date;
}

const InstallationReportSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  purpose: {
    type: String,
    required: true,
    enum: ['stock count', 'showroom', 'magasale'],
  },
  location: {
    type: String,
    required: true,
  },
  unitNo: {
    type: String,
    required: true,
  },
  configuredBy: {
    type: String,
    required: true,
  },
  verifiedBy: {
    type: String,
    required: true,
  },
  verifiedDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['completed', 'pending'],
    default: 'completed',
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

// Create indexes for better query performance
InstallationReportSchema.index({ configuredBy: 1 });
InstallationReportSchema.index({ verifiedDate: 1 });
InstallationReportSchema.index({ location: 1 });
InstallationReportSchema.index({ status: 1 });

export default mongoose.models.InstallationReport ||
  mongoose.model<IInstallationReport>('InstallationReport', InstallationReportSchema);