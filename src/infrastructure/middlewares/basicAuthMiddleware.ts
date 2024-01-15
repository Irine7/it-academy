import basicAuth from 'express-basic-auth';

export const basicAuthMiddleware = basicAuth({
	users: { irina: 'qwerty' },
	unauthorizedResponse: 'unauthorized',
});
