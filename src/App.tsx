import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { ConversationPage } from './pages/ConversationPage';
import { ConversationChannelPage } from './pages/ConversationChannelPage';
import { AuthenticatedRoute } from './components/AuthenticatedRoute';
import { User } from './utils/types';
import { AuthContext } from './utils/context/AuthContext';

export const App = () => {
  const [user, setUser] = useState<User>();
  return (
    <AuthContext.Provider value={{ user, updateAuthUser: setUser }}>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='conversations'
          element={
            <AuthenticatedRoute>
              <ConversationPage />
            </AuthenticatedRoute>
          }
        >
          <Route path=':id' element={<ConversationChannelPage />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};
