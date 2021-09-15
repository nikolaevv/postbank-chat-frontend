const artificialDelayDuration = 1000;

// Fake database to record the name
const memoryDb = {
  name: 'jhalpert78',
};

const mockNetworkInterface = (url, method, { body }) => {
  let timeoutId = null;

  return {
    abort() {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    },
    execute(callback) {
      if (url.match(/^\/api\/messages/)) {
        // Endpoint for getting the current name

        if (method.toUpperCase() === 'GET') {
          timeoutId = setTimeout(() => {
            callback(null, 200, {
              name: memoryDb.name,
            });
          }, artificialDelayDuration);
        } else {
          callback(null, 405);
        }
      } else if (url.match(/^\/api\/change-name/)) {
        // Endpoint for changing the name

        if (method !== 'POST') {
          callback(null, 405);
          return;
        }

        if (!body.name) {
          timeoutId = setTimeout(() => {
            callback(null, 400, null, 'Username cannot be empty');
          }, artificialDelayDuration);
          return;
        }

        if (body.name.trim() !== body.name || !body.name.match(/^[a-zA-Z0-9]+$/)) {
          timeoutId = setTimeout(() => {
            callback(
              null,
              400,
              null,
              'A valid username must only contain alphanumerics with no leading or trailing spaces',
            );
          }, artificialDelayDuration);
          return;
        }

        memoryDb.name = body.name;

        timeoutId = setTimeout(() => {
          const responseBody = {
            name: memoryDb.name,
          };
          callback(null, 200, responseBody, JSON.stringify(responseBody));
        }, artificialDelayDuration);
      } else {
        callback(null, 404);
      }
    },
  };
};

export default mockNetworkInterface;