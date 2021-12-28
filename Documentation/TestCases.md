# DigitalBank Test Cases justification
## Login
There are two scenarios considered:
- **The positive scenario with one test case**
1. Should access the home page when attempting to login with valid credentials
- In this case, the application should access the Bank home page after login with valid username and password. 
- **The negative scenario with two test cases**
- In these cases, the application should show an error message when attempting to login with invalid or blank username and password.
2. Should show an error when attempting to login with invalid credentials
3. Should show an error when attempting to login with blank credentials
## Logout
Two test cases were implemented for the logout:
1. Should show logout success message when clicking on logout menu
- After clicking the logout on the user menu, a success message should be displayed.
2. Should show login page when clicking browser back button after logging out the session
- After the successful logout, the login page should be displayed when clicking the back button.