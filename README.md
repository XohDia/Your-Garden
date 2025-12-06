# 🌱 YourGarden  
### A full-stack platform to connect people who own unused gardens with people who want to grow plants.

[![Java](https://img.shields.io/badge/Java-17-orange?logo=java)]()
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-6DB33F?logo=springboot)]()
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)]()
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8?logo=tailwindcss)]()
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?logo=postgresql)]()
[![Vite](https://img.shields.io/badge/Vite-4-646CFF?logo=vite)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]()

---

## 📖 About the Project

YourGarden is a full-stack platform designed to connect homeowners who have unused garden space with people who want to grow vegetables, flowers, or plants. It promotes sustainability, collaboration, and community gardening.

---

## 🧩 Planned Features

- User registration & login (JWT)
- User profiles
- Garden listings with photos
- Search & filters
- Requests to use a garden
- Messaging system
- Reviews & ratings

---

## 🏗️ Architecture Overview

```text
                    ┌───────────────────────────────────────────┐
                    │                 FRONTEND                  │
                    │     React + Vite + TypeScript + Tailwind  │
                    └───────────────────────┬───────────────────┘
                                            │  REST API (JSON)
                                            ▼
                    ┌───────────────────────────────────────────┐
                    │                  BACKEND                  │
                    │ Spring Boot 3 + Java 17 + JPA + Security  │
                    └───────────────────────┬───────────────────┘
                                            │ JDBC
                                            ▼
                    ┌───────────────────────────────────────────┐
                    │                 DATABASE                  │
                    │              PostgreSQL 15                │
                    └───────────────────────────────────────────┘
```

## 📁 Project Structure

```text
yourgarden/
  frontend/     # React + Vite + TS
  backend/      # Spring Boot + Java + PostgreSQL
```


🚀 FRONTEND (React + Vite + TypeScript + Tailwind)
Place these files inside /frontend
(after running: npm create vite@latest frontend -- --template react-ts)

### frontend/src/App.tsx

```text
Copier le code
function App() {
  return (
    <div className="p-10 text-3xl font-bold">
      🌱 YourGarden Frontend Running!
    </div>
  );
}

export default App;
```

### frontend/src/main.tsx

```text
Copier le code
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### frontend/src/index.css

```text
Copier le code
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: system-ui, sans-serif;
}
```

### frontend/.env

```text
VITE_API_URL=http://localhost:8080/api
```

## 🌳 BACKEND (Java + Spring Boot + PostgreSQL)

Place these files inside /backend.

Run Spring Initializr with:

- Java 17
- Spring Boot 3
- Dependencies: Web, JPA, PostgreSQL, Lombok

Then replace files with these:

### backend/pom.xml

```text
Copier le code
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.yourgarden</groupId>
  <artifactId>yourgarden-backend</artifactId>
  <version>0.0.1-SNAPSHOT</version>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.2.5</version>
  </parent>

  <properties>
    <java.version>17</java.version>
  </properties>

  <dependencies>
    <!-- Web API -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- JPA -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <!-- PostgreSQL -->
    <dependency>
      <groupId>org.postgresql</groupId>
      <artifactId>postgresql</artifactId>
      <scope>runtime</scope>
    </dependency>

    <!-- Lombok -->
    <dependency>
      <groupId>org.projectlombok</groupId>
      <artifactId>lombok</artifactId>
      <optional>true</optional>
    </dependency>

    <!-- Tests -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>

</project>
```

### backend/src/main/resources/application.yml

```text
server:
  port: 8080

spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/yourgarden
    username: postgres
    password: yourpassword

  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
```

### backend/src/main/java/com/yourgarden/YourGardenApplication.java

```text
package com.yourgarden;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class YourGardenApplication {
    public static void main(String[] args) {
        SpringApplication.run(YourGardenApplication.class, args);
    }
}
```

### backend/src/main/java/com/yourgarden/controller/HealthController.java

```text
package com.yourgarden.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/api/health")
    public String checkHealth() {
        return "OK - YourGarden backend is running";
    }
}
```

## 🖥️ RUN THE FULL PROJECT
### Frontend :

```text
cd frontend
npm install
npm run dev
```

### Backend :

```text
cd backend
./mvnw spring-boot:run
```

### Test backend health:

```text
http://localhost:8080/api/health
```

### You must see:

```text
OK - YourGarden backend is running
```

📬 Author
XohDia
GitHub: https://github.com/XohDia

## 📜 License
MIT License

```text
---

# 🎉 **Tout est livré en une seule traite.**

Tu peux maintenant :

- créer ton repo GitHub  
- coller ce README  
- coller toutes les arborescences  
- lancer ton frontend  
- lancer ton backend  
- construire ton application  

---

# 👉 Prochaine étape ?

Choisis :

1. **Créer la User entity + UserController + service**  
2. **Mettre en place JWT authentication**  
3. **Créer la Garden entity**  
4. **Connecter le frontend au backend**  
5. **Mettre Tailwind en place + navbar + pages**  
```
