const apiBase = 'http://127.0.0.1:8000';

export const messagesRequest = () => {
    return {
        url: `${apiBase}/api/messages`,
        transform: body => ({
            messages: body,
        }),
        update: {
            messages: (prev, next) => {
                return next
            },
        },
    };
};
  
export const changeMessagesMutation = (messages, text, optimistic) => {
    const queryConfig = {
        url: `${apiBase}/api/messages`,
        body: {
            text,
        },
        update: {
            messages: (prev, next) => next,
        },
    };

    if (optimistic) {
        queryConfig.optimisticUpdate = {
            messages: () => messages,
        };
    }

    return queryConfig;
};