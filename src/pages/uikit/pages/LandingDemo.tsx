import { lazy } from 'react';
import FeatureSection from '../../../shared/widgets/landing/FeatureSection';
// import HeroSection from '../../../shared/widgets/landing/HeroSection';
import NewsSection, { News } from '../../../shared/widgets/landing/NewsSection';
import StatsSection from '../../../shared/widgets/landing/StatsSection';
import Separator from '../../../shared/widgets/layout/Separator';
import { Leaflet } from '../../../shared/widgets/leaflet/Leaflet';

const HeroSection = lazy(() => import('../../../shared/widgets/landing/HeroSection'))

const news: News[] = [
  {
    title: 'News 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta dolorum eos eveniet excepturi impedit in, iusto laboriosam laudantium maxime nesciunt nobis obcaecati optio provident rem reprehenderit, rerum similique veritatis.\n',
    link: 'http://www.google.com'
  },
  {
    title: 'News 2',
    description: 'lorem ipsum bla bla bla ...',
    link: 'http://www.google.com'
  },
  {
    title: 'News 3',
    description: 'lorem ipsum bla bla bla ...',
    link: 'http://www.google.com'
  },
];

 const LandingDemo = () => {
  return <div>

    <HeroSection
      color="white"
      title="Hero Component"
      description="Subtitle with lorem text"
      image="https://images.unsplash.com/photo-1551376347-075b0121a65b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    />

    <Separator />

    <StatsSection
      title="Stats Component"
      items={[
        { value: '100%', label: 'Products 1'},
        { value: 'h24', label: 'Support'},
        { value: '123', label: 'Products 3'},
      ]}
    />

    <Separator />

    <FeatureSection
      title="Feature Component"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta dolorum eos eveniet excepturi impedit in, iusto laboriosam laudantium maxime nesciunt nobis obcaecati optio provident rem reprehenderit, rerum similique veritatis."
      image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHw%3D&w=1000&q=80"
    />

    <Separator />
    <NewsSection title="News Component" items={news} />

    <Separator />
    <h1 className="text-5xl">Where we are</h1>
    <Leaflet zoom={5} coords={[43,13]} popupText={'Headquarter'} />

  </div>
};

export default LandingDemo;
