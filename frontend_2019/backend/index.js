const express = require('express')
const app = express()
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const publicRoot = './wwwroot/'
app.use(express.static(publicRoot))
let users = [{
        id: 1,
        name: "Jude",
        email: "user@email.com",
        password: "password"
    },
    {
        id: 2,
        name: "Emma",
        email: "emma@email.com",
        password: "password2"
    },
]
app.get("/", (req, res, next) => {
    res.sendFile("index.html", {
        root: publicRoot
    })
})
app.get("/api/user", (req, res) => {
    console.log(users)
    res.send(users)
})
app.listen(3000, () => {
    console.log("port: 3000")
})
app.use(bodyParser.json())
app.use(cookieSession({
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    maxAge: 24 * 60 * 60 * 1000
}))
app.use(passport.initialize());
app.use(passport.session());
const authMiddleware = function (req, res, next) {
    if (!req.isAuthenticated()) {
        res.status(401).send("Nao esta autenticado")
    } else {
        return next()
    }
}
app.get('/api/user', authMiddleware, function (req, res) {
    let user = users.find(function (user) {
        return user.id === req.session.passport.user
    })
    console.log([user, req.session])
    res.send({
        user: user
    })
})
app.post('/api/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(400).send([user, "Nao e possivel realizar o login", info])
        }
        req.login(user, function (err) {
            res.send("Logged in")
        })
    })
})
app.get('/api/logout', function (req, res) {
    req.logout();
    return res.send();
})
passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (username, password, done) {
        let user = users.find(function (user) {
            return user.email === username && user.password === password
        })
        if (user) {
            done(null, user)
        } else {
            done(null, false, {
                message: "Password ou email invalidos"
            })
        }
    }
))

passport.serializeUser(function (user, done) {
    done(null, user.id)
})

passport.deserializeUser(function (id, done) {
    let user = users.find(function (user) {
        return user.id === id
    })
    done(null, user)
})