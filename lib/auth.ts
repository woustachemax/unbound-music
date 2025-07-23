import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "../lib/generated/prisma";
 
const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
        
    }),   
    
     socialProviders: {
        spotify: {
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
            scope: ["playlist-read-private" , "playlist-modify-public"] 
        }
    }


});