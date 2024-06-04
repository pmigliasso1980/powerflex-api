# PostgreSQL Installation Guide

## macOS

### Using Homebrew:

1. **Open Terminal.**
2. **Install Homebrew if you haven't already:**
   ```sh
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. **Install PostgreSQL using Homebrew:**
    ```sh
    brew install postgresql
    ```
4. **Start PostgreSQL:**
    ```sh
    brew services start postgresql
    ```
5. **Verify installation:**
    ```sh
    createdb --version
    ```

### Using PostgreSQL official installer:

1. **Download the installer from the [PostgreSQL Website](https://www.postgresql.org/download/).**
2. **Follow the installation instructions.**
3. **Verify installation:**
    ```sh
    createdb --version
    ```

## Windows

### Using PostgreSQL official installer:

1. **Download the installer from the [PostgreSQL Website](https://www.postgresql.org/download/).**
2. **Run the installer and follow the setup wizard. Make sure to include the pgAdmin tool and other utilities during installation.**
3. **Verify installation:**
    ```sh
    createdb --version
    ```

## Linux

### Using APT on Debian/Ubuntu:

1. **Open Terminal.**
2. **Update the package list:**
   ```sh
   sudo apt update
   ```
3. **Install PostgreSQL:**
    ```sh
    sudo apt install postgresql postgresql-contrib
    ```
4. **Start PostgreSQL service:**
    ```sh
    sudo systemctl start postgresql
    ```
5. **Enable PostgreSQL to start on boot:**
    ```sh
    sudo systemctl enable postgresql
    ```

6. **Verify installation:**
    ```sh
    createdb --version
    ```



# Project setup

1. **Open Terminal.**

2. **Create an environment file:**
    ```sh
    cat .env.example > .env
    ```
3. **Open Terminal.**
4. **Navigate to the `settup_db.sh` Directory:**
5. **Change Permissions**
    ```sh
    chmod u+x setup_db.sh
    ```
6. **Run the Script**
    ```sh
    ./setup_db.sh
    ```
7. **Install Doker Desktop. Go to the Docker Hub [download page](https://www.docker.com/products/docker-desktop).**

8. **Open Terminal.**
9. **Run docker compose to create the conatiner**
    ```sh
    docker-compose up -d
    ```
10. **Install `npm packages`:**
    ```sh
    npm install
    ```

11. **Run local server:**
    ```sh
    npm run start
    ```
    ```sh
    > powerflex-api@1.0.0 start
    > npm run build && npm run dev


    > powerflex-api@1.0.0 build
    > tsc


    > powerflex-api@1.0.0 dev
    > nodemon ./build/server.js

    [nodemon] 3.1.3
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,cjs,json
    [nodemon] starting `node ./build/server.js`
    Server is running on port 8080.
    Executing (default): SELECT 1+1 AS result
    Executing (default): SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'factories'
    Connection has been established successfully.
    Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'factories' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
    Executing (default): SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'sprockets'
    Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'sprockets' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
    Executing (default): SELECT "id", "chart_data" AS "chartData" FROM "factories" AS "Factory";
    Executing (default): SELECT "id", "teeth", "pitch_diameter" AS "pitchDiameter", "outside_diameter" AS "outsideDiameter", "pitch" FROM "sprockets" AS "Sprocket";
    ```
12. **Open your browser**
13. **Go to [api-docs](http://localhost:8080/api-docs)**
14. **![Swagger UI](https://imgur.com/hdcE2VZ)**
15. **Run tests coverage**
    ```sh
    npm run test
    ```
    ```sh
    > powerflex-api@1.0.0 test
    > jest --coverage ./src

    PASS  src/app/services/factory.service.test.ts
    PASS  src/app/services/sprocket.service.test.ts
    PASS  src/app/repositories/factory.repository.test.ts
    PASS  src/app/repositories/sprocket.repository.test.ts
    -------------------------|---------|----------|---------|---------|-------------------
    File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
    -------------------------|---------|----------|---------|---------|-------------------
    All files                |   28.57 |        0 |   35.71 |   28.57 |                   
    app/mappers             |       0 |        0 |       0 |       0 |                   
    factory.mapper.ts      |       0 |        0 |       0 |       0 | 5-15              
    sprocket.mapper.ts     |       0 |        0 |       0 |       0 | 5-18              
    app/repositories        |   23.52 |      100 |      40 |   23.52 |                   
    factory.repository.ts  |   23.52 |      100 |      40 |   23.52 | 7-20,28-42,50     
    sprocket.repository.ts |   23.52 |      100 |      40 |   23.52 | 6-24,32-46,54     
    app/services            |      56 |      100 |      50 |      56 |                   
    factory.service.ts     |   58.33 |      100 |      50 |   58.33 | 10-12,16,24-26    
    sprocket.service.ts    |   53.84 |      100 |      50 |   53.84 | 10-13,17,25-27    
    models                  |       0 |        0 |       0 |       0 |                   
    factory.model.ts       |       0 |        0 |       0 |       0 | 23-28             
    sprocket.model.ts      |       0 |        0 |       0 |       0 |                   
    -------------------------|---------|----------|---------|---------|-------------------

    Test Suites: 4 passed, 4 total
    Tests:       8 passed, 8 total
    Snapshots:   0 total
    Time:        0.766 s, estimated 1 s
    Ran all test suites matching /.\/src/i
    ```