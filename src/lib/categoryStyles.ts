import { Brain, Activity, Heart, ShieldAlert, Dna, Wind, Sparkles, AlertTriangle, FileText, ClipboardList, Stethoscope, Bone } from 'lucide-react';

export const CATEGORY_STYLES: Record<string, { icon: any; bg: string; iconBg: string; iconColor: string; textColor: string }> = {
  'bases': { icon: Brain, bg: 'bg-[#f0f7fb]', iconBg: 'bg-sky-100', iconColor: 'text-sky-600', textColor: 'text-sky-900' },
  'syndromes-compressifs': { icon: Bone, bg: 'bg-[#f3f6f8]', iconBg: 'bg-slate-200', iconColor: 'text-slate-600', textColor: 'text-slate-900' },
  'troubles-conscience': { icon: Activity, bg: 'bg-[#f4f3fb]', iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600', textColor: 'text-indigo-900' },
  'avc': { icon: Heart, bg: 'bg-[#fff0f0]', iconBg: 'bg-red-100', iconColor: 'text-red-500', textColor: 'text-red-900' },
  'inflammatoires': { icon: ShieldAlert, bg: 'bg-[#fff6ec]', iconBg: 'bg-orange-100', iconColor: 'text-orange-600', textColor: 'text-orange-900' },
  'degeneratives': { icon: Dna, bg: 'bg-[#f0edf9]', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', textColor: 'text-purple-900' },
  'peripheriques': { icon: Wind, bg: 'bg-[#ecf9f7]', iconBg: 'bg-teal-100', iconColor: 'text-teal-600', textColor: 'text-teal-900' },
  'congenitales': { icon: Sparkles, bg: 'bg-[#fdf0f7]', iconBg: 'bg-pink-100', iconColor: 'text-pink-600', textColor: 'text-pink-900' },
  'traumatismes': { icon: AlertTriangle, bg: 'bg-[#fef9eb]', iconBg: 'bg-amber-100', iconColor: 'text-amber-600', textColor: 'text-amber-900' },
  'autres': { icon: FileText, bg: 'bg-[#fcfcfc]', iconBg: 'bg-gray-100', iconColor: 'text-gray-600', textColor: 'text-gray-900' },
  'cat': { icon: ClipboardList, bg: 'bg-[#ecf5f0]', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', textColor: 'text-emerald-900' },
};

export const DEFAULT_CATEGORY_STYLE = { icon: Stethoscope, bg: 'bg-[#f0f7fb]', iconBg: 'bg-sky-100', iconColor: 'text-sky-600', textColor: 'text-sky-900' };
