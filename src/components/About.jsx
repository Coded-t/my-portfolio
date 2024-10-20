import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
          

               Hi, I'm Haruna Samuel, a passionate Software Developer with a knack for creating 
               intuitive and efficient mobile applications and web applications
              I specialize in building cross-platform apps that provide
               seamless user experiences on both Android.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
