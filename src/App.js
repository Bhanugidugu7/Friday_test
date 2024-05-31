import { MantineProvider } from '@mantine/core';
import logo from './logo.svg';
import '@mantine/core/styles.css';
import MyForm from './Components/MyForm';
function App() {
  return (
    <div className="App">
     <MantineProvider>
      <MyForm></MyForm>
     </MantineProvider>
        
    </div>
  );
}

export default App;
