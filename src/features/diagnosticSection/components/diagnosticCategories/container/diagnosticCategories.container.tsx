import DiagnosticCategoriesView from '../view/diagnosticCategoriesView';

const DiagnosticCategoriesContainer = () => {
  const diagnostic_category = [
    {
      id: 1,
      title: 'Blood Teste',
      icon: 'mdi:leaf',
      iconColor: '#0273BF',
      bgColor: '#F0F9FF'
    },
    {
      id: 2,
      title: 'Diabetes Tests',
      icon: 'mdi:heart-outline',
      iconColor: '#F97316',
      bgColor: '#FFFAF5'
    },
    {
      id: 3,
      title: 'Thyroid Testes',
      icon: 'mdi:medical-bag',
      iconColor: '#F43F5E',
      bgColor: '#FFF5F6'
    },
    {
      id: 4,
      title: 'Liver Function',
      icon: 'mdi:face-woman',
      iconColor: '#6366F1',
      bgColor: '#F2F5FF'
    },
    {
      id: 5,
      title: 'Kidney Function ',
      icon: 'mdi:leaf',
      iconColor: '#10B981',
      bgColor: '#EEFFF7'
    },
    {
      id: 6,
      title: 'Lipid/Heart',
      icon: 'mdi:heart-outline',
      iconColor: '#A855F7',
      bgColor: '#F7EFFF'
    },
    {
      id: 7,
      title: 'Vitamin & Nutrition',
      icon: 'mdi:medical-bag',
      iconColor: '#A855F7',
      bgColor: '#F7EFFF'
    },
    {
      id: 8,
      title: 'Infection/Fever',
      icon: 'mdi:face-woman',
      iconColor: '#6366F1',
      bgColor: '#F2F5FF'
    },
    {
      id: 9,
      title: 'Hormone Test',
      icon: 'mdi:leaf',
      iconColor: '#10B981',
      bgColor: '#EEFFF7'
    },
    {
      id: 10,
      title: 'Pregnancy Test',
      icon: 'mdi:heart-outline',
      iconColor: '#F97316',
      bgColor: '#FFFAF5'
    },
    {
      id: 11,
      title: 'Cancer maker',
      icon: 'mdi:medical-bag',
      iconColor: '#F43F5E',
      bgColor: '#FFF5F6'
    },
    {
      id: 12,
      title: 'Allergy Test',
      icon: 'mdi:face-woman',
      iconColor: '#0273BF',
      bgColor: '#F0F9FF'
    },
    {
      id: 13,
      title: 'Urines Tests',
      icon: 'mdi:leaf',
      iconColor: '#10B981',
      bgColor: '#EEFFF7'
    },
    {
      id: 14,
      title: 'Stool Tests',
      icon: 'mdi:heart-outline',
      iconColor: '#F97316',
      bgColor: '#FFFAF5'
    },
    {
      id: 15,
      title: 'Genetic Test',
      icon: 'mdi:medical-bag',
      iconColor: '#F43F5E',
      bgColor: '#FFF5F6'
    },
    {
      id: 16,
      title: 'STD/HIV Test',
      icon: 'mdi:face-woman',
      iconColor: '#0273BF',
      bgColor: '#F0F9FF'
    }
  ];

  return <DiagnosticCategoriesView category={diagnostic_category} />;
};

export default DiagnosticCategoriesContainer;
