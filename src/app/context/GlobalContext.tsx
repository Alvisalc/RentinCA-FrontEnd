// "use client"
// import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
// import { useUser } from '@clerk/clerk-react';

// // Define the shape of the context data
// interface UserContextType {
//     isUserSynced: boolean;
//     user: any; // Use a more specific type if you know the structure of your user object
//   }
  
// // Provide a default value matching the shape
// const defaultUserContextValue: UserContextType = {
// isUserSynced: false,
// user: null, // Adjust based on what makes sense for your application
// };

// // Create the context with the default value
// const UserContext = createContext<UserContextType>(defaultUserContextValue);

// interface UserProviderProps {
//     children: ReactNode;
// }

// export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
//     const { isSignedIn, user } = useUser();
//   const [isUserSynced, setIsUserSynced] = useState(false);

//   useEffect(() => {
//     const syncUserWithSupabase = async () => {
//       if (isSignedIn && !isUserSynced) {
//         // Call your API to sync the user
//         const response = await fetch('/api/sync-user', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           // Include necessary data or identifiers if required
//         });
        
//         if (response.ok) {
//           console.log('User synced with Supabase');
//           setIsUserSynced(true); // Prevents further unnecessary syncs
//         } else {
//           console.error('Failed to sync user');
//         }
//       }
//     };

//     syncUserWithSupabase();
//   }, [isSignedIn, isUserSynced]);

//   return (
//     <UserContext.Provider value={{ isUserSynced, user }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Hook to use the user context
// export const useUserContext = () => useContext(UserContext);
