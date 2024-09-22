# Use an official Node.js image as a base
FROM node:20

# Set the working directory to /app
WORKDIR /app

# Copy the package.json file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Run the command to start your application
CMD ["npm", "run", "dev"]
