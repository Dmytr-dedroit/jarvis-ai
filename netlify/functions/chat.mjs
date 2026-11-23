export default async (req) => {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405 }
    );
  }

  try {
    const { message } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "API key is missing" }),
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: "Ти JARVIS — розумний персональний AI-помічник. Відповідай українською, чітко та дружньо."
            },
            { role: "user", content: message }
          ]
        })
      }
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
};
