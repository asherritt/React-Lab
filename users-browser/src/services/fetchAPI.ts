const ABORT_DURATION = 5000;

export const fetchData = async (url: string, options: RequestInit = {}) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // Auto-abort after 5s

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(options.headers || {}),
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('Fetch request aborted');
      } else {
        console.error('Fetch Error:', error);
      }
    } else {
      console.error('Unknown error:', error);
    }
    throw error;
  }
};

export const fetchWithAbort = async (url: string = '') => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ABORT_DURATION);
  try {
    return await fetchData(url, { signal: controller.signal });
  } catch (error) {
    console.error('Request aborted:', error);
  }
};
