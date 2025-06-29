import { env } from '@/config/env';
import { HttpResponse, http } from 'msw';

const handlers = [
  http.get(`${env.API_URL}/healthcheck`, async () => {
    // await networkDelay();
    return HttpResponse.json({ ok: true });
  }),
];

export default handlers;
