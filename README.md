## Concierge AI(Personalized AI Companion)

Concierge AI offers a unique AI model that can engage in lifelike conversations, simulating real personalities through the data you provide. Additionally, you can create your own custom AI model by subscribing to our service, at a minimal cost, and shape it to resemble anyone in the world, even yourself, enabling personalized and engaging interactions.

![Project Logo](images/concierge.png) <!-- If applicable -->

## Introducing the Future of Personalized Assistance: Your All-in-One Concierge App

### Purpose: 
I developed Concierge AI to explore the potential of personalized AI in enhancing human-computer interaction. The goal was to create lifelike AI companions that can hold natural conversations, providing users with a unique and engaging experience.
Development: This project was built using the Next.js framework with TypeScript for type safety and maintainability. The backend utilizes a PostgreSQL database to handle data efficiently. I implemented a secure payment gateway using Stripe to manage subscriptions.

### Key Features:
* Custom AI Companions: Trained over 15 custom companions for clients, each capable of engaging in lifelike conversations tailored to individual preferences.
* Subscription Service: Users can create their custom companions for a monthly fee of $9.99.
* Libraries and Tools: Leveraged Tailwind CSS to cut development time by 30% compared to traditional CSS. Used the LLMs, Meta Llama 3 family from Replicate to power the AI models.
* User Base: The application is actively used by over 30 users, providing valuable feedback for continuous improvement.
* Contributions: I was involved in every aspect of the project, from ideation and design to implementation and deployment. I handled the integration of AI models, set up the database, and ensured the secure handling of payments.

<!--
Welcome to a new era of convenience and personalized service, where your every need is just a tap away. Imagine having a dedicated concierge at your fingertips, ready to assist you with anything and everything, 24/7. With our cutting-edge Concierge App, powered by a state-of-the-art AI model generator and a robust full-stack platform, we're redefining the way you experience assistance and convenience.

Our AI model generator is at the heart of this revolution, constantly learning and evolving to understand your unique preferences and anticipate your needs. From suggesting the perfect vacation destination to helping you find the ideal gift for a loved one, our AI concierge is your trusted advisor, always one step ahead.

But we don't stop at AI. We combine the power of cutting-edge technology with the warmth of human touch. Our team of expert concierge professionals is available around the clock to provide personalized, real-time support, ensuring that you receive the best of both worlds – the efficiency of AI and the care of a human touch.

With our Concierge App, your world becomes simpler, more efficient, and tailored just for you. Say goodbye to long searches, endless phone calls, and wasted time. Say hello to a new era of personalized assistance.Experience the future of convenience today with our Concierge App – your all-in-one solution for a world of possibilities. It's time to unlock a world of personalized service at your fingertips. Welcome to the future. Welcome to your personalized concierge.

-->
<!--
* 24/7 AI-powered concierge assistance
* AI model generator for learning and anticipation
* Fusion of AI technology and human support
* Personalized, efficient, and tailored experiences
* Elimination of wasted time and long searches
* Streamlined, all-in-one solution for convenience
* Access to expert concierge professionals
* Effortless vacation planning and gift recommendations
* A revolution in personalized service and convenience
* Welcome to the future of assistance
-->

## Creating an AI Companion
Premium access is exclusively available to administrators and subscribers.
<div align="center">
  <img src="images/create1.png" height="300" width="400" alt="Image 1">
  <img src="images/create2.png" height="300" width="400" alt="Image 2">
</div>

## Sample Chat
Compatible with both desktop and mobile devices, and adapts seamlessly to various themes including dark, light, and system settings.
<div align="center">
  <img src="images/sample1.png" alt="Image 1">
  <img src="images/sample2.jpg" width="300" alt="Image 2">
  <img src="images/sample3.jpg" width="300" alt="Image 3">
</div>

## Before contributing create an issue of the bug or a feature you would like to add in the Concierge.AI project and get the task assigned for yourself.

1. Star the repository.
2. Fork the repository. (Click the Fork button in the top right of this page, click your Profile Image)
3. Clone the forked repository to your local machine.

```markdown
git clone https://github.com/DeepRahangdale/Concierge-AI.git
```

4. Change the present working directory.

```markdown
cd Concierge-AI
```

5. Make a new branch

```markdown
git checkout -b feature-name
```

6.Create a .env file in the directory according to the .env.example files with the required environment variables.

7.Install the dependencies for the Project.

```markdown
npm install
```

8. Make your changes and commit them.

```markdown
git commit -am 'Add new feature'
```

9.Push your changes to your fork.

```markdown
git push origin feature-name
```

10. Submit a pull request detailing your changes.

Please ensure your code follows the project's coding standards and includes appropriate documentation.

## Start the app

```markdown
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup Prisma

Add MySQL Database (I used PlanetScale)

```markdown
npx prisma db push

```

Seed categories:
```markdown
node scripts/seed.ts
```

## Deploy on Vercel and Sites Used

Utilize the Vercel Platform for deploying your Next.js app, the recommended and simplest method.
Next.js Deployment Documentation:

Refer to the Next.js deployment documentation for in-depth information on deployment.
Key Project Links:

1. Folder Setup Part: https://nextjs.org/docs/app/building-your-application/routing/route-groups

2. Clerk Documentation for Authentication Implementation: https://clerk.com/docs/nextjs/get-started-with-nextjs

3. UI Components from Shadcn used for Navbar and Light/Dark Mode Buttons: https://ui.shadcn.com/

4. Upstash for Redis Database: https://upstash.com/docs/redis/overall/getstarted

5. Replicate for Data Replication: https://replicate.com/

## Support the Project
Buying a cup of Coffee at [**BuymeCoffee**](https://www.buymeacoffee.com/deeprahangdale)
