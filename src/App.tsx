import React from 'react';
import '@/style.css';
import gitHub from '@Public/assets/animation.svg';


const App: React.FunctionComponent = () => {
  return (
    <>
      <div style={{
        backgroundColor: '#160b19', color: '#dddddd',
        width: '100vw', height: '100%', 
        display: 'flex', justifyContent: 'center',
        alignItems: 'center'
        }}>
        <div style={{textAlign: 'center', display: 'flex', gap: '2rem', flexDirection: 'column'}}>
          <h1>Welcome To WRT</h1>
          <h3>A Webpack + React + Typescript Template</h3>
          
          <a href='https://github.com/mr-ema/react-ts-template' target='_blank'>
          <object data={gitHub} width={400} height={400} />
          </a>

          <a style={{
            fontSize: '2.3rem', fontWeight: 'bold', color: '#a646ba'}}
          href='https://github.com/mr-ema/react-ts-template' 
          target='_blank'>GitHub</a>
        </div>
      </div>
    </>
  )
}

export default App;