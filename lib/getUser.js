import { getServerSession } from "next-auth";
import { authOptions } from "@/auth"; // Adjust path if needed

export async function getUser() {
  const session = await getServerSession(authOptions);
  return session?.user || null;
}