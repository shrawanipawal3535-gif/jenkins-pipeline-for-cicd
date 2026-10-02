cat << 'EOF' > README.md
# TASK 2: Create a Simple Jenkins Pipeline for CI/CD

## Objective
Set up a basic Jenkins pipeline to automate the process of building and deploying an application.

## Deliverables
- `Jenkinsfile` to build and deploy an app.
- `Dockerfile` to package the app.
- Application source code.

## Interview Questions & Answers

**1. What is Jenkins, and how is it used in CI/CD?**
Jenkins is an open-source automation server. In CI/CD, it automates the process of building, testing, and deploying software whenever code changes are committed to a repository.

**2. What is a Jenkinfile?**
A Jenkinsfile is a text file that contains the definition of a Jenkins Pipeline and is checked into source control.

**3. How do you create and configure Jenkins pipelines?**
You create a `Jenkinsfile` in your repository. Then, in the Jenkins dashboard, you create a new Pipeline project, point it to your Git repository, and configure it to trigger on code commits.

**4. What are some common stages in a Jenkins pipeline?**
Common stages include Checkout, Build, Test, and Deploy.

**5. What is the difference between a declarative and scripted Jenkins pipeline?**
Declarative pipelines use a strict, simpler syntax defined within a `pipeline {}` block. Scripted pipelines use standard Groovy code inside a `node {}` block, offering more flexibility but at the cost of being more complex.
EOF
