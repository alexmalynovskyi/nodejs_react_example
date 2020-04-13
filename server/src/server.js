import app from './app';

app.listen(process.env.PORT, () => {
  console.log(`The server started on ${process.env.PORT}`);
});
