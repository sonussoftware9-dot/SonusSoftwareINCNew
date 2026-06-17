const clients = [
  'TechCorp Global', 'HealthBridge Inc.', 'FinVault Solutions', 'RetailMax',
  'LogiFlow Express', 'ManufactX Corp', 'EduReach Platform', 'SecureNet',
  'DataPulse Analytics', 'CloudFirst Systems', 'NovaBuild Group', 'AeroTech Ltd',
  'GreenEnergy Co.', 'MediSys Health', 'UrbanCommerce', 'PrimeLend Financial',
];

export default function ClientTicker() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
          Trusted by 200+ companies worldwide
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="ticker-track">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-3 mx-8 flex-shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-navy-200" />
              <span className="text-navy-400 font-bold text-sm tracking-wide whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
