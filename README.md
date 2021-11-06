# PDA-Website
Official PDA-MIT Website Building Repo
Do Star the Repo on top right

## Instructions to setup :arrow_down::computer:

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

:one: Always keep updating your master branch with the main repository by running the following command on the local master branch.
```bash
git pull upstream master
```

:two: Always create a new branch before making any changes. Never ever make any changes directly on the master branch. To create a **new** branch,

```bash
git checkout -b '<new-branch-name>'
```
---
  
## Editing in the New Branch 

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
```bash
git push origin '<your_branch_name>'
```
:six: Open a <a href="https://github.com/pda-mit/PDA-Website/pulls" title="Create Pull request">Pull Request</a>

---

  

  

 




