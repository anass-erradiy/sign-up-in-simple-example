FROM node:14-alpine

WORKDIR /app

# for saving time during installation time
COPY package*.json ./

# Install dependencies
RUN npm install

# copy the rest of the application
COPY . .

# use port 3000
EXPOSE 3000

# command to run the React app ,during creating the container 
CMD ["npm", "start"]