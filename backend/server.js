"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const method_override_1 = __importDefault(require("method-override"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, method_override_1.default)('_method'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
mongoose_1.default.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to the database!'))
    .catch(err => {
    console.error('Error connecting to the database:', err);
    process.exit(1);
});
//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to MY recipe app');
});
const recipeController = require('./controllers/recipeController');
app.use('/recipes', recipeController);
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});
//ERROR PAGE
app.get('*', (req, res) => {
    res.send('404');
});
