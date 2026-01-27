# Use an official Node.js runtime as a parent image
FROM node:22

#Set working directory
WORKDIR /app

#Copy package files
COPY package*.json ./

#Install dependencies
RUN npm install

#Copy the rest of the application code
COPY . .

#Build the application
RUN npm run build

#set port environment variables
ENV PORT=9000

#Expose the port the app runs on
EXPOSE 9000

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "9000"]
