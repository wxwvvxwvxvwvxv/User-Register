# Integration testing - user registration system
The task is to add tests to registration functionality.

## How to get the project

To solve the task, proceed as follows:
1. Fork this repository on to your account
2. Clone the forked repo to your computer using `git clone URL`
3. Run `npm install` to instal all needed packages
4. To run the project call `node server.js` to start the app
5. Application will be available at http://localhost:3000/
6. Write tests to finish `app.test.js`
7. Confirm all changes with test run: `npm run test` or `npx jest`
8. Commit your changes and make a pull request for the original repo on GitHub
   - Add coverage information
   - Add test run time information
9. Grade is awarded to students:
   - who made the pull request with finished tests and validation code

Jest documentation:
- https://jestjs.io/docs/expect
- https://jestjs.io/docs/mock-function-api


## Business requirements

**Username**

- Username can be 6-30 characters long.
- Username can only contain letters, numbers, and periods. 

**Password**

- Password has to be at least 8 characters long.
- Password should contain at least one lowercase and one uppercase letter.
- Password should contain at least one number. 
- Password should not contain any special characters.  
