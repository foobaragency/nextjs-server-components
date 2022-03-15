const cache: any = {};

export default function useData<T>(key: string, fetcher: () => Promise<T>): T {
  if (!cache[key]) {
    let data: any;
    let promise: any;
    cache[key] = () => {
      if (data !== undefined) return data;
      if (!promise) promise = fetcher().then((r) => (data = r));
      throw promise;
    };
  }
  return cache[key]();
}
