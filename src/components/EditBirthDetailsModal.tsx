import React, { useState } from 'react';
import { X, Sparkles, Calendar, Clock, MapPin, User, Compass } from 'lucide-react';
import { BirthChartFormData } from '../types';

interface EditBirthDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: BirthChartFormData;
  onSave: (data: BirthChartFormData) => void;
}

export const EditBirthDetailsModal: React.FC<EditBirthDetailsModalProps> = ({
  isOpen,
  onClose,
  initialData,
  onSave,
}) => {
  const [formData, setFormData] = useState<BirthChartFormData>(initialData);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div
      id="edit-birth-details-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="edit-birth-details-modal-container"
        className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#0D1328] to-[#070B1A] border border-[#D4AF37]/30 p-6 sm:p-8 shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#A8B0C5] hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#F4D77D] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Update Natal Parameters</span>
          </div>
          <h3 className="text-2xl font-bold text-white font-playfair">
            Edit Birth Details
          </h3>
          <p className="text-xs sm:text-sm text-[#A8B0C5] mt-1">
            Recalculate planetary longitudes, rising ascendant, and house cusps with updated time or location coordinates.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#F4D77D] uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
              <User className="w-3.5 h-3.5" />
              <span>Full Name</span>
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#070B1A] border border-white/15 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              placeholder="e.g. Priya Sharma"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#F4D77D] uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Date of Birth</span>
              </label>
              <input
                type="date"
                required
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#070B1A] border border-white/15 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors [color-scheme:dark]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#F4D77D] uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Time of Birth</span>
              </label>
              <input
                type="text"
                required
                value={formData.timeOfBirth}
                onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#070B1A] border border-white/15 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="e.g. 07:30 AM"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#F4D77D] uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>City & Country of Birth</span>
            </label>
            <input
              type="text"
              required
              value={formData.placeOfBirth}
              onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#070B1A] border border-white/15 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              placeholder="e.g. New Delhi, India"
            />
          </div>

          <div className="pt-4 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#A8B0C5] hover:text-white border border-white/10 hover:border-white/20 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              id="recalculate-chart-btn"
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#070B1A] bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02] transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Recalculate Chart</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
