export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
  type: RESET_GAME
});

export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = guess => ({
  type: SUBMIT_GUESS,
  guess
});

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => ({
  type: GENERATE_AURAL_UPDATE
});