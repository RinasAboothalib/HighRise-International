import React from 'react';
import { PortfolioProject } from '../data/highriseData';
import { X, MapPin, Calendar, Users, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <span>Portfolio Case Study</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-sky-600 font-bold">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-800 rounded-full hover:bg-slate-200/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual Image with Curved Corners */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <span className="text-xs font-semibold text-white bg-slate-900/80 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                {project.year}
              </span>
              {project.scale && (
                <span className="text-xs font-semibold text-sky-200 bg-slate-900/80 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                  {project.scale}
                </span>
              )}
            </div>
          </div>

          {/* Title & Metadata */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-1.5 text-slate-700">
                <Users className="w-4 h-4 text-sky-600" />
                <span>Client: {project.client}</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 text-slate-700">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>Venue: {project.venue}</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 text-slate-700">
                <Calendar className="w-4 h-4 text-sky-600" />
                <span>{project.location}</span>
              </div>
            </div>
          </div>

          {/* In-Depth Description */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-widest text-slate-500">
              Project Architecture & Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Key Achievements & Highlights */}
          <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100">
            <h3 className="text-xs uppercase font-bold tracking-widest text-sky-700 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-sky-600" />
              <span>Key Execution Milestones</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 sm:px-8 py-5 border-t border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 font-medium">
            Interested in staging a similar format or commissioning Highrise?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-full border border-slate-200 hover:bg-white transition-colors w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onInquire(project.title);
                onClose();
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 rounded-full transition-colors w-full sm:w-auto shadow-sm shadow-sky-600/20"
            >
              <span>Consult on this Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
