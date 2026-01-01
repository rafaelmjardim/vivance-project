export function scrollSection(id?: string) {
  console.log("rodou");

  if (!id) return;

  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
}
