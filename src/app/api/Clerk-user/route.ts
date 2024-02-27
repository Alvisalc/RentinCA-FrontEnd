import { useSession } from '@clerk/nextjs';

export const useClerkJWT = () => {
  const { session } = useSession();
  
  const fetchClerkJWT = async () => {
    // Depending on Clerk's API, adjust how you obtain the JWT
    // This is a placeholder; refer to Clerk's documentation for the exact method
    const token = session?.getToken();
    return token;
  };

  return { fetchClerkJWT };
};
