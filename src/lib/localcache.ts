const storage: Storage = window.localStorage;

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

function remove(key: string) {
  storage.removeItem(key);
}

export const localcache = { write, read, remove };
