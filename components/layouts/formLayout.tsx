export default function MotorFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex  justify-center md:items-start w-full h-full">
      <div className="md:w-1/2 md:grid md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}
