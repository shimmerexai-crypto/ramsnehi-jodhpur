// Web Speech synthesis utility for voice assistance in Hindi and English

let currentUtterance: SpeechSynthesisUtterance | null = null;

export const speakText = (text: string, lang: 'hi' | 'en' = 'hi', onEnd?: () => void) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
  utterance.rate = 0.95; // Slightly slower for clarity
  utterance.pitch = 1.0;

  // Attempt to select a native Hindi voice if available
  const voices = window.speechSynthesis.getVoices();
  if (lang === 'hi') {
    const hindiVoice = voices.find(v => v.lang.includes('hi') || v.name.toLowerCase().includes('hindi'));
    if (hindiVoice) {
      utterance.voice = hindiVoice;
    }
  } else {
    const englishIndianVoice = voices.find(v => v.lang.includes('en-IN') || v.lang.includes('en_IN'));
    if (englishIndianVoice) {
      utterance.voice = englishIndianVoice;
    }
  }

  utterance.onend = () => {
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  utterance.onerror = () => {
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
};

export const stopSpeech = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
};
