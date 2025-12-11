import {
  Mail,
  MapPin,
  Award,
  Scale,
  Building2,
  Users,
  CheckCircle,
  Star,
} from "lucide-react";

const AboutOurTeam = () => {
  const credentials = [
    {
      qualification: "Bachelor of Laws (LLB)",
      institution: "University of New England",
    },
    {
      qualification: "Graduate Diploma in Legal Practice",
      institution: "The College of Law",
    },
    {
      qualification: "Graduate Certificate in Migration Practice",
      institution: "Australian National University",
    },
    {
      qualification: "Master of Information Technology (Professional)",
      institution: "University of Southern Queensland",
    },
    {
      qualification: "BSc in Computer Science",
      institution: "University of Madras, India",
    },
  ];

  const practiceAreas = [
    {
      title: "Migration Law",
      icon: "🛂",
      items: [
        "Skilled, Partner, Employer-Sponsored & Business Visas",
        "Visa Appeals, Tribunal Representation & Judicial Review",
        "Sponsorship Compliance & SBS Applications",
        "AHPRA Registration Support",
      ],
    },
    {
      title: "Property & Conveyancing",
      icon: "🏠",
      items: [
        "Residential & Commercial Conveyancing",
        "Title Transfers & Settlements",
        "Contract Review & Risk Mitigation",
      ],
    },
    {
      title: "Commercial & Civil Law",
      icon: "⚖️",
      items: [
        "Debt Recovery & Insolvency",
        "Business Transactions & Contracts",
        "Family Law & Parenting Matters",
      ],
    },
  ];

  const keyStrengths = [
    "17+ years migration experience",
    "Admitted solicitor with multi-disciplinary practice",
    "Culturally attuned and client-focused",
    "Strong drafting and advocacy skills",
    "Technology-savvy and process-driven",
  ];

  return (
    <div className="bg-gradient-to-b from-background via-background to-secondary py-24 px-4 sm:px-6 lg:px-8 font-playfair">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 text-balance">
            Expert Legal Guidance You Can Trust
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto leading-relaxed">
            With over 17 years of experience in migration law and a proven track
            record across multiple legal disciplines, we deliver strategic
            solutions tailored to your needs.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-sm lg:text-base font-semibold text-primary mb-2">Email</p>
                <a
                  href="mailto:info@aussentralegal.com.au"
                  className="text-foreground hover:text-primary font-semibold transition-colors break-all"
                >
                  info@aussentralegal.com.au
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-sm lg:text-base font-semibold text-primary mb-2">
                  Location
                </p>
                <p className="text-foreground font-semibold">
                  Suite 618/368 Sussex St, Sydney NSW 2000
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-sm lg:text-base font-semibold text-primary mb-2">
                  Availability
                </p>
                <p className="text-foreground font-semibold">
                  Flexible appointments available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Profile Card */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden mb-16 shadow-sm">
          {/* Profile Header */}
          <div className="bg-primary text-black p-10 lg:p-14">
            <div className="flex items-start gap-8 flex-col lg:flex-row">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-primary-foreground/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary-foreground/30">
                  <Users className="w-16 h-16 text-black" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-bold mb-2">
                  Farhan Shakil
                </h3>
                <p className="text-lg xl:text-xl text-black mb-4">
                  Principal Solicitor & Migration Specialist
                </p>
                <div className="flex items-center gap-2 text-black text-sm lg:text-base">
                  <MapPin className="w-6 h-6" />
                  <span>Sydney, NSW</span>
                  <span className="mx-2">•</span>
                  <span>Serving Australia-wide</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 lg:p-14 space-y-14">
            {/* About Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-primary" />
                <h4 className="text-2xl font-bold text-foreground">
                  Professional Profile
                </h4>
              </div>
              <p className="text-black font-playfair leading-relaxed text-lg">
                With over{" "}
                <span className="font-semibold text-primary">
                  17 years of experience
                </span>{" "}
                in the migration industry and 2.5 years as a practising
                solicitor, Farhan Shakil offers clients a rare blend of deep
                regulatory insight and broad legal capability. His practice
                spans complex migration matters, property transactions, and
                commercial law—delivered with precision, empathy, and strategic
                foresight.
              </p>
            </div>

            {/* Credentials */}
            <div>
              <h4 className="text-2xl font-serif font-bold text-foreground mb-8 flex items-center gap-3">
                <Star className="w-8 h-8 text-primary" />
                Academic Credentials
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {credentials.map((cred, index) => (
                  <div
                    key={index}
                    className="bg-secondary border border-border rounded-lg p-6 hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <span className="text-primary font-bold text-sm lg:text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <p className="font-semibold text-white mb-1 text-sm lg:text-lg">
                      {cred.qualification}
                    </p>
                    <p className="text-white text-sm">
                      {cred.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="text-2xl font-serif font-bold text-foreground mb-8">
                Legal Practice Areas
              </h4>
              <div className="grid lg:grid-cols-3 gap-6">
                {practiceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-secondary border border-border rounded-lg p-8 hover:border-primary/30 hover:shadow-md transition-all group"
                  >
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h5 className="font-serif font-bold text-white mb-6 text-lg xl:text-xl group-hover:text-primary transition-colors">
                      {area.title}
                    </h5>
                    <ul className="space-y-3">
                      {area.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-white text-sm leading-relaxed flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
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
              <h4 className="text-2xl font-bold text-foreground mb-8">
                Why Clients Choose Aussentra Legal
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyStrengths.map((strength, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-secondary border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all group"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-white font-medium text-sm lg:text-base">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary text-primary-foreground rounded-2xl p-12 shadow-md">
          <p className="text-xl font-serif font-bold mb-6">
            Ready to Discuss Your Legal Needs?
          </p>
          <a
            href="mailto:contact@aussentra.com"
            className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg text-base"
          >
            Schedule a Confidential Consultation
          </a>
          <p className="text-primary-foreground/80 mt-4 text-sm">
            Response within 24 hours guaranteed
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutOurTeam;
