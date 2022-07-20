const express = require('express');
const Routes = require('./routes');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/login', Routes.loginRouter);
app.use('/user', Routes.userRouter);
app.use('/categories', Routes.categoryRouter);
app.use('/post', Routes.postRouter);

app.use(errorMiddleware);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
