import { Disease } from '../types';
import ReactMarkdown from 'react-markdown';
import { BookOpen } from 'lucide-react';
import remarkGfm from 'remark-gfm';
import React from 'react';
import { AiguilleIllustration } from './AiguilleIllustration';
import { LocalisationOrganigramme } from './LocalisationOrganigramme';

type Props = {
  disease: Disease;
}

export function BasesViewer({ disease }: Props) {
  const renderContent = () => {
    if (!disease.content) {
      return <p className="text-slate-500 italic text-center py-10">Contenu en cours de rédaction...</p>;
    }

    let rawContent = disease.content;
    
    // Auto-migrate legacy textual organigram pattern for users who have old Firestore cache
    const legacyPattern = /### 📊 L'Organigramme du Trajet de l'Aiguille[\s\S]*?(?:Espace Sous-Arachnoïdien.*?goutte\)|Espace Sous-Arachnoïdien.*?goutte à goutte\))[ \t]*(?:\`\`\`\s*\n|\`\`\`|$)/gi;
    
    if (legacyPattern.test(rawContent)) {
      rawContent = rawContent.replace(legacyPattern, "### 📊 Illustration du Trajet de l'Aiguille\n\n{{AIGUILLE_ILLUSTRATION}}\n");
    }

    // Auto-migrate legacy topographic localization organigram pattern for users who have old Firestore cache
    const localizationPattern = /### 📊 Organigramme de Localisation[\s\S]*?Atteinte PÉRIPHÉRIQUE diffuse[\s\S]*?\`\`\`/gi;
    if (localizationPattern.test(rawContent)) {
      rawContent = rawContent.replace(localizationPattern, "{{LOCALISATION_ORGANIGRAMME}}");
    }

    // Process parts by splitting on both placeholder types successively
    const partsWithAiguille = rawContent.split('{{AIGUILLE_ILLUSTRATION}}');
    
    return partsWithAiguille.flatMap((part1, p1Idx) => {
      const subParts = part1.split('{{LOCALISATION_ORGANIGRAMME}}');
      
      const elements = subParts.flatMap((part2, p2Idx) => {
        const item = (
          <ReactMarkdown key={`md-${p1Idx}-${p2Idx}`} remarkPlugins={[remarkGfm]}>
            {part2}
          </ReactMarkdown>
        );
        
        if (p2Idx < subParts.length - 1) {
          return [item, <LocalisationOrganigramme key={`loc-organigram-${p1Idx}-${p2Idx}`} />];
        }
        return [item];
      });

      if (p1Idx < partsWithAiguille.length - 1) {
        return [...elements, <AiguilleIllustration key={`aig-illustration-${p1Idx}`} />];
      }
      return elements;
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-10 border-b border-slate-200 pb-6 text-center">
         <div className="inline-flex items-center justify-center space-x-2 text-sm font-bold text-indigo-600 mb-4 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 uppercase tracking-widest">
           <BookOpen className="w-5 h-5 mr-1" /> Fiche de Révision
         </div>
         <h1 className="text-2xl sm:text-3xl font-medium tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
           {disease.name}
         </h1>
      </div>

      <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-h2:text-indigo-900 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-2 prose-h3:text-slate-800 prose-strong:text-indigo-950 prose-a:text-indigo-600 prose-img:rounded-xl prose-img:shadow-sm">
        {renderContent()}
      </div>
    </div>
  );
}

