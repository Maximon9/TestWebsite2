import { createServer } from "http2";
const host = "localhost";
const port = 8000;
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};
const server = createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
//# sourceMappingURL=index.js.map