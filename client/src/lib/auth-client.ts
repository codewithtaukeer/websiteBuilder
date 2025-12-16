import { createAuthClient } from "better-auth/react";
import 'dotenv/config';
import process from "process";
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.VITE_BASEURL
})