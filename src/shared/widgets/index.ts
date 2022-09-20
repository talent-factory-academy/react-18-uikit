import { FunctionComponent, lazy } from 'react';
const ChartJS = lazy(() => import('./chartjs/ChartJS'));
const FeatureSection = lazy(() => import('./landing/FeatureSection'));
const NewsSection = lazy(() => import('./landing/NewsSection'));
const StatsSection = lazy(() => import('./landing/StatsSection'));
const Separator = lazy(() => import('./layout/Separator'));

const HeroSection = lazy(() => import('../../shared/widgets/landing/HeroSection'));
const Buttons = lazy(() => import('../../shared/widgets/buttons/Buttons'));
const MapQuestStatic = lazy(() => import('../../shared/widgets/mapquest/MapQuestStatic'));
const WeatherMap = lazy(() => import('../../shared/widgets/weather/WeatherMap'));

export  const COMPONENTS: { [key: string]: FunctionComponent<any> } = {
  hero: HeroSection,
  stats: StatsSection,
  feature: FeatureSection,
  news: NewsSection,
  separator: Separator,
  'mapquest-static': MapQuestStatic,
  buttons: Buttons,
  chartjs: ChartJS,
  weather: WeatherMap
}
