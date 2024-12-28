import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function WebDevelopmentPage() {
  return (
    <article className="container mx-auto px-20 py-10 mt-2 max-w-5xl max-auto">
      <section className="relative py-12 lg:py-24 mt-16 max-w-8xl mx-auto">
        <div className="relative w-full">       
          <Image
            className="w-80 mt-12 h-auto rounded-full shadow-lg mx-auto"
            src="/about.avif"
            width="400"
            height="300"
            alt="image"
          />
        </div>
        <p className="text-[18px] font-normal dark:text-black mt-12 mx-auto text-center">About Me</p>
        <p className="text-[18px] mt-2 font-[200] dark:text-black text-center leading-relaxed">
          Hi! My name is Bella Davies, and I&apos;m a passionate and dedicated college senior at Boston University majoring in Data Science with a minor in Economics. My coursework, internships, and projects have equipped me with a solid foundation in mathematics, statistics, and computer science. With a strong understanding of data manipulation, statistical analysis, and predictive modeling, I&apos;ve embarked on a journey to unravel the insights hidden within data and turn them into meaningful solutions to drive positive impacts.
        </p>
        <p className="text-[18px] font-normal dark:text-black mt-12 mx-auto text-center">Passion for Data-Driven Insights</p>
        <p className="text-[18px] mt-2 font-[200] dark:text-black text-center leading-relaxed">
          I am truly fascinated by the power of data to drive informed decision-making. I thrive on exploring large datasets, identifying patterns, and extracting valuable insights to solve complex problems. My curiosity and analytical mindset push me to continuously seek innovative approaches to solving real-world problems using data-driven strategies.
        </p>
        <p className="text-[18px] font-normal dark:text-black mt-12 mx-auto text-center">Technical Proficiency</p>
        <p className="text-[18px] mt-2 font-[200] dark:text-black text-center leading-relaxed">
          I have honed my skills in the Python programming language, and I am proficient in utilizing tools like Pandas, Matplotlib, and Scikit-Learn. I have hands-on experience with data preprocessing, feature engineering, and building predictive models. Additionally, I have hands-on experience with data engineering and data management via Microsoft Azure cloud computing platform, and creating impactful visualizations via Tableau software and Microsoft Power BI.
        </p>
        <p className="text-[18px] font-normal dark:text-black mt-12 mx-auto text-center">Projects and Experience</p>
        <p className="text-[18px] mt-2 font-[200] dark:text-black text-center leading-relaxed">
          From analyzing complex datasets to delivering data-driven recommendations for class projects as well as personal projects, I&apos;ve applied my skills to extract actionable insights for a variety of intriguing data science applications. Additionally, throughout my past internships, I&apos;ve collaborated with several cross-functional teams to conduct data analysis and develop visualizations to facilitate strategic decision-making.
        </p>
        <p className="text-[18px] font-normal dark:text-black mt-12 mx-auto text-center">Constant Learner and Team Player</p>
        <p className="text-[18px] mt-2 font-[200] dark:text-black text-center leading-relaxed">
          I believe in the importance of continuous learning in the ever-evolving field of technology and data science. New and emerging technologies in machine learning and artificial intelligence are especially exciting to me and I actively engage with online courses and workshops to stay up-to-date with the latest industry trends. My ability to work collaboratively shines through in group projects, hackathons, and team challenges.
        </p>
        <p className="text-[18px] font-normal dark:text-black mt-12 mx-auto text-center">Future Aspirations</p>
        <p className="text-[18px] mt-2 font-[200] dark:text-black text-center leading-relaxed">
          As I near the end of my undergraduate journey, I&apos;m excited to leverage my data science background and skills to make a positive impact in the world. I am actively seeking opportunities to contribute to a forward-thinking organization where I can apply my knowledge to solve complex problems and innovate with data.
        </p>
        <p className="text-[18px] font-normal dark:text-black mt-12 mx-auto text-center">Connect With Me</p>
        <p className="text-[18px] mt-2 font-[200] dark:text-black text-center leading-relaxed">
          I&apos;m always eager to connect with fellow data enthusiasts, professionals, and potential mentors. Let&apos;s discuss data science, share insights, and explore new possibilities together. Feel free to reach out to me via LinkedIn, and check out my GitHub profile!
        </p>

        <div className="flex justify-center mt-8 space-x-4">
          <Link href="https://www.linkedin.com/in/bellad21992" passHref>
            <Button 
              className="font-light rounded-full bg-gray-800 text-white px-5 text-[18px] hover:bg-gray-900" 
              style={{ height: '51px' }} 
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </Link>
          <Link href="https://github.com/bellad21992" passHref>
            <Button 
              className="font-light rounded-full bg-gray-800 text-white px-5 text-[18px] hover:bg-gray-900" 
              style={{ height: '51px' }} 
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
          </Link>
        </div>
        <p className="text-[18px] font-normal dark:text-black mt-12 mx-auto text-center">Personal Interest and Hobbies</p>
        <p className="text-[18px] mt-2 font-[200] dark:text-black text-center leading-relaxed">
          Outside of data science and analytics, I enjoy traveling, arts, food, and music! I love to explore new places and try new things. Some of my favorite activities include hiking, running, skiing, cooking, painting, and reading. Here are some pictures from my recent trips!
        </p>

        <div className="relative w-full flex justify-center mt-8">
          <Image
            className="w-auto h-auto rounded-lg shadow-lg"
            src="/about_2.avif"
            width="400"
            height="300"
            alt="Hobbies"
          />
        </div>
        <p className="text-[18px] mt-20 font-[200] dark:text-black text-center leading-relaxed">
          Thank you for visiting my website, and I look forward to connecting with you!
        </p>
      </section>
    </article>
  )
}
