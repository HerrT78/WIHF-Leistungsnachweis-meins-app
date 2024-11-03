### 14.09.2024 
Installed WSL and Docker on Win11.

### 16.10.2024 
Installed WakaTime on VS Code and GitHub. Installed nodejs and react according to the task from 14.9.

### 14.09.2024 
Installed WSL and Docker on Win11.

### 16.10.2024 
Installed WakaTime on VS Code and GitHub. Installed nodejs and react according to the task from 14.9.

### 30.10.2024 
After some research, I set up a new project using React and created the initial components. Also, configured ESLint and Prettier for code quality and formatting. After I wanted to run “npm start,” I got an error message that there is no “npm start” defined, even though it was there in the my-app/src/package.json. I ran the “run” button there, and the system relinked the port to 3001. The new address localhost:3001 worked, and I could see the default page. The error: “Error response from daemon: driver failed programming external connectivity on endpoint w3schools-database-w3schools-db-1 (632f1c65b675088f3f28cfb91148679d2a5822545ebb958c49cf4ec2767d3855): Bind for 0.0.0.0:3309 failed: port is already allocated” was due to several open ports. After closing them (docker rm -f name), everything was running smoothly. Added all new functions by comparing Yves’ template and with the help of Copilot. Unfortunately, the compilation did not run smoothly (two warnings).

### 1.11.2024
Tried to get rid of the npm errors and warnings. The package.json grew to 150+ lines, but I could not resolve the issue. The problem was, when compiling app.js, the browser only showed the first function, a button to add products, but no entries from the respective table from SQL. Asked Yves Einfeld, who proposed to purge and reinstall the whole npm folder.

### 2.11.2024
Yves’ proposal seemed to work at first, but after the second compilation, the whole error-terror reappeared. Tried to uninstall and reinstall npx, Node, and so on. The error persisted. Decided to finish the project for now.

### Next steps
Have to ask colleagues and people from IT Departement for help. Due to familial urgencies, I will not be able to tackle the issue within the given time frame. Due to work, political mandates and new tenants I had a very tight scedule in the last few weeks. I planned to work on this Project for 10 hours. Usually i am able to do my work in time.The whole experience was more frustrating than rewarding because I spent more time (10 hours) trying to solve an error with Copilot and in forums than thinking about and debugging the actual code (3 hours plus days at Feusi).

