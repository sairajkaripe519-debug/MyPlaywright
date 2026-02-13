

import {test,expect} from "@playwright/test";

import dotenv from "dotenv";

dotenv.config({path: `./tests/day10/.env`}); //setting up env 


console.log(process.env.BaseUrl);

console.log(process.env.LF_Username);

console.log(process.env.LF_Password);

