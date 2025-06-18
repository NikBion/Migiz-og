
const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-black/20 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              MIGIZ CRYPTO SHOPPING
            </h3>
            <p className="text-white/60 text-sm">
              The future of shopping with cryptocurrency
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/40 text-xs">
                © 2024 Migiz. All rights reserved. | Powered by blockchain technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
