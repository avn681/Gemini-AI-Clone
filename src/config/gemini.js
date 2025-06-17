
async function getGeminiResponse(prompt) {
  const response = await fetch('/api/gemini', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'API error');
  }

  const data = await response.json();
  return data.text;
}

export default getGeminiResponse;
