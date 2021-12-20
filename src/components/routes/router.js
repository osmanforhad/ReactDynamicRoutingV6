import SuperAdmin from '../pages/SuperAdmin';

const router = [
    { path: 'admin', exact:true, name: 'Super Admin', element: SuperAdmin },
    { path: 'customer', name: 'Customer' },
  ];

  export default router;