import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You can log the error to an error reporting service here
    this.setState({ error, info });
    // eslint-disable-next-line no-console
    console.error("Uncaught error in component tree:", error, info);
  }

  render() {
    if (this.state.hasError) {
      const { error, info } = this.state;
      return (
        <div style={{ padding: 20 }}>
          <h1 style={{ color: "#c0392b" }}>Ocorreu um erro</h1>
          <p>
            A aplicação encontrou um erro ao renderizar. Veja os detalhes abaixo
            (console também pode conter mais informações).
          </p>
          {error && (
            <div style={{ whiteSpace: "pre-wrap", marginTop: 12 }}>
              <strong>Erro:</strong>
              <div>{String(error && error.toString())}</div>
            </div>
          )}
          {info && info.componentStack && (
            <div style={{ whiteSpace: "pre-wrap", marginTop: 12 }}>
              <strong>Stack do componente:</strong>
              <div>{info.componentStack}</div>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
