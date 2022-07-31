# SimplyBlog-react-springboot-blog
A full-stack blog written in Java and TypeScript using Spring Boot and Reactjs.

#### Funtionalities achieved :
    📦Authentication and authorization using JWT,
    📦Register/Login, Add Blog Post, Like/Unlike Blog Post,
    📦Send Connection Request, Add Connection, Follow             

#### :rocket: Deployment: https://simplyblog.vercel.app/
Please give it max 45 seconds for backend to wakeup if data/post are not showing, as heroku default apps are put into sleep due to inactivity

<img src="https://user-images.githubusercontent.com/43669876/182005280-672c6f90-3d6b-42b3-97dc-ec3bf56fa20d.png" width="800" height="550">



## Quick Setup Guide

### MySQL Setup:

  1. Use a preffered MySQL for your system(os) and create a database named ```simply-blog```
  2. Run the MySQL Server
  
### Backend: 
  
  1. Open the ```backend``` folder with InteliJIDEA
  2. Right click on the ```pom.xml``` file and with the maven option select ```Reload the project``` it will automatically download 
     the dependencies
  3. Open ```application.properties``` file from the resource folder and add the following lines
          
          #MySQL database connection strings
          spring.datasource.url=jdbc:mysql://localhost:3306/simply_blog
          spring.datasource.username=YOUR_DB_USERNAME //Commonly used: root
          spring.datasource.password=YOUR_DB_PASSWORD

          # JPA property settings
          #spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
          spring.jpa.hibernate.ddl-auto=update //If update don't work use create or create-drop, the revert back to update
          spring.jpa.properties.hibernate.show_sql=true
          
  4. Once the source building and dependecies are ready and ```application.properties``` is configured, run the App using 
     Application configuration or just run if the provided configuration is available. // We're running only the development version here since it's basic

### Frontend:

  1. Open ```frontend/simplyblog/api/axios.tsx``` file and change the baseURL: like this ```baseURL:'http://localhost:8080',``` and save.
  2. Open terminal inside ```frontend/simplyblog```
  3. Either use ```npm run start``` or use ```npm run build``` then serve the build with ```serve -s build```
  4. Frontend will automatically run in your browser
  
  
#### Once all three are set, you can readily browse through http://lostcalhost:8080 for backend and http://localhost:3000 for frontend (PORTs may vary depending on your system/version or availability for use.)

