import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthDetails from './components/AuthDetails';


function App() {
  return (
    <div className="relative items-center justify-center">
      <SignIn />
      <SignUp />
      <AuthDetails/>
    </div>
  );
}

export default App;
