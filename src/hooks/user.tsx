import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { getAuthenticate } from '../services/api/domain/users/get-authenticate';

interface UserProps {
  job: string[] | string;
  login: string;
  mail: string;
  name: string;
  profile: string;
  status: string;
}

interface UserAuthenticatedProps {
  user: UserProps | null;
  token: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUserAuthenticated: (user: any) => void;
  setTokenAuthenticated: (token: string) => void;
}

interface UserProviderProps {
  children: JSX.Element[] | JSX.Element;
}

const UserContext = createContext<UserAuthenticatedProps>({} as UserAuthenticatedProps);

export const UserProvider: React.FC<UserProviderProps> = ({ children }: UserProviderProps) => {
  const [userState, setUserState] = useState<UserProps | null>(null);
  const [tokenState, setTokenState] = useState<string>(() => sessionStorage.getItem('@token') as string);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setUserAuthenticated = (user: any) => setUserState(user);

  const setTokenAuthenticated = (token: string) => setTokenState(token);

  const loadUserInfo = async () => {
    const token = sessionStorage.getItem('@token');
    if (token) {
      const getUserInfo = await getAuthenticate({ token });
      setUserAuthenticated(getUserInfo.data);
    }
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  const val = useMemo(() => ({
    user: userState,
    token: tokenState,
    setUserAuthenticated,
    setTokenAuthenticated,
  }), [])

  return (
    <UserContext.Provider
      value={val}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): UserAuthenticatedProps {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within an UserProvider');
  }

  return context;
}
