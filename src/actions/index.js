export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = (guess) => ({
    type: ADD_GUESS,
    guess
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    correctAnswer: Math.floor(Math.random() * 100) + 1
});
