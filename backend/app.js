const port = process.env.PORT || 5001;
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const dotenv = require("dotenv");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
dotenv.config();

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

initialLoad();
/**
 * @desc How I know the backend has started/restarted
 */
async function initialLoad() {
	if (process.env.NODE_ENV != "development") {
		console.log("Production System (re)started");
	}
	console.log(`[initialLoad] ${process.env.NODE_ENV} env, listen on ${port}`);
}

app.post("/openDoor", async (req, res) => {
	console.log("Opening Door...");
	res("Door Opened");
});

app.post("/closeDoor", async (req, res) => {
	console.log("Closing Door...");
	res("Door Closed");
});

app.get("/doorPosition", async (req, res) => {
	console.log("Door is open halfway");
	res("Door is open halfway");
});