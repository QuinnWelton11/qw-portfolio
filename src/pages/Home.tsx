import Headshot from "../assets/qw-hs-img.webp";

export default function Home() {
  return (
    <div className="text-white">
      <section className="flex flex-col md:flex-row justify-center bg-white/10 backdrop-blur-sm border border-cyan-400/20 shadow-cyan-300/10 shadow-md rounded-2xl l p-3 gap-3">
        <img
          src={Headshot}
          alt=""
          className="md:max-w-xs rounded-2xl shadow-cyan-300/10 shadow-md"
        />
        <div className="mt-2 px-4">
          <h2 className="text-xl text-cyan-200 mb-3">Hi, I'm Quinn!</h2>
          <p className="md:text-left mr-2">
            I am a Front-End Web Developer focused on responsive webpages with
            modern designs!
          </p>
        </div>
      </section>

      <section id="featured_projects"></section>
    </div>
  );
}
