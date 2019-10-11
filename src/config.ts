let config = null;

interface Config {
  url: string;
}

/**
 * Lazy load config
 */
export const getConfig = (): Config => {
  if (!config) {
    const scripts = document.getElementsByTagName('script');
    const currentScript = scripts[scripts.length - 1];
    config = currentScript.dataset;
  }
  return config;
};
