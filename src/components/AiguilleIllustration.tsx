import React from 'react';

export function AiguilleIllustration() {
  return (
    <div className="my-10 flex flex-col lg:flex-row gap-6 justify-center items-stretch not-prose">
      {/* CSS Anatomical Illustration */}
      <div className="flex-1 relative w-full max-w-md rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white flex flex-col">
        <div className="text-center font-semibold py-3 bg-slate-100 border-b border-slate-200 text-slate-700 shrink-0">
          Trajet anatomique de l'aiguille
        </div>
        <div className="relative flex flex-col p-4 pr-10 pb-12 bg-slate-50 overflow-hidden isolate flex-1">
          
          <div className="absolute top-0 right-[15%] w-[4px] h-[83%] bg-slate-300 z-30 rounded-full shadow-sm flex flex-col items-center">
            <div className="w-[12px] h-[30px] bg-sky-500 rounded-t-sm -mt-6 z-30 shadow-sm border border-sky-600"></div>
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-slate-400 absolute bottom-[-10px]"></div>
          </div>
          
          <div className="flex flex-col gap-2 relative z-10 font-sans h-full justify-between">
            <div className="flex items-center group">
              <div className="w-full flex justify-between pr-4 relative">
                 <div className="h-8 w-full bg-[#fcdbb6] border-t border-b border-[#f0c294] rounded-sm flex items-center px-3 relative z-10 box-border">
                    <span className="font-semibold text-orange-950 text-sm m-0">Peau</span>
                 </div>
              </div>
            </div>
            
            <div className="flex items-center group shadow-sm z-20">
              <div className="w-full flex justify-between pr-4 relative">
                 <div className="h-10 w-full bg-[#fae8c3] border-b border-[#ebd3a2] rounded-sm flex items-center px-3 relative z-10 box-border">
                    <span className="font-semibold text-yellow-900 text-sm m-0">Sous-cutané</span>
                 </div>
              </div>
            </div>
            
            <div className="flex flex-col flex-1 pl-[10%] pr-4 relative mt-1 gap-1">
                <div className="ml-2 z-20 flex flex-col gap-1 w-full relative h-full justify-around">
                    <div className="flex items-center group">
                      <div className="w-full flex justify-between relative pl-2">
                         <div className="h-6 w-full bg-slate-100 border-t border-b border-slate-300 rounded-sm flex items-center px-3 relative z-10 box-border">
                            <span className="font-semibold text-slate-700 text-xs sm:text-sm m-0 truncate">Ligament sur-épineux</span>
                         </div>
                      </div>
                    </div>
            
                    <div className="flex items-center group">
                      <div className="w-full flex justify-between relative pl-2">
                         <div className="h-10 w-full bg-slate-50 border-b border-slate-200 rounded-sm flex items-center px-3 relative z-10 box-border">
                            <span className="font-semibold text-slate-500 text-xs sm:text-sm m-0 truncate">Ligament inter-épineux</span>
                         </div>
                      </div>
                    </div>
            
                    <div className="flex items-center group relative">
                      <div className="w-full flex justify-between relative z-10 pl-2">
                         <div className="h-12 w-full bg-yellow-400 border-t-2 border-b-2 border-yellow-500 rounded-sm flex items-center px-3 shadow-[0_0_15px_rgba(250,204,21,0.5)] z-10 box-border">
                            <span className="font-bold text-yellow-900 text-xs sm:text-sm flex flex-wrap items-center gap-1 m-0 leading-tight">
                               LIGAMENT JAUNE 
                               <span className="text-[9px] sm:text-[10px] font-medium bg-yellow-800 text-yellow-100 px-1.5 py-0.5 rounded-full ml-auto m-0">
                                 Perte de résistance
                               </span>
                            </span>
                         </div>
                      </div>
                    </div>
            
                    <div className="flex items-center group">
                      <div className="w-full flex justify-between relative pl-2">
                         <div className="h-8 w-full bg-slate-200 border-b border-slate-300 border-dashed rounded-sm flex items-center px-3 relative z-10 box-border">
                            <span className="font-semibold text-slate-700 text-sm m-0">Espace Épidural</span>
                         </div>
                      </div>
                    </div>
            
                    <div className="flex items-center group relative">
                      <div className="absolute right-[-2.5rem] top-1 text-red-500 font-black italic transform rotate-12 text-lg drop-shadow-sm z-40">POP!</div>
                      <div className="w-full flex justify-between relative z-10 pl-2">
                         <div className="h-3 w-full bg-white border-y-2 border-slate-400 rounded-sm flex items-center px-3 relative z-10 shadow-sm box-border">
                            <span className="font-bold text-slate-800 text-[10px] tracking-widest uppercase m-0 leading-none pb-[1px]">Dure-Mère</span>
                         </div>
                      </div>
                    </div>
                </div>
            </div>
    
            <div className="flex items-center group mt-1">
              <div className="w-full flex justify-between pr-4 relative">
                 <div className="h-20 w-full bg-blue-100 border-b-4 border-blue-200 border-l border-blue-300 rounded-b-xl flex flex-col justify-center px-3 relative z-10 overflow-hidden box-border">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-transparent to-transparent animate-pulse"></div>
                    <span className="font-bold text-blue-800 text-sm z-10 m-0 relative">Espace Sous-Arachnoïdien</span>
                    <span className="font-medium text-blue-600 text-xs mt-0.5 z-10 opacity-90 m-0 relative">(Le LCS coule goutte à goutte)</span>
                 </div>
              </div>
            </div>
    
          </div>
        </div>
      </div>

      {/* Provided Reference Image */}
      <div className="flex-1 relative w-full max-w-md rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white flex flex-col group">
        <div className="text-center font-semibold py-3 bg-slate-100 border-b border-slate-200 text-slate-700 shrink-0">
          Illustration de référence
        </div>
        <div className="flex-1 p-2 bg-slate-50 flex flex-col items-center justify-center relative">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lxhHqisPpPq7-zhywwqrFDBf9VYaCATR_w&s" 
            alt="Ponction Lombaire (Image de référence)"
            className="w-full h-full max-h-[400px] object-contain rounded-lg shadow-sm border border-slate-200 transition-all bg-white"
          />
        </div>
      </div>
    </div>
  );
}
