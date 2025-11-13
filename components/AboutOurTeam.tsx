// import { Mail, MapPin, Award, Scale, Building2, Users, CheckCircle } from 'lucide-react';

// const AboutOurTeam = () => {
//   const credentials = [
//     { qualification: 'Bachelor of Laws (LLB)', institution: 'University of New England' },
//     { qualification: 'Graduate Diploma in Legal Practice', institution: 'The College of Law' },
//     { qualification: 'Graduate Certificate in Migration Practice', institution: 'Australian National University' },
//     { qualification: 'Master of Information Technology (Professional)', institution: 'University of Southern Queensland' },
//     { qualification: 'BSc in Computer Science', institution: 'University of Madras, India' }
//   ];

//   const practiceAreas = [
//     {
//       title: 'Migration Law',
//       items: [
//         'Skilled, Partner, Employer-Sponsored & Business Visas',
//         'Visa Appeals, Tribunal Representation & Judicial Review',
//         'Sponsorship Compliance & SBS Applications',
//         'AHPRA Registration Support'
//       ]
//     },
//     {
//       title: 'Property & Conveyancing',
//       items: [
//         'Residential & Commercial Conveyancing',
//         'Title Transfers & Settlements',
//         'Contract Review & Risk Mitigation'
//       ]
//     },
//     {
//       title: 'Commercial & Civil Law',
//       items: [
//         'Debt Recovery & Insolvency',
//         'Business Transactions & Contracts',
//         'Family Law & Parenting Matters'
//       ]
//     }
//   ];

//   const keyStrengths = [
//     '17+ years migration experience',
//     'Admitted solicitor with multi-disciplinary practice',
//     'Culturally attuned and client-focused',
//     'Strong drafting and advocacy skills',
//     'Technology-savvy and process-driven'
//   ];

//   return (
//     <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 mb-4">
//             <Scale className="w-8 h-8 text-slate-700" />
//             <h2 className="text-4xl font-bold text-slate-900">Speak to a Lawyer Today</h2>
//           </div>
//           <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
//             At Aussentra Legal we combine legal expertise with genuine care. Contact us for a confidential consultation and let us help you move forward.
//           </p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
//           <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
//             <div className="p-6 flex items-center gap-4 hover:bg-slate-50 transition-colors">
//               <Mail className="w-6 h-6 text-slate-700 flex-shrink-0" />
//               <div>
//                 <p className="text-sm font-medium text-slate-500">Email</p>
//                 <a href="mailto:contact@aussentra.com" className="text-slate-900 hover:text-slate-700 font-medium">
//                   contact@aussentra.com
//                 </a>
//               </div>
//             </div>
//             <div className="p-6 flex items-center gap-4 hover:bg-slate-50 transition-colors">
//               <MapPin className="w-6 h-6 text-slate-700 flex-shrink-0" />
//               <div>
//                 <p className="text-sm font-medium text-slate-500">Office Location</p>
//                 <p className="text-slate-900 font-medium">Suite 618/368 Sussex St, Sydney NSW 2000</p>
//               </div>
//             </div>
//             <div className="p-6 flex items-center gap-4 hover:bg-slate-50 transition-colors">
//               <Building2 className="w-6 h-6 text-slate-700 flex-shrink-0" />
//               <div>
//                 <p className="text-sm font-medium text-slate-500">Availability</p>
//                 <p className="text-slate-900 font-medium">Flexible appointments available</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-8">
//           <div className="flex items-start gap-6 mb-8 flex-col lg:flex-row">
//             <div className="flex-shrink-0">
//               <div className="w-32 h-32 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center shadow-lg">
//                 <Users className="w-16 h-16 text-white" />
//               </div>
//             </div>
//             <div className="flex-1">
//               <h3 className="text-3xl font-bold text-slate-900 mb-2">Farhan Shakil</h3>
//               <p className="text-xl text-slate-600 mb-3">Principal Solicitor & Migration Specialist</p>
//               <div className="flex items-center gap-2 text-slate-500 mb-4">
//                 <MapPin className="w-4 h-4" />
//                 <span>Sydney, NSW</span>
//                 <span className="mx-2">•</span>
//                 <span>Serving Australia-wide</span>
//               </div>
//             </div>
//           </div>

//           <div className="mb-10">
//             <div className="flex items-center gap-2 mb-4">
//               <Award className="w-6 h-6 text-slate-700" />
//               <h4 className="text-2xl font-bold text-slate-900">About Farhan Shakil</h4>
//             </div>
//             <p className="text-slate-700 leading-relaxed text-lg">
//               With over 17 years of experience in the migration industry and 2.5 years as a practising solicitor, F Shakil offers clients a rare blend of deep regulatory insight and broad legal capability. His practice spans complex migration matters, property transactions, and commercial law—delivered with precision, empathy, and strategic foresight.
//             </p>
//           </div>

//           <div className="mb-10">
//             <h4 className="text-2xl font-bold text-slate-900 mb-6">Credentials</h4>
//             <div className="grid sm:grid-cols-2 gap-4">
//               {credentials.map((cred, index) => (
//                 <div
//                   key={index}
//                   className="bg-slate-50 rounded-lg p-5 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
//                 >
//                   <p className="font-semibold text-slate-900 mb-1">{cred.qualification}</p>
//                   <p className="text-slate-600 text-sm">{cred.institution}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mb-10">
//             <h4 className="text-2xl font-bold text-slate-900 mb-6">Legal Practice Areas</h4>
//             <div className="grid lg:grid-cols-3 gap-6">
//               {practiceAreas.map((area, index) => (
//                 <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
//                   <h5 className="font-bold text-slate-900 mb-4 text-lg">{area.title}</h5>
//                   <ul className="space-y-2">
//                     {area.items.map((item, itemIndex) => (
//                       <li key={itemIndex} className="text-slate-700 text-sm leading-relaxed">
//                         • {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h4 className="text-2xl font-bold text-slate-900 mb-6">Why Clients Choose Aussentra Legal</h4>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {keyStrengths.map((strength, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start gap-3 bg-green-50 rounded-lg p-4 border border-green-200"
//                 >
//                   <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
//                   <span className="text-slate-800 font-medium">{strength}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="text-center">
//           <p className="text-slate-600 text-lg mb-4">Ready to discuss your legal needs?</p>
//           <a
//             href="mailto:contact@aussentra.com"
//             className="inline-block bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl"
//           >
//             Schedule a Consultation
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutOurTeam;


















import { Mail, MapPin, Award, Scale, Building2, Users, CheckCircle, Star } from 'lucide-react';

const AboutOurTeam = () => {
  const credentials = [
    { qualification: 'Bachelor of Laws (LLB)', institution: 'University of New England' },
    { qualification: 'Graduate Diploma in Legal Practice', institution: 'The College of Law' },
    { qualification: 'Graduate Certificate in Migration Practice', institution: 'Australian National University' },
    { qualification: 'Master of Information Technology (Professional)', institution: 'University of Southern Queensland' },
    { qualification: 'BSc in Computer Science', institution: 'University of Madras, India' }
  ];

  const practiceAreas = [
    {
      title: 'Migration Law',
      icon: '🛂',
      items: [
        'Skilled, Partner, Employer-Sponsored & Business Visas',
        'Visa Appeals, Tribunal Representation & Judicial Review',
        'Sponsorship Compliance & SBS Applications',
        'AHPRA Registration Support'
      ]
    },
    {
      title: 'Property & Conveyancing',
      icon: '🏠',
      items: [
        'Residential & Commercial Conveyancing',
        'Title Transfers & Settlements',
        'Contract Review & Risk Mitigation'
      ]
    },
    {
      title: 'Commercial & Civil Law',
      icon: '⚖️',
      items: [
        'Debt Recovery & Insolvency',
        'Business Transactions & Contracts',
        'Family Law & Parenting Matters'
      ]
    }
  ];

  const keyStrengths = [
    '17+ years migration experience',
    'Admitted solicitor with multi-disciplinary practice',
    'Culturally attuned and client-focused',
    'Strong drafting and advocacy skills',
    'Technology-savvy and process-driven'
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm border border-blue-100">
            <div className="p-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent">
              Speak to a Lawyer Today
            </h2>
          </div>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-light">
            At Aussentra Legal we combine <span className="font-semibold text-blue-700">legal expertise</span> with genuine care. 
            Contact us for a confidential consultation and let us help you move forward.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100/50 overflow-hidden mb-12">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-blue-100">
            <div className="p-8 flex items-center gap-5 hover:bg-blue-50/50 transition-all duration-300 group">
              <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                <Mail className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-600 mb-1">Email</p>
                <a href="mailto:contact@aussentra.com" className="text-slate-900 hover:text-blue-700 font-semibold text-lg transition-colors">
                  contact@aussentra.com
                </a>
              </div>
            </div>
            <div className="p-8 flex items-center gap-5 hover:bg-blue-50/50 transition-all duration-300 group">
              <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                <MapPin className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-600 mb-1">Office Location</p>
                <p className="text-slate-900 font-semibold text-lg">Suite 618/368 Sussex St, Sydney NSW 2000</p>
              </div>
            </div>
            <div className="p-8 flex items-center gap-5 hover:bg-blue-50/50 transition-all duration-300 group">
              <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                <Building2 className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-600 mb-1">Availability</p>
                <p className="text-slate-900 font-semibold text-lg">Flexible appointments available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100/30 overflow-hidden mb-12">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-800 to-indigo-800 p-8 lg:p-12 text-white">
            <div className="flex items-start gap-6 flex-col lg:flex-row">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                  <Users className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-bold mb-2">Farhan Shakil</h3>
                <p className="text-xl text-blue-100 mb-4">Principal Solicitor & Migration Specialist</p>
                <div className="flex items-center gap-2 text-blue-200">
                  <MapPin className="w-5 h-5" />
                  <span>Sydney, NSW</span>
                  <span className="mx-2">•</span>
                  <span>Serving Australia-wide</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            {/* About Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Award className="w-6 h-6 text-blue-700" />
                </div>
                <h4 className="text-3xl font-bold text-slate-900">Professional Profile</h4>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                With over <span className="font-semibold text-blue-800">17 years of experience</span> in the migration industry and 
                2.5 years as a practising solicitor, F Shakil offers clients a rare blend of deep regulatory insight 
                and broad legal capability. His practice spans complex migration matters, property transactions, 
                and commercial law—delivered with precision, empathy, and strategic foresight.
              </p>
            </div>

            {/* Credentials */}
            <div className="mb-12">
              <h4 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Star className="w-8 h-8 text-amber-500" />
                Academic Credentials
              </h4>
              <div className="grid sm:grid-cols-2 gap-6">
                {credentials.map((cred, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                      <span className="text-blue-700 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="font-semibold text-slate-900 mb-2 text-lg">{cred.qualification}</p>
                    <p className="text-slate-600">{cred.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Areas */}
            <div className="mb-12">
              <h4 className="text-3xl font-bold text-slate-900 mb-8">Legal Practice Areas</h4>
              <div className="grid lg:grid-cols-3 gap-8">
                {practiceAreas.map((area, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="text-3xl mb-4">{area.icon}</div>
                    <h5 className="font-bold text-slate-900 mb-6 text-xl group-hover:text-blue-800 transition-colors">
                      {area.title}
                    </h5>
                    <ul className="space-y-3">
                      {area.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-slate-700 leading-relaxed flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Strengths */}
            <div>
              <h4 className="text-3xl font-bold text-slate-900 mb-8">Why Clients Choose Aussentra Legal</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyStrengths.map((strength, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 hover:border-green-300 hover:shadow-md transition-all duration-300 group"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-800 font-semibold text-lg">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-800 to-indigo-800 rounded-3xl p-12 shadow-2xl">
          <p className="text-white text-2xl font-light mb-6">Ready to discuss your legal needs?</p>
          <a
            href="mailto:contact@aussentra.com"
            className="inline-block bg-white text-blue-800 px-10 py-5 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-lg"
          >
            Schedule a Confidential Consultation
          </a>
          <p className="text-blue-200 mt-4 text-sm">Response within 24 hours guaranteed</p>
        </div>
      </div>
    </div>
  );
};

export default AboutOurTeam;