import type { Http2ServerRequest, Http2ServerResponse } from "http2";
import { createServer } from "http2";

const host = "localhost";
const port = 8000;
const requestListener = function (req: Http2ServerRequest, res: Http2ServerResponse) {
    res.writeHead(200);
    res.end("My first server!");
};

const server = createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
