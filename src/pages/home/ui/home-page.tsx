import { PromoSlider } from './promo-slider';
import { NewBooks } from '@/pages/home/ui/new-books-section';
import { GenresSection } from '@/pages/home/ui/genres-section';
import { FeaturesSection } from '@/pages/home/ui/features-section';
import { NewsletterSection } from '@/pages/home/ui/newsletter-section';
import { StatsSection } from './stats-section';

export const HomePage = () => {
  return (
    <div>
      <StatsSection />
      <PromoSlider />
      <NewBooks />
      <GenresSection />
      <FeaturesSection />
      <NewsletterSection />
    </div>
  );
};
