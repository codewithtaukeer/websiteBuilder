import "dotenv/config";
import { PrismaClient } from '@prisma/client';

// Prisma automatically reads DATABASE_URL from your .env file
const prisma = new PrismaClient();

export default prisma;
