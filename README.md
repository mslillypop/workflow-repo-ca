# Workflow repo for the CA

This repository demonstrates a workflow configuration for improving the quality and efficiency of a website development process. It integrates tools like ESLint, Prettier, Vitest, and Playwright to ensure high-quality code and robust testing practices.

To get started:
1. Fork this repository:
```
git clone https://github.com/mslillypop/workflow-repo-ca.git
cd workflow-repo-ca
```
2. Create a workflow branch
```
git checkout -b workflow
```
3. Install dependencies
```
npm install
```
Eslint - configured for test globals
Prettier - for consistent formatting
Husky - for linting and formatting
Vitest & Playwright - for testing

4. A .env is required to emulate the tests. 
```
TEST_USER_EMAIL=
TEST_USER_PASSWORD=
```

5. Tests:
```
npm run test:e2e
npm run test

npx playwright test --ui

```
## Unit Tests
### isActivePath Function

[ ]Returns true when the current path matches the href exactly.

[ ]Returns true for the root path ("/") when the current path is "/" or "/index.html".

[ ]Returns true when the current path includes the href.

[ ]Returns false when the paths do not match.

### getUserName Function

[ ]Returns the name from the user object stored in local storage (requires saving a user object to storage first).

[ ]Returns null when no user object exists in local storage.

## End-to-End Tests
### Login

[ ]User can successfully log in with valid credentials sourced from environment variables.

[ ]Note: If provided credentials do not work, create a new user via the registration form.

[ ]Displays an error message when invalid credentials are provided.

[ ]nsure .env is included in .gitignore

### Navigation

[ ]Navigates to the home page successfully.

[ ]Waits for the venue list to fully load.

[ ]Clicks the first venue from the venue list.

[ ]Verifies that the venue details page displays a heading with the text "Venue details".
