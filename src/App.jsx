
import { BrowserRouter, Routes, Route } from 'react-router';
import Index from   "./pages/Home";
import Detail from "./pages/Detail";
import Nomatchcomponent from './pages/Nomatchcomponent';


function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Index />} />
            <Route path="/:id" element={<Detail />} />
            <Route path="*" element={<Nomatchcomponent/>} />

          </Routes>
      </BrowserRouter>
  )
}

export default App