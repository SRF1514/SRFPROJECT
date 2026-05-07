
export interface CFASectionItem {
  title: string;
  content?: string;
  bullets?: string[];
}

export interface CFASubTopic {
  id: string;
  title: string;
  description?: string;
  content: string;
  hero?: {
    heading: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA?: string;
  };
  summaryCards?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  mainSections?: CFASectionItem[];
  visualSuggestion?: {
    type: string;
    description: string;
    chartId?: string;
  };
  decisionSupport?: {
    type: 'table' | 'checklist' | 'guide';
    title: string;
    data: any;
  };
  nextStep?: {
    text: string;
    cta: string;
  };
}

export interface CFASection {
  id: string;
  title: string;
  description: string;
  icon: string;
  subTopics: CFASubTopic[];
}

export const cfaContent: CFASection[] = [
  {
    id: "cfa-program",
    title: "CFA Program",
    description: "The gold standard in investment management. Explore the 3-level journey to the charter.",
    icon: "Award",
    subTopics: [
      {
        id: "overview",
        title: "Overview",
        content: "The CFA® Program is one of the most widely recognized professional education programs in investment management and finance. It is designed for people who want to build a strong understanding of investment analysis, portfolio management, financial markets, ethics, and professional standards. The program is especially relevant for students, early-career finance professionals, investment analysts, portfolio managers, wealth managers, consultants, risk professionals, and anyone aiming to develop a serious career in the investment industry.\n\nThe program is organized into three exam levels. Each level builds on the previous one and gradually moves from foundational knowledge to advanced application. Level I focuses on core investment concepts, tools, and ethical principles. Level II emphasizes analysis, valuation, and the application of investment tools to real-world scenarios. Level III focuses on portfolio management, wealth planning, and the integration of investment knowledge into practical client and institutional decision-making.\n\nEarning the CFA charter requires more than passing exams. Candidates must complete the three levels of the CFA Program, satisfy relevant work experience requirements, apply for membership, provide professional references, and commit to the CFA Institute Code of Ethics and Standards of Professional Conduct. The program is demanding, but it is built to develop technical ability, ethical judgment, and professional credibility in the global investment profession.\n\nThe CFA Program is suitable for people who want to deepen their understanding of financial markets, improve their analytical skills, and demonstrate commitment to high professional standards. It is often used as a long-term career development path for professionals seeking roles in investment research, asset management, private wealth, institutional portfolio management, risk management, consulting, and related fields.",
        hero: {
          heading: "Build a Global Foundation in Investment Management",
          subtitle: "The CFA Program helps candidates develop investment knowledge, ethical judgment, and portfolio management skills across three progressive exam levels.",
          primaryCTA: "Explore the CFA Program",
          secondaryCTA: "View Exam Structure"
        },
        summaryCards: [
          { title: "Three-Level Program", description: "Progressive journey from core concepts to advanced application.", icon: "GraduationCap" },
          { title: "Investment-Focused Curriculum", description: "Comprehensive coverage of investment analysis and portfolio management.", icon: "BookOpen" },
          { title: "Ethics and Professional Standards", description: "A core focus on integrity and professional responsibility.", icon: "Shield" },
          { title: "Global Career Relevance", description: "Recognized by employers in investment hubs worldwide.", icon: "Globe" }
        ],
        mainSections: [
          {
            title: "What the CFA Program Covers",
            content: "The program builds a strong understanding of investment analysis and portfolio management. Candidates often start by mastering [[exam|Core Exam Concepts]] before moving into professional practice."
          },
          {
            title: "Who the CFA Program Is For",
            bullets: [
              "Students entering the [[job-board|Investment Job Market]]",
              "Analysts seeking [[share-achievements|Professional Distinction]]",
              "Portfolio Managers aiming for the [[member-overview|Global Charterholder Network]]"
            ]
          },
          {
            title: "The Professional Roadmap",
            content: "Success requires more than just passing. It involves [[become-member|Membership Application]], validating work experience, and connecting with a [[find-society|Local CFA Society]]."
          }
        ],
        visualSuggestion: {
          type: "Horizontal journey timeline",
          description: "Showing Level I, Level II, Level III, Membership Application, and Charterholder Status.",
          chartId: "chart-1"
        },
        nextStep: {
          text: "Ready to begin? Review eligibility, register for the appropriate exam level, and start studying with the official Learning Ecosystem.",
          cta: "View Next Steps"
        }
      },
      {
        id: "exam",
        title: "Exam",
        content: "The CFA Program exam is divided into three levels, and each level is designed to test a different stage of professional development. The exams are computer-based and are administered during specific exam windows throughout the year. Candidates must pass each level before progressing to the next one.\n\nLevel I tests whether candidates understand and can describe important investment concepts. It focuses on foundational knowledge, including ethics, quantitative methods, economics, financial statement analysis, corporate issuers, equity, fixed income, derivatives, alternative investments, and portfolio management. The exam format is multiple choice, and candidates are expected to demonstrate broad knowledge across the curriculum.\n\nLevel II focuses on analysis and application. Instead of testing only whether candidates know concepts, this level asks candidates to apply those concepts to investment situations. The exam uses item sets based on case-style vignettes. Candidates read a scenario and then answer multiple-choice questions connected to that information. This level places more emphasis on valuation, financial analysis, and decision-making.\n\nLevel III focuses on portfolio management and wealth planning. It requires candidates to integrate knowledge from across the curriculum and apply it to individual and institutional investment situations. The exam includes item sets and constructed response questions. Candidates must show not only that they understand the material, but also that they can apply it in a structured and professional way.\n\nCandidates should prepare carefully for exam day. They need to understand the identification requirements, calculator policy, personal belongings policy, test center rules, and timing of the exam. Because registration and exam scheduling are separate steps, candidates must make sure they both register for the exam and schedule an appointment before the relevant deadlines. Exam appointments are generally available on a first-come, first-served basis.",
        hero: {
          heading: "Master the Three-Level Exam Journey",
          subtitle: "Each level of the CFA exam is a rigorous milestone designed to validate your expertise in investment analysis and decision-making.",
          primaryCTA: "View Exam Windows",
          secondaryCTA: "Exam Day Prep Guide"
        },
        summaryCards: [
          { title: "Level I: Knowledge", description: "Foundational concepts and tools across 10 topic areas.", icon: "GraduationCap" },
          { title: "Level II: Application", description: "Focus on valuation and analysis using case-style vignettes.", icon: "Target" },
          { title: "Level III: Strategy", description: "Portfolio management and wealth planning for clients.", icon: "Award" },
          { title: "Computer-Based", description: "Administered at secure testing centers globally.", icon: "Monitor" }
        ],
        mainSections: [
          {
            title: "Exam Structure & Format",
            content: "The exams transition from simple recall to complex integration.",
            bullets: [
              "Level I: Multiple choice questions (Session 1 & 2)",
              "Level II: Item sets based on case vignettes",
              "Level III: Item sets and constructed response (essay)"
            ]
          },
          {
            title: "Preparation Commitment",
            content: "Candidates typically spend over 300 hours per level preparing with the official curriculum.",
            bullets: [
              "Focus on learning outcomes (LOS)",
              "Simulate exam conditions with practice mocks",
              "Master the financial calculator"
            ]
          }
        ],
        decisionSupport: {
          type: "table",
          title: "Exam Level Comparison",
          data: {
            headers: ["Focus", "Level I", "Level II", "Level III"],
            rows: [
              ["Primary Focus", "Foundational Knowledge", "Asset Valuation", "Portfolio management"],
              ["Question Style", "Multiple Choice", "Item Sets (Vignettes)", "Item Sets & Essay"],
              ["Skill Tested", "Recall & Understanding", "Analysis & Application", "Synthesis & Evaluation"],
              ["Preparation Emphasis", "Concept mastery", "Analytical depth", "Holistic application"]
            ]
          }
        },
        nextStep: {
          text: "Ready to sit for the exam? Check the registration deadlines and schedule your seat.",
          cta: "Check Deadlines"
        }
      },
      {
        id: "dates-fees",
        title: "Dates & Fees",
        content: "CFA Program exam dates and fees change over time, so this section of your website should always direct users to the official CFA Institute website for the most current information. Candidates should check the official exam calendar before making study plans, travel arrangements, or payment decisions.\n\nCFA exams are offered during scheduled exam windows throughout the year. The availability of each level depends on the exam cycle. Candidates must register during the applicable registration period and schedule their exam appointment before the scheduling deadline. Registering for an exam does not automatically reserve a test center appointment, so candidates should complete both steps as early as possible.\n\nThe cost of the CFA Program depends on when the candidate registers. Early registration is usually less expensive than standard registration. Candidates may also need to pay an initial enrollment fee when they first enter the CFA Program. Additional costs may include rescheduling fees, optional study products, printed curriculum materials, test preparation providers, travel expenses, or other personal study resources.\n\nCandidates who need to change their exam appointment may be able to reschedule within the same exam window, subject to availability and a rescheduling fee. Candidates who cannot attend an exam may need to review the deferral policy, refund policy, and other candidate policies to understand their options. These policies are important because exam fees are generally subject to strict rules and deadlines.\n\nA good website page for dates and fees should help users understand the difference between enrollment, registration, scheduling, rescheduling, refunds, and deferrals. It should also encourage users to check official CFA Institute pages before paying any fees, because deadlines, costs, and policies can change."
      },
      {
        id: "curriculum",
        title: "Curriculum",
        content: "The CFA Program curriculum is designed to build a complete foundation in investment management. It covers ethical and professional standards, financial analysis, investment tools, asset classes, portfolio management, and wealth planning. The curriculum becomes more advanced at each level and gradually shifts from learning concepts to applying them in professional scenarios.\n\nAt Level I, candidates study the basic tools and concepts used by investment professionals. This includes ethical standards, time value of money, probability, statistics, economics, financial reporting, corporate finance, equity investments, fixed income, derivatives, alternative investments, and portfolio management. The goal is to help candidates understand the language and structure of the investment industry.\n\nAt Level II, the curriculum moves deeper into analysis and valuation. Candidates are expected to apply investment concepts to more complex situations. Financial statement analysis, equity valuation, fixed income valuation, derivatives, alternative investments, and portfolio management are tested with more analytical depth. The exam format reflects this shift by using case-style vignettes that require candidates to interpret information and make judgments.\n\nAt Level III, the curriculum focuses on portfolio management and practical application. Candidates study asset allocation, risk management, behavioral finance, institutional and private wealth management, performance evaluation, and investment strategy. The level is designed to test whether candidates can bring together technical knowledge, ethical judgment, and client objectives to make appropriate investment decisions.\n\nThe curriculum also includes Practical Skills Modules. These modules are intended to connect the academic curriculum to workplace skills. They help candidates practice tasks and concepts that are relevant to finance roles, such as analysis, modeling, communication, and investment decision-making. These modules are an important part of the modern CFA candidate experience and should be presented as part of the study journey."
      },
      {
        id: "learning-ecosystem",
        title: "Learning Ecosystem",
        content: "The Learning Ecosystem is CFA Institute’s digital study platform for registered candidates. It gives candidates access to official curriculum content, practice questions, study planning tools, progress tracking, mock exams, and learning activities. It is designed to help candidates organize their study process and prepare more effectively for the exam.\n\nA candidate can use the Learning Ecosystem to read curriculum material, answer practice questions, review explanations, identify weak areas, and track progress over time. The platform helps candidates move through the curriculum in a structured way rather than relying only on static textbooks or scattered notes. It is especially useful for candidates who want to monitor how much of the curriculum they have completed and how well they are performing across topic areas.\n\nThe Learning Ecosystem is also where candidates can access important preparation resources connected to their exam level. Depending on the candidate’s registration and available resources, this may include practice questions, mock exams, study planning features, and required Practical Skills Modules. Because the platform is connected to the official curriculum, it should be presented on your site as one of the most important tools for registered candidates.\n\nThis module on your website should explain that the Learning Ecosystem is not simply a reading platform. It is a study environment that supports planning, practice, review, and progress measurement. Candidates should be encouraged to use it consistently throughout their exam preparation."
      },
      {
        id: "career-prospects",
        title: "Career Prospects",
        content: "The CFA Program is closely connected to careers in investment management and financial analysis. It is especially relevant for people who want to work in portfolio management, equity research, fixed income research, asset allocation, wealth management, private banking, consulting, investment strategy, risk management, or institutional investment roles.\n\nThe program helps candidates develop technical knowledge that can be applied in many areas of finance. Candidates study financial statements, valuation, asset classes, economics, quantitative methods, portfolio construction, and ethics. These topics are useful for professionals who analyze companies, evaluate securities, manage portfolios, advise clients, or make investment recommendations.\n\nThe CFA charter is often associated with roles that require strong analytical ability and professional credibility. It can support career development for people who want to work at asset managers, investment banks, pension funds, endowments, wealth management firms, family offices, consulting firms, rating agencies, insurance companies, and other financial institutions.\n\nThis section of your website should not promise that completing the CFA Program guarantees a job. Instead, it should explain that the program can strengthen a candidate’s knowledge, improve professional credibility, and support long-term career progression in investment-related fields. It should also connect users to career resources, job boards, professional learning, and networking opportunities."
      },
      {
        id: "policies",
        title: "Policies",
        content: "The CFA Program has detailed policies that candidates must understand before registering and before sitting for an exam. These policies cover enrollment, registration, scheduling, refunds, deferrals, exam day requirements, identification, calculators, personal belongings, candidate conduct, disability accommodations, and professional behavior.\n\nThe refund policy explains when candidates may be eligible for a refund and when fees become nonrefundable. The deferral policy explains whether candidates can move an exam registration to a later window and under what conditions. These policies can change, so users should always be directed to the official CFA Institute policy pages before making decisions.\n\nThe exam day policies are also important. Candidates must bring acceptable identification, follow test center rules, use only permitted calculators, and comply with all instructions from testing staff. Violations of exam policies can lead to serious consequences, including cancellation of results or disciplinary review.\n\nYour website should summarize these policies in plain language but should not attempt to replace the official policy documents. The safest approach is to explain the main policy categories and provide clear links to the official CFA Institute pages for the full legal and procedural details."
      },
      {
        id: "candidate-resources",
        title: "Registered Candidate Resources",
        content: "Registered candidates have access to official resources designed to support exam preparation. These resources include the curriculum, Learning Ecosystem, practice questions, mock exams, study planning tools, Practical Skills Modules, exam day guidance, and candidate support materials.\n\nThe most important purpose of this module is to help candidates know where to go after they register. Many candidates need a central place to understand what study tools are available, how to access them, how to schedule their exam, how to prepare for exam day, and how to review policies.\n\nCandidates should use official resources early in their preparation. The curriculum provides the foundation for the exam, while practice questions and mock exams help candidates test their understanding. Study planners and progress tools help candidates manage time, identify weaker topics, and stay on track.\n\nThis section should also explain that candidates may choose to use approved prep providers or additional study materials, but the official CFA Institute curriculum remains the core source for exam content. The page should guide candidates toward the tools they need without overwhelming them."
      },
      {
        id: "enroll-register",
        title: "Enroll and Register",
        content: "The enrollment and registration process is the starting point for candidates who want to enter the CFA Program. A candidate first needs to confirm eligibility, create or sign in to a CFA Institute account, enroll in the CFA Program, register for the correct exam level, pay the required fees, and schedule the exam appointment.\n\nIt is important to explain that registration and scheduling are not the same thing. A candidate may register and pay for an exam but still need to choose an appointment date, time, and test center or testing option. Because appointment availability can be limited, candidates should schedule as early as possible after registration.\n\nAfter enrollment and registration, candidates should begin studying with the official curriculum and Learning Ecosystem. They should also review exam dates, deadlines, identification rules, calculator policies, and candidate resources. If Practical Skills Modules are required for their level, candidates should complete them according to CFA Institute requirements.\n\nThis module should function as a clear call-to-action page. It should help users understand what they need to do next and guide them toward the official CFA Institute registration process."
      }
    ]
  },
  {
    id: "other-programs",
    title: "Other Programs",
    description: "Specialized certificates and foundations for different career stages and niches.",
    icon: "Layers",
    subTopics: [
      { 
        id: "sustainable-investing", 
        title: "Sustainable Investing", 
        content: "Sustainable investing focuses on how environmental, social, and governance factors can affect investment decisions. It is relevant for professionals who want to understand how sustainability issues influence companies, markets, risk, regulation, client preferences, and long-term value creation.\n\nThis area is especially useful for those pursuing the [[principles-sustainable-chinese|Certificate in Principles of Sustainable Investing]] or candidates interested in [[climate-investing|Climate Investing and Valuation]].",
        hero: {
          heading: "Integrate ESG into Investment Decision-Making",
          subtitle: "Sustainability is not separate from investment analysis; it's a critical component of understanding long-term financial performance.",
          primaryCTA: "Explore ESG Certificates",
          secondaryCTA: "Sustainability Learning Path"
        },
        summaryCards: [
          { title: "ESG Integration", description: "Learn to incorporate environmental, social, and governance factors.", icon: "Shield" },
          { title: "Risk & Opportunity", description: "Identify sustainability-related value drivers in markets.", icon: "Target" },
          { title: "Global Standards", description: "Stay current with rapidly evolving regulations and disclosures.", icon: "Globe" },
          { title: "Client Alignment", description: "Meet the growing demand for responsible investment practices.", icon: "Users" }
        ],
        visualSuggestion: {
          type: "Layered pyramid",
          description: "Sustainability Learning Map showing levels from ESG basics to strategy.",
          chartId: "chart-7"
        },
        mainSections: [
          {
            title: "Advanced Specializations",
            bullets: [
              "Transition from ESG basics to [[climate-investing|Climate Risk & Valuation]]",
              "Apply sustainability filters to [[private-equity|Private Equity Analysis]]",
              "Review [[pl-program|Professional Learning]] resources for ESG updates"
            ]
          }
        ]
      },
      { 
        id: "principles-sustainable-chinese", 
        title: "Principles of Sustainable Investing Certificate — Chinese", 
        content: "The Principles of Sustainable Investing Certificate in Chinese is designed for learners who want to study sustainable investing concepts in Simplified Chinese. It provides an accessible path for professionals who want to understand the basic principles of sustainable investment and how these ideas relate to financial markets and investment decision-making.\n\nThis certificate is suitable for learners who are new to sustainability or who want a structured introduction in Chinese. It can support professionals working in investment, banking, wealth management, consulting, financial services, corporate finance, and related areas where sustainability knowledge is becoming increasingly relevant.\n\nThe content should be presented as a self-paced learning option that introduces sustainable investing concepts, ESG factors, investment relevance, and professional application. The certificate can help users build confidence in sustainability terminology and understand how sustainability issues may affect companies, investors, and clients.\n\nOn your website, this module should make clear that this program is different from the English-language Sustainable Investing Certificate. It should be positioned as a Chinese-language learning route for users who want to study sustainable investing in a more accessible language format." 
      },
      { 
        id: "climate-investing", 
        title: "Climate Investing", 
        content: "Climate investing focuses on the relationship between climate change and investment decision-making. It examines how climate-related risks and opportunities can affect companies, sectors, assets, portfolios, and long-term financial outcomes.\n\nClimate investing includes the study of physical risks, transition risks, policy changes, regulation, technology shifts, carbon markets, climate scenarios, emissions data, disclosure standards, and valuation impacts. Physical risks may include damage or disruption caused by extreme weather or long-term environmental changes. Transition risks may arise from changes in regulation, energy systems, consumer preferences, litigation, or technology.\n\nProfessionals who study climate investing learn how to evaluate the financial relevance of climate factors. This can involve assessing company exposure, estimating valuation effects, comparing industries, evaluating portfolio risks, and understanding how climate objectives may influence investment strategy.\n\nThis module should be written for users who already understand the basics of investment analysis and want to focus more specifically on climate-related issues. It can also serve as a bridge from general sustainable investing into more advanced climate risk, valuation, and portfolio construction topics." 
      },
      { 
        id: "private-markets", 
        title: "Private Markets", 
        content: "Private markets refer to investments that are not traded on public exchanges. They include [[private-equity|Private Equity]], private credit, real estate, and infrastructure.\n\nProfessionals in this field often leverage the [[pl-program|Professional Learning Program]] to stay current on valuation techniques for alternatives.",
        hero: {
          heading: "Explore the World of Private Market Assets",
          subtitle: "Understand alternative investments outside public exchanges, from Private Equity to Infrastructure.",
          primaryCTA: "View Core Curriculum",
          secondaryCTA: "Private Markets Learning Path"
        },
        visualSuggestion: {
          type: "Asset class tree",
          description: "Private Markets Map showing Private Equity, Credit, Real Estate, and more.",
          chartId: "chart-6"
        },
        mainSections: [
          {
            title: "Specialized Learning",
            content: "Master the complexities of [[private-equity|Private Equity fund structures]] or explore how [[climate-investing|Climate Risks]] impact infrastructure valuation."
          }
        ]
      },
      { 
        id: "private-equity", 
        title: "Private Equity", 
        content: "Private equity is a major part of private markets. It involves investing in companies that are not publicly traded or taking public companies private. Private equity investors usually seek to improve businesses, increase value, and eventually exit the investment through a sale, public listing, recapitalization, or another transaction.\n\nPrivate equity strategies include buyouts, growth equity, venture capital, and special situations. Private equity funds often acquire mature companies and use operational improvements, strategic changes, financial restructuring, or market growth to create value. Venture capital focuses on early-stage companies with high growth potential. Growth equity typically invests in more developed private companies that need capital to expand.\n\nPrivate equity funds are usually managed by general partners who make investment decisions and manage portfolio companies. Investors in the fund, known as limited partners, commit capital and provide funding when called. The structure often includes management fees, carried interest, investment periods, fund lives, and specific exit objectives.\n\nA private equity module should help users understand how deals are sourced, evaluated, financed, managed, and exited. It should also explain key risks, including illiquidity, leverage, valuation uncertainty, operational risk, market risk, and manager selection risk." 
      },
      { 
        id: "investment-foundations", 
        title: "Investment Foundations®", 
        content: "Investment Foundations is designed for people who want to understand the investment industry at a broad and accessible level. It is useful for professionals who work in or around financial services but may not need the depth of the CFA Program.\n\nThis type of program can benefit people in operations, compliance, client service, technology, marketing, sales, administration, or support functions within investment organizations. It can also help students or career changers understand how the investment industry works before choosing a more advanced program.\n\nThe content should introduce users to financial markets, investment instruments, industry structure, ethics, risk and return, client needs, investment operations, and the roles different professionals play in the investment process. The goal is to give learners a practical understanding of how the industry functions.\n\nOn your website, this module should be positioned as a foundational entry point. It is not the same as the CFA Program, but it can help users build confidence with investment terminology and industry concepts." 
      },
      { 
        id: "cipm-program", 
        title: "CIPM® Program", 
        content: "The CIPM® Program focuses on investment performance measurement, attribution, appraisal, manager selection, and performance presentation. It is designed for professionals who work with investment results and need to evaluate how portfolios, strategies, or managers have performed.\n\nThis program is especially relevant for performance analysts, portfolio analysts, investment consultants, manager research professionals, risk professionals, compliance professionals, and asset owners. It helps professionals understand how to calculate, interpret, present, and evaluate investment performance.\n\nThe CIPM Program is structured into two levels. The first level focuses on the foundations of performance measurement, attribution, appraisal, presentation, and relevant standards. The second level builds on those foundations and includes more advanced topics, including manager selection and deeper performance evaluation.\n\nThe designation can help professionals demonstrate specialized expertise in performance analysis. It is particularly useful in organizations where accurate performance reporting and manager evaluation are central to investment decision-making." 
      },
      { 
        id: "view-all", 
        title: "View All Programs", 
        content: "The all-programs section should act as a complete directory of CFA Institute learning opportunities. It should allow users to compare programs by career goal, topic, level of difficulty, time commitment, language, and professional relevance.\n\nThis page should include the CFA Program for people pursuing the CFA charter, the CIPM Program for investment performance specialists, sustainable investing programs for ESG and sustainability knowledge, climate investing education for climate-related risk and valuation, private markets programs for alternative investment knowledge, private equity learning, and foundational programs for people new to the investment industry.\n\nThe purpose of this module is to help users find the right starting point. Some users will already know they want the CFA Program, while others may need a shorter certificate, a specialized learning path, or an introductory course. The page should guide users based on their experience level and professional objectives." 
      }
    ]
  },
  {
    id: "learning-paths",
    title: "Learning Paths",
    description: "Guided curricula for Private Markets and Sustainability topics.",
    icon: "Compass",
    subTopics: [
      { 
        id: "lp-private-markets", 
        title: "Private Markets", 
        content: "The private markets learning path is designed for users who want to understand investments outside public markets. It should begin with the basic structure of private markets and then move into specific asset classes, fund structures, valuation, due diligence, risks, performance measurement, and professional application.\n\nA strong private markets path should explain how private equity, private credit, real estate, infrastructure, and other alternative investments fit into portfolios. Users should learn why investors allocate to private markets, how these investments differ from public securities, and what trade-offs exist between return potential, risk, liquidity, complexity, and transparency.\n\nThis learning path should also explain the roles of general partners, limited partners, fund administrators, placement agents, consultants, asset owners, and portfolio companies. It should help users understand how capital is committed, called, invested, monitored, and eventually returned.\n\nThe outcome of this path should be practical fluency. Users should be able to understand private markets terminology, discuss the major asset classes, recognize important risks, and identify where private market investments may fit within a broader portfolio." 
      },
      { 
        id: "lp-sustainability", 
        title: "Sustainability", 
        content: "The sustainability learning path is designed for users who want to understand how ESG and sustainability issues connect to investment decisions. It should begin with foundational sustainability concepts and then move into ESG integration, climate risk, stewardship, data, disclosure, regulation, and investment strategy.\n\nThis path should explain that sustainability analysis is not only about values or preferences. It can also be about understanding financially relevant risks and opportunities. Environmental issues, social factors, and governance quality can affect companies in different ways, depending on industry, geography, regulation, business model, and stakeholder expectations.\n\nUsers should learn how investors use sustainability information in research, portfolio construction, engagement, reporting, and client communication. They should also understand the limits of sustainability data, including inconsistency, estimation challenges, greenwashing concerns, and differences between ESG ratings providers.\n\nThe outcome of this path should be a practical understanding of how sustainability can be incorporated into investment analysis and decision-making. Users should be able to distinguish between general ESG knowledge, climate-specific analysis, and advanced sustainable investment practice." 
      }
    ]
  },
  {
    id: "program-support",
    title: "Program Support",
    description: "Tools to help you choose the right path and manage your candidate journey.",
    icon: "LifeBuoy",
    subTopics: [
      { 
        id: "help-choosing", 
        title: "Help Choosing a Program", 
        content: "Choosing the right path depends on your career stage and goals. Whether you're seeking the flagship [[flagship|CFA® Charter]] or a specialized [[sustainable-investing|ESG Certificate]], our guide helps you align your education with market demand.",
        decisionSupport: {
          type: "table",
          title: "Program Selection Matrix",
          data: {
            headers: ["Goal", "Recommended Path", "Time Commitment"],
            rows: [
              ["Core Investment Mgmt", "[[exam|CFA Program]]", "300+ hrs per level"],
              ["ESG & Sustainability", "[[sustainable-investing|ESG Certificate]]", "100-130 hrs"],
              ["Private Asset Analysis", "[[private-markets|Private Markets Path]]", "Self-paced"],
              ["Performance Eval", "[[cipm-program|CIPM Program]]", "150+ hrs per level"],
              ["Industry Foundation", "[[investment-foundations|Foundations]]", "20-40 hrs"]
            ]
          }
        },
        nextStep: {
          text: "Ready to commit to a specific path?",
          cta: "Register with CFA Institute"
        }
      },
      { 
        id: "all-resources", 
        title: "All Candidate Resources", 
        content: "The all candidate resources module should collect the most important tools and support materials for CFA Program candidates in one place. It should be designed for users who have already registered or are close to registering and need quick access to official preparation resources.\n\nCandidates should be able to find the Learning Ecosystem, curriculum readings, practice questions, mock exams, study planning tools, Practical Skills Modules, exam day guidance, policies, prep provider information, and results information. The page should also explain how these resources work together during exam preparation.\n\nA candidate might use the curriculum to learn the material, the Learning Ecosystem to organize study, practice questions to test topic understanding, mock exams to simulate exam conditions, and the exam guide to prepare for test day. Practical Skills Modules help connect study material with job-related skills.\n\nThis page should be clear, practical, and organized around candidate needs. It should help users move from registration to preparation, from preparation to exam day, and from exam day to results." 
      },
      { 
        id: "candidate-signin", 
        title: "Candidate Sign In", 
        content: "The candidate sign-in module should direct registered candidates to the account area where they can manage their CFA Institute profile, exam registration, exam scheduling, study resources, candidate resources, and results.\n\nCandidates may need to sign in to access the Learning Ecosystem, view registered exams, schedule or reschedule an appointment, complete required modules, check receipts, update personal information, or view exam results. Because many candidate services are account-specific, the sign-in page should be easy to find throughout the site.\n\nThis module should be short and action-oriented. It should explain that registered candidates should use the official candidate portal to manage their program activity and access personalized resources." 
      },
      {
        id: "sierra-practice-hub",
        title: "Sierra Practice Hub",
        description: "Premium access to over 2,500 questions, case studies, and mock exams for Sierra Members.",
        content: "The Sierra Practice Hub is an exclusive advantage for Sierra Members. It provides a high-density learning environment featuring over 2,500 questions precisely mapped to the 2026 CFA Program curriculum.\n\nThis hub includes both **Multiple Choice Questions (MCQs)** for building speed and precision across foundational topics, and **Open-Ended Constructed Response** scenarios designed for Level III candidates and advanced analysts focusing on synthesis and professional judgment.\n\nAccess is strictly reserved for members who have achieved Sierra distinction. Within the hub, you will find a curated 'Success Roadmap' suggesting the optimal order of topics based on historical exam difficulty and coefficient analysis.",
        hero: {
          heading: "Master the 2026 Curriculum with Precision",
          subtitle: "2,500+ premium questions curated for the ambitious candidate. Open-ended case studies and technical MCQs.",
          primaryCTA: "Enter Practice Hub",
          secondaryCTA: "View Methodology"
        },
        summaryCards: [
          { title: "2,500+ Question Bank", description: "Updated for the 2026 CFA curriculum with new LOS coverage.", icon: "Database" },
          { title: "Open-Ended Practice", description: "Constructed response scenarios for synthesis and valuation skills.", icon: "PenTool" },
          { title: "Sierra Exclusive", description: "Premium content only accessible to verified Sierra Member users.", icon: "Lock" },
          { title: "Performance Analytics", description: "Track your accuracy and timing against peer benchmarks.", icon: "BarChart" }
        ],
        mainSections: [
          {
            title: "Question Types & Usage",
            content: "We use a bi-modal approach to practice to mirror both the computational rigor and the strategic depth required for professional distinction.",
            bullets: [
              "**Multiple Choice (MCQ):** 1,800+ questions focusing on technical accuracy and speed.",
              "**Open Ended / Case Studies:** 700+ constructed response questions focusing on synthesis, valuation, and ethics.",
              "**Mock Exams:** Full 4.5-hour simulations including the 2026 Practical Skills Modules."
            ]
          },
          {
            title: "The Recommended Flow",
            content: "To maximize retention, we recommend the 'Foundation-to-Synthesis' approach:",
            bullets: [
              "Phase 1: Topic-specific MCQs (Quantitative & Financial Statement Analysis)",
              "Phase 2: Asset Class item sets (Equity, Fixed Income, Derivatives)",
              "Phase 3: Cross-topic Open-ended case studies",
              "Phase 4: Full Simulation Mocks under timed conditions"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "membership",
    title: "Membership",
    description: "Join the global community of investment professionals.",
    icon: "Users",
    subTopics: [
      { 
        id: "member-overview", 
        title: "Membership Overview", 
        content: "CFA Institute membership connects investment professionals to a global professional community. Membership provides access to professional learning, research, networking opportunities, local societies, career resources, volunteer opportunities, and tools that support continuing development.\n\nMembership is also important for people who have completed requirements for professional designations. Maintaining membership may be required to use certain designations, including the CFA charter and CIPM designation. Members are expected to follow professional standards and support ethical conduct in the investment profession.\n\nThere are different membership categories depending on a person’s qualifications, work experience, and relationship to CFA Institute or a local CFA Society. Regular membership is generally associated with investment professionals who meet work experience and reference requirements. Affiliate membership may be available to people who want to participate in the professional community but do not yet meet regular membership requirements.\n\nThis module should present membership as more than a credential requirement. It should show membership as an ongoing professional relationship that supports learning, connection, leadership, and career development.",
        hero: {
          heading: "Join a Global Network of Financial Professionals",
          subtitle: "CFA Institute membership is your gateway to a lifetime of professional learning, ethical practice, and global community connection.",
          primaryCTA: "Apply for Membership",
          secondaryCTA: "Explore Membership Benefits"
        },
        summaryCards: [
          { title: "Professional Distinction", description: "The right to use world-class designations like the CFA charter.", icon: "Award" },
          { title: "Ongoing Learning", description: "Exclusive research, webinars, and technical updates.", icon: "BookOpen" },
          { title: "Local Presence", description: "Connect with one of over 160 local CFA Societies.", icon: "Globe" },
          { title: "Career Resources", description: "Access the Job Board and professional development tools.", icon: "Briefcase" }
        ],
        visualSuggestion: {
          type: "Circular wheel",
          description: "Membership Value Wheel showing career, learning, and networking segments.",
          chartId: "chart-8"
        }
      },
      { 
        id: "member-benefits", 
        title: "Membership Benefits", 
        content: "CFA Institute membership provides benefits that support career growth, professional knowledge, and community engagement. Members can access resources related to investment practice, research, professional learning, career support, networking, and industry insight.\n\nCareer-related benefits may include access to job resources, career content, compensation information, and tools that help members navigate professional development. Learning benefits may include webinars, professional learning resources, research publications, curated insights, and opportunities to track continuing education.\n\nMembership also connects professionals to a wider community. Members may join or participate in local CFA Societies, attend events, meet peers, volunteer, and engage with professionals in their region or area of practice. This community element is especially important because investment careers often depend on professional trust, shared standards, and ongoing relationships.\n\nThis section should make clear that membership is designed to provide value throughout a professional’s career. It supports people not only when they are seeking a job or credential, but also when they are building expertise, staying current, and contributing to the profession.",
        mainSections: [
          {
            title: "Career-Related Services",
            bullets: [
              "Access to the official CFA Institute Job Board",
              "Annual compensation surveys and reports",
              "Career management content and webinars"
            ]
          },
          {
            title: "Exclusive Learning Resources",
            bullets: [
              "Subscription to the Financial Analysts Journal (FAJ)",
              "Refresher readings from the CFA Program curriculum",
              "Invitations to global conferences and events"
            ]
          }
        ],
        decisionSupport: {
          type: "table",
          title: "Membership Tiers Comparison",
          data: {
            headers: ["Category", "Requirement", "Best For"],
            rows: [
              ["Regular Member", "Bachelor's + 4,000 hrs exp.", "Charterholders and senior pros"],
              ["Affiliate Member", "Meet local society criteria", "Partners and associates"],
              ["Charterholder", "Passed Level III + Membership", "Investment decision-makers"]
            ]
          }
        }
      },
      { 
        id: "become-member", 
        title: "Become a Member", 
        content: "The become a member module should explain how users can apply for CFA Institute membership and why they might want to do so. Membership is relevant for candidates, charterholders, investment professionals, and people who want to connect with the CFA Institute community.\n\nThe application process generally involves selecting the appropriate membership type, providing personal and professional information, documenting relevant work experience, submitting references if required, selecting a local society where applicable, agreeing to professional conduct requirements, and paying membership dues.\n\nUsers should understand that membership requirements differ depending on the membership type. Some members need qualifying work experience and professional references, while other membership routes may be available through local societies. The page should encourage users to review the official requirements before beginning an application.\n\nThis module should present membership as a way to join a global community of investment professionals, access resources, maintain professional designations where applicable, and demonstrate commitment to ethical standards." 
      },
      { 
        id: "renewal", 
        title: "Membership Renewal", 
        content: "Membership renewal allows members to continue accessing CFA Institute benefits and, where relevant, maintain the right to use professional designations. Renewal is typically completed annually through the member account area.\n\nMembers renew to maintain access to professional learning, research, career resources, member tools, local society participation, and networking opportunities. For charterholders and designation holders, renewal may also be connected to maintaining designation status and continuing to demonstrate commitment to professional standards.\n\nThis module should remind users that renewal is not only an administrative task. It is part of staying connected to the investment profession and continuing to benefit from CFA Institute resources. The page should direct members to sign in, review dues, update information, and complete the renewal process through the official member portal." 
      },
      { 
        id: "member-signin", 
        title: "Member Sign In", 
        content: "The member sign-in module should give existing members a direct route to their CFA Institute account. Members may need to sign in to renew membership, update their profile, access benefits, view professional learning records, manage digital badges, find member resources, or connect with society information.\n\nThis page should be simple, direct, and easy to access from the main navigation. It should make clear that account-specific services are handled through the official CFA Institute member portal." 
      }
    ]
  },
  {
    id: "network",
    title: "Network",
    description: "Regional societies, member directories, and volunteer opportunities.",
    icon: "Globe",
    subTopics: [
      { 
        id: "find-society", 
        title: "Find a CFA Society®", 
        content: "CFA Societies are local professional organizations connected to the global CFA Institute network. They help investment professionals build relationships, access regional events, participate in professional learning, volunteer, and engage with the local investment community.\n\nA CFA Society can be valuable for candidates, members, charterholders, and finance professionals who want to connect with people in their market. Societies often host educational programs, networking events, career sessions, speaker events, and community initiatives. They can also provide local context for global investment topics.\n\nWhen applying for membership, users may need to select or apply to a local society depending on their membership type and location. Affiliate members may also interact with local societies as part of their membership route.\n\nThis module should help users search for a CFA Society by location and understand why local societies matter. It should present societies as a practical way to turn global professional affiliation into local relationships and opportunities." 
      },
      { 
        id: "find-member", 
        title: "Find a Member", 
        content: "The find a member module should help users connect with CFA Institute members through a member directory or member search tool. This is useful for networking, professional verification, peer connection, and community engagement.\n\nMembers may use the directory to find colleagues, connect with professionals in a specific market, identify people with similar interests, or build relationships within the investment profession. Depending on access rules, the directory may be available only to members or may require sign-in.\n\nThis section should explain that member search is intended for professional connection. It should encourage respectful and appropriate use of member information and direct users to the official member directory." 
      },
      { 
        id: "volunteering", 
        title: "Volunteering", 
        content: "Volunteering allows professionals to contribute to CFA Institute, local societies, committees, educational initiatives, professional standards, and community activities. It is a way for members and qualified professionals to support the investment profession while developing leadership experience and expanding their network.\n\nVolunteer opportunities may include local society roles, event support, committee participation, mentoring, research-related contributions, exam or curriculum-related activities, professional practice initiatives, and governance roles. Some opportunities may be short-term and task-based, while others may require a larger commitment.\n\nVolunteering can help professionals build visibility, develop leadership skills, meet peers, contribute expertise, and support ethical and professional standards in finance. It can also be valuable for people who want to be more active in their local investment community.\n\nThis module should encourage users to explore opportunities that match their skills, interests, location, and available time. It should direct them to official CFA Institute or local society volunteer channels." 
      },
      { 
        id: "communities", 
        title: "Communities", 
        content: "Communities connect investment professionals around shared interests, regions, roles, and areas of expertise. CFA Institute communities may include local societies, professional groups, volunteer networks, online communities, event-based communities, and topic-specific groups.\n\nThe purpose of these communities is to help professionals exchange ideas, learn from one another, discuss industry developments, and build relationships. Communities can be especially useful for professionals who want to stay connected beyond formal study programs or membership benefits.\n\nA communities module should explain that professional development is not limited to exams and certificates. It also happens through conversation, collaboration, events, mentoring, and shared professional engagement. Users should be encouraged to participate in communities that match their professional goals and interests." 
      }
    ]
  },
  {
    id: "career-support",
    title: "Career Support",
    description: "Job boards, professional learning, and achievement sharing.",
    icon: "Briefcase",
    subTopics: [
      { 
        id: "job-board", 
        title: "CFA Institute Job Board", 
        content: "The CFA Institute job board is a career resource for candidates, members, and investment professionals. It connects users with employment opportunities in finance, investment management, research, portfolio management, wealth management, private banking, consulting, investment strategy, risk management, or institutional investment roles.\n\nA job board module should explain that users can search for roles, explore opportunities from employers interested in CFA Institute credentials, and use career resources to support their job search. It may be useful for candidates looking for entry-level positions, professionals seeking advancement, or members exploring new opportunities.\n\nThis page should also connect the job board to broader career development resources. Job search is only one part of career support. Users may also benefit from professional learning, networking, membership, local societies, career articles, and achievement-sharing tools.\n\nThe module should include a clear call to visit the official job board and remind users that job availability changes frequently." 
      },
      { 
        id: "pl-program", 
        title: "Professional Learning Program", 
        content: "The Professional Learning Program supports ongoing education for investment professionals. It is designed for people who want to maintain and improve their knowledge after completing formal exams or credentials.\n\nProfessional learning may include webinars, research articles, refresher readings, ethics content, technical updates, industry analysis, and continuing education resources. Members may be able to track professional learning credits and access additional learning materials.\n\nThis module should explain that the investment profession changes continuously. Markets evolve, regulations change, products develop, technology advances, and client expectations shift. Professional learning helps users stay current and continue developing throughout their careers.\n\nThe page should present professional learning as a lifelong part of being an investment professional. It should be relevant not only for charterholders, but also for members, candidates, and professionals who want to keep their skills up to date." 
      },
      { 
        id: "share-achievements", 
        title: "Share Your Achievements", 
        content: "The share your achievements module should help users understand how to communicate their CFA Institute credentials, certificates, designations, and program milestones correctly. This includes guidance for resumes, LinkedIn profiles, email signatures, biographies, websites, and professional profiles.\n\nUsers may want to share that they passed a CFA exam level, earned the CFA charter, completed a certificate, obtained the CIPM designation, or received a digital badge. The page should explain that achievements should be represented accurately and in line with CFA Institute trademark and designation usage rules.\n\nThis module should also clarify that candidate status must be described carefully. For example, users should avoid language that implies partial designation status if they have only passed one or two exam levels. The safest approach is to use official guidance when describing program progress or credentials.\n\nThe purpose of this section is to help users celebrate achievements while maintaining professional accuracy. It should direct users to official CFA Institute guidance for digital badges, designation usage, trademark rules, and candidate status language." 
      }
    ]
  }
];

