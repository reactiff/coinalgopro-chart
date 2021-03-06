import React, { useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Component from '@coinalgopro/chart'

const component = new Component();

const md = `
[![NPM](https://img.shields.io/npm/v/@coinalgopro/chart.svg)](https://www.npmjs.com/package/@coinalgopro/chart) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
`;

const App = () => {

  const [state, setState] = useState<any>();

  useEffect(() => {
    const run = () => {
      const newState = { value: 0 };
      setState(newState);
      setTimeout(run, 1000);
    }
    run();
  }, [setState]);

  const styles = useMemo(() => ({
    box: { 
      border: '4px solid #ffffff',
      padding: 30,
    },
    value: { 
      fontSize: '3rem',
      margin: '0 0 15px 0',
    },
  }), []);

  return (
    <div> 
      <div className="flex column align-center" >
        <h1>
          @coinalgopro/chart
        </h1>
        <p>
          Real-time chart
        </p>
        <ReactMarkdown>
          {md}
        </ReactMarkdown>
        <div className="flex column align-center" style={styles.box}>
          <h1 style={styles.value}>
            {state.value.toFixed(2)}
          </h1>
        </div>
        <p>
          <a href="https://www.npmjs.com/package/@coinalgopro/chart">npm</a> | <a href="https://github.com/reactiff/package-name">git</a> | MIT © <a href="https://github.com/reactiff">Rick Ellis</a>
        </p>
      </div>
    </div>
  )
}

export default App
