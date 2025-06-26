
import { BrowserRouter, Routes, Route } from 'react-router';
import Index from   "./pages/Home";
import Detail from "./pages/Detail"

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Index />} />
            <Route path="/:id" element={<Detail />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App