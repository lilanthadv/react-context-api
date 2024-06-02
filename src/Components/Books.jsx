import {
  Box,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { useBookContext } from "../Contexts/BookContext";

const Books = () => {
  const { books, deleteBook, setEditBook, setOpenBook } = useBookContext();

  const handleOnClickAddBook = () => {
    setEditBook(null);
    setOpenBook(true);
  };

  return (
    <>
      <Box
        sx={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">Books</Typography>
        <Button
          size="small"
          variant="contained"
          color="success"
          onClick={handleOnClickAddBook}
        >
          Add Book
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: "50px",
        }}
      >
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Auther</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book) => (
                <TableRow
                  key={book.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {book.id}
                  </TableCell>
                  <TableCell align="right">{book.name}</TableCell>
                  <TableCell align="right">{book.auther}</TableCell>
                  <TableCell align="right">{book.price}</TableCell>
                  <TableCell align="right">
                    <Button onClick={() => setEditBook(book)}>Edit</Button> |{" "}
                    <Button onClick={() => deleteBook(book.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Books;
