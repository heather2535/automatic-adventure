'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, MoreVertical, Facebook, Twitter, Linkedin, LinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { toast, Toaster } from 'react-hot-toast';


const projects = [
  { id: 1, title: 'Speech Audio Emotion Recognition', description: 'April 28, 2024', tags: ['Featured Projects', 'Machine Learning', 'NLP'], href: "/projects/speech-audio", image: '/speech-audio/image1.jpg' },
  { id: 2, title: 'City of Boston Budget Reallocation Analysis', description: 'April 22, 2024', tags: ['Data Visualization', 'Statistical Analysis'], href: "/projects/city-of-boston", image: '/image2.jpg' },
  { id: 3, title: 'Small Business Association Loan Prediction', description: 'April 22, 2024', tags: ['Featured Projects', 'Machine Learning'], href: "/projects/small-business", image: '/image3.webp' },
  { id: 4, title: 'Flight Satisfaction Prediction', description: 'December 6, 2023', tags: ['Featured Projects', 'Machine Learning'], href: "/projects/flight-satisfaction", image: '/image4.webp' },
  { id: 5, title: 'Predicting Climate Investments', description: 'October 10, 2023', tags: ['Featured Projects', 'Machine Learning'], href: "/projects/predicting-climate", image: '/image5.jpg' },
  { id: 6, title: 'Classifying Political Bias in News Media', description: 'August 3, 2023', tags: ['Featured Projects', 'NLP'], href: "/projects/als-resource", image: '/image6.webp' },
  { id: 7, title: 'COVID-19 Policy Analysis and Recommendations', description: 'May 12, 2023', tags: ['Featured Projects', 'Statistical Analysis'], href: "/projects/als-resource", image: '/image7.webp' },
  { id: 8, title: 'Forecasting Volatility in NVDA Stock Returns', description: 'December 18, 2023', tags: ['Machine Learning', 'Statistical Analysis'], href: "/projects/als-resource", image: '/image8.jpg' },
  { id: 9, title: 'Text Classification Program', description: 'April 28, 2021', tags: ['NLP'], href: "/projects/als-resource", image: '/image9.png' },
  { id: 10, title: 'Airbnb Investment Analysis', description: 'April 19, 2023', tags: ['Statistical Analysis'], href: "/projects/als-resource", image: '/image10.jpg' },
  { id: 11, title: 'Government Welfare Income vs. Health Status', description: 'May 3, 2022', tags: ['Statistical Analysis'], href: "/projects/als-resource", image: '/image11.jpg' },
  { id: 12, title: 'Analysis of Cardiovascular Disease: Causes, Treatment, and Prevention', description: 'April 12, 2022', tags: ['Statistical Analysis'], href: "/projects/als-resource", image: '/image12.jpg' },
  { id: 13, title: 'Undergraduate Housing Expenses', description: 'Nov 19, 2021', tags: ['Statistical Analysis'], href: '/projects/als-resource', image: '/image13.jpg' },
  { id: 14, title: 'Boston University Campus Waste Prediction', description: 'Nov 19, 2021', tags: ['Linear Regression'], href: "/projects/als-resource", image: '/image14.jpg' },
  { id: 15, title: 'Housing Prices in San Francisco', description: 'December 19, 2022', tags: ['Linear Regression'], href: "/projects/als-resource", image: '/image15.webp' },
  { id: 16, title: 'GDP by Region', description: 'Nov 29, 2022', tags: ['Linear Regression', 'Data Visualization'], href: "/graphics/web-development", image: '/image16.jpg' },
  { id: 17, title: 'Grocery Recommendation Engine', description: 'February 25, 2023', tags: ['Linear Regression', 'Machine Learning'], href: "/projects/als-resource", image: '/image17.jpg' },

];

const allTags = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags)))];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesTag = selectedTag === 'All' || project.tags.includes(selectedTag);
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [selectedTag, searchQuery]);

  const shareProject = (project: { id?: number; title: any; description?: string; tags?: string[]; href: any; image?: string; }, platform: string) => {
    const url = encodeURIComponent(`${window.location.origin}${project.href}`);
    const text = encodeURIComponent(`Check out this project: ${project.title}`);
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank');
  };

  const copyLink = (project: { id?: number; title?: string; description?: string; tags?: string[]; href: any; image?: string; }) => {
    const url = `${window.location.origin}${project.href}`;
    navigator.clipboard.writeText(url)
      .then(() => {
        toast.success('Project link has been copied to clipboard.');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        toast.error('Failed to copy link. Please try again.');
      });
  };

  return (
    <section className="min-h-screen py-20 max-w-5xl mt-4 mx-auto">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">My Projects</h2>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2 w-full md:w-auto md:flex-[2]">
            {allTags.map(tag => (
              <Badge
          key={tag}
          variant={selectedTag === tag ? 'default' : 'outline'}
          className="cursor-pointer height-[51px] px-4 font-light text-[16px] border border-white"
          onClick={() => setSelectedTag(tag)}
              >
          {tag}
              </Badge>
            ))}
          </div>

          <div className="relative w-full md:w-auto md:flex-1 max-w-md">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
          key={project.id}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-0 shadow-lg overflow-hidden"
              >
          <Link href={project.href} className="block">
            <div className="relative h-48 w-full">
              <Image 
                src={project.image} 
                alt={project.title} 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
                </Link>
                <div className="px-6 py-4">
                  <h3 className="text-lg font-normal">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
                <div className="px-6 pb-4 flex justify-end items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => shareProject(project, 'facebook')}>
                        <Facebook className="mr-2 h-4 w-4" />
                        <span>Share on Facebook</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => shareProject(project, 'twitter')}>
                        <Twitter className="mr-2 h-4 w-4" />
                        <span>Share on Twitter</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => shareProject(project, 'linkedin')}>
                        <Linkedin className="mr-2 h-4 w-4" />
                        <span>Share on LinkedIn</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => copyLink(project)}>
                        <LinkIcon className="mr-2 h-4 w-4" />
                        <span>Copy Link</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <Toaster />
    </section>
  );
};

export default Projects;
