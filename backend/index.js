import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';
import cors from 'cors';

const app = express();
const port = 3000;

/* env μ²λ¦¬νκΈ° */
const password = null;
const dbName = null;
const uri = `mongodb+srv://minji:${password}@cluster0.il7ot.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true });

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello!'
    });
});

app.use(cors());
app.use(`/graphql`, graphqlHTTP({
    schema: schema,
    graphiql: true
}));


app.listen(port, () => {
    console.log(`π ${port}λ² ν¬νΈλ‘ μλ² μ€νμ€...`);
});