import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

app.use('*', cors());

app.get('/', (c) => c.json({ status: 'ok', mode: 'local' }));

app.get('/health', (c) => c.json({ status: 'healthy' }));

export default app;