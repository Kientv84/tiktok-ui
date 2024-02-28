import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home';
import Following from '~/pages/Following';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/following" element={<Following />} />
      </Routes>
    </Router>
  );
}

export default App;
