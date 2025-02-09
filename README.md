# Redis Pub/Sub Messaging System

This project provides an in-depth guide and practical implementation of the Redis Publish/Subscribe (Pub/Sub) messaging system. It demonstrates how to publish messages to Redis channels and how subscribers listen and process those messages efficiently.

## Features
- 🔥 **Real-time communication** using Redis Pub/Sub
- 📡 **Dynamic subscription** to multiple channels
- ⚡ **Fast and scalable architecture**
- 🚀 **Built with TypeScript and Express.js**
- 🛠 **Docker support for Redis setup**

---

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (>= 16.x recommended)
- [Redis](https://redis.io/docs/getting-started/)
- [Docker (optional)](https://www.docker.com/) for Redis setup

### 1️⃣ Clone the Repository
```sh
$ git clone https://github.com/anujaes/redis-pubsub.git
$ cd redis-pubsub
```

### 2️⃣ Install Dependencies
```sh
$ npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file in the root directory and configure it:
```env
PORT=5051
NODE_ENV='local'

REDIS_HOST="127.0.0.1"
REDIS_PORT=6379

PUBLISHERS_CHANNEL_A='example_channel_a'
PUBLISHERS_CHANNEL_B='example_channel_b'
SUBSCRIBER_CHANNEL_A='example_channel_a'
SUBSCRIBER_CHANNEL_B='example_channel_b'
```

### 4️⃣ Run Redis (If not installed locally)
If you don’t have Redis installed locally, you can use Docker:
```sh
$ docker run --name redis -d -p 6379:6379 redis
```

### 5️⃣ Start the Application
For development mode (using nodemon):
```sh
$ npm run dev
```

For production mode:
```sh
$ npm run build && npm start
```

---

## API Endpoints
### 🚀 Publish a Message
**Endpoint:** `POST /channels/publish-message`

**Request Body:**
```json
{
  "message": "Hello, Redis!"
}
```

**Response:**
```json
{
  "message": "Message published!"
}
```

### ✅ Check Server Health
**Endpoint:** `GET /`

**Response:**
```json
{
  "message": "💪 Server health ok! 💪"
}
```

---

## Project Structure
```
redis-pubsub/
│── src/
│   ├── config/        # Configuration files (Redis setup)
│   ├── controllers/   # API controllers
│   ├── routes/        # Express routes
│   ├── services/      # Business logic
│   ├── utils/         # Utility functions (Pub/Sub handlers)
│   ├── app.ts         # Express app setup
│   ├── index.ts       # Server entry point
│── .env.local         # Environment variables
│── package.json       # Dependencies & scripts
│── tsconfig.json      # TypeScript configuration
```

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repo
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Author
👨‍💻 **Anuj Kumar Singh**  
🔗 GitHub: [anujaes](https://github.com/anujaes)

