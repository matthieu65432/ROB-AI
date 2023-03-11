import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'



dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log(configuration)

const openai = new OpenAIApi(configuration);

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from CodeX!'
  })
})


app.post('/', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const { temperature, max_tokens, top_p, frequency_penalty, presence_penalty } = req.body;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: temperature ?? 0,
      max_tokens: max_tokens ?? 2048,
      top_p: top_p ?? 1,
      frequency_penalty: frequency_penalty ?? 0,
      presence_penalty: presence_penalty ?? 0
    });

    res.status(200).send({
      bot: response.data.choices[0].text
    });

  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})

app.listen(5142, () => console.log('AI server started on http://localhost:5142'))
