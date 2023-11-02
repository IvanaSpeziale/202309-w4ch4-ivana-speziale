export default App; /* 
import Actions from '../actions/actions'; */
import { Display } from '../display/display';
import { Info } from '../info/info';
import { Keyboard } from '../keyboard/keyboard';
function App() {
  /*   const handleCallClick = () => {};
  const handleHangClick = () => {}; */
  return (
    <>
      <Info></Info>
      <Display></Display>
      <Keyboard></Keyboard>
      {/* <Actions></Actions> */}
    </>
  );
}
