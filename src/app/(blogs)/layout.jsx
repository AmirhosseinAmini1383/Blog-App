import Header from "@/components/Header";

function layout({ children }) {
  return (
    <>
      <Header />
      <div className="container xl:max-w-screen-xl">{children}</div>
    </>
  );
}

export default layout;
