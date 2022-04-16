import './App.css';
import Testimony from './Components/Testimony';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp</h1>
        <Testimony
          img="emma"
          name="Emma Bostian"
          country="Sweden"
          charge="Software Engineer"
          enterprise="Spotify"
          text="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
        <Testimony
          img="sarah"
          name="Sarah Chima"
          country="Nigeria"
          charge="Software Engineer"
          enterprise="ChatDesk"
          text="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        />
        <Testimony
          img="shawn"
          name="Shawn Wang"
          country="Singapore"
          charge="Software Engineer"
          enterprise="Amazon"
          text="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. “<b>“freeCodeCamp changed my life."
        />
      </div>
    </div>
  );
}

export default App;
