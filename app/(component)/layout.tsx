import Header from "./header/page";

function HomePage({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <Header />
            <div>{children}</div>
        </>
    )
}
export default HomePage;