const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const data = require("./data/db.js");
const session = require("express-session");
const { use } = require("passport");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "misecreto",
    resave: true,
    saveUninitialized: true,
  })
);

const authoriz = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
};

// ******** PASSPORT ********** //
app.use(passport.initialize());
app.use(passport.session());

// LOGIN
passport.use(
  "local-login",
  new LocalStrategy((username, password, done) => {
    let user = data.find((x) => {
      return x.username === username && x.password === password;
    });

    user ? done(null, user) : done(null, false);
  })
);

// Registro
passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      let user = data.find((x) => {
        return x.username === username && x.password === password;
      });

      if (user) {
        console.log("El usuario ya existe");
        return done(null, false);
      }

      let newUser = {
        id: data.length + 1,
        username,
        password,
      };

      data.push(newUser);
      done(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  let user = data.find((x) => {
    return x.id === id;
  });
  done(null, user);
});

// ROUTES
app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

app.get("/all", (req, res) => {
  res.json({ users: data });
});

app.get("/home", authoriz, (req, res) => {
  res.send("Bienvenido!!");
});

app.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/login",

    // si algo falla se puede disenar alguna alerta indicandole al usuario lo que fallo
    failureRedirect: "/signup",
  })
);

app.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/home",

    // si algo falla se puede mostrar alguna alerta indicandole al usuario lo que fallo
    failureRedirect: "/login",
  })
);

app.listen(8080, () => {
  console.log("Server ok");
});

let carrito = [
  { nombre: Producto1, price: 400 },
  { nombre: Producto2, price: 40 },
  { nombre: Producto3, price: 390 },
  { nombre: Producto4, price: 1200 },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i]);
}
