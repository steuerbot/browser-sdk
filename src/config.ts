const config: Config = {
  url: null,
};

// get config out of current script tag
if (typeof document !== 'undefined') {
  let { currentScript } = document;
  if (!currentScript) {
    const scripts = document.getElementsByTagName('script');
    currentScript = scripts[scripts.length - 1];
  }
  if (currentScript.dataset.url) {
    config.url = currentScript.dataset.url;
  }
}

interface Config {
  url: string;
}

/**
 * Lazy load config
 */
export const getConfig = (): Config => {
  return config;
};
