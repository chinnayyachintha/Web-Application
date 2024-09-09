# Deploy a Scalable Web Application with Database Integration using Azure VMs, Docker, and Cloud Security

# Scenario:
You have been tasked with deploying a scalable e-commerce web application for a fastgrowing company. The application should consist of a front-end and a backend API that
connects to a MySQL database. The solution should be secure, scalable, and containerized using Docker. The goal is to minimize downtime and optimize costs while ensuring security.

# Task:

1. Set up Azure Virtual Machines to host the front-end and back-end services.
  * Use two separate Linux VMs (one for the front end, one for the back end).
2. Dockerize the front-end and back-end applications.
  * The front-end can be a simple NGINX server hosting a static HTML page.
  * The back end can be a Node.js API.
3. Deploy a MySQL database using Docker on the back-end VM.
4. Ensure database integration between the back-end API and the MySQL database, securing communication using SSL.
5. Set up Azure Load Balancer to distribute traffic between the front-end and back-end VMs for high availability.
6. Implement Azure Security Center and Network Security Groups (NSGs) to protect against external threats. Ensure only necessary ports (e.g., 80/443) are open to the public.
7. Configure a cron job on the back-end VM to perform a health check on the database and log the status every 10 minutes.
8. Optimize VM sizing for cost-effectiveness and performance by evaluating CPU, memory, and network usage.

# Deliverable:

* A public GitHub repository containing:
  * docker-compose.yml files for the front-end and back-end applications.
  * Scripts for setting up the VMs, MySQL, and Docker containers.
  * Configuration screenshots of NSGs, the load balancer, and Azure Security Center.
  * Performance metrics and logs showing the VM resource utilization and cron job output.
  * Screenshots of API endpoints interacting with the MySQL database.



# Evaluation Criteria:

* Proper VM creation and Docker containerization.
* Effective scaling and security (load balancing, NSGs).
* Integration between the back-end API and MySQL database.
* Evidence of optimization and security via logs and Azure performance metrics.

