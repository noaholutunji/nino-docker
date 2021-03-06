import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from 'next/app';
import rootReducer from '../src/store/reducers/rootReducer';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import Layout from '../src/components/Layout/Layout';

type Props = {
  Component: React.Component;
  store: Store;
};

const stored = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps: pageProps };
  }

  render() {
    const { store, Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>NinoStyle</title>
        </Head>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>

        <style global jsx>{`
          html {
            display: flex;
            flex-direction: column;
            position: relative;
            min-height: 100%;
          }
          body {
            flex: 1;
            margin: 0 0 100px;
          }
          #FooterStyle {
            background-color: #007bff;
            position: absolute;
            bottom: 0;
            width: 100%;
            left: 0;
            overflow: hidden;
          }
        `}</style>
      </>
    );
  }
}

export default withRedux(stored)(MyApp);
