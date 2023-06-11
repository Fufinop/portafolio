// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	name: string;
};

/**
 * This is a TypeScript function that exports a handler for a Next.js API route that responds with a
 * JSON object containing the name "John Doe".
 * @param {NextApiRequest} req - The `req` parameter is an object that represents the incoming HTTP
 * request in a Next.js API route. It contains information such as the request method, headers, query
 * parameters, and request body. It is of type `NextApiRequest`, which is a custom type defined by
 * Next.js.
 * @param res - `res` stands for response and it is an object of type `NextApiResponse<Data>`. It is
 * used to send the response back to the client. In this code snippet, it is used to send a JSON object
 * with the name "John Doe" and a status code of 200 indicating that
 */
export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	res.status(200).json({ name: 'John Doe' });
}
