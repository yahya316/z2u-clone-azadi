import React from 'react';

export default function PaymentMethods() {
  return (
    <div className="w-full max-w-8xl mx-auto bg-[#f4f5f7] py-6 px-4 border-t border-gray-300">
      <div className="flex flex-wrap justify-center items-center gap-8 max-w-8xl mx-auto">
        <img className="max-h-5 object-contain" src="/l-1.png" alt="GCash" />
        <img className="max-h-5 object-contain" src="/l-2.png" alt="Google Pay" />
        <img className="max-h-5 object-contain" src="/l-3.png" alt="Apple Pay" />
        <img className="max-h-5 object-contain" src="/l-4.png" alt="Pix" />
        <img className="max-h-5 object-contain" src="/l-5.png" alt="Visa & Mastercard" />
        <img className="max-h-5 object-contain" src="/l-6.png" alt="dotpay & BLIK" />
        <img className="max-h-5 object-contain" src="/l-7.png" alt="Klarna & SOFORT" />
        <img className="max-h-5 object-contain" src="/l-8.png" alt="iDEAL" />
        <img className="max-h-5 object-contain" src="/l-9.png" alt="Neteller" />
      </div>
    </div>
  );
}
