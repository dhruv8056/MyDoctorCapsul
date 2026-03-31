import { useCallback } from 'react';
import MedicineCategoriesView from '../view/medicineCategoriesView';

const MedicineCategoriesContainer = () => {
  const medical_category = [
    {
      id: 1,
      title: 'General',
      icon: 'mdi:leaf',
      iconColor: '#0273BF',
      bgColor: '#F0F9FF'
    },
    {
      id: 2,
      title: 'Pain Relief',
      icon: 'mdi:heart-outline',
      iconColor: '#F97316',
      bgColor: '#FFFAF5'
    },
    {
      id: 3,
      title: 'Antibiotics',
      icon: 'mdi:medical-bag',
      iconColor: '#F43F5E',
      bgColor: '#FFF5F6'
    },
    {
      id: 4,
      title: 'Diabetes',
      icon: 'mdi:face-woman',
      iconColor: '#6366F1',
      bgColor: '#F2F5FF'
    },
    {
      id: 5,
      title: 'Blood Pressure',
      icon: 'mdi:leaf',
      iconColor: '#10B981',
      bgColor: '#EEFFF7'
    },
    {
      id: 6,
      title: 'Cholesteroal',
      icon: 'mdi:heart-outline',
      iconColor: '#A855F7',
      bgColor: '#F7EFFF'
    },
    {
      id: 7,
      title: 'Woman Health',
      icon: 'mdi:medical-bag',
      iconColor: '#A855F7',
      bgColor: '#F7EFFF'
    },
    {
      id: 8,
      title: 'Skin & Vitamins',
      icon: 'mdi:face-woman',
      iconColor: '#6366F1',
      bgColor: '#F2F5FF'
    },
    {
      id: 9,
      title: 'Gastric',
      icon: 'mdi:leaf',
      iconColor: '#10B981',
      bgColor: '#EEFFF7'
    },
    {
      id: 10,
      title: 'Cold & Cough',
      icon: 'mdi:heart-outline',
      iconColor: '#F97316',
      bgColor: '#FFFAF5'
    },
    {
      id: 11,
      title: 'Respiratory',
      icon: 'mdi:medical-bag',
      iconColor: '#F43F5E',
      bgColor: '#FFF5F6'
    },
    {
      id: 12,
      title: 'Mental Health',
      icon: 'mdi:face-woman',
      iconColor: '#0273BF',
      bgColor: '#F0F9FF'
    }
  ];

  const handleCall = useCallback((phone: string) => {
    window.location.href = `tel:${phone}`;
  }, []);

  const handleDirections = useCallback((mapsUrl: string) => {
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  }, []);

  return <MedicineCategoriesView onCall={handleCall} onDirections={handleDirections} category={medical_category} />;
};

export default MedicineCategoriesContainer;
