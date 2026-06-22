const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="fixed bottom-0 left-0 w-full">
      <p className="text-center mt-10 text-lg text-slate-600 hover:text-slate-500 ">
        © Copyright {year} All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
