import React, { Component, ComponentClass, ComponentType } from 'react';

interface State {
  hasError: boolean;
}

const withErrorBoundary = <T extends Record<string, never>>(
  WrappedComponent: ComponentType<T>
): ComponentClass<T, State> =>
  class ErrorBound extends Component<T, State> {
    constructor(props: T) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFormError(error: Error) {
      console.log(error);
      return { hasError: true };
    }
    render() {
      if (this.state.hasError) {
        return <p>Something went wrong</p>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };

export default withErrorBoundary;
