import app from './app';

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`The server started on ${process.env.PORT}`);
});
