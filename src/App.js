import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Header from './commen/Header';
import Footer from './commen/footer';

import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './Term&Condition';
// import TermsAndConditions from './TermsAndConditions';

function App() {
  return (
    <BrowserRouter>
      

      <Routes>
        <Route
          path="/"
          element={
            <>
            <Header />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/privacy-policy"
          element={
            <>
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />

        <Route
          path="/terms-and-conditions"
          element={
            <>
              <TermsAndConditions />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;