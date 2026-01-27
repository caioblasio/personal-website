import Image from "next/image";

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  logo: string;
  points: string[];
  link: string;
}

export function JobPosition({
  title,
  company,
  period,
  logo,
  link,
  points,
}: ExperienceProps) {
  return (
    <div className="group flex flex-col sm:flex-row gap-4 py-8 transition-all">
      {/* Left: Image (48x48) */}
      <div className="shrink-0">
        <div className="relative w-12 h-12 overflow-hidden rounded-lg border border-slate-200">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Image
              src={logo}
              alt={`${company} logo`}
              width={48}
              height={48}
              className="object-cover"
            />
          </a>
        </div>
      </div>

      {/* Middle: Content */}
      <div className="grow space-y-1">
        <h3 className="text-lg font-semibold leading-none">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <h4 className="text-md font-medium">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {company}
          </a>
        </h4>

        <ul className="mt-4 space-y-2 list-disc list-outside ml-4 leading-relaxed">
          {points.map((point, index) => (
            <li key={index} className="pl-1">
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Period */}
      <div className="shrink-0 text-right">
        <span className="text-sm font-medium tabular-nums">{period}</span>
      </div>
    </div>
  );
}
