import { createServer } from 'http';
import 'dotenv/config';

import { requestListener } from './utils/requestListener';

const port = process.env.PORT;

const main = () => {
  const server = createServer(requestListener);

  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

main();
