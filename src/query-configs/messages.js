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
  
export const sendMessage = (messages, text, sender, optimistic) => {
    const queryConfig = {
        url: `${apiBase}/api/messages`,
        body: {
            text,
            sender
        },
        transform: body => ({
            messages: body,
        }),
        update: {
            messages: (prev, next) => {
                return next;
            },
        },
        options: {
            method: 'POST'
        }
    };

    if (optimistic) {
        queryConfig.optimisticUpdate = {
            messages: () => messages,
        };
    }

    return queryConfig;
};