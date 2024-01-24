# Playwright Example

This guide will walk you through setting up and running Playwright tests for your project.

## Installation

To get started, follow these steps:

### Step 1: Install Dependencies

1. Install the necessary dependencies using npm:

    ```
    npm install
    ```

### Step 2: Configure Environment Variables

2. Create a `.env` file in the root directory of your project with the correct credentials. You can use the provided `env_example` as a reference template. 


    - Open the `.env` file in a text editor and add your credentials. For example:

        ```env
            ADMIN_EMAIL=''
            MANAGER_EMAIL=''
            ATTENDANT_EMAIL=''

            PASSWORD=
        ```

    - Replace `ROLE_EMAILS`, and `PASSWORD` with real credentials.

### Step 3: Run Playwright Tests (located in the tests folder)

3. Run Playwright tests using the following command:

    ```
    npx playwright test
    ```

