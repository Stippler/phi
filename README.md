## Inspiration and Product
Weather data is becoming more detailed and at the same time more diverse and overwhelming. Meanwhile, the impact and relationship between climate and humans become more complex and the expectation increases for humans to act sustainably. As in many scenarios, the only way to accomplish change is to motivate humans from within to act.  

Challenged by these three pillars, we set out to bring the impact directly to the people and remove the need for weather apps altogether. No matter if we consider construction work, agriculture, or energy production, industry-tailored weather forecasts can play a crucial role. In this sense, we have created a time management tool powered by our AI to match the needs of each individual. This tool intelligently discerns, for instance, when an event is scheduled outdoors, suggesting that the user desires favorable weather conditions. Our tool will therefore automatically find weather parameters relevant to the user-specified task and regularly check if these will be favorable at a planned point in time and, if not, offer the ability to recommend a more suitable time. With more, and more complex data, individuals might lose track of relevant parameters, hence, tools like ours can have a great impact through their ability to dynamically filter the most relevant weather data specific to a task. Another benefit of this automatic selection is the fact that we can react to missing data or added parameters immediately.

## Key Benefits
**Scalability:** "W(h)e(a)ther Or Not" dynamically selects parameters, leveraging advanced language models for zero-shot learning and immediate enhanced reasoning capabilities for tailored applications.
**Endpoint Flexibility:** "W(h)e(a)ther Or Not" adapts to changes in parameters, accommodating new ones with ease and handling missing ones.

## Tech-Stack
We use FastAPI and a Next.js. Leveraging the weather data from the ILB endpoints, we combined them with a Large-Language-Model (LLM), to query task-relevant weather parameters and subsequently weather data to make a weather-informed decision.

## Challenges
Fine-tuning prompts for reliable form filling and parameter extraction proved to be challenging. Additionally, identifying relevant collections from provided endpoints by ILB required a lot of attention to detail.

## Accomplishments
A working, publicly accessible (for now) application.

## Take-Aways
Our journey provided valuable insights into leveraging OpenAI API for queries and diving a bit into MongoDB for data management.

## Next Steps for WeatherOrNot
Future enhancements include increased robustness through fine-tuning language models, the integration of notification support and training a Masked Auto-Encoder to make predictions more resilient in case of data loss and outages.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
