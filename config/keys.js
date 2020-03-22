dbUser = process.env.DB_USER;
dbPass = process.env.DB_PASS;

module.exports = {
    mongoURI: `mongodb+srv://${dbUser}:${dbPass}@cluster0-cq7l7.azure.mongodb.net/mongoose`
}
