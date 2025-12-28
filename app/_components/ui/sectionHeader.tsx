type SectionHeaderProps = {
  title: string;
  description: string;
};

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl lg:text-4xl mb-6">{title}</h2>
      <p className="text-text-secundary text-md sm:text-base max-w-140">
        {description}
      </p>
    </div>
  );
}
