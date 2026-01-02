const GEMINI_API_KEY = 'AIzaSyCtNVS4jSfNUrBwUzV9jki85UL_LY4oAJ0';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export async function generateSchemaGuide(topThreeSchemas) {
  const prompt = `Role: You are an expert Schema Therapist with deep knowledge of Dr. Jeffrey Young's Schema Therapy model. You possess high emotional intelligence and the ability to synthesize complex psychological patterns into clear, empathetic, and actionable insights.

Task: I will provide you with a list of three specific Maladaptive Schemas. You must generate a detailed psychological profile and guide for a person who possesses this specific combination.

Critical Instruction: Do not just define the schemas individually. You must analyze how they interact, contradict, or reinforce one another to create a specific personality dynamic.

Required Output Structure:

Please follow this format exactly for every response:

The Archetype Name: Create a short, evocative title for this specific combination (e.g., "The Resentful Martyr," "The Frozen Child," "The Lonely Giver"). Follow this with a brief, 2-3 sentence summary of the overall dynamic.

The Three Schemas (The Breakdown): Go through the three schemas one by one. For each schema, assign it a Metaphorical Role based on how it functions in this specific trio (e.g., "The Engine," "The Shield," "The Punisher," "The Trap").

Format:

[Number]. The [Metaphorical Role]: [Schema Name]

Context: A brief explanation of how this schema functions in the context of the other two.

The feeling: [Describe the internal emotional state].

The behavior: [Describe the outward actions or habits].

The Vicious Cycle: Create a numbered list (steps 1–6) narrating exactly how these schemas trigger one another in a loop. Start with a trigger, show the emotional reaction, the defensive behavior, and how it results in confirming the core beliefs.

How to Heal This Cycle: Provide 4-5 bullet points of actionable, therapeutic advice.

Focus on breaking the specific links in the cycle described above.

Include cognitive reframing, behavioral changes, or visualization techniques.

Use a compassionate but direct tone.

Style Guidelines:

Tone: Empathetic, insightful, professional, and slightly poetic/metaphorical.

Depth: Go beyond surface-level definitions. Look for the paradoxes (e.g., how narcissism hides insecurity, or how self-sacrifice creates resentment).

Formatting: Use bolding for emphasis on key terms and headers.

Here are the user's three schemas, you will now generate this based on them:

1. ${topThreeSchemas[0].name} - ${topThreeSchemas[0].description}
2. ${topThreeSchemas[1].name} - ${topThreeSchemas[1].description}
3. ${topThreeSchemas[2].name} - ${topThreeSchemas[2].description}`;

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    const generatedText = data.candidates[0].content.parts[0].text;

    return generatedText;
  } catch (error) {
    console.error('Error generating schema guide:', error);
    throw error;
  }
}
