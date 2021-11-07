# PDA-Website
Official PDA-MIT Website Building Repo
Do Star the Repo on top right

## Contribution Guidelines :computer:

<details>
<summary>
Step 1: Fork the Repository
</summary>
<br>
Click on <a href="#" target="_self"><img src="https://user-images.githubusercontent.com/58631762/120588030-11cee200-c454-11eb-98ad-060ef99428c5.png" width="16"></img></a> to fork <a href="https://github.com/pda-mit/PDA-Website">this</a> repsository
</details>

---

<details>
<summary>
Step 2: Cloning Repository using Git
</summary>
<br>

```bash
git clone https://github.com/'<your-github-username>'/PDA-Website.git
```
</details>

---

<details>
<summary>
Step 3: Change directory to PDA-Website
</summary>
<br>

```bash
cd PDA-Website
```
</details>

---

<details>
<summary>
Step 4: Add reference to the original repository
</summary>
<br>

```bash
git remote add upstream https://github.com/pda-mit/PDA-Website.git
```
</details>
 
---
  
## Creating a New Branch 🛠

:one: Always keep updating your master branch with the main repository by running the following command on the local master branch. Here the default master branch is the main branch.
```bash
git pull upstream main
```

:two: Always create a new branch before making any changes. Never ever make any changes directly on the master branch. To create a **new** branch,

```bash
git checkout -b '<new-branch-name>'
```
---
 
## Setup Guidelines ⚙️ 

 ### Installation using NPM and MongoDB 

* Download [Node Js and npm(Node package manager)](https://nodejs.org/en/) (when you install Node, npm also gets installed by default)
<br/>

* Mongo DB compass which is free and a great software in order to work with MongoDB applications. [Download Mongo DB compass](https://www.mongodb.com/try/download/compass)
<br/>

* Run this command to install all dependencies for the project.
```
npm install
```

<br/>

 
* Testing : Run this command on your terminal/ bash to start the Mongo server on port 27017(default).
```
mongod
```
--- 
 
## Run on Localhost 👨‍💻
 
* Run this command to start the project.
```
node app.js
```
<br/>

* Open link to view the website in your browser window if it doesn't open automatically.
```
http://localhost:3000/
```
---
  
## Commiting the changes and Making Pull Request 🚀

:one: After Editing files in the new branch Stage your changes
```bash
git add .
```
:two: Commit your changes
```bash
git commit -m '<your_commit_message>'
```
:three: Check for Status to be sure everything is added
```bash
git status
```
:four: Check for your remote
```bash
git remote -v
```
:five: Push changes to remote
* Note : During this stage, a sign in pop-up will appear in GitHub requesting for OAuth. Either Sign in using OAuth browser session or create a Personal Access Token to login.
```bash
git push -u origin '<your_branch_name>'
```
:six: Open a <a href="https://github.com/pda-mit/PDA-Website/pulls" title="Create Pull request">Pull Request</a>

---

