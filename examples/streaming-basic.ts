import PremAI from 'premai';

async function main() {
  const client = new PremAI({
    apiKey: '',
    baseURL: 'https://studio.premai.io',
  });

  const stream = await client.chat.completions({
    messages: [{ role: 'user', content: 'Write a haiku about programming' }],
    model: 'claude-4.5-haiku',
    stream: true,
  });

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) {
      process.stdout.write(content);
    }
  }

  console.log('\n');
}

main().catch(console.error);
