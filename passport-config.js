const LocalStrategy = require('passport-local').strategy



function initialise(passport){
    const authenticateUser = (mail, pass, done) => {
        const user = getUserByEmail(mail)
    }
    passport.use(new LocalStrategy({usernameField: 'mail'}), authenticateUser)
    passport.serialiseUser((user, done) => {})
    passport.deserialiseUser((id, done) => {})

}