export default async function fetchData<T>(url: string, delay = 0): Promise<T> {
  const [res] = await Promise.all([
    fetch(url),
    new Promise((res) => setTimeout(res, Math.random() * delay)),
  ]);
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res.json();
}
