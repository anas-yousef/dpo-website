import { useState } from "react";
import {
  ArrowUpLeft,
  Building2,
  CheckCircle2,
  FileCheck2,
  Fingerprint,
  Gauge,
  GraduationCap,
  Landmark,
  LockKeyhole,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "שירותים", href: "#services" },
  { label: "מומחיות", href: "#expertise" },
  { label: "סיכונים", href: "#risk" },
  { label: "בדיקה עצמית", href: "#assessment" },
  { label: "קשר", href: "#contact" },
];

const heroImageSrc = `${import.meta.env.BASE_URL}images/dpo-compliance-hero.png`;

const services = [
  {
    title: "DPO חיצוני וליווי שוטף",
    description:
      "ניהול חובות פרטיות, תיעוד החלטות, מענה לפניות נושאי מידע והובלת תהליך ציות שאפשר לעבוד איתו ביום יום.",
    icon: Fingerprint,
  },
  {
    title: "מיפוי מידע וסיכוני פרטיות",
    description:
      "תמונה ברורה של איזה מידע נאסף, איפה הוא נשמר, מי נוגע בו ומה דורש טיפול לפני ביקורת או אירוע.",
    icon: Gauge,
  },
  {
    title: "מדיניות, נהלים ומסמכי אתר",
    description:
      "מסמכי פרטיות, נהלי אבטחת מידע, הסכמות, הסכמי ספקים ותבניות עבודה בניסוח מקורי וברור.",
    icon: FileCheck2,
  },
  {
    title: "היערכות לאירועי סייבר",
    description:
      "תרחישי תגובה, חובת דיווח, חלוקת אחריות בין משפט, IT והנהלה, ותיעוד מסודר של צעדי טיפול.",
    icon: ShieldCheck,
  },
  {
    title: "בקרת ספקים ומעבדי מידע",
    description:
      "בדיקת חוזים, הרשאות, העברות מידע ושרשרת ספקים כדי לצמצם חשיפה שלא תמיד רואים במבט ראשון.",
    icon: Building2,
  },
  {
    title: "הדרכות מנהלים ועובדים",
    description:
      "הדרכות קצרות ומעשיות שמתרגמות חובות משפטיות להתנהלות בשטח, בלי להפוך את הארגון למחלקה משפטית.",
    icon: GraduationCap,
  },
];

const riskPoints = [
  "מאגר לקוחות גדל בלי תיעוד של מטרות שימוש והרשאות.",
  "טפסים באתר או במערכת SaaS אוספים מידע ללא שפה ברורה למשתמש.",
  "ספקים חיצוניים מקבלים גישה למידע רגיש בלי בקרה תקופתית.",
  "אירוע אבטחה קטן הופך למשבר כי אין תהליך דיווח והחלטה מסודר.",
];

const assessmentQuestions = [
  "האם ברור לכם מי אחראי בארגון על החלטות פרטיות ואבטחת מידע?",
  "האם יש מיפוי עדכני של מאגרי מידע, מערכות וספקים?",
  "האם כל טופס איסוף מידע מסביר למה המידע נדרש ומה ייעשה בו?",
  "האם יש תהליך מסודר למחיקה, תיקון או עיון במידע אישי?",
  "האם הסכמי הספקים שלכם מכסים אבטחה, סודיות והעברות מידע?",
  "האם צוותים יודעים מה לעשות ב-24 השעות הראשונות של אירוע אבטחה?",
];

const proofItems = [
  {
    quote:
      "קיבלנו סדר במקום רשימת מטלות מפחידה. סוף סוף ברור מה חשוב עכשיו ומה יכול לחכות.",
    role: "מנהלת תפעול, חברת SaaS",
  },
  {
    quote:
      "התהליך היה ענייני, מדויק ולא תיאורטי. יצאנו עם מסמכים, אחריות פנימית ותוכנית עבודה.",
    role: "מנכ״ל, שירותים מקצועיים",
  },
  {
    quote:
      "ההדרכה גרמה לצוות להבין פרטיות בלי להיבהל ממנה. זה הוריד התנגדות והעלה שיתוף פעולה.",
    role: "סמנכ״לית משאבי אנוש",
  },
];

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "start";
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl space-y-4",
        align === "center" ? "text-center" : "text-start",
      )}
    >
      <Badge className="border-primary/20 bg-primary/5 text-primary">
        {eyebrow}
      </Badge>
      <h2 className="text-balance text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="text-lg leading-8 text-muted-foreground">{description}</p>
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="container flex min-h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 font-extrabold">
          <span className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-base">DPO פרטיות וסייבר</span>
            <span className="block text-xs font-semibold text-muted-foreground">
              משפט, אבטחה וציות
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="ניווט ראשי">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-4 py-2 text-sm font-bold text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm">
            <a href="#assessment">בדיקה מהירה</a>
          </Button>
          <Button asChild size="sm">
            <a href="#contact">
              קבעו שיחה
              <ArrowUpLeft aria-hidden="true" />
            </a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={isOpen ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      {isOpen ? (
        <nav className="border-t border-border bg-background lg:hidden" aria-label="ניווט מובייל">
          <div className="container grid gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-bold hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a href="#contact" onClick={() => setIsOpen(false)}>
                קבעו שיחה
              </a>
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-card">
      <div className="container grid min-h-[calc(100svh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1fr_0.92fr] lg:py-16">
        <div className="space-y-8">
          <Badge className="border-brass-500/30 bg-brass-50 text-brass-700">
            DPO, פרטיות, סייבר ורגולציה לעסקים בישראל
          </Badge>
          <div className="space-y-5">
            <h1 className="text-balance text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              ממונה הגנת פרטיות שמחבר משפט, סייבר ותפעול
            </h1>
            <p className="max-w-2xl text-xl leading-9 text-muted-foreground">
              ליווי נקי וברור לארגונים שצריכים לעמוד בדרישות פרטיות ואבטחת
              מידע, בלי לעצור מכירות, מוצר או שירות לקוחות.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contact">
                לתיאום שיחת אבחון
                <ArrowUpLeft aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#services">ראו תחומי ליווי</a>
            </Button>
          </div>

          <dl className="grid gap-4 sm:grid-cols-3">
            {[
              ["48 שעות", "למיפוי ראשוני"],
              ["6 תחומים", "שירותי פרטיות וסייבר"],
              ["עברית RTL", "תוכן ברור לצוותים"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-lg border border-border bg-background p-4"
              >
                <dt className="text-2xl font-extrabold text-primary">{value}</dt>
                <dd className="mt-1 text-sm font-semibold text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-border bg-muted shadow-soft">
            <img
              src={heroImageSrc}
              alt="עמדת עבודה משפטית-טכנולוגית עם לוח בקרה לאבטחת מידע ופרטיות"
              className="aspect-[16/11] w-full object-cover"
              width="1680"
              height="945"
            />
          </div>
          <div className="absolute bottom-4 start-4 max-w-xs rounded-lg border border-border bg-card/95 p-4 shadow-soft backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-extrabold text-primary">
              <LockKeyhole className="size-4" aria-hidden="true" />
              מוכנות שמחזיקה גם ביום ביקורת
            </div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              מיפוי, החלטות, מסמכים והדרכה במקום אחד מסודר.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-pad bg-background">
      <div className="container space-y-12">
        <SectionIntro
          eyebrow="תחומי ליווי"
          title="כל שכבת הציות, בלי להעמיס על הארגון"
          description="האתר בנוי סביב שירותים שמנהלים באמת צריכים: מיפוי סיכונים, אחריות ברורה, מסמכים שאפשר להשתמש בהם והדרכה שמצמצמת טעויות."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title} className="h-full shadow-none">
                <CardHeader>
                  <span className="grid size-12 place-items-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-extrabold">{service.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="section-pad bg-card">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionIntro
          align="start"
          eyebrow="מומחיות"
          title="פרטיות היא לא רק מסמך באתר. היא מערכת עבודה."
          description="הגישה המקצועית משלבת הבנה משפטית, ראייה תפעולית ושפה טכנולוגית. המטרה היא לא להבטיח אפס סיכון, אלא לבנות ארגון שיודע להסביר, להוכיח ולתקן."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: Scale,
              title: "משפטי",
              text: "פרשנות חובות, מסמכים, חוזים, דיווחים ומענה לבקשות.",
            },
            {
              icon: ShieldCheck,
              title: "אבטחתי",
              text: "שיח עבודה עם IT, בקרות בסיסיות, ספקים והרשאות.",
            },
            {
              icon: Landmark,
              title: "רגולטורי",
              text: "היערכות לביקורות, דרישות חוק ותיעוד החלטות.",
            },
            {
              icon: MessageSquare,
              title: "ניהולי",
              text: "חלוקת אחריות, הדרכות, תוכנית עבודה ומדדי התקדמות.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-background p-6"
              >
                <Icon className="size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-extrabold">{item.title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RiskEducation() {
  return (
    <section id="risk" className="section-pad bg-foreground text-background">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-5">
          <Badge className="border-brass-500/40 bg-brass-500/15 text-brass-100">
            למה זה דחוף
          </Badge>
          <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
            רוב סיכוני הפרטיות מתחילים בפער קטן בין מה שהעסק עושה לבין מה שהוא יודע להוכיח
          </h2>
          <p className="text-lg leading-8 text-background/75">
            אתר, CRM, מערכת דיוור, טופס מועמדים או ספק ענן יכולים להיות תקינים
            בפני עצמם. הבעיה מתחילה כשאין תמונה אחת של איסוף, הרשאות, שמירה
            ומחיקה.
          </p>
          <Button asChild variant="secondary">
            <a href="#assessment">עברו לבדיקה עצמית</a>
          </Button>
        </div>

        <div className="grid gap-3">
          {riskPoints.map((point, index) => (
            <div
              key={point}
              className="flex gap-4 rounded-lg border border-background/15 bg-background/8 p-5"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-md bg-brass-500 text-sm font-extrabold text-foreground">
                {index + 1}
              </span>
              <p className="leading-7 text-background/85">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Assessment() {
  return (
    <section id="assessment" className="section-pad bg-background">
      <div className="container space-y-12">
        <SectionIntro
          eyebrow="בדיקה עצמית"
          title="שש שאלות שמגלות אם הפרטיות מנוהלת או רק כתובה"
          description="לא צריך לענות כאן בטופס. אם יותר משתי שאלות מרגישות לא סגורות, כדאי לבצע מיפוי קצר לפני שהלחץ מגיע מבחוץ."
        />

        <div className="mx-auto grid max-w-4xl gap-3">
          {assessmentQuestions.map((question) => (
            <div
              key={question}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
            >
              <CheckCircle2
                className="mt-1 size-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <p className="text-lg font-semibold leading-8">{question}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="section-pad bg-card">
      <div className="container space-y-12">
        <SectionIntro
          eyebrow="הוכחה חברתית"
          title="מקום שמור לעדויות מקוריות של ה-DPO שלכם"
          description="הטקסט כאן הוא פלייסהולדר מקורי בלבד. כשהאתר יקבל לקוחות אמיתיים, נחליף אותו בעדויות מאושרות ובמדדי אמון שניתן לפרסם."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {proofItems.map((item) => (
            <Card key={item.role} className="shadow-none">
              <CardContent className="p-6">
                <Sparkles className="size-6 text-brass-500" aria-hidden="true" />
                <blockquote className="mt-5 text-lg font-semibold leading-8">
                  “{item.quote}”
                </blockquote>
                <p className="mt-5 text-sm font-bold text-muted-foreground">
                  {item.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");

  return (
    <section id="contact" className="section-pad bg-background">
      <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="space-y-6">
          <Badge className="border-primary/20 bg-primary/5 text-primary">
            יצירת קשר
          </Badge>
          <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
            מתחילים בשיחת אבחון קצרה ומסודרת
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            ספרו בקצרה מה סוג הארגון, אילו מערכות מידע פעילות ומה מטריד אתכם:
            ביקורת, לקוח גדול, אירוע אבטחה, אתר חדש או פשוט רצון לסדר את
            התשתית.
          </p>

          <div className="grid gap-3">
            <div className="flex items-center gap-3 text-sm font-bold">
              <Mail className="size-5 text-primary" aria-hidden="true" />
              <span>דוא״ל וטלפון יוגדרו בשלב החיבור העסקי</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold">
              <Phone className="size-5 text-primary" aria-hidden="true" />
              <span>הטופס סטטי כרגע ואינו שולח מידע לשרת</span>
            </div>
          </div>
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <h3 className="text-2xl font-extrabold">טופס פנייה</h3>
            <p className="leading-7 text-muted-foreground">
              שדות לדוגמה בלבד. אין שמירת מידע או שליחה חיצונית בגרסה הסטטית.
            </p>
          </CardHeader>
          <CardContent>
            <form
              className="grid gap-5"
              onSubmit={(event) => {
                event.preventDefault();
                setStatus("הטופס מוכן לחיבור, אך בגרסה הזו הוא לא שולח מידע.");
              }}
            >
              <div className="grid gap-2">
                <label className="text-sm font-bold" htmlFor="full-name">
                  שם מלא
                </label>
                <Input id="full-name" name="full-name" autoComplete="name" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-bold" htmlFor="company">
                  ארגון ותפקיד
                </label>
                <Input id="company" name="company" autoComplete="organization" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-sm font-bold" htmlFor="email">
                    דוא״ל
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    dir="ltr"
                    className="text-left"
                    autoComplete="email"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-bold" htmlFor="phone">
                    טלפון
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    dir="ltr"
                    className="text-left"
                    autoComplete="tel"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-bold" htmlFor="message">
                  במה כדאי להתמקד בשיחה?
                </label>
                <Textarea id="message" name="message" />
              </div>
              <label className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                <input
                  type="checkbox"
                  className="mt-1 size-4 rounded border-border accent-primary"
                />
                <span>
                  אני מבין/ה שזהו טופס סטטי ראשוני, ושחיבור לשליחה או אחסון
                  יוגדר רק לאחר החלטה מפורשת.
                </span>
              </label>
              <Button type="submit" className="w-full sm:w-fit">
                שליחת פנייה לבדיקה
                <ArrowUpLeft aria-hidden="true" />
              </Button>
              <p className="min-h-6 text-sm font-bold text-primary" aria-live="polite">
                {status}
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-extrabold">DPO פרטיות וסייבר</p>
          <p className="mt-1 text-sm text-muted-foreground">
            אתר סטטי ראשוני לשירותי פרטיות, סייבר וציות.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm font-bold text-muted-foreground">
          <a href="#contact" className="hover:text-foreground">
            צור קשר
          </a>
          <a href="#privacy" className="hover:text-foreground">
            מדיניות פרטיות
          </a>
          <a href="#accessibility" className="hover:text-foreground">
            נגישות
          </a>
        </nav>
      </div>
    </footer>
  );
}

export function DpoWebsite() {
  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:font-bold"
      >
        דילוג לתוכן הראשי
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Expertise />
        <RiskEducation />
        <Assessment />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
