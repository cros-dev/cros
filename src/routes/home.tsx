import type { Route } from "./+types/home";

export function meta(_args: Route.MetaArgs) {
  return [{ title: "cros.dev.br" }];
}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <h1>cros.dev.br</h1>
      <p className="text-muted-foreground">Em construção.</p>
    </main>
  );
}
