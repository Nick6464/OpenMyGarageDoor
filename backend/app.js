var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const dotenv = require("dotenv");
dotenv.config();

const door = require("./doorRequests.js");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;

app.post("/openDoor", async (req, res) => {
	console.log("Opening Door...");
	let request = await door.sendOpenRequest();
	console.log(request);
	res(request);
});

app.post("/closeDoor", async (req, res) => {
	console.log("Closing Door...");
	let request = await door.sendCloseRequest();
	console.log(request);
	res(request);
});

app.post("/doorPosition", async (req, res) => {
	console.log("Getting Door Status...");
	let position = await door.sendStatusRequest();
	console.log(position);
	res(position);
});

// TEST FUNCTIONS
testOpeningDoor();
async function testOpeningDoor() {
	console.log("Opening Door...");
	let request = await door.sendOpenRequest();
	console.log(request);
}

testClosingDoor();
async function testClosingDoor() {
	console.log("Closing Door...");
	let request = await door.sendCloseRequest();
	console.log(request);
}

testStatus();
async function testStatus() {
	console.log("Getting Door Status...");
	let position = await door.sendStatusRequest();
	console.log(position);
}
