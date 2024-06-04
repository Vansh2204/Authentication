# Authentication

## Register
> User input req from the body i.e., from frontend
> Then to check if the user already exists
> Then password hashing with bycrypt js hash() method (what to hash,salt value)
> Creating a user with .create() method in mongodb
> Generating token with JWT

## Login
> User input req from the body i.e., from frontend
> To find the user from the DB if exists or not with .find({what to check with suppose username }) method
> Match the password entered by user and in database with .compare() method in bycrypt 
