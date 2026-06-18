import { getServerConfig } from "../config.server";

type GreetingInput = {
  name: string;
};

type GreetingResult = {
  greeting: string;
  mode: string;
};

// Example server-side helper invoked from the client:
//   const result = await getGreeting({ data: { name: "Ada" } })
export async function getGreeting({ data }: { data: GreetingInput }): Promise<GreetingResult> {
  if (!data.name || data.name.trim().length === 0) {
    throw new Error("Name is required.");
  }

  const config = getServerConfig();
  return {
    greeting: `Hello, ${data.name}!`,
    mode: config.nodeEnv ?? "unknown",
  };
}
