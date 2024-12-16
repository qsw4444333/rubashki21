export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const api_url = config.public.APP_API_URL || "";

  const api = $fetch.create({
    baseURL: api_url,
    headers: {
      Accept: "application/json",
    },
    onRequest({ options }) {
      const token = useCookie("token");
      if (token.value) {
        options.headers = new Headers(options.headers);
        options.headers.set("Authorization", `Bearer ${token.value}`);
      }
    },
    onResponseError({ response }) {
      throw response?._data;
    },
  });

  return {
    provide: {
      api,
      apiTest: api,
    },
  };
});

export const useApi = () => {
  return useNuxtApp().$api;
};

export const withApi = async <T>(
  callback: (api: ReturnType<typeof useApi>) => Promise<T>
): Promise<T> => {
  const api = useApi();
  return await callback(api);
};
