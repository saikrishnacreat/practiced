// import {z} from 'zod';
const z = require('zod');
userSchema = z.object({
    id : z.string(),
    userName : z.string(),
    email : z.string().email()
});

user = {
    id : '123',
    userName : 'Sai krishna',
    // email : 'sai@gmail.com'
};
try{
    const validatedUser = userSchema.parse(user);
    console.log(validatedUser);
}
catch(e){
    console.log("Unexpected error occured"+e)
}


