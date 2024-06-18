"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const rateLimiter_1 = __importDefault(require("./middlewares/rateLimiter"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(rateLimiter_1.default);
app.use("/api", authRoutes_1.default);
app.use("/api", taskRoutes_1.default);
app.use(errorHandler_1.default);
exports.default = app;