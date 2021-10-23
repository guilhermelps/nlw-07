import { useContext } from 'react';

import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { AuthContext } from './contexts/auth';

import styles from './App.module.scss';
import { SendMessageForm } from './components/SendMessageForm';

export function App() {
  const { user } = useContext(AuthContext);
  
  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
      <MessageList />
      { !!user ? <SendMessageForm /> : <LoginBox /> }
    </main>
  )
}

export default App
