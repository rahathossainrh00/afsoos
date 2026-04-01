import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-[120px] bg-white flex flex-col items-center justify-center text-center px-6">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-4xl mb-6">
            ⚠️
          </div>
          <h2 className="text-3xl font-extrabold text-[#101727] mb-4">
            Oops! Something went wrong.
          </h2>
          <p className="text-base text-[#627382] max-w-[500px]">
            We couldn't load the products at this time. Please try refreshing the page or check your connection.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-8 rounded-full h-[52px] px-8 text-white font-bold text-base hover:opacity-90 transition-all duration-200 shadow-md cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #4F39F6, #9514FA)' }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
