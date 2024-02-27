// contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSession } from '@clerk/nextjs';

const AuthContext = createContext<{ jwt: string | null }>({ jwt: null });

export const AuthProvider: React.FC = ({ children }) => {
  const [jwt, setJwt] = useState<string | null>(null);
  const { session } = useSession();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await session?.getToken();
      setJwt(token);
    };

    if (session) {
      fetchToken();
    }
  }, [session]);

  return (
    <AuthContext.Provider value={{ jwt }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
