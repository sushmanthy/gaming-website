pipeline {
    agent any
 
    stages {
 
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/sushmanthy/gaming-website.git'
            }
        }
 
        stage('Deploy Website') {
            steps {
                sh '''
                sudo rm -rf /var/www/html/*
                sudo cp -r * /var/www/html/
                '''
            }
        }
 
    }
 
    post {
        success {
            echo 'Website deployed successfully'
        }
 
        failure {
            echo 'Deployment failed'
        }
    }
}