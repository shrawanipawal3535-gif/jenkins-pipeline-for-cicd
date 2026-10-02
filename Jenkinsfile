cat << 'EOF' > Jenkinsfile
pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "node-cicd-app"
        CONTAINER_NAME = "node-app-container"
        PORT = "3000"
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Pulling code from GitHub...'
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building Node.js Docker image...'
                script {
                    sh 'docker build -t ${DOCKER_IMAGE}:latest .'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying application locally...'
                script {
                    sh 'docker stop ${CONTAINER_NAME} || true'
                    sh 'docker rm ${CONTAINER_NAME} || true'
                    sh 'docker run -d -p ${PORT}:${PORT} --name ${CONTAINER_NAME} ${DOCKER_IMAGE}:latest'
                }
            }
        }
    }
}
EOF
