const addMessages = (messages) => {
    return {
        type: 'ADD_MESSAGES',
        payload: messages
    }
};

export {
    addMessages
};