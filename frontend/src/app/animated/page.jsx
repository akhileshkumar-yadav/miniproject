'use client'
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const HomePage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Fade duration={1500}>
        <h1>Welcome to My Next.js App!</h1>
      </Fade>
        <div style={{height:'10px'}}>
      <Slide direction="up" duration={1000} delay={500}>
        <p>This is a sample paragraph that will slide in from the bottom.</p>
      </Slide>
      </div>

      <Zoom duration={1000}>
        <div style={{ width: '200px', height: '200px', background: 'skyblue', margin: '20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          This box will zoom in!
        </div>
      </Zoom>

      <Fade duration={2000} delay={1000}>
        <h2>This is another heading that fades in with a delay!</h2>
      </Fade>
    </div>
  );
};

export default HomePage;
