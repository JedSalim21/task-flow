const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <p className="text-center mt-10 text-lg text-slate-600 hover:text-slate-500">
        © Copyright {year} All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
