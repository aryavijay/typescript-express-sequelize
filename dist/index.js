"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const configPath = `./env/${process.env.NODE_ENV}.env`;
dotenv_1.default.config({ path: configPath });
const responseHandler_1 = require("./middleware/responseHandler");
const apiRoutes_1 = require("./routes/apiRoutes");
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use("/api", apiRoutes_1.apiRoute);
// GET method route
app.get('/', (req, res, next) => {
    res.send('GET request to the homepage');
    // next()
});
//response sending middleware
app.use((req, res, next) => {
    (0, responseHandler_1.successHandler)(req, res, next);
});
//error handler middle ware
app.use((error, req, res, next) => {
    (0, responseHandler_1.errorHandler)(error, req, res, next);
});
app.use((req, res, next) => {
    console.log('middleware calledsss');
    next();
});
app.listen(port, () => {
    console.log(process.env.NODE_ENV);
    console.info(`[server]: Server is running at http://localhost:${port}`);
});
