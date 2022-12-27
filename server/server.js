import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

// Set up configuration for OpenAI API
const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});

// Create instance of OpenAIApi with the configured options
const openai = new OpenAIApi(configuration);

// Initialize express app
const app = express();

// Use CORS and JSON middleware
app.use(cors());
app.use(express.json());

// GET route for testing
app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from Veridid',
  });
});

// POST route for handling user input and returning a response from the OpenAI API
app.post('/', async (req, res) => {
  try {
    // Get user input from the request body
    const prompt = req.body.prompt;

    // Use OpenAI API to generate a response based on the user input
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${prompt}`,
      temperature: 0, // Higher values means the model will take more risks.
      max_tokens: 100, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
      top_p: 1, // alternative to sampling with temperature, called nucleus sampling
      frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
      presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    });

    res.status(200).send({
      bot: response.data.choices[0].text
    });

  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})

app.listen(5001, () => console.log('AI server started on http://localhost:5001'))
