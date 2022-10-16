import { useEffect, useState } from 'react';
import { getAuthUser } from '../api';
import { User } from '../types';

export function useAuth() {
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();

  useEffect(() => {
    getAuthUser()
      .then(({ data }) => {
        console.log(data);
        setUser(data);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => setLoading(false), 1000);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { user, loading };
}
