

Amazon Lightsail Deployment

1. Create a Lightsail Instance
Log in to the AWS Management Console.
Navigate to Lightsail.
Create an instance, choosing the Node.js blueprint.
Connect to your Lightsail instance using SSH.

3. Install Dependencies
bash
Copy code
sudo apt update && sudo apt upgrade -y
sudo apt install nodejs npm
Install MongoDB
Install nginx and configure as you want
If needed install pm2 for process management

3.Upload Your Code
Use SCP or SFTP to transfer your application code to the Lightsail instance.

4. Install Dependencies and Start the Application
bash
Copy code
cd /path/to/your/app
npm install
npm start
5 Configure Environment Variables
Set environment variables like DATABASE_URL.

6. Open Ports
Ensure the necessary ports (e.g., 80 or 3000) are open in the Lightsail networking settings.



AWS App Runner Deployment

1. Create an App Runner Service
Go to the AWS Management Console and navigate to AWS App Runner.
Create a new service by selecting your source repository and configuring build settings.

2. Configure Environment Variables
Set essential environment variables in the App Runner settings.
Make sure to include the MongoDB Atlas connection URL as an environmental variable.

3. Define Service Settings
Specify service settings such as the number of instances, CPU, and memory according to your application's requirements.

4. Connect MongoDB Atlas URL and Add to Environmental Variables
Retrieve the MongoDB Atlas connection URL.
Set up an environmental variable in the App Runner settings to store the MongoDB Atlas URL.

5. Deploy
Initiate the deployment process from the AWS App Runner console.
Monitor the deployment status and ensure a successful deployment.
