export default {
  type: "jsx",
  title: "Docker Commands Cheat Sheet",
  desc: "A quick reference for common Docker commands to manage containers, images, volumes, and networks.",
  sheets: [
    {
      category: "Docker Basics",
      sheet: [
        {
          snippet: "docker --version",
          sheetDesc: "Check Docker version",
        },
        {
          snippet: "docker info",
          sheetDesc: "Display system-wide Docker information",
        },
        {
          snippet: "docker help",
          sheetDesc: "List available Docker commands",
        },
        {
          snippet: "docker login",
          sheetDesc: "Log in to Docker Hub or another Docker registry",
        },
      ],
    },
    {
      category: "Working with Images",
      sheet: [
        {
          snippet: "docker images",
          sheetDesc: "List all Docker images",
        },
        {
          snippet: "docker pull <image>",
          sheetDesc: "Pull an image from a Docker registry",
        },
        {
          snippet: "docker build -t <image-name> .",
          sheetDesc:
            "Build a Docker image from a Dockerfile in the current directory",
        },
        {
          snippet: "docker rmi <image>",
          sheetDesc: "Remove an image from your local Docker storage",
        },
        {
          snippet: "docker tag <source_image> <target_image>",
          sheetDesc: "Tag an image for pushing to a registry",
        },
        {
          snippet: "docker push <image>",
          sheetDesc: "Push an image to a Docker registry",
        },
      ],
    },
    {
      category: "Managing Containers",
      sheet: [
        {
          snippet: "docker ps",
          sheetDesc: "List all running containers",
        },
        {
          snippet: "docker ps -a",
          sheetDesc: "List all containers (running and stopped)",
        },
        {
          snippet: "docker run <image>",
          sheetDesc: "Run a container from a Docker image",
        },
        {
          snippet: "docker run -it <image> /bin/bash",
          sheetDesc: "Run a container interactively",
        },
        {
          snippet: "docker stop <container>",
          sheetDesc: "Stop a running container",
        },
        {
          snippet: "docker start <container>",
          sheetDesc: "Start a stopped container",
        },
        {
          snippet: "docker restart <container>",
          sheetDesc: "Restart a container",
        },
        {
          snippet: "docker rm <container>",
          sheetDesc: "Remove a stopped container",
        },
      ],
    },
    {
      category: "Container Operations",
      sheet: [
        {
          snippet: "docker logs <container>",
          sheetDesc: "View the logs of a container",
        },
        {
          snippet: "docker exec -it <container> /bin/bash",
          sheetDesc: "Access a running container's shell",
        },
        {
          snippet: "docker inspect <container>",
          sheetDesc: "View detailed information about a container",
        },
        {
          snippet: "docker top <container>",
          sheetDesc: "Display running processes in a container",
        },
        {
          snippet: "docker stats <container>",
          sheetDesc: "Display resource usage statistics for a container",
        },
        {
          snippet: "docker cp <container>:/path/to/file /local/path",
          sheetDesc: "Copy files from a container to the local filesystem",
        },
        {
          snippet: "docker diff <container>",
          sheetDesc:
            "Inspect changes to files or directories on a container’s filesystem",
        },
      ],
    },
    {
      category: "Networking",
      sheet: [
        {
          snippet: "docker network ls",
          sheetDesc: "List all Docker networks",
        },
        {
          snippet: "docker network create <network>",
          sheetDesc: "Create a new Docker network",
        },
        {
          snippet: "docker network inspect <network>",
          sheetDesc: "View details of a Docker network",
        },
        {
          snippet: "docker network connect <network> <container>",
          sheetDesc: "Connect a container to a network",
        },
        {
          snippet: "docker network disconnect <network> <container>",
          sheetDesc: "Disconnect a container from a network",
        },
      ],
    },
    {
      category: "Volumes",
      sheet: [
        {
          snippet: "docker volume ls",
          sheetDesc: "List all Docker volumes",
        },
        {
          snippet: "docker volume create <volume>",
          sheetDesc: "Create a new Docker volume",
        },
        {
          snippet: "docker volume rm <volume>",
          sheetDesc: "Remove a Docker volume",
        },
        {
          snippet: "docker run -v <volume>:/path/in/container <image>",
          sheetDesc: "Mount a volume to a container",
        },
        {
          snippet: "docker inspect <volume>",
          sheetDesc: "View detailed information about a Docker volume",
        },
      ],
    },
    {
      category: "Docker Compose",
      sheet: [
        {
          snippet: "docker-compose up",
          sheetDesc:
            "Start containers defined in the `docker-compose.yml` file",
        },
        {
          snippet: "docker-compose up -d",
          sheetDesc: "Start containers in the background (detached mode)",
        },
        {
          snippet: "docker-compose down",
          sheetDesc:
            "Stop and remove containers, networks, and volumes created by Docker Compose",
        },
        {
          snippet: "docker-compose build",
          sheetDesc: "Build or rebuild services in Docker Compose",
        },
        {
          snippet: "docker-compose logs",
          sheetDesc: "View the logs of all services in Docker Compose",
        },
        {
          snippet: "docker-compose ps",
          sheetDesc: "List containers managed by Docker Compose",
        },
        {
          snippet: "docker-compose exec <service> <command>",
          sheetDesc: "Execute a command in a running service",
        },
      ],
    },
    {
      category: "Cleanup",
      sheet: [
        {
          snippet: "docker system prune",
          sheetDesc:
            "Remove all unused containers, networks, images (not just dangling ones), and build cache",
        },
        {
          snippet: "docker system prune -a",
          sheetDesc: "Remove all unused data, including unused images",
        },
        {
          snippet: "docker volume prune",
          sheetDesc: "Remove all unused volumes",
        },
        {
          snippet: "docker container prune",
          sheetDesc: "Remove all stopped containers",
        },
        {
          snippet: "docker image prune",
          sheetDesc: "Remove unused Docker images",
        },
        {
          snippet: "docker network prune",
          sheetDesc: "Remove all unused networks",
        },
      ],
    },
  ],
};
