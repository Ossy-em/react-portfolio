import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center">
          <img className="rounded-2xl max-w-full h-auto" src={aboutImg} alt="About" />
        </div>
        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:p-8 flex items-center">
          <p className="my-2 max-w-2xl py-6 text-center lg:text-left">{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
