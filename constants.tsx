
import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  ThumbsUp
} from 'lucide-react';
import { Service, JobPosition, Testimonial, TeamMember } from './types';

export const SERVICES: Service[] = [
  {
    id: 'spring-cleanup',
    title: 'Spring Clean Up',
    description: 'Get your landscape ready for the growing season. We handle dethatching, bed edging, debris removal, and initial fertilization.',
    image: 'https://drive.google.com/thumbnail?id=1A83frzFeozok0ifyWHVcMfIGnDQiaBj4&sz=w1200',
    icon: 'Leaf'
  },
  {
    id: 'summer-maintenance',
    title: 'Summer Lawn Maintenance',
    description: 'Weekly precision mowing, trimming, and ongoing turf health monitoring to keep your property looking its best during the peak season.',
    image: 'https://drive.google.com/thumbnail?id=13YPov2a43hy-zpCDwkeWGM-qpGCsxRgr&sz=w1200',
    icon: 'Sun'
  },
  {
    id: 'fall-cleanup',
    title: 'Fall Clean Up',
    description: 'Preparing your grounds for winter. Comprehensive leaf removal, perennial cutbacks, and final seasonal pruning.',
    image: 'https://drive.google.com/thumbnail?id=1gvz_NLR3YK-6_iwwSWGW2kxWyUQK6RH1&sz=w1200',
    icon: 'CloudRain'
  },
  {
    id: 'snow-removal',
    title: 'Snow Removal',
    description: 'Reliable commercial and residential snow clearing and de-icing services to ensure safety and accessibility all winter long.',
    image: 'https://drive.google.com/thumbnail?id=1EDV79BrJOXJ05tQSad0BeDqdDmsJPIRL&sz=w1200',
    icon: 'Snowflake'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "E&R Schwarz Masonry Ltd.",
    role: "Corporate Client",
    content: "If you require landscape help you absolutely should consider checking out Steve Snider at Snider Turf & Landscape Care Ltd. To say Steve (and his team) have a passion for gardening does not begin to express their quality of work and commitment to “get the job done” to the absolute best of their abilities. I believe receiving this prestigious award for 2020 will give you a hint of their level of perfection. We use Snider TLC for our grounds and couldn’t be happier."
  },
  {
    name: "Eva Rygielski",
    role: "Homeowner",
    content: "First time in years we have received such good landscaping service. Always very professional and on time. If any changes in weather come up, we are always notified of a change in schedule. They provide good advice and recommendations on how to maintain the lawn. The services that are provided are completed to their entirety throughout the seasons. We would highly recommend Snider TLC."
  }
];

export const AWARDS = [
  { title: "Landscape Excellence 2024", year: "2024", icon: <Award className="text-brandOrange" /> },
  { title: "Regional Beautification Winner", year: "2022", icon: <ShieldCheck className="text-brandOrange" /> },
  { title: "Top Rated Service", year: "2021-2024", icon: <ThumbsUp className="text-brandOrange" /> }
];

export const CORE_TEAM: TeamMember[] = [
  {
    name: "Steve Snider",
    role: "Owner & President",
    image: "https://drive.google.com/thumbnail?id=1y9LmoI_ELSaXPNbePkVyA8e67YaMFH00&sz=w800",
    description: "With over 20 years in the industry, Steve leads with a passion for excellence and a commitment to customer satisfaction. Enjoys biking, yoga, golf, and paddleboarding."
  },
  {
    name: "Brenda Snider",
    role: "General Manager, Financial Accountant",
    image: "https://drive.google.com/thumbnail?id=17qj3RdvtIZUtq23g85gMwhbLWewNAph4&sz=w800",
    description: "Brenda ensures everything behind the scenes runs smoothly. Enjoys scrapbooking, and going to the beach."
  },
  {
    name: "Luke Albrecht",
    role: "Supervisor",
    image: "https://drive.google.com/thumbnail?id=1ejzeYxPPwQWHuCyz_Owt_kulcIUF3SB_&sz=w800",
    description: "Enjoys fixing problems, quite the handyman, loves cats and watching hockey (Go Leafs)."
  },
  {
    name: "Matt Moran",
    role: "Supervisor",
    image: "https://drive.google.com/thumbnail?id=1kU-4cn0aXecKMcy8D_LVDxDEKCB62zCa&sz=w800",
    description: "Loves all Sports, hiking, camping, skiing, traveling, video games, and collecting watches."
  },
  {
    name: "Allan Thompson",
    role: "Supervisor",
    image: "https://drive.google.com/thumbnail?id=1ZqcLy9uTdSOaMUE1oz5TBRGodFSGWexx&sz=w800",
    description: "Enjoys taking sunset and sunrise photos, collecting coins, comics, hockey cards."
  }
];

export const JOB_POSITIONS: JobPosition[] = [
  {
    title: "Crew Member",
    description: "Ability to work in a team. Basic understanding and operation of small engine equipment including string trimmer, blower, bed edger, hedge trimmer, and mowers. Basic knowledge of annual and perennial plant material. Site clean-up (weeding, tools, dead plant material). Loading and unloading of truck and trailer. Punctuality is a must. Assist with equipment maintenance.",
    requirements: [
      "Team player attitude",
      "Punctuality",
      "Ability to lift 50lbs",
      "Willingness to learn"
    ],
    qualifications: "Previous landscape maintenance experience an asset and transportation to and from work."
  },
  {
    title: "Lead Hand",
    description: "Coaching, teaching and motivating crew members in a positive and professional manner. Assist Supervisors with training, timesheets, and tail-gate meetings. Ability to communicate with employees as well as customers in a courteous and professional manner. Thorough understanding and safe usage of all equipment, proper techniques, work procedures, maintenance, and safety issues.",
    requirements: [
      "Excellent communication skills",
      "Pruning expertise",
      "Safety enforcement (PPE)",
      "Leadership potential"
    ],
    qualifications: "Ideal candidates will have a Valid G license, truck and trailer experience, basic plant identification knowledge, College/University education an asset."
  },
  {
    title: "Supervisor",
    description: "Demonstrate leadership and guidance to the crew. Ensures truck, trailer, and equipment are loaded appropriately and safely. Delegation of work tasks in an efficient manner. Organize and discuss the daily plans with teammates. Training in proper techniques, maintenance, and work procedures.",
    requirements: [
      "Leadership experience",
      "High horticultural knowledge",
      "Daily planning & task delegation",
      "Site inspections"
    ],
    qualifications: "The ideal candidate will have Supervisory experience and strong horticultural background. 2-3 years of experience in the landscape maintenance industry as well as a valid G License and experience operating a truck and trailer required."
  }
];
