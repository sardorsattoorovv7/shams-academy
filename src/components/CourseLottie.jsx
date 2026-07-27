import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// Har bir kurs uchun Lottie URL'lari
const LOTTIE_URLS = {
  dasturlash: 'https://lottie.host/0e6958a2-0361-4e2a-bbf0-9d110bcb8b4f/b0aT6dp7IM.json',
  ingliz: 'https://lottie.host/3d949170-a198-4729-ab04-94a1ef424411/9Ogz0CmGYa.json',
  matematika: 'https://lottie.host/1580cc31-1162-451f-b124-0404f650c202/2CFI6FqLlG.json',
  robototexnika: 'https://lottie.host/1e56aee5-c6ce-4a6c-93ed-b64d0e33a55b/cVUC1PAozk.json',
  'mental-arifmetika': 'https://lottie.host/95382a55-558d-42fc-adba-fcd9dfb42d55/9JmxWnrn0S.json',
};

const CourseLottie = ({ courseKey }) => {
  const lottieUrl = LOTTIE_URLS[courseKey];

  if (!lottieUrl) return null;

  return (
    <div className="w-full h-auto flex items-center justify-center">
      <DotLottieReact
        src={lottieUrl}
        loop
        autoplay
        className="w-full max-w-[400px] h-auto"
      />
    </div>
  );
};

export default CourseLottie;