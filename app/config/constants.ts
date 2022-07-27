export default {
  screens: [
    {id: 'explore', screen: 'Explore', icon: 'ios-home-outline'},
    {
      id: 'notifications',
      screen: 'Notifications',
      icon: 'ios-notifications-outline',
    },
    {id: 'orders', screen: 'Orders', icon: 'ios-home-outline'},
    {id: 'profile', screen: 'Profile', icon: 'ios-home-outline'},
  ],

  // products
  products: [
    {
      id: '1',
      name: '',
      price: 80000,
      description:
        'Et magna id ex dolor ipsum nisi ad aliquip. Sunt duis mollit nisi pariatur laborum. Tempor ipsum deserunt amet fugiat.',
      packaging: [
        {size: '', price: 80000, quantity: 100, units: 'pellets'},
        {size: '', price: 80000, quantity: 100, units: 'pellets'},
        {size: '', price: 80000, quantity: 100, units: 'pellets'},
      ],
      rating: {},
      reviews: [],
    },
  ],
};
