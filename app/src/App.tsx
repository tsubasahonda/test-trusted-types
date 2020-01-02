import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import { getPolicy } from './utils';

const App: React.FC = () => {
  const [hrefText, setHrefText] = useState('');
  const [href, setHref] = useState('');
  const [untrustedHrefText, setUntrustedHrefText] = useState("");
  const [untrustedHref, setUntrustedHref] = useState("");

  return (
    <Router>
      <div className="App">
        <div>
          {/* <img src={'x'} onError={e => {e.preventDefault(); alert(2);}} alt='hoge' /> */}
          <a href={getPolicy().createURL('/xss2')}>
            <button>Xss 2</button>
          </a>
          {/* <a href={getPolicy().createURL('/xss-hacky3?html=<img%20src=%27x%27%20onerror="alert(1)"')}>
            <button>Xss 3</button>
          </a>
          <a href={getPolicy().createURL('/xss-hacky4?html=<img%20src=%27x%27%20onerror="alert(1)"')}>
            <button>Xss 4</button>
          </a> */}
        </div>
        <div>
          <p>
            {href && <a href={getPolicy().createURL(href)}>Link with trusted href</a>}
            <input
              type="text"
              value={hrefText}
              onChange={(e) => setHrefText(e.target.value)}
            />
            <button onClick={() => setHref(hrefText)}>Set href</button>
          </p>
          <p>
            {untrustedHref && <a href={untrustedHref}>Link with NON trusted href</a>}
            <input
              type="text"
              value={untrustedHrefText}
              onChange={(e) => setUntrustedHrefText(e.target.value)}
            />
            <button onClick={() => setUntrustedHref(untrustedHrefText)}>Set untrusted href</button>
          </p>
        </div>
      </div>
    </Router>
  );
}

export default App;
