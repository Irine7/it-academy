import { Request, Response, NextFunction } from 'express';

export const cacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
	res.header('Cache-Control', 'no-cache');
	next();
};


