import { BrowserRouter as BrowserRouter, Routes, Route} from "react-router-dom";
import Settings from "./Pages/Settings";
import Questions from "./Pages/Questions";
import FinalScreen from "./Pages/FinalScreen";
import Header from "./Pages/Header";

import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";


function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="sm">
        <Box textAlign='center' mt={5}>
          <Routes>
            <Route path="/" element={<Header />}>
           
              <Route index element={<Settings />} />
              
              <Route path="questions" element={<Questions />} />
              <Route path="score" element={<FinalScreen />} />
            </Route>
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );}

export default App;