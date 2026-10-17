import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { createRoutesStub, data } from "react-router";
import { describe, expect, it } from "vitest";
import { ErrorBoundary } from "./root";

describe("ErrorBoundary", () => {
  it("renders 404 message when loader throws 404 status", async () => {
    const Stub = createRoutesStub([
      {
        path: "/",
        loader() {
          throw data(null, { status: 404 });
        },
        Component: () => null,
        ErrorBoundary,
      },
    ]);

    render(<Stub initialEntries={["/"]} />);

    expect(
      await screen.findByRole("heading", { level: 1, name: "404" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("A página solicitada não foi encontrada."),
    ).toBeInTheDocument();
  });

  it("renders status error message when loader throws 500 status without statusText", async () => {
    const Stub = createRoutesStub([
      {
        path: "/",
        loader() {
          throw data(null, { status: 500, statusText: "" });
        },
        Component: () => null,
        ErrorBoundary,
      },
    ]);

    render(<Stub initialEntries={["/"]} />);

    expect(
      await screen.findByRole("heading", { level: 1, name: "Erro" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Ocorreu um erro inesperado."),
    ).toBeInTheDocument();
  });

  it("renders generic error heading when component throws an Error", async () => {
    const Stub = createRoutesStub([
      {
        path: "/",
        Component: () => {
          throw new Error("falha");
        },
        ErrorBoundary,
      },
    ]);

    render(<Stub initialEntries={["/"]} />);

    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: "Algo deu errado",
      }),
    ).toBeInTheDocument();
  });
});
