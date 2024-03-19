import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Profile from "../Components/Profile";
import React from "react";

const members = [
  {
    id: 1,
    name: "Archit Kumar",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Archit Kumar",
    role: "CEO",
    bio: "Archit is a data enthusiast with a passion for applying mathematics to real-world problems, aiming to major in actuarial science. When he's not analyzing data or solving equations, Archito's on the tennis court, where he finds joy in the strategic challenges of the game.",
  },
  {
    id: 2,
    name: "Abyan Das",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Archit Kumar",
    role: "Co-Founder, COO",
    bio: "Abyan is currently studying Economics and Data Science at UC Berkeley with an interest in policymaking through data-driven analytics.",
  },
  {
    id: 3,
    name: "Monish Muralicharan",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Archit Kumar",
    role: "Co-Founder",
    bio: "Monish is a Computer Science major at Purdue University currently working in software engineering and data science research.",
  },
  {
    id: 4,
    name: "Sanjay Adhikesaven",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Archit Kumar",
    role: "Co-Founder",
    bio: "Sanjay is an Elecreical engineering and computer science major at UC Berkeley interested in Artificial Intelligence and Public Policy.",
  },
  {
    id: 5,
    name: "Riya Datla",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Archit Kumar",
    role: "CFO",
    bio: "Senior at Foothill High School. Competitor in a civic education program. Energetic advocate for youth activism. Dedicated to helping communities of all kinds, both in and out of school. Enjoys  working with children and building personal connections.",
  },


  {
    "id": 4,
    "name": "Tanvi Kapse",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "ELA"],
    "bio": "Tanvi has Math Olympiad Experience and enjoys reading, writing, and tennis. She also has won numerous creative writing awards."
  },
  {
    "id": 5,
    "name": "Shreya Pandey",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science"],
    "bio": "Shreya is in 9th grade and excels in Math and Science. She has participated in the Science Olympiad and is fluent in Hindi, learning French. Shreya is also an Honor Roll Student."
  },
  {
    "id": 6,
    "name": "Ethan Ngo",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science"],
    "bio": "Ethan is in 11th grade and excels in Math and Science. He has participated in the Science Olympiad and is fluent in Hindi, learning French. Ethan is also an Honor Roll Student."
  },
  {
    "id": 7,
    "name": "Urja Vaidya",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science", "ELA", "History"],
    "bio": "A 9th grader with awards in AMC and Math Olympiad. Spelling Bee Champion and Science Olympiad Experience."
  },
  {
    "id": 8,
    "name": "Ryan Arakal",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science"],
    "bio": "10th grader with straight A's in Science. Enjoys Chemistry, Astrology, and received an Award for Education Excellence."
  },
  {
    "id": 9,
    "name": "Arul Dhar",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science"],
    "bio": "A 9th grader with Science Olympiad Experience, bilingual in Spanish and English, and active in competitive soccer."
  },
  {
    "id": 10,
    "name": "Michelle Chen",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "ELA"],
    "bio": "UC Berkeley student with expertise in Economic, Business, and Statistics. Experienced in Advanced Math and enjoys music and the Violin."
  },
  {
    "id": 11,
    "name": "Harini Gandhimathi",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science"],
    "bio": "A 9th grader with 4 years of Violin Experience, passionate in Math, and known for being open-minded and hardworking."
  },
  {
    "id": 12,
    "name": "Pranav Nethi",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science", "History"],
    "bio": "An 11th grader who has taken up to AP Calculus, completed all History classes offered, and known for being hardworking and committed."
  },
  {
    "id": 13,
    "name": "Katherine Yeh",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science", "ELA"],
    "bio": "A 10th grader with Summer Camp Experience, A's in Honors English, and fluent in English and Chinese."
  },
  {
    "id": 14,
    "name": "Ashwin Prakash",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science", "History"],
    "bio": "A 9th grader and Secretary of Robotics Club, Model UN and Debate Success, and two years ahead in Math."
  },
  {
    "id": 15,
    "name": "Karen Wan",
    "href": "#",
    "role": "Tutor",
    "subjects": ["ELA", "Science", "History"],
    "bio": "A 10th grader with 5 Years of Flute Experience, enjoys Reading and Writing, and part of Varsity Cross Country."
  },
  {
    "id": 16,
    "name": "Jessup Byun",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science", "ELA", "History"],
    "bio": "A 9th grader who enjoys tennis, gaming, and chess. Two years ahead in Math and an Honors English Student."
  },
  {
    "id": 17,
    "name": "Aarnav Reddy",
    "href": "#",
    "role": "Tutor",
    "subjects": ["History", "Science"],
    "bio": "A 9th grader with 3 years of Public Forum Debate, proactive in academics, and taken Biology and Honors History."
  },
  {
    "id": 18,
    "name": "Maanya Raguram",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science"],
    "bio": "A 9th grader with a Third-degree Black Belt, State Award for Piano, and part of the ELA Book Club."
  },
  {
    "id": 19,
    "name": "Ally Chiang",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math"],
    "bio": "A 10th grader who is 1 year ahead in Math, has Summer Camp Experience, and 7 Years of Piano."
  },
  {
    "id": 20,
    "name": "Akshat Singhania",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science", "Alto Sax"],
    "bio": "A 10th grader who is 2 years ahead in math, has been playing Alto Sax for 4 years, and has previous tutoring experience."
  },
  {
    "id": 21,
    "name": "Shreyas Nayak",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Chess"],
    "bio": "A 10th grader who has been playing Chess for 7 years, is a 5 Time CA State Champion, and in the top 50 in the US for his age."
  },
  {
    "id": 22,
    "name": "Abhirup Mora",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science"],
    "bio": "A 10th grader with previous tutoring experience, three years ahead in math, and enrolled in honors courses."
  },
  {
    "id": 23,
    "name": "David Signore",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science"],
    "bio": "A 10th grader with Science Olympiad Experience, fluent in Hindi, learning French, and an Honor Roll Student."
  },
  {
    "id": 24,
    "name": "Nourah Hallaj-Pour",
    "href": "#",
    "role": "Tutor",
    "subjects": ["ELA", "History"],
    "bio": "An 11th grader and a volleyball player and coach. Fluent in Farsi, learning French, and a small business owner."
  },
  {
    "id": 25,
    "name": "Ria Dadia",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science", "ELA", "Violin"],
    "bio": "A 10th grader, highest scorer in MathCounts, has been playing the violin for 11 years, and is an Honor Roll Student."
  },
  {
    "id": 26,
    "name": "Aria Roach",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Violin", "Viola"],
    "bio": "A 12th grader who has been playing the violin for 12 years, the viola for 6 years, and has won scholarships for music."
  },
  {
    "id": 27,
    "name": "Aditya Warrier",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "ELA"],
    "bio": "A 9th grader enrolled in advanced math, enjoys playing the violin, and coding."
  },
  {
    "id": 28,
    "name": "Akarsh",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Spanish", "Coding"],
    "bio": "A 10th grader who has been coding for 3 years, is good at playing drums & guitar, and is ahead in math by 2 years."
  },
  {
    "id": 29,
    "name": "Maisha Sharma",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math"],
    "bio": "A 9th grader with Math Olympiad Experience, fluent in Hindi, learning French, and enrolled in advanced math."
  },
  {
    "id": 30,
    "name": "Shashwat Sahoo",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Art"],
    "bio": "A 7th grader who does track and field, knows several art styles, and has been doing arts for years."
  },
  {
    "id": 31,
    "name": "Declan McPherson",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "ELA"],
    "bio": "A 9th grader enrolled in advanced math, enrolled in advanced English, and is hardworking and dependable."
  },
  {
    "id": 32,
    "name": "Nitish Vobilisetti",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Coding"],
    "bio": "An 11th grader with previous tutoring experience, taken many AP courses, and is a Varsity Debater."
  },
  {
    "id": 33,
    "name": "Nathan Pinheiro",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science"],
    "bio": "An 11th grader who has taken AP math and science, is hardworking and determinate, and has a calm and collected nature."
  },
  {
    "id": 34,
    "name": "Evan Tian",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "ELA", "History", "Origami"],
    "bio": "A 10th grader and Division 1 Basketball Player, fluent in Mandarin, with high GPAs in 9th and 10th grade."
  },
  {
    "id": 35,
    "name": "Jessica Bakar",
    "href": "#",
    "role": "Tutor",
    "subjects": ["ELA", "History", "French"],
    "bio": "A 10th grader, part of the Color Guard Program, got a gold medal in French Exam, and enrolled in advanced English."
  },
  {
    "id": 36,
    "name": "Adway Sane",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Coding"],
    "bio": "A 10th grader who finished a Certified Coding Course, enrolled in many Honors and AP's, and is very good at chess with high ratings."
  },
  {
    "id": 37,
    "name": "Karan Virk",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math"],
    "bio": "A 10th grader enrolled in advanced math, part of the Biomedical Course, and enjoys English writing."
  },
  {
    "id": 38,
    "name": "Rayna Vora",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science", "ELA", "History"],
    "bio": "A 10th grader with Science Olympiad Experience, bilingual (learning Spanish), and a Social Justice Activist for GirlUp."
  },
  {
    "id": 39,
    "name": "Aarushi Jain",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "ELA"],
    "bio": "A 10th grader who has taken many honors courses, swims competitively, and is fluent in Hindi (learning Spanish)."
  },
  {
    "id": 40,
    "name": "Suhani Jha",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Biomed", "ELA", "History", "Math"],
    "bio": "An 11th grader with 3 years of Biomed experience, has written scripts for annual plays, and has been dancing for 10 years."
  },
  {
    "id": 41,
    "name": "Ayush Gupta",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Coding", "Drawing"],
    "bio": "An 11th grader who has won many coding contests, plays Volleyball for the school team, and won 2nd place for drawing."
  },
  {
    "id": 42,
    "name": "Ria Vinodkumar",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science"],
    "bio": "A 9th grader with previous tutoring experience, well-versed in math and science, and involved in community events."
  },
  {
    "id": 43,
    "name": "Aman Nadkarni",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "ELA"],
    "bio": "A 10th grader who has played drums for 7 years, enrolled in advanced math, and involved in the community."
  },
  {
    "id": 44,
    "name": "Abhimanyu Warrier",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science", "History"],
    "bio": "A 10th grader with the ability to code in Java, passionate about debate, and enrolled in advanced courses."
  },
  {
    "id": 45,
    "name": "Suchir Tumuluru",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math"],
    "bio": "A 12th grader taking AP math courses and math courses in University, also a Varsity Tennis Player."
  },
  {
    "id": 46,
    "name": "Julia Smith",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Science", "ELA", "French"],
    "bio": "A 12th grader who taught children at Kumon, an AP and Honors student, and a TA at an elementary school."
  },
  {
    "id": 47,
    "name": "Austin Chen",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Coding"],
    "bio": "A 10th grader enrolled in AP math and coding, got 2nd place in a math contest, and has been in the band for 3 years."
  },
  {
    "id": 48,
    "name": "Yash Pathak",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math"],
    "bio": "A 12th grader ranked 13th in Math Olympiad, enjoys playing the piano, and has taken AP math courses."
  },
  {
    "id": 49,
    "name": "Jacob Roach",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math"],
    "bio": "A 10th grader who enjoys playing baseball, volunteered at summer camps, and is enrolled in AP/Honors courses."
  },
  {
    "id": 50,
    "name": "Joshua Yu",
    "href": "#",
    "role": "Tutor",
    "subjects": ["History", "Coding", "Music"],
    "bio": "A 10th grader enrolled in many AP courses, enjoys playing tennis, and is fluent in Java."
  },
  {
    "id": 51,
    "name": "Wesley Chen",
    "href": "#",
    "role": "Tutor",
    "subjects": ["Math", "Violin", "Piano"],
    "bio": "An 11th grader who got First Place in Violin Competitions, is fluent in English and Chinese, and holds an ABRSM Piano Grade 8 Distinction."
  }

  
];
export default function Staff(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        " min-h-screen bg-slate-100 dark:bg-gray-900 duration-150"
      }
    >
      <Navbar page="staff" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className=" drop-shadow-lg  duration-150 bg-white dark:bg-[#182133]">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-slate-100">
            Staff
          </h1>
        </div>
      </header>
      <div className="w-full mx-auto max-w-7xl px-4 md:px-10 pt-10">
        <div className="mt-6 grid grid-cols-1 md:gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {members.map((member) => (
            <Profile member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
