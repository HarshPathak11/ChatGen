# ChatGen

ChatGen is a full-stack chatbot application designed to rapidly generate well-structured HTML and CSS code for landing pages. It leverages a GenAI API (via Hugging Face) to provide expert-level code generation and offers a live preview of the generated code. Built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn UI components, it features authentication with NextAuth.js and persists user chat history in a PostgreSQL database via Prisma.

## Features

- **Authentication:** Secure sign-up and login using NextAuth.js with email/password.
- **Chat Interface:** A clean, modern chat interface where users input prompts and receive complete HTML/CSS code.
- **Live Preview:** Instant preview pane renders the generated code in real-time.
- **Persistent Chat History:** Stores each chat session (prompt and generated code) in the database, so returning users can see their previous interactions.
- **Responsive & Accessible UI:** Crafted with Tailwind CSS and shadcn UI components, supporting both light and dark themes using next-themes.
- **Advanced AI Prompting:** The system prompt is finely tuned to instruct the AI to produce expert-level, semantic, and responsive HTML with inline CSS.
- **Loading States:** Visual feedback during login and signup operations.

## Extra Features / Bonus Implementations

- **User Chat Persistence:** User interactions (chat history and latest generated code) are saved to the database and loaded automatically when the user returns to the chat page.
- **Optimized UI/UX:** The Navbar conditionally displays user profile and logout options if the user is authenticated.
- **Client & Server Integration:** Uses Next.js App Router API routes for a seamless integration between client and server, with custom API endpoints for signup, chat history, and AI code generation.
- **Modern Code Generation:** Leverages the Hugging Face Inference API with an expert system prompt to generate high-quality HTML/CSS code.

## Getting Started

### Prerequisites

- **Node.js** (v14 or above)
- **npm** or **yarn**
- A **PostgreSQL** database (or use SQLite for local development)
- Environment variables (see below)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/chatgen.git
   cd chatgen

2. **Install Dependancies:**

npm install
# or
yarn install

3. **Configure Environment Variables**

DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"
NEXTAUTH_SECRET="your-nextauth-secret"
HUGGINGFACE_API_TOKEN="your-huggingface-api-token"

4. **Set Up Prisma:**

Ensure your prisma/schema.prisma file includes the following:

prisma
Copy
datasource db {
  provider = "postgresql" // or "sqlite" if using SQLite
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id         String   @id @default(uuid())
  name       String
  email      String   @unique
  password   String
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  chats      Chat[]
}

model Chat {
  id        String   @id @default(uuid())
  prompt    String
  response  String
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id])
  userId    String
}

Then generate the Prisma client and run migrations:


npx prisma generate
npx prisma migrate dev --name init

5. **Run the Development Server:**

Finally run, 

npm run dev
# or
yarn dev

Open http://localhost:3000 in your browser.