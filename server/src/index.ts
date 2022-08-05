import app from './app';

const port = 5000;

app.listen(port, (): void => {
  console.log(`Server is up on port ${port}`);
});
