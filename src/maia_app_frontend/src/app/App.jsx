import { useState } from 'react';
import { useConnect } from "@connect2ic/react"
import { CSSTransition } from 'react-transition-group';
import './App.css';
import Content from '../content/Content';
import MAIALandingPage from '../landing/Landing';

function App() {
  const { isConnected } = useConnect({
    onConnect: () => {},
    onDisconnect: () => {}
  })

  const [showContentExtras, setShowContentExtras] = useState(false);

  return (
    <div className="app">
      <CSSTransition
        in={isConnected} 
        timeout={2000}
        classNames="fade"
        unmountOnExit
        onEntered={() => setShowContentExtras(true)}
        onExited={() => setShowContentExtras(false)}
      >
        <Content showExtras={showContentExtras} />
      </CSSTransition>
      <CSSTransition
        in={!isConnected} 
        timeout={2000} 
        classNames="fade"
        unmountOnExit
      >
        <MAIALandingPage></MAIALandingPage>
      </CSSTransition>
    </div>
  );
}

export default App;
