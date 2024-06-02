import { Box, Typography } from "@mui/material";
import Books from "./Components/Books";
import CreateBook from "./Components/CreateBook";
import { BookContextProvider } from "./Contexts/BookContext";

const App = () => {
  return (
    <Box
      sx={{
        margin: "50px",
      }}
    >
      <Typography variant="h3">React Context API</Typography>
      <BookContextProvider>
        <Books />
        <CreateBook />
      </BookContextProvider>
    </Box>
  );
};

export default App;
