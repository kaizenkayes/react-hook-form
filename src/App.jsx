import "./App.css";
import LOginForm from "./forms/LOginForm";
import RegistartionForm from "./forms/RegistartionForm";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-4">React Hook Form</h1>
      {/* <LOginForm></LOginForm> */}
      <RegistartionForm></RegistartionForm>
    </div>
  );
}

export default App;
