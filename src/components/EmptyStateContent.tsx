import { 
    IconAppleMeditate,
    IconArrowUpForwardBottomleadingRectangle,
    IconTypescriptLogo,
    IconBooksVertical,
  } from 'symbols-react';
  
  export function EmptyStateContent() {
    const features = [
      {
        title: "Tree Shaking",
        description: "Bundle what you need, not the entire library.",
        icon: <IconAppleMeditate className="w-5 h-5 fill-current text-blue-500" />
      },
      {
        title: "Scalable",
        description: "Crisp, scalable vector icons for every screen.",
        icon: <IconArrowUpForwardBottomleadingRectangle className="w-5 h-5 fill-current text-green-500" />
      },
      {
        title: "Fully Typed",
        description: "Fully typed for quick and easy development.",
        icon: <IconTypescriptLogo className="w-5 h-5 fill-current text-purple-500" />
      },
      {
        title: "6,000+ Symbols",
        description: "Logos, symbols, and so much more.",
        icon: <IconBooksVertical className="w-5 h-5 fill-current text-yellow-500" />
      },
    ];
  
    return (
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              {feature.icon}
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            </div>
            <p className="text-sm text-white/70 ml-8">{feature.description}</p>
          </div>
        ))}
      </div>
    );
  }