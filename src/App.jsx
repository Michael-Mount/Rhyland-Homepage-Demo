import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <h1 className="bg-pink-500">Hello World</h1>
    </>
  );
}

export default App;
