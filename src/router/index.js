import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupView.vue')
  },
  {
    path: '/HomePage',
    name: 'HomePageView',
    component: () => import('../views/HomePageView.vue'),
    children:[
      {
        path: '/Dashboard',
        name: 'Dashboard',
        component: () => import('../views/DashboardView.vue')
      },
      {
        path: '/Production',
        name: 'Production',
        component: () => import('../views/ProductionView.vue')
      },
      {
        path: '/AdminRegister',
        name: 'AdminRegister',
        component: () => import('../views/AdminRegisterView.vue')
      },
      {
        path: '/AdminList',
        name: 'AdminList',
        component: () => import('../views/AdminListView.vue')
      },
      {
        path: '/DoctorRegister',
        name: 'DoctorRegister',
        component: () => import('../views/DoctorRegistrationView.vue')
      },
      {
        path: '/DoctorList',
        name: 'DoctorList',
        component: () => import('../views/DoctorListView.vue')
      },
      {
        path: '/ClinicRegister',
        name: 'ClinicRegister',
        component: () => import('../views/ClinicRegistrationView.vue')
      },
      {
        path: '/ClinicList',
        name: 'ClinicList',
        component: () => import('../views/ClinicListView.vue')
      },
      {
        path: '/PatientRegister',
        name: 'PatientRegister',
        component: () => import('../views/PatientRegistrationView.vue')
      },
      {
        path: '/PatientList',
        name: 'PatientList',
        component: () => import('../views/PatientListView.vue')
      },
      {
        path: '/PatientDetailsForm',
        name: 'PatientDetailsForm',
        component: () => import('../views/PatientDetailsForm.vue'),
        children:[
          {
            path: '/PatientDetails',
            name: 'PatientDetails',
            component: () => import('../views/PatientDetailsView.vue')
          },
          {
            path: '/PatientGallery',
            name: 'PatientGallery',
            component: () => import('../views/PatientGalleryView.vue')
          },
          {
            path: '/PatientScanFiles',
            name: 'PatientScanFiles',
            component: () => import('../views/PatientScanFilesView.vue')
          },
          {
            path: '/PatientCaseDetails',
            name: 'PatientCaseDetails',
            component: () => import('../views/PatientCaseDetailsView.vue')
          },
          {
            path: '/PatientTreatmentPlan',
            name: 'PatientTreatmentPlan',
            component: () => import('../views/PatientTreatmentPlanView.vue')
          },
          {
            path: '/PatientTreatmentTracker',
            name: 'PatientTreatmentTracker',
            component: () => import('../views/PatientTreatmentTrackerView.vue')
          },
          {
            path: '/PatientAppointment',
            name: 'PatientAppointment',
            component: () => import('../views/PatientAppointmentView.vue')
          },
          
        ]
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
