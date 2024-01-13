import basicAuth from 'express-basic-auth';

export const basicAuthMiddleware = basicAuth({
	users: { user: 'qwerty' },
	unauthorizedResponse: 'unauthorized',
});
