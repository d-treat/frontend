import React from 'react';
import CaseOverview from './caseOverview';

function DoctorsProp() {

  const mydoctors = [
    {
      name: 'Mugisha Dorcus',
      speciality: 'Neuro Surgeon',
      profile: 'profile.png',
    },
    {
      name: 'Mugisha Dorcus',
      speciality: 'Neuro Surgeon',
      profile: 'profile.png',
    },
    {
      name: 'Mugisha Dorcus',
      speciality: 'Neuro Surgeon',
      profile: 'profile.png',
    },
  ];

  return <CaseOverview mydoctors={mydoctors}></CaseOverview>;
}

export default DoctorsProp;
