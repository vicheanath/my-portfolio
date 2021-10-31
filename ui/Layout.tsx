import { Fragment } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NextNProgress from "nextjs-progressbar";

interface LayoutProps {
    children: React.ReactNode;
    pageProps: any;
}

const Layout = ({ children, pageProps }: LayoutProps) => {
    return <Fragment {...pageProps}>
        <NextNProgress height={3} color="#000000" />
        <Navbar {...pageProps} />
        {children}
        <Footer {...pageProps} />
    </Fragment>
}

export default Layout;