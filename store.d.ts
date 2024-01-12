declare module 'ocean_parent/store/useTokenStore' {
  import { StoreApi, UseBoundStore } from 'zustand';

  type TokenStore = {
    token: string;
    setToken: (token: string) => void;
  };

  export const useTokenStore: UseBoundStore<StoreApi<TokenStore>>;
}
