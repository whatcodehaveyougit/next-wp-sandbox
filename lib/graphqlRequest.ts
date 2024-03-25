export default async function graphqlRequest<T extends Record<string, unknown>>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const response = await fetch("https://myriadspectrum.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  });
  const { data, errors } = await response.json();
  console.log("helo data");
  console.log(JSON.stringify(data));
  if (errors) {
    throw new Error(errors[0].message);
  }
  return data;
}
