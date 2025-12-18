import { Request } from "express";

declare global{s
    namespace Express{
        interface Request{
            userId?:string
        }
    }
}