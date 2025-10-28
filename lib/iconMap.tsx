import {
  Home,
  Info,
  Briefcase,
  HelpCircle,
  Mail,
  Settings,
  Users,
  BarChart,
  FileText,
  Phone,
  MessageSquare,
  ShoppingBag,
  Shield,
  Heart,
  Star,
  Calendar,
  Clock,
  MapPin,
  BookOpen,
  Award,
  Globe,
  Building2,
  Folder,
  LogIn,
  LogOut,
  UserPlus,
  Bell,
  Camera,
  Play,
  DollarSign,
  BriefcaseBusiness,
  ClipboardList,
  Compass,
  Lightbulb,
  Layers,
  Target,
  File,
} from "lucide-react";
import { JSX } from "react";

export const iconMap: Record<string, JSX.Element> = {
  // --- General ---
  home: <Home className="w-4 h-4 mr-2" />,
  info: <Info className="w-4 h-4 mr-2" />,
  help: <HelpCircle className="w-4 h-4 mr-2" />,
  mail: <Mail className="w-4 h-4 mr-2" />,
  phone: <Phone className="w-4 h-4 mr-2" />,
  message: <MessageSquare className="w-4 h-4 mr-2" />,
  settings: <Settings className="w-4 h-4 mr-2" />,
  users: <Users className="w-4 h-4 mr-2" />,
  login: <LogIn className="w-4 h-4 mr-2" />,
  logout: <LogOut className="w-4 h-4 mr-2" />,
  userplus: <UserPlus className="w-4 h-4 mr-2" />,
  bell: <Bell className="w-4 h-4 mr-2" />,

  // --- Business / Services ---
  briefcase: <Briefcase className="w-4 h-4 mr-2" />,
  briefcaseBusiness: <BriefcaseBusiness className="w-4 h-4 mr-2" />,
  chart: <BarChart className="w-4 h-4 mr-2" />,
  clipboard: <ClipboardList className="w-4 h-4 mr-2" />,
  folder: <Folder className="w-4 h-4 mr-2" />,
  file: <File className="w-4 h-4 mr-2" />,
  building: <Building2 className="w-4 h-4 mr-2" />,
  dollar: <DollarSign className="w-4 h-4 mr-2" />,

  // --- Lifestyle / Media ---
  heart: <Heart className="w-4 h-4 mr-2" />,
  star: <Star className="w-4 h-4 mr-2" />,
  camera: <Camera className="w-4 h-4 mr-2" />,
  play: <Play className="w-4 h-4 mr-2" />,
  award: <Award className="w-4 h-4 mr-2" />,
  book: <BookOpen className="w-4 h-4 mr-2" />,
  layers: <Layers className="w-4 h-4 mr-2" />,
  lightbulb: <Lightbulb className="w-4 h-4 mr-2" />,
  target: <Target className="w-4 h-4 mr-2" />,

  // --- Time / Location ---
  calendar: <Calendar className="w-4 h-4 mr-2" />,
  clock: <Clock className="w-4 h-4 mr-2" />,
  location: <MapPin className="w-4 h-4 mr-2" />,
  globe: <Globe className="w-4 h-4 mr-2" />,
  compass: <Compass className="w-4 h-4 mr-2" />,

  // --- Content / Documents ---
  document: <FileText className="w-4 h-4 mr-2" />,
  shopping: <ShoppingBag className="w-4 h-4 mr-2" />,
  shield: <Shield className="w-4 h-4 mr-2" />,
};

// Automatically export the list of all icon keys for admin dropdowns
export const availableIcons = Object.keys(iconMap);
