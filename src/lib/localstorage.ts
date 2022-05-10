const storage = window.localStorage;

function write(key: string, value: any) {
  const expire = Date.now() + 1 + 1000 * 60 * 60 * 24;
  storage.setItem(key, JSON.stringify({ value, expire }));
}

function read(key: string): object | null {
  const data = storage.getItem(key);
  if (data) {
    const { value, expire } = JSON.parse(data);
    if (Date.now() > expire) return null;
    return value;
  }

  return null;
}

export const localstorage = { write, read };
