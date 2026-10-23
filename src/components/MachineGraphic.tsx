import React from 'react';
import { Product } from '../types';

interface MachineGraphicProps {
  machineType: Product['machineType'];
  className?: string;
}

export const MachineGraphic: React.FC<MachineGraphicProps> = ({ machineType, className = "h-48 w-full" }) => {
  return (
    <div className={`relative flex items-center justify-center p-4 bg-gradient-to-b from-slate-100/80 to-slate-200/50 rounded-xl overflow-hidden ${className}`}>
      {machineType === 'pos-touch' && (
        <svg viewBox="0 0 320 220" className="w-full h-full max-h-52 drop-shadow-md select-none" fill="none">
          {/* Base Stand */}
          <ellipse cx="160" cy="200" rx="65" ry="12" fill="#334155" />
          <path d="M145 130 L175 130 L180 200 L140 200 Z" fill="#475569" />
          
          {/* Main 15.6" POS Monitor */}
          <rect x="50" y="30" width="220" height="135" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="3" />
          <rect x="58" y="38" width="204" height="119" rx="4" fill="#1e293b" />
          
          {/* POS Screen UI Graphic */}
          <rect x="62" y="42" width="20" height="111" rx="2" fill="#0f172a" />
          {/* Menu items */}
          <rect x="88" y="46" width="32" height="26" rx="3" fill="#2563eb" />
          <rect x="124" y="46" width="32" height="26" rx="3" fill="#059669" />
          <rect x="160" y="46" width="32" height="26" rx="3" fill="#d97706" />
          
          <rect x="88" y="78" width="32" height="26" rx="3" fill="#475569" />
          <rect x="124" y="78" width="32" height="26" rx="3" fill="#475569" />
          <rect x="160" y="78" width="32" height="26" rx="3" fill="#475569" />

          {/* POS Bill Preview on Screen */}
          <rect x="198" y="46" width="58" height="103" rx="2" fill="#f8fafc" />
          <line x1="204" y1="54" x2="250" y2="54" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <line x1="204" y1="62" x2="242" y2="62" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="204" y1="70" x2="245" y2="70" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="204" y1="78" x2="238" y2="78" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="204" y="132" width="46" height="12" rx="2" fill="#16a34a" />
          <text x="227" y="141" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">PRINT</text>

          {/* Thermal Receipt Paper coming out of top/side */}
          <path d="M245 42 L275 42 L272 15 L248 15 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="252" y1="20" x2="268" y2="20" stroke="#94a3b8" strokeWidth="1" />
          <line x1="252" y1="26" x2="268" y2="26" stroke="#94a3b8" strokeWidth="1" />
          <line x1="252" y1="32" x2="264" y2="32" stroke="#94a3b8" strokeWidth="1" />
          
          {/* Ramsnehi Badge on POS */}
          <rect x="135" y="152" width="50" height="8" rx="2" fill="#0f172a" />
          <text x="160" y="158" textAnchor="middle" fill="#f59e0b" fontSize="5" fontWeight="bold">RAMSNEHI POS</text>
        </svg>
      )}

      {machineType === 'band-sealer' && (
        <svg viewBox="0 0 320 220" className="w-full h-full max-h-52 drop-shadow-md select-none" fill="none">
          {/* Main Table Base */}
          <rect x="20" y="155" width="280" height="20" rx="4" fill="#475569" stroke="#334155" strokeWidth="2" />
          
          {/* Conveyor Belt System */}
          <rect x="25" y="140" width="270" height="18" rx="6" fill="#1e293b" />
          <circle cx="35" cy="149" r="6" fill="#64748b" />
          <circle cx="285" cy="149" r="6" fill="#64748b" />
          <line x1="42" y1="149" x2="278" y2="149" stroke="#475569" strokeWidth="1" strokeDasharray="6 4" />

          {/* Machine Upper Body - Stainless Steel */}
          <rect x="90" y="45" width="140" height="90" rx="6" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
          
          {/* Metallic Sheen */}
          <rect x="95" y="50" width="130" height="20" fill="#e2e8f0" />
          
          {/* Sealing Block / Heating Block */}
          <rect x="130" y="85" width="60" height="42" rx="4" fill="#3b82f6" />
          <rect x="138" y="93" width="44" height="12" fill="#ef4444" />
          <text x="160" y="102" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">HOT SEAL</text>

          {/* Embossing Date Coding Wheel */}
          <circle cx="160" cy="120" r="10" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
          <circle cx="160" cy="120" r="3" fill="#ffffff" />

          {/* Control Panel Dials & Temp Readout */}
          <rect x="100" y="55" width="45" height="24" rx="2" fill="#0f172a" />
          <text x="122" y="70" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="monospace" fontWeight="bold">210°C</text>
          
          <circle cx="160" cy="67" r="7" fill="#64748b" stroke="#334155" strokeWidth="1.5" />
          <line x1="160" y1="67" x2="164" y2="63" stroke="#ffffff" strokeWidth="1.5" />

          <circle cx="185" cy="67" r="7" fill="#16a34a" />
          <circle cx="210" cy="67" r="7" fill="#dc2626" />

          {/* Food Pouch being sealed */}
          <polygon points="50,110 80,110 85,142 45,142" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
          <text x="65" y="130" textAnchor="middle" fill="#78350f" fontSize="7" fontWeight="bold">NAMKEEN</text>
        </svg>
      )}

      {machineType === 'cash-counter' && (
        <svg viewBox="0 0 320 220" className="w-full h-full max-h-52 drop-shadow-md select-none" fill="none">
          {/* Counter Body */}
          <rect x="50" y="50" width="220" height="140" rx="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
          
          {/* Top Hopper */}
          <path d="M70 50 L110 15 L210 15 L250 50 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
          
          {/* Stack of Rupee Notes in Hopper */}
          <rect x="120" y="22" width="80" height="10" rx="2" fill="#10b981" transform="rotate(-3 120 22)" />
          <rect x="122" y="26" width="80" height="10" rx="2" fill="#059669" transform="rotate(2 122 26)" />
          <rect x="121" y="30" width="80" height="10" rx="2" fill="#047857" />

          {/* Main Digital LCD Display */}
          <rect x="75" y="65" width="170" height="55" rx="6" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
          
          {/* LCD Readout Numbers */}
          <text x="95" y="105" fill="#22c55e" fontSize="32" fontFamily="monospace" fontWeight="bold">100</text>
          <text x="160" y="85" fill="#94a3b8" fontSize="10">BATCH: 100</text>
          <text x="160" y="102" fill="#38bdf8" fontSize="14" fontWeight="bold">₹ 50,000</text>
          
          {/* UV / MG Fake Note Status Light */}
          <circle cx="230" cy="80" r="5" fill="#22c55e" />
          <text x="230" y="93" textAnchor="middle" fill="#94a3b8" fontSize="6">UV/MG OK</text>

          {/* Output Stacker Pocket */}
          <rect x="80" y="130" width="160" height="45" rx="4" fill="#334155" />
          <circle cx="160" cy="152" r="14" fill="#1e293b" />
          <rect x="95" y="145" width="130" height="18" rx="2" fill="#059669" opacity="0.9" />
          
          {/* Keypad Buttons */}
          <circle cx="70" cy="150" r="4" fill="#2563eb" />
          <circle cx="70" cy="162" r="4" fill="#d97706" />
          <circle cx="250" cy="150" r="4" fill="#16a34a" />
          <circle cx="250" cy="162" r="4" fill="#dc2626" />
        </svg>
      )}

      {machineType === 'weighing-platform' && (
        <svg viewBox="0 0 320 220" className="w-full h-full max-h-52 drop-shadow-md select-none" fill="none">
          {/* Heavy Checkered Base Platform */}
          <rect x="30" y="145" width="220" height="45" rx="4" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          <line x1="30" y1="155" x2="250" y2="155" stroke="#475569" strokeWidth="2" />
          
          {/* Checkered Texture Hatch */}
          <line x1="50" y1="145" x2="65" y2="155" stroke="#64748b" strokeWidth="1" />
          <line x1="80" y1="145" x2="95" y2="155" stroke="#64748b" strokeWidth="1" />
          <line x1="110" y1="145" x2="125" y2="155" stroke="#64748b" strokeWidth="1" />
          <line x1="140" y1="145" x2="155" y2="155" stroke="#64748b" strokeWidth="1" />
          <line x1="170" y1="145" x2="185" y2="155" stroke="#64748b" strokeWidth="1" />
          <line x1="200" y1="145" x2="215" y2="155" stroke="#64748b" strokeWidth="1" />
          
          {/* Platform Legs */}
          <rect x="40" y="190" width="20" height="12" rx="2" fill="#0f172a" />
          <rect x="220" y="190" width="20" height="12" rx="2" fill="#0f172a" />

          {/* Vertical Heavy Duty Pillar/Pole */}
          <rect x="225" y="35" width="18" height="115" rx="2" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
          
          {/* Top Indicator Housing with Red LED Display */}
          <rect x="175" y="20" width="115" height="50" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="3" />
          <rect x="185" y="27" width="95" height="30" rx="3" fill="#450a0a" />
          <text x="232" y="49" textAnchor="middle" fill="#ef4444" fontSize="18" fontFamily="monospace" fontWeight="bold">300.00 kg</text>
          
          {/* Rajasthan Govt Stamping Seal Badge */}
          <circle cx="198" cy="62" r="4" fill="#f59e0b" />
          <text x="235" y="65" textAnchor="middle" fill="#94a3b8" fontSize="6">W&M DEPT STAMPED</text>

          {/* Sacks on Platform */}
          <rect x="60" y="90" width="100" height="55" rx="8" fill="#d97706" stroke="#b45309" strokeWidth="2" />
          <text x="110" y="122" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">GRAIN SACK</text>
        </svg>
      )}

      {machineType === 'batch-coder' && (
        <svg viewBox="0 0 320 220" className="w-full h-full max-h-52 drop-shadow-md select-none" fill="none">
          {/* Ergonomic Gun Grip Body */}
          <path d="M120 70 L230 70 L230 130 L180 135 L170 195 L130 195 L145 135 L120 130 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="3" rx="4" />
          
          {/* Rubberized Grip Stripes */}
          <line x1="142" y1="150" x2="162" y2="150" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          <line x1="140" y1="162" x2="160" y2="162" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          <line x1="138" y1="174" x2="158" y2="174" stroke="#475569" strokeWidth="3" strokeLinecap="round" />

          {/* 4.3 Inch Touch Screen */}
          <rect x="135" y="80" width="85" height="45" rx="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
          <text x="177" y="95" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="monospace">MRP ₹150.00</text>
          <text x="177" y="106" textAnchor="middle" fill="#22c55e" fontSize="7" fontFamily="monospace">MFG 10/26 EXP 10/27</text>
          <text x="177" y="117" textAnchor="middle" fill="#fbbf24" fontSize="6" fontFamily="monospace">B.NO. RAM-904</text>

          {/* Inkjet Nozzle Head & Rollers */}
          <rect x="230" y="85" width="25" height="35" rx="3" fill="#f59e0b" />
          <circle cx="230" cy="80" r="7" fill="#475569" stroke="#334155" strokeWidth="2" />
          <circle cx="230" cy="125" r="7" fill="#475569" stroke="#334155" strokeWidth="2" />

          {/* Trigger Button */}
          <path d="M175 140 Q185 145 178 155" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Printed Output Preview */}
          <rect x="25" y="140" width="90" height="40" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="70" y="155" textAnchor="middle" fill="#000000" fontSize="7" fontFamily="monospace" fontWeight="bold">MRP ₹150.00</text>
          <text x="70" y="165" textAnchor="middle" fill="#000000" fontSize="6" fontFamily="monospace">EXP 10/2027</text>
        </svg>
      )}

      {machineType === 'weighing-tabletop' && (
        <svg viewBox="0 0 320 220" className="w-full h-full max-h-52 drop-shadow-md select-none" fill="none">
          {/* Main Tabletop Machine Body */}
          <rect x="60" y="100" width="200" height="75" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          
          {/* Stainless Steel Pan */}
          <rect x="45" y="70" width="230" height="30" rx="6" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
          <rect x="50" y="73" width="220" height="8" fill="#e2e8f0" />
          
          {/* Front Dual Red LED Display */}
          <rect x="90" y="115" width="140" height="40" rx="6" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
          <rect x="98" y="122" width="124" height="26" rx="2" fill="#450a0a" />
          <text x="160" y="141" textAnchor="middle" fill="#ef4444" fontSize="18" fontFamily="monospace" fontWeight="bold">15.000 kg</text>
          
          {/* Feet */}
          <rect x="70" y="175" width="25" height="8" rx="2" fill="#334155" />
          <rect x="225" y="175" width="25" height="8" rx="2" fill="#334155" />

          {/* Level Bubble */}
          <circle cx="75" cy="115" r="5" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
          <circle cx="75" cy="115" r="1.5" fill="#047857" />
        </svg>
      )}

      {machineType === 'pedal-sealer' && (
        <svg viewBox="0 0 320 220" className="w-full h-full max-h-52 drop-shadow-md select-none" fill="none">
          {/* Vertical Cast Iron Stand */}
          <rect x="152" y="30" width="16" height="155" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          
          {/* Heavy Cast Iron Floor Base */}
          <ellipse cx="160" cy="195" rx="60" ry="12" fill="#1e293b" />

          {/* Foot Pedal */}
          <polygon points="160,185 100,195 100,188 160,178" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
          <line x1="160" y1="180" x2="160" y2="75" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 3" />

          {/* Top Sealing Jaws (24 Inch) */}
          <rect x="60" y="50" width="200" height="24" rx="4" fill="#475569" stroke="#1e293b" strokeWidth="2" />
          <rect x="70" y="58" width="180" height="6" fill="#ef4444" />
          
          {/* Working Tray */}
          <rect x="90" y="85" width="140" height="14" rx="2" fill="#64748b" />
          <text x="160" y="95" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">HEAVY BAG SUPPORT TRAY</text>
        </svg>
      )}

      {machineType === 'weighing-jewel' && (
        <svg viewBox="0 0 320 220" className="w-full h-full max-h-52 drop-shadow-md select-none" fill="none">
          {/* Scale Body */}
          <rect x="70" y="110" width="180" height="60" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          
          {/* Acrylic Glass Draft Shield */}
          <rect x="90" y="35" width="140" height="75" rx="4" fill="#e0f2fe" opacity="0.6" stroke="#38bdf8" strokeWidth="1.5" />
          
          {/* Gold Pan */}
          <ellipse cx="160" cy="95" rx="35" ry="10" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
          {/* Gold piece */}
          <circle cx="158" cy="93" r="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />

          {/* Blue Backlight LCD Display */}
          <rect x="105" y="125" width="110" height="30" rx="4" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
          <text x="160" y="146" textAnchor="middle" fill="#ffffff" fontSize="16" fontFamily="monospace" fontWeight="bold">10.450 g</text>
        </svg>
      )}

      {machineType === 'pos-handheld' && (
        <svg viewBox="0 0 320 220" className="w-full h-full max-h-52 drop-shadow-md select-none" fill="none">
          {/* Handheld Body */}
          <rect x="105" y="20" width="110" height="180" rx="16" fill="#0f172a" stroke="#334155" strokeWidth="3" />
          
          {/* Upper Thermal Printer Bay */}
          <rect x="115" y="28" width="90" height="35" rx="6" fill="#1e293b" />
          <path d="M125 35 L195 35 L192 10 L128 10 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="135" y1="18" x2="185" y2="18" stroke="#94a3b8" strokeWidth="1" />
          
          {/* 5.5 Inch Touch Screen */}
          <rect x="115" y="70" width="90" height="110" rx="4" fill="#1e293b" />
          <rect x="122" y="78" width="76" height="20" rx="3" fill="#2563eb" />
          <text x="160" y="91" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">FAST BILL: ₹350</text>
          
          <rect x="122" y="105" width="35" height="30" rx="2" fill="#334155" />
          <rect x="163" y="105" width="35" height="30" rx="2" fill="#334155" />
          <rect x="122" y="142" width="76" height="26" rx="4" fill="#16a34a" />
          <text x="160" y="158" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">COLLECT UPI</text>
        </svg>
      )}
    </div>
  );
};
