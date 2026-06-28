const fs = require('fs');

let code = fs.readFileSync('src/data/bases.ts', 'utf8');

const replacement = `### 📊 Illustration du Trajet de l'Aiguille

<div className="my-8 flex justify-center not-prose">
  <div className="relative w-full max-w-lg rounded-xl overflow-hidden shadow-sm border border-slate-200">
    <div className="relative flex flex-col p-6 pr-12 pb-16 bg-slate-50 overflow-hidden isolate">
      {/* Aiguille (Arrow) */}
      <div className="absolute top-0 right-[20%] w-[4px] h-[83%] bg-slate-300 z-30 rounded-full shadow-sm flex flex-col items-center">
        <div className="w-[12px] h-[30px] bg-sky-500 rounded-t-sm -mt-6 z-30 shadow-sm border border-sky-600"></div>
        <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-slate-400 absolute bottom-[-10px]"></div>
      </div>
      
      {/* Les couches anatomiques superposées */}
      <div className="flex flex-col gap-2 relative z-10 font-sans">
        <div className="flex items-center group">
          <div className="w-full flex justify-between pr-4 relative">
             <div className="h-8 w-full bg-[#fcdbb6] border-t border-b border-[#f0c294] rounded-sm flex items-center px-4 relative z-10 box-border">
                <span className="font-semibold text-orange-950 text-sm m-0">Peau</span>
             </div>
          </div>
        </div>
        
        <div className="flex items-center group shadow-sm z-20">
          <div className="w-full flex justify-between pr-4 relative">
             <div className="h-10 w-full bg-[#fae8c3] border-b border-[#ebd3a2] rounded-sm flex items-center px-4 relative z-10 box-border">
                <span className="font-semibold text-yellow-900 text-sm m-0">Sous-cutané</span>
             </div>
          </div>
        </div>
        
        <div className="flex flex-col flex-1 pl-[15%] pr-4 relative mt-1">
            <div className="ml-2 z-20 flex flex-col gap-1 w-full relative">
                <div className="flex items-center group">
                  <div className="w-full flex justify-between relative pl-2">
                     <div className="h-6 w-full bg-slate-100 border-t border-b border-slate-300 rounded-sm flex items-center px-4 relative z-10 box-border">
                        <span className="font-semibold text-slate-700 text-sm m-0">Ligament sur-épineux</span>
                     </div>
                  </div>
                </div>
        
                <div className="flex items-center group">
                  <div className="w-full flex justify-between relative pl-2">
                     <div className="h-10 w-full bg-slate-50 border-b border-slate-200 rounded-sm flex items-center px-4 relative z-10 box-border">
                        <span className="font-semibold text-slate-500 text-sm m-0">Ligament inter-épineux</span>
                     </div>
                  </div>
                </div>
        
                <div className="flex items-center group mt-1 mb-1 relative">
                  <div className="w-full flex justify-between relative z-10 pl-2">
                     <div className="h-10 w-full bg-yellow-400 border-t-2 border-b-2 border-yellow-500 rounded-sm flex items-center px-4 shadow-[0_0_15px_rgba(250,204,21,0.5)] z-10 box-border">
                        <span className="font-bold text-yellow-900 text-sm flex flex-wrap items-center gap-2 m-0 leading-tight">
                           LIGAMENT JAUNE 
                           <span className="text-[10px] font-medium bg-yellow-800 text-yellow-100 px-2 py-0.5 rounded-full ml-auto m-0">
                             Perte de résistance
                           </span>
                        </span>
                     </div>
                  </div>
                </div>
        
                <div className="flex items-center group">
                  <div className="w-full flex justify-between relative pl-2">
                     <div className="h-8 w-full bg-slate-200 border-b border-slate-300 border-dashed rounded-sm flex items-center px-4 relative z-10 box-border">
                        <span className="font-semibold text-slate-700 text-sm m-0">Espace Épidural</span>
                     </div>
                  </div>
                </div>
        
                <div className="flex items-center group relative">
                  <div className="absolute right-[-2.5rem] top-1 text-red-500 font-black italic transform rotate-12 text-lg drop-shadow-sm z-40">POP!</div>
                  <div className="w-full flex justify-between relative z-10 pl-2">
                     <div className="h-3 w-full bg-white border-y-2 border-slate-400 rounded-sm flex items-center px-4 relative z-10 shadow-sm box-border">
                        <span className="font-bold text-slate-800 text-[10px] tracking-widest uppercase m-0 leading-none pb-[1px]">Dure-Mère</span>
                     </div>
                  </div>
                </div>
            </div>
        </div>

        <div className="flex items-center group mt-1">
          <div className="w-full flex justify-between pr-4 relative">
             <div className="h-20 w-full bg-blue-100 border-b-4 border-blue-200 border-l border-blue-300 rounded-b-xl flex flex-col justify-center px-4 relative z-10 overflow-hidden box-border">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-transparent to-transparent animate-pulse"></div>
                <span className="font-bold text-blue-800 text-sm z-10 m-0 relative">Espace Sous-Arachnoïdien</span>
                <span className="font-medium text-blue-600 text-xs mt-0.5 z-10 opacity-90 m-0 relative">(Le LCS coule goutte à goutte)</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>`;

const targetStart = "### 📊 L'Organigramme du Trajet de l'Aiguille";
const targetEnd = "\\`\\`\\`"; // Because it's escaped in bases.ts: \`\`\`

const startIdx = code.indexOf(targetStart);
if (startIdx !== -1) {
  let endIdx = code.indexOf(targetEnd, startIdx + targetStart.length);
  if (endIdx !== -1) {
      endIdx = code.indexOf("`", endIdx); // Find the last backtick of the group
      code = code.substring(0, startIdx) + replacement + code.substring(endIdx + 4);
      fs.writeFileSync('src/data/bases.ts', code);
      console.log("Replaced successfully!");
  } else {
      console.log("End not found");
  }
} else {
  console.log("Start not found");
}
