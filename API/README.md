## API server

- Install deps: `npm install`
- Run in watch mode: `npm run dev`
- Production build: `npm run build` then `npm start`

The server listens on `PORT` (defaults to `5000`) and exposes the auth endpoints defined in `src/server.ts`. Hit `GET /` to see a JSON directory of the available routes.

- Sample curl requests live in `postman.txt`.
