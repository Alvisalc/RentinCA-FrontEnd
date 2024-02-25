// utils/clerkBackend.js
import { Clerk } from "@clerk/clerk-sdk-node";

const clerk = Clerk({ apiKey: process.env.CLERK_SECRET_KEY });

export default clerk;
