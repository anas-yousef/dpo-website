import { useState } from "react";
import {
  ArrowUpLeft,
  Building2,
  CheckCircle2,
  ClipboardCheck,
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
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const basePath = import.meta.env.BASE_URL;
const heroImageSrc = `${basePath}images/amal-bransi-dpo.jpg`;
const privacyHref = `${basePath}privacy/index.html`;
const accessibilityHref = `${basePath}accessibility/index.html`;

const navItems = [
  { label: "שירותים", href: "#services" },
  { label: "מומחיות", href: "#expertise" },
  { label: "תיקון 13", href: "#risk" },
  { label: "בדיקה עצמית", href: "#assessment" },
  { label: "לקוחות", href: "#clients" },
  { label: "קשר", href: "#contact" },
];

const services = [
  {
    title: "ממונה הגנת פרטיות חיצוני (DPO)",
    description:
      "מינוי ממונה כנדרש בתיקון 13, ניהול חובות הפרטיות, תיעוד החלטות, מענה לפניות נושאי מידע ודיווח להנהלה.",
    icon: Fingerprint,
  },
  {
    title: "מיפוי מאגרי מידע והערכת סיכונים",
    description:
      "מסמך הגדרות מאגר לפי תקנה 2, סיווג רמת אבטחה, מיפוי מערכות והרשאות, וסקר סיכונים לפי תקנות אבטחת מידע.",
    icon: Gauge,
  },
  {
    title: "מדיניות, נהלים ומסמכי חובה",
    description:
      "ערכת נהלי אבטחת מידע והגנת פרטיות, נוהל תגובה לאירוע, נוהל זכויות נושא מידע, מסמכי הסכמה ומדיניות פרטיות לאתר.",
    icon: FileCheck2,
  },
  {
    title: "היערכות ותגובה לאירועי אבטחה",
    description:
      "תרחישי תגובה, חובת הדיווח לרשות הגנת הפרטיות ולנושאי המידע, חלוקת אחריות בין הייעוץ המשפטי, IT וההנהלה, ותיעוד מלא של הטיפול.",
    icon: ShieldCheck,
  },
  {
    title: "בקרת ספקים ומיקור חוץ",
    description:
      "נספחי הגנת פרטיות לפי תקנה 15, בדיקת הרשאות והעברות מידע, מיפוי שרשרת ספקים והתקשרויות קיימות.",
    icon: Building2,
  },
  {
    title: "הדרכות מנהלים ועובדים",
    description:
      "הדרכות קצרות ומעשיות בעברית ובערבית, שמתרגמות את החובות להתנהלות יומיומית ומצמצמות טעויות אנוש.",
    icon: GraduationCap,
  },
];

const riskPoints = [
  "אין תיק ציות שמציג מיפוי מאגרים, מטרות שימוש והרשאות בצורה מסודרת.",
  "מסמך הגדרות מאגר או סקר סיכונים אינם מעודכנים לפעילות העסקית בפועל.",
  "ספקים ומיקור חוץ מקבלים גישה למידע בלי נספחי פרטיות ובקרה תקופתית.",
  "אירוע אבטחה מתחיל בלי תהליך דיווח, תיעוד וחלוקת אחריות ברורה.",
];

const assessmentQuestions = [
  "האם ברור מי אחראי בארגון על החלטות פרטיות ואבטחת מידע?",
  "האם יש מיפוי עדכני של מאגרי מידע, מערכות, הרשאות וספקים?",
  "האם מסמכי האתר וטפסי האיסוף כוללים יידוע ברור ומדויק?",
  "האם קיימים נהלים לזכויות נושא מידע: עיון, תיקון ומחיקה?",
  "האם התקשרויות עם ספקים כוללות נספחי פרטיות, אבטחה והעברות מידע?",
  "האם הצוותים יודעים מה לעשות ב-24 השעות הראשונות של אירוע אבטחה?",
];

const clientTypes = [
  {
    title: "רשויות מקומיות ומועצות",
    icon: Landmark,
  },
  {
    title: "תאגידי מים וביוב ותאגידים עירוניים",
    icon: Building2,
  },
  {
    title: "גופים המחזיקים במידע רפואי ומידע רגיש",
    icon: ShieldCheck,
  },
  {
    title: "משרדי עורכי דין ובעלי מקצוע",
    icon: Scale,
  },
  {
    title: "חברות טכנולוגיה וספקי SaaS",
    icon: ClipboardCheck,
  },
];

const contactDetails = [
  {
    label: "דוא״ל",
    value: "להשלים",
    icon: Mail,
  },
  {
    label: "טלפון",
    value: "להשלים",
    icon: Phone,
  },
  {
    label: "לינקדאין",
    value: "להשלים",
    icon: MessageSquare,
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
            <span className="block text-base" dir="ltr">
              AMLAWTECH — YOUR DPO
            </span>
            <span className="block text-xs font-semibold text-muted-foreground">
              אמל בראנסי, ממונה הגנת פרטיות
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="ניווט ראשי">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-bold text-muted-foreground transition hover:bg-muted hover:text-foreground xl:px-4"
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
      <div className="container grid min-h-[calc(88svh-4rem)] items-center gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-14">
        <div className="space-y-7">
          <Badge className="border-brass-500/30 bg-brass-50 text-brass-700" dir="ltr">
            AMLAWTECH — YOUR DPO
          </Badge>
          <div className="space-y-5">
            <h1 className="text-balance text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              אמל בראנסי | ממונה הגנת פרטיות (DPO)
            </h1>
            <p className="max-w-2xl text-xl font-bold leading-9 text-primary">
              ליווי רשויות מקומיות, גופים ציבוריים וארגונים לעמידה בתיקון 13
              לחוק הגנת הפרטיות
            </p>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              תיקון 13 נכנס לתוקף והרחיב את חובות הארגון ואת סמכויות האכיפה של
              רשות הגנת הפרטיות. אני מלווה ארגונים משלב המיפוי ועד תיק ציות
              מסודר שמחזיק גם ביום ביקורת — בעברית ובערבית.
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
              <a href="#services">תחומי הליווי</a>
            </Button>
          </div>

          <dl className="grid gap-4 sm:grid-cols-3">
            {[
              ["מענה ראשוני", "תוך 48 שעות"],
              ["עברית וערבית", "ליווי דו-לשוני"],
              ["רשויות · תאגידים", "וגופים ציבוריים"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-lg border border-border bg-background p-4"
              >
                <dt className="text-xl font-extrabold text-primary">{value}</dt>
                <dd className="mt-1 text-sm font-semibold text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="overflow-hidden rounded-lg border border-border bg-muted shadow-soft">
            <img
              src={heroImageSrc}
              alt="אמל בראנסי, ממונה הגנת פרטיות DPO"
              className="aspect-[4/5] w-full object-cover object-top"
              width="1066"
              height="1600"
              fetchPriority="high"
            />
          </div>
          <div className="absolute bottom-4 start-4 max-w-xs rounded-lg border border-border bg-card/95 p-4 shadow-soft backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-extrabold text-primary">
              <LockKeyhole className="size-4" aria-hidden="true" />
              תיק ציות שמחזיק גם ביום ביקורת
            </div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              מיפוי, החלטות, נהלים, הדרכות ותיעוד במקום אחד.
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
          description="הגישה משלבת רקע משפטי, ראייה תפעולית ושפה טכנולוגית, ומבוססת על הנחיות רשות הגנת הפרטיות ועל הנחיות מערך הסייבר הלאומי. המטרה אינה אפס סיכון, אלא ארגון שיודע להסביר, להוכיח ולתקן."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: Scale,
              title: "רקע משפטי",
              text: "הבנת חובות פרטיות, מסמכי עבודה, דיווחים ומענה לבקשות.",
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
            תיקון 13
          </Badge>
          <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
            רוב סיכוני הפרטיות מתחילים בפער קטן בין מה שהארגון עושה לבין מה
            שהוא יודע להוכיח
          </h2>
          <p className="text-lg leading-8 text-background/75">
            אתר, CRM, מערכת דיוור, טופס מועמדים או ספק ענן יכולים להיות תקינים
            בפני עצמם. הבעיה מתחילה כשאין תמונה אחת של איסוף, הרשאות, שמירה,
            מחיקה, ספקים וחובת דיווח.
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
          description="אם יותר משתי שאלות מרגישות לא סגורות, כדאי לבצע מיפוי קצר לפני שהלחץ מגיע מבחוץ."
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

function ClientTypes() {
  return (
    <section id="clients" className="section-pad bg-card">
      <div className="container space-y-12">
        <SectionIntro
          eyebrow="עם מי אני עובדת"
          title="ליווי לארגונים שמנהלים מידע רגיש, ציבורי או תפעולי"
          description="ליווי שוטף של רשויות מקומיות, תאגידים עירוניים, גופים ציבוריים ועסקים פרטיים — מארגונים המנהלים מאגרי מידע רגישים ועד גופים המחזיקים במידע עבור צדדים שלישיים."
        />

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {clientTypes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-lg border border-border bg-background p-5"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <p className="font-extrabold leading-7">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad bg-background">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-6">
          <Badge className="border-primary/20 bg-primary/5 text-primary">
            יצירת קשר
          </Badge>
          <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
            מתחילים בשיחת אבחון קצרה
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            ספרו בקצרה מהו סוג הארגון, אילו מערכות מידע פעילות ומה מטריד אתכם
            כרגע: היערכות לתיקון 13, ביקורת, דרישה מלקוח גדול, אירוע אבטחה או
            פשוט רצון לסדר את התשתית.
          </p>
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <h3 className="text-2xl font-extrabold">פרטי קשר</h3>
            <p className="leading-7 text-muted-foreground">
              פרטי ההתקשרות יושלמו לפני העלייה הסופית. אין באתר טופס פעיל, כדי
              לא ליצור רושם של שליחת פנייה ולא לאסוף מידע ללא הודעת יידוע.
            </p>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid gap-3">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 rounded-lg border border-border bg-muted/45 p-4"
                  >
                    <div className="flex items-center gap-3 font-bold">
                      <Icon className="size-5 text-primary" aria-hidden="true" />
                      <span>{item.label}</span>
                    </div>
                    <span className="font-extrabold text-muted-foreground">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
              <p className="font-extrabold text-primary">
                לאחר קבלת פרטי הקשר
              </p>
              <p className="mt-2 leading-7 text-muted-foreground">
                אפשר להחליף את הכרטיסים בכפתורי דוא״ל, וואטסאפ ולינקדאין, או
                לחבר טופס אמיתי עם הודעת יידוע לפי סעיף 11 לחוק ותיבת הסכמה.
              </p>
            </div>
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
          <p className="font-extrabold" dir="ltr">
            AMLAWTECH — YOUR DPO
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            אמל בראנסי, ממונה הגנת פרטיות
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm font-bold text-muted-foreground">
          <a href={privacyHref} className="hover:text-foreground">
            מדיניות פרטיות
          </a>
          <a href={accessibilityHref} className="hover:text-foreground">
            הצהרת נגישות
          </a>
          <a href="#contact" className="hover:text-foreground">
            יצירת קשר
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
        <ClientTypes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
