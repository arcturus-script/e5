export function getPath() {
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;

  if (import.meta.env.DEV) {
    return `${protocol}//${hostname}:${window.location.port}`;
  }

  return `${protocol}//${hostname}`;
}

export function log(msg: any, ...options: any[]) {
  if (import.meta.env.DEV) {
    console.log(msg, ...options);
  }
}

export function get(key: string) {
  return localStorage.getItem(key);
}

export function save(key: string, value: string) {
  localStorage.setItem(key, value);
}
