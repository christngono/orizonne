import {
  Banknote,
  BookOpen,
  Briefcase,
  Building2,
  Calculator,
  Cog,
  Cpu,
  Code2,
  GraduationCap,
  Landmark,
  Lock,
  Megaphone,
  PiggyBank,
  ScanLine,
  School,
  ShieldCheck,
  Star,
  TrendingUp,
  Wallet,
} from "lucide-react";

/** Table de correspondance entre les clés du contenu et les icônes Lucide. */
const ICONS = {
  banknote: Banknote,
  book: BookOpen,
  briefcase: Briefcase,
  building: Building2,
  calculator: Calculator,
  code: Code2,
  cog: Cog,
  cpu: Cpu,
  graduation: GraduationCap,
  landmark: Landmark,
  lock: Lock,
  megaphone: Megaphone,
  piggy: PiggyBank,
  scan: ScanLine,
  school: School,
  shield: ShieldCheck,
  star: Star,
  trending: TrendingUp,
  wallet: Wallet,
};

export default function Icon({ name, size = 26, ...rest }) {
  const Cmp = ICONS[name] ?? ShieldCheck;
  return <Cmp size={size} strokeWidth={1.8} {...rest} />;
}
