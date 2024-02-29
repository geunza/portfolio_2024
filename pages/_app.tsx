import GlobalLayout from "@/components/layout/GlobalLayout";
import { persistor, store, wrapper } from "@/store";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "@/styles/reset.css";
import "@/styles/global.scss";
declare const chatbotObj: any;
const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="imagetoolbar" content="no" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <GlobalLayout>
              <Component {...pageProps} />
            </GlobalLayout>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
};
export default wrapper.withRedux(App);
