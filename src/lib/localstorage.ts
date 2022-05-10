const storage = window.localStorage;

function write(key: string, value: any) {
  storage.setItem(key, JSON.stringify({ value }));
}

function read(key: string): object | null {
  const data = storage.getItem(key);
  return data ? JSON.parse(data).value : null;
}

function remove(key: string) {
  storage.removeItem(key);
}

export const localstorage = { write, read, remove };
