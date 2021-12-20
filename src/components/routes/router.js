import SuperAdmin from '../pages/SuperAdmin';

const router = [
    { path: 'super-admin', exact:true, name: 'Super Admin', element: SuperAdmin },
    { path: 'customer', exact:true, name: 'Customer', element: SuperAdmin },
  ];

  export default router;