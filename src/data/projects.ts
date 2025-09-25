import { Project } from "@/types/project";
// Porfolio Project
import portfolioImage from "../assets/projects/porfolio-website/portfolio-website.png";
import portfolioResponmsiveImage from "../assets/projects/porfolio-website/portfolio-responsive-design.png";
import portfolioDarkModeImage from "../assets/projects/porfolio-website/portfolio-dark-light-mode.png";
import portfolioTransitionsImage from "../assets/projects/porfolio-website/portfolio-page-transitions.png";
import portfolioContactImage from "../assets/projects/porfolio-website/portfolio-contact-form.png";
import portfolioInteractiveImage from "../assets/projects/porfolio-website/portfolio-interactive-elements.png";
// E-commerce Project
import ecommerceImage from "../assets/projects/ecommerce-website/ecommerce-website.png";
import ecommerceHomeImage from "../assets/projects/ecommerce-website/ecommerce-featured.png";
import ecommerceProductsImage from "../assets/projects/ecommerce-website/ecommerce-items.png";
import ecommerceContactImage from "../assets/projects/ecommerce-website/ecommerce-contact-module.png";
import ecommerceAboutImage from "../assets/projects/ecommerce-website/ecommerce-about-us-module.png";
import ecommerceCartImage from "../assets/projects/ecommerce-website/ecommerce-cart.png";
import ecommerceOrderSummaryImage from "../assets/projects/ecommerce-website/ecommerce-summary-orders.png";
import ecommerceAdminImage from "../assets/projects/ecommerce-website/ecommerce-admin-login.png";
import ecommerceDashboardImage from "../assets/projects/ecommerce-website/ecommerce-admin-dashboard.png";
import ecommerceProductManagementImage from "../assets/projects/ecommerce-website/ecommerce-admin-products.png";
import ecommerceTransactionManagementImage from "../assets/projects/ecommerce-website/ecommerce-admin-transaction.png";
import ecommerceUserManagementImage from "../assets/projects/ecommerce-website/ecommerce-admin-users.png";
import ecommerceOrderReportsImage from "../assets/projects/ecommerce-website/ecommerce-admin-orders.png";
// IoT Mobile App Project
import iotImage from "../assets/projects/iot-mobile-app/iot-mobile-app.png";
import iotHomeModuleImage from "../assets/projects/iot-mobile-app/iot-home-module.png";
import iotSensorModuleImage from "../assets/projects/iot-mobile-app/iot-sensor-module.png";
import iotAlarmStateModuleImage from "../assets/projects/iot-mobile-app/iot-alarm-state-module.png";
import iotHardwareIntegrationImage from "../assets/projects/iot-mobile-app/iot-hardware-integration.png";
import iotContactModuleImage from "../assets/projects/iot-mobile-app/iot-contact-module.png";
import iotAboutModuleImage from "../assets/projects/iot-mobile-app/iot-about-module.png";
// File Management System Capstone Project
import fileManagementImage from "../assets/projects/file-management-system/file-management-system.png";
import fileUserLoginImage from "../assets/projects/file-management-system/file-user-login.png";
import fileFilesModuleImage from "../assets/projects/file-management-system/file-myfiles-module.png";
import fileTemplatesImage from "../assets/projects/file-management-system/file-templates-module.png";
import fileMailImage from "../assets/projects/file-management-system/file-mail-module.png";
import fileStarredImage from "../assets/projects/file-management-system/file-starred-module.png";
import fileAuditTrailImage from "../assets/projects/file-management-system/file-audit-trail-module.png";
import fileTrashImage from "../assets/projects/file-management-system/file-trash-module.png";
import fileHelpSupportImage from "../assets/projects/file-management-system/file-help-support-module.png";
import fileOCRImage from "../assets/projects/file-management-system/file-ocr.png";
import fileVersionControlImage from "../assets/projects/file-management-system/file-version-control.png";
import fileAnnotationImage from "../assets/projects/file-management-system/file-annotation.png";
import fileAdvanceSearchImage from "../assets/projects/file-management-system/file-advance-search.png";
import fileAdminDashboardImage from "../assets/projects/file-management-system/file-admin-dashboard.png";
import fileUserManagementImage from "../assets/projects/file-management-system/file-admin-user-management.png";
import fileDepartmentManagementImage from "../assets/projects/file-management-system/file-admin-departments.png";
import fileRoleManagementImage from "../assets/projects/file-management-system/file-admin-role-management.png";
import fileAdminAuditTrailImage from "../assets/projects/file-management-system/file-admin-audit-trail.png";
import fileIssueManagementImage from "../assets/projects/file-management-system/file-admin-issues-management.png";
// Emergency Response Mobile Design Project
import emergencyResponseImage from "../assets/projects/emergency-response-mobile-design/emergency-response-mobile-design.png";
import emergencyResponseDesign1Image from "../assets/projects/emergency-response-mobile-design/emergency-response-mobile-design-01.png";
import emergencyResponseDesign2Image from "../assets/projects/emergency-response-mobile-design/emergency-response-mobile-design-02.png";
// Wine Explorer Mobile Design Project
import wineExplorerImage from "../assets/projects/wine-explorer-mobile-design/wine-mobile-ui-design.png";
import wineExplorerDesign1Image from "../assets/projects/wine-explorer-mobile-design/wine-mobile-design-01.png";
import wineExplorerDesign2Image from "../assets/projects/wine-explorer-mobile-design/wine-mobile-design-02.png";
// Webtechh Website
import webtechCoverPage from "../assets/projects/webtech-website/webtech-cover.png";
import webtechHomePage from "../assets/projects/webtech-website/webtech-home-page.png";
import webtechProjectPage from "../assets/projects/webtech-website/webtech-project-page.png";
import webtechContactPage from "../assets/projects/webtech-website/webtech-contact-page.png";
import webtechAdminDashboard from "../assets/projects/webtech-website/webtech-admin-dashboard.png";
import webtechAdminInbox from "../assets/projects/webtech-website/webtech-admin-inbox.png";
import webtechAdminUser from "../assets/projects/webtech-website/webtech-admin-user.png";
import webtechAdminProject from "../assets/projects/webtech-website/webtech-admin-project.png";

export const projects: Project[] = [
  // WebTech Buddie Project
  {
    id: "webtechhh-buddie",
    title: "WebTech Buddie",
    description:
      "A modern, clean, and professional web platform for showcasing company services, projects, and managing client interactions. Features a responsive user side and a robust admin dashboard for project, inbox, and user management.",
    technologies: [
      "Laravel",
      "Blade",
      "PHP",
      "Tailwind CSS",
      "JavaScript",
      "MySQL",
    ],
    githubUrl: "https://github.com/louiesumayan/WebTechBuddie.git",
    liveUrl: "https://webtechbuddie.site/",
    imageUrl: webtechCoverPage,
    promoVideo: "",
    year: 2025,
    modules: [
      {
        title: "User Side: Home Page",
        description:
          "Landing page with company mission, values, services, testimonials, and a contact form. Responsive layout with device-mockup style project showcase.",
        imageUrl: webtechHomePage,
      },
      {
        title: "User Side: Projects Page",
        description:
          "Displays all active projects with images and details. Visually appealing and fully responsive.",
        imageUrl: webtechProjectPage,
      },
      {
        title: "User Side: Contact Form",
        description:
          "Users can send messages to the admin with validation and CSRF protection. Messages are delivered to the admin inbox.",
        imageUrl: webtechContactPage,
      },
      {
        title: "Admin Side: Dashboard",
        description:
          "Overview panel with summary info (projects, users, messages) and sidebar navigation. Content switching via route-based includes.",
        imageUrl: webtechAdminDashboard,
      },
      {
        title: "Admin Side: Projects Management",
        description:
          "Table listing of all projects with pagination, create/edit/delete functionality, image upload, and status indicators.",
        imageUrl: webtechAdminProject,
      },
      {
        title: "Admin Side: Inbox",
        description:
          "Table and card view of all contact messages. Modal for reading messages, mark as read, reply via mailto, and delete options.",
        imageUrl: webtechAdminInbox,
      },
      {
        title: "Admin Side: User Management",
        description:
          "Table of users with create/edit/delete, role assignment (admin/user), and modal forms for user management.",
        imageUrl: webtechAdminUser,
      },
    ],
  },
  // Portfolio Project
  {
    id: "portfolio-website",
    title: "Modern Portfolio Website",
    description:
      "My personal website that showcases my work, skills, and experience in an interactive and visually appealing way. It adjusts perfectly to any device (phone, tablet, or computer) and includes a user-friendly light/dark mode toggle for comfortable viewing.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "https://john-paul-varde-porfolio.vercel.app",
    imageUrl: portfolioImage,
    promoVideo:
      "https://drive.google.com/file/d/1ob9vIuHF1luNTIZTWLQiKxwCILRn9EVN/preview",
    year: 2025,
    modules: [
      {
        title: "Responsive Design",
        description:
          "Created a website that looks great on all devices from phones to desktops, with easy navigation and readable content no matter the screen size.",
        imageUrl: portfolioResponmsiveImage,
      },
      {
        title: "Dark/Light Mode",
        description:
          "Added a simple switch that lets users choose between dark and light themes, which remembers their preference for future visits.",
        imageUrl: portfolioDarkModeImage,
      },
      {
        title: "Page Transitions",
        description:
          "Incorporated smooth animated transitions between pages that make browsing the website feel polished and professional.",
        imageUrl: portfolioTransitionsImage,
      },
      {
        title: "Contact Form",
        description:
          "Implemented an easy-to-use contact section where potential employers can reach out directly through the website with form validation and confirmation messages.",
        imageUrl: portfolioContactImage,
      },
      {
        title: "Interactive Elements",
        description:
          "Built engaging components that respond to user actions, making the website feel more dynamic and modern while highlighting my technical skills.",
        imageUrl: portfolioInteractiveImage,
      },
    ],
  },
  // File Management System Capstone Project
  {
    id: "file-management-system",
    title: "Web-based File Management System",
    description:
      "A comprehensive file management system built with Laravel and React for efficient document organization and sharing.",
    technologies: [
      "Laravel",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    githubUrl: "",
    liveUrl: "",
    year: 2025,
    imageUrl: fileManagementImage,
    promoVideo:
      "https://drive.google.com/file/d/1RRnSP17QBQwe5f6ttDoT_0hwwm4rQlx9/preview",
    modules: [
      {
        title: "User Login",
        description:
          "Allows users to store, organize, and access all their personal files in one place.",
        imageUrl: fileUserLoginImage,
      },
      {
        title: "Files Module",
        description:
          "Intuitive file organization with folders, tags, and advanced search capabilities.",
        imageUrl: fileFilesModuleImage,
      },
      {
        title: "Template Module:",
        description:
          " Provides users with ready-made templates to help them quickly create new documents.",
        imageUrl: fileTemplatesImage,
      },
      {
        title: "Mail Module",
        description:
          "A built-in email system for sending and receiving files directly within the application.",
        imageUrl: fileMailImage,
      },
      {
        title: "Starred Module",
        description:
          "Allows users to mark important files for quick access, making it easy to find frequently used documents.",
        imageUrl: fileStarredImage,
      },
      {
        title: "Audit Trail Module",
        description:
          "Tracks all user actions and file changes, providing a complete history for security and compliance.",
        imageUrl: fileAuditTrailImage,
      },
      {
        title: "Trash Module",
        description:
          "A secure area for deleted files, allowing users to recover items before permanent deletion.",
        imageUrl: fileTrashImage,
      },
      {
        title: "Help and Support Module",
        description:
          "Offers guides and a way for users to contact support if they need assistance.",
        imageUrl: fileHelpSupportImage,
      },
      {
        title: "OCR Module",
        description:
          "Optical Character Recognition (OCR) for converting scanned documents into editable text.",
        imageUrl: fileOCRImage,
      },
      {
        title: "Version Control Module",
        description:
          "Allows users to track changes in documents and revert to previous versions if needed.",
        imageUrl: fileVersionControlImage,
      },
      {
        title: "Annotation Module",
        description:
          "Enables users to add comments and annotations to files for better collaboration.",
        imageUrl: fileAnnotationImage,
      },
      {
        title: "Advance Search Module",
        description:
          "Helps users quickly find files using keywords, filters, or other criteria.",
        imageUrl: fileAdvanceSearchImage,
      },
      {
        title: "Admin Dashboard",
        description:
          " Provides administrators with an overview of system activity and key statistics.",
        imageUrl: fileAdminDashboardImage,
      },
      {
        title: "User Management Module",
        description:
          "Enables administrators to add, remove, or update user accounts and permissions.",
        imageUrl: fileUserManagementImage,
      },
      {
        title: "Department Management Module",
        description:
          "Organizes users into departments for better structure and access control.",
        imageUrl: fileDepartmentManagementImage,
      },
      {
        title: "Role Management Module",
        description:
          "Allows administrators to assign different roles to users, controlling what they can do.",
        imageUrl: fileRoleManagementImage,
      },
      {
        title: "Admin Audit Trail Module",
        description:
          "Displays a detailed log of all admin actions for security and accountability.",
        imageUrl: fileAdminAuditTrailImage,
      },
      {
        title: "Issue Management Module",
        description:
          "Enables administrators to track, manage, and resolve user-reported problems.",
        imageUrl: fileIssueManagementImage,
      },
    ],
  },
  // IoT Mobile App Project
  {
    id: "iot-mobile-app",
    title: "Mobile App with IoT Technologies",
    description:
      "A Flutter-based mobile application that integrates with IoT devices for smart home monitoring and control.",
    technologies: ["Flutter", "Dart", "C/C++", "Firebase"],
    githubUrl: "",
    liveUrl: "",
    imageUrl: iotImage,
    promoVideo:
      "https://drive.google.com/file/d/1PeruIbaNCOlZfcAT_y43f7ycK25nUobV/preview",
    year: 2024,
    modules: [
      {
        title: "Home Module",
        description:
          "Central dashboard for monitoring all connected devices and current status.",
        imageUrl: iotHomeModuleImage,
      },
      {
        title: "Sensor Module",
        description:
          "Real-time data collection and visualization from various IoT sensors.",
        imageUrl: iotSensorModuleImage,
      },
      {
        title: "Alarm State Module",
        description:
          "Configurable alert system with notification preferences and history.",
        imageUrl: iotAlarmStateModuleImage,
      },
      {
        title: "Contact Module",
        description:
          "User support interface with direct messaging and help resources for troubleshooting.",
        imageUrl: iotContactModuleImage,
      },
      {
        title: "About Module",
        description:
          "Information about the application, version details, and developer documentation.",
        imageUrl: iotAboutModuleImage,
      },
      {
        title: "IoT Hardware Integration",
        description:
          "Custom firmware development for integrating with various IoT devices.",
        imageUrl: iotHardwareIntegrationImage,
      },
    ],
  },
  // E-commerce Project
  {
    id: "ecommerce-website",
    title: "E-commerce Website",
    description:
      "The E-commerce Project is a user-friendly online store designed to make shopping for shoes, apparel, and accessories easy and enjoyable. The website helps customers feel confident making purchases and managing their orders.",
    technologies: [
      "HTML5",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "phpMyAdmin",
    ],
    githubUrl: "",
    liveUrl: "",
    imageUrl: ecommerceImage,
    promoVideo:
      "https://drive.google.com/file/d/1mNp-ROP_ZsAVlSkX-uGr9DkW77xDi_V4/preview",
    year: 2024,
    modules: [
      {
        title: "Home Module",
        description:
          "The main page where customers can easily browse all available products and see featured items.",
        imageUrl: ecommerceHomeImage,
      },
      {
        title: "Product Module",
        description:
          "Shop for shoes, clothes, and accessories. Products are grouped by type so customers can quickly find what they want.",
        imageUrl: ecommerceProductsImage,
      },
      {
        title: "Contact Us",
        description:
          "A simple form where customers can send questions or messages directly to the company. Also shows the company's location on a map so customers know where to find the company.",
        imageUrl: ecommerceContactImage,
      },
      {
        title: "About Us",
        description: "Learn about the company's history, mission, and values.",
        imageUrl: ecommerceAboutImage,
      },
      {
        title: "Cart Module",
        description:
          "Customers can add, remove, or update items in their shopping cart before checking out.",
        imageUrl: ecommerceCartImage,
      },
      {
        title: "Order Summary",
        description:
          "Shows a clear summary of what the customer is about to order before they finish buying.",
        imageUrl: ecommerceOrderSummaryImage,
      },
      {
        title: "Admin Portal",
        description:
          "A secure area for staff to manage products, orders, and customer information.",
        imageUrl: ecommerceAdminImage,
      },
      {
        title: "Dashboard",
        description:
          "Gives admins a quick overview of sales and product performance with easy-to-read charts.",
        imageUrl: ecommerceDashboardImage,
      },
      {
        title: "Product Management",
        description:
          "Admins can add, edit, or update products and keep stock levels accurate.",
        imageUrl: ecommerceProductManagementImage,
      },
      {
        title: "Transaction Management",
        description:
          "Admins can view, confirm, or cancel orders to keep everything running smoothly.",
        imageUrl: ecommerceTransactionManagementImage,
      },
      {
        title: "User Module",
        description:
          "Admins can view and manage customer information, interactions, and account status in one place.",
        imageUrl: ecommerceUserManagementImage,
      },
      {
        title: "Order Reports",
        description:
          "Admins can easily see sales and earnings through simple, clear reports.",
        imageUrl: ecommerceOrderReportsImage,
      },
    ],
  },
  // Emergency Response Mobile Design Project
  {
    id: "emergency-response-mobile-design",
    title: "Emergency Response App – UI/UX Case Study",
    description:
      "A mobile app designed to provide quick access to emergency services with a user-friendly interface. Focused on intuitive navigation and accessibility.",
    technologies: ["Figma"],
    githubUrl: "",
    liveUrl:
      "https://www.figma.com/proto/OHwg2i2e89GvQGvxZ2DVLu/911--Emergency-App-?node-id=13-467&p=f&t=ZUtzBgvroeRuEgdR-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=13%3A467",
    imageUrl: emergencyResponseImage,
    promoVideo: "",
    year: 2024,
    modules: [
      {
        title: "Main Access Screen",
        description:
          "A minimal and high-contrast interface displaying essential options like “Sign In”, “Sign Up”, and “Home”. Designed for quick user orientation and fast navigation during emergencies.",
        imageUrl: emergencyResponseDesign1Image,
      },
      {
        title: "Live Assistance Screen",
        description:
          "This screen helps users during emergencies by first showing a “please wait” message while connecting them to help, then showing their current location on a live map, and finally allowing them to chat directly with responders through a clear and easy-to-read message screen with quick reply options.",
        imageUrl: emergencyResponseDesign2Image,
      },
    ],
  },
  // Wine Explorer Mobile Design Project
  {
    id: "wine-explorer-mobile-design",
    title: "Wine Explorer App – UI/UX Case Study",
    description:
      "A mobile ecommerce app for discovering, browsing, and purchasing wines. Emphasizes elegant design and intuitive user experience for wine enthusiasts.",
    technologies: ["Figma"],
    githubUrl: "",
    liveUrl:
      "https://www.figma.com/proto/0pKquvfffoXGaMMbpV4ILZ/GRANDE-VINTAGE--WINE-?node-id=1-504&p=f&t=Be2mNY40GPFeaJa0-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A483",
    imageUrl: wineExplorerImage,
    promoVideo: "",
    year: 2024,
    modules: [
      {
        title: "Home & Access Screen",
        description:
          "This screen includes Sign Up, Login, and the Home Page. It gives users an easy start by letting them create an account, log in, and explore wines right from the homepage all designed with a clean and welcoming layout.",
        imageUrl: wineExplorerDesign1Image,
      },
      {
        title: "Info & Cart Screen",
        description:
          "This screen allows users to view the wines they’ve added to their cart, learn about the company’s background through the Company History section, and easily reach out through the Contact Us page. It’s designed to keep things smooth and informative while shopping or getting in touch.",
        imageUrl: wineExplorerDesign2Image,
      },
    ],
  },
];
