/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUserPermission } from '@shared/components/auth/login/interfaces/IAuth';
import { APP_ROUTE } from '@shared/constant/app-route';
import { APP_CONSTANTS } from '@shared/constant/app.constant';
import { RootState } from '@store/app.store';
import { useSelector } from 'react-redux';

export const generateNavigationLinks = (userPermissions: IUserPermission[]) => {
  const pharmacyLinks = [
    {
      label: 'Pharmacy Dashboard',
      icon: 'mdi:view-dashboard',
      route: `${APP_ROUTE.PHARMACY}${APP_ROUTE.DASHBOARD}`,
      children: []
    },
    {
      label: 'Pharmacy Store',
      icon: 'mdi:cart-outline',
      children: [
        {
          label: 'Pharmacy Categories',
          icon: 'mdi:shape-outline',
          route: `${APP_ROUTE.PHARMACY}${APP_ROUTE.CATEGORY}`
        },
      ]
    }
  ];

  const adminLinks = [
    {
      label: 'Super Demo',
      icon: 'mdi:view-dashboard',
      route: `${APP_ROUTE.SUPER_ADMINS}${APP_ROUTE.DASHBOARD}`,
      children: []
    },
    {
      label: 'Superadmin',
      icon: 'mdi:cart-outline',
      children: [
        {
          label: 'Demo',
          icon: 'mdi:shape-outline',
          route: `${APP_ROUTE.SUPER_ADMINS}${APP_ROUTE.CATEGORY}`
        }
      ]
    }
    
  ];

  const userItems = [
    {
      label: 'Patient Hub',
      icon: 'mdi:view-dashboard',
      route: `${APP_ROUTE.USER}${APP_ROUTE.DASHBOARD}`,
      children: []
    },
    {
      label: 'Patient Store',
      icon: 'mdi:cart-outline',
      children: [
        {
          label: 'Patient Categories',
          icon: 'mdi:shape-outline',
          route: `${APP_ROUTE.USER}${APP_ROUTE.CATEGORY}`
        },
      ]
    }
  ];

  const doctorLinks = [
    {
      label: 'Dashboard',
      icon: 'mdi:view-dashboard',
      route: `${APP_ROUTE.DOCTOR}${APP_ROUTE.DASHBOARD}`,
      children: []
    },
  ];

    const diagnosticLinks = [
    {
      label: 'Dashboard',
      icon: 'mdi:view-dashboard',
      route: `${APP_ROUTE.DIAGNOSTIC_CENTRE}${APP_ROUTE.DASHBOARD}`,
      children: []
    },
  ];

  const isUserLogged = useSelector((state: RootState) => state.user.data);
  const userRole = (isUserLogged as { role?: { name: string } })?.role?.name;

  if (userRole === APP_CONSTANTS.ROLE_NAME.PHARMACY) {
    return filterLinks(pharmacyLinks, userPermissions);
  }

  if (userRole === APP_CONSTANTS.ROLE_NAME.ADMIN) {
    return filterLinks(adminLinks, userPermissions);
  }

  if (userRole === APP_CONSTANTS.ROLE_NAME.USER) {
    return filterLinks(userItems, userPermissions);
  }

  if (userRole === APP_CONSTANTS.ROLE_NAME.DOCTOR) {
    return filterLinks(doctorLinks, userPermissions);
  }

  if (userRole === APP_CONSTANTS.ROLE_NAME.DIAGNOSTIC_CENTRE) {
    return filterLinks(diagnosticLinks, userPermissions);
  }

  return [];
};

export const filterLinks = (links: any[], userPermissions: IUserPermission[]) => {
  if (!userPermissions || userPermissions.length === 0) {
    return links;
  }

  return links
    .map((link) => {
      if (link.children && link.children.length > 0) {
        const filteredChildren = link.children.filter((sublink: any) =>
          userPermissions.some((p) => p.moduleName === sublink.label)
        );

        const hasParentPermission = userPermissions.some(
          (p) => p.moduleName === link.label
        );

        return hasParentPermission || filteredChildren.length > 0
          ? { ...link, children: filteredChildren }
          : null;
      }

      const hasPermission = userPermissions.some(
        (p) => p.moduleName === link.label
      );

      return hasPermission ? link : null;
    })
    .filter(Boolean);
};
