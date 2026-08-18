import React, { useState, useEffect } from 'react';
import { X, Sparkles, Download, CheckCircle2, FileText, Loader2, Share2, Printer } from 'lucide-react';
import { BirthChartResult } from '../types';

interface DownloadReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  chartResult: BirthChartResult;
}

export const DownloadReportModal: React.FC<DownloadReportModalProps> = ({
  isOpen,
  onClose,
  chartResult,
}) => {
  const [step, setStep] = useState<'preparing' | 'ready'>('preparing');
  const [progress, setProgress] = useState(15);
  const [statusMsg, setStatusMsg] = useState('Calculating planetary degrees...');

  useEffect(() => {
    if (!isOpen) {
      setStep('preparing');
      setProgress(15);
      setStatusMsg('Calculating planetary degrees...');
      return;
    }

    const t1 = setTimeout(() => {
      setProgress(45);
      setStatusMsg('Synthesizing Nakshatra & 12 Bhava matrix...');
    }, 700);

    const t2 = setTimeout(() => {
      setProgress(85);
      setStatusMsg('Rendering high-resolution vector Kundli PDF dossier...');
    }, 1500);

    const t3 = setTimeout(() => {
      setProgress(100);
      setStep('ready');
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSimulatedDownload = () => {
    // Create printable demo text or blob
    const element = document.createElement('a');
    const file = new Blob([
      `ASTROVEDA COSMIC BLUEPRINT DOSSIER
==================================================
Native: ${chartResult.name}
Date of Birth: ${chartResult.date}
Time of Birth: ${chartResult.time}
Place of Birth: ${chartResult.place}
--------------------------------------------------
Sun Sign: ${chartResult.sunSign}
Moon Sign: ${chartResult.moonSign}
Rising Ascendant: ${chartResult.risingSign}
Nakshatra: ${chartResult.nakshatra}
--------------------------------------------------
COSMIC INSIGHT:
${chartResult.summary}

PERSONALITY ARCHETYPE:
${chartResult.lifeAspects.personality}

CAREER & AMBITION:
${chartResult.lifeAspects.career}

LOVE & RELATIONSHIPS:
${chartResult.lifeAspects.love}
==================================================
Generated via AstroVeda Vedic Astrological Engine.
`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `AstroVeda_Birth_Chart_${chartResult.name.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div
      id="download-report-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="download-report-modal-container"
        className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#0D1328] to-[#070B1A] border border-[#D4AF37]/40 p-6 sm:p-8 shadow-2xl my-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#A8B0C5] hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'preparing' ? (
          <div className="py-6 space-y-5">
            <div className="relative w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-[#121A38] border border-[#D4AF37]/40 text-[#F4D77D]">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white font-playfair">
                Your birth chart report is being prepared...
              </h3>
              <p className="text-xs text-[#A8B0C5] mt-1">{statusMsg}</p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#070B1A] rounded-full h-2.5 overflow-hidden border border-white/10">
              <div
                className="bg-gradient-to-r from-[#D4AF37] to-[#F4D77D] h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-[11px] text-[#A8B0C5]">{progress}% Completed</p>
          </div>
        ) : (
          <div className="py-4 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#10B981]/15 border border-[#10B981]/40 flex items-center justify-center text-[#10B981]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-[11px] font-bold text-[#10B981] uppercase tracking-wider">
                Ready For Download
              </span>
              <h3 className="text-2xl font-bold text-white font-playfair mt-1">
                Demo report generated successfully.
              </h3>
              <p className="text-xs text-[#A8B0C5] mt-2">
                Your high-resolution natal dossier for <strong className="text-white">{chartResult.name}</strong> is compiled with complete planetary degrees, house lords, and dasha cycles.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B1A] border border-white/10 text-left text-xs space-y-1.5">
              <div className="flex items-center justify-between text-[#A8B0C5]">
                <span>Document:</span>
                <span className="text-white font-semibold">AstroVeda_Natal_Dossier.pdf</span>
              </div>
              <div className="flex items-center justify-between text-[#A8B0C5]">
                <span>Format:</span>
                <span className="text-[#F4D77D]">12-Page Vedic Analytical Report</span>
              </div>
              <div className="flex items-center justify-between text-[#A8B0C5]">
                <span>Status:</span>
                <span className="text-[#10B981]">Verified Ephemeris</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                id="download-demo-pdf-btn"
                onClick={handleSimulatedDownload}
                className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] text-[#070B1A] text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Report</span>
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="py-3 px-4 rounded-full bg-[#121A38] text-white hover:text-[#F4D77D] border border-white/15 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
