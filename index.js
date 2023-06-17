import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "morgan";
import morgan from "morgan";
import path from "path";

import { fileURLToPath } from "url";

/*Configurations*/

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

dotenv.config();
const app = express();

/*midlewar*/
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("assets", express.static(path.join(dirname, "public/assets")))