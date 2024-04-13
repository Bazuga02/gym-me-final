// images
import Logo from "../src/assets/img/header/logo.svg";
import ResistanceImg from "../src/assets/img/workouts/resistance.png";
import BoxingImg from "../src/assets/img/workouts/boxing.png";
import BodyPumpImg from "../src/assets/img/workouts/body-pump.png";
import YogaImg from "../src/assets/img/workouts/yoga.png";
import FullBodyImg from "../src/assets/img/workouts/full-body.png";
import FitnessImg from "../src/assets/img/workouts/fitness.png";
import BattleRopeImg from "../src/assets/img/workouts/battle-rope.png";
import CommunityImg1 from "../src/assets/img/community/img1.png";
import CommunityImg2 from "../src/assets/img/community/img2.png";
import CommunityImg3 from "../src/assets/img/community/img3.png";
import CommunityImg4 from "../src/assets/img/community/img4.png";
import JoinImg from "../src/assets/img/join/woman.jpeg";
// icons
import UsersIcn from "../src/assets/img/about/icons/users-icn.svg";
import CalendarIcn from "../src/assets/img/workouts/icons/calendar.svg";
import PriceIcn from "../src/assets/img/pricing/icons/price.svg";
import CommunityIcn from "../src/assets/img/community/icons/community-icn.svg";
import QuestionMarkIcn from "../src/assets/img/faq/icons/question-mark.svg";

export const header = {
  logo: Logo,
  btnLoginText: "Log in",
  btnSignupText: "Sign Up",
};

export const nav = [
  { name: "Home", scrollId: "home" },
  { name: "About", scrollId: "about" },
  { name: "Workouts", scrollId: "workouts" },
  { name: "Pricing", scrollId: "pricing" },
  { name: "Community", scrollId: "community" },
  { name: "FAQ", scrollId: "faq" },
];

export const banner = {
  titlePart1: "Get the best part of your day",
  titlePart2: "– you fit here.",
  subtitle:
    "We provide serious fitness but within a fun and friendly, safe space.",
  textBtn: "Join Now",
  img: "",
};

export const about = {
  icon: UsersIcn,
  title: "Our misson",
  subtitle1:
    "We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment, which supports our members in meeting their individual fitness goals.",
  subtitle2:
    "The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.",
  link: "Join Now",
};

export const workouts = {
  icon: CalendarIcn,
  title: "Training programs",
  programs: [
    {
      image: ResistanceImg,
      name: "Resistance",
    },
    {
      image: BoxingImg,
      name: "Boxing",
    },
    {
      image: BodyPumpImg,
      name: "Body Pump",
    },
    {
      image: YogaImg,
      name: "Yoga",
    },
    {
      image: FullBodyImg,
      name: "Full Body",
    },
    {
      image: FitnessImg,
      name: "Fitness",
    },
    {
      image: BattleRopeImg,
      name: "Battle Rope",
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: "Pricing plan",
  plans: [
    {
      name: "Basic",
      price: "20",
      list: [
        { name: "unlimited gym access" },
        { name: "1 training programs" },
        { name: "free fitness consultation" },
      ],
      delay: 600,
    },
    {
      name: "Premium",
      price: "35",
      list: [
        { name: "unlimited gym access" },
        { name: "5 training programs" },
        { name: "free fitness consultation" },
        { name: "personal trainer" },
      ],
      delay: 800,
    },
    {
      name: "Elite",
      price: "49",
      list: [
        { name: "unlimited gym access" },
        { name: "all training programs" },
        { name: "free fitness consultation" },
        { name: "personal trainer" },
        { name: "50% off drinks" },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: "Community",
  testimonials: [
    {
      image: CommunityImg1,
      name: "Mark A.",
      message:
        "“Great location, great price and great, helpful people. What to want more?”",
    },
    {
      image: CommunityImg2,
      name: "Lauren K.",
      message:
        "“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”",
    },
    {
      image: CommunityImg3,
      name: "Jhon D.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
    },
    {
      image: CommunityImg4,
      name: "Anne R.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: "FAQ",
  accordions: [
    {
      question: "How can I book a workout class?",
      answer:
        "To find our pricing options, head to the 'Pricing' section on our website. We offer various membership plans to suit different needs and budgets, including monthly options and discounted packages. Check out our transparent pricing and start your fitness journey with us today!",
    },
    {
      question: "Can I pay by cash for my membership?",
      answer:
        "Yes, you can pay for your membership by cash by visiting the gym in person. Simply stop by our front desk during operating hours, and our staff will assist you with your membership payment. We look forward to welcoming you to our facility!",
    },
    {
      question: "What age do I need to be to join?",
      answer:
        "You must be at least 18 years old to join our gym. We prioritize the safety and well-being of our members, and our services are tailored to adults. However, we offer special programs and supervised sessions for younger individuals, so feel free to inquire about these options at our front desk. We're committed to helping individuals of all ages achieve their fitness goals in a safe and supportive environment.",
    },
    {
      question: "Are there any lockers?",
      answer:
        "Yes, we provide lockers for the convenience and security of our members. You can store your belongings safely while you work out, ensuring a hassle-free and enjoyable gym experience. Our lockers are available on a first-come, first-served basis, so feel free to ask our staff for assistance in locating an available locker upon your arrival.",
    },
    {
      question: "How do I cancel my membership?",
      answer:
        "Membership can only be canceled within the first 7 days from the start date. Please visit our gym in person to initiate the cancellation process during this period.",
    },
    {
      question: "Is there water available at the gym?",
      answer:
        "Yes, of course! We provide water stations throughout the gym for your convenience. Stay hydrated during your workout with our readily available water supply.",
    },
  ],
};

export const join = {
  image: JoinImg,
  title: "Wanna join & have fun?",
  subtitle:
    "We’ll keep you updated on the things you need to know about Gymme. Nothing more, nothing less.",
  btnText: "Join now",
};

export const footer = {
  logo: Logo,
  copyrightText: "All rights reserved. Gymme 2022.",
};
