import * as React from 'react';

export interface SignUpProps {
}

export interface SignUpState {
}

export default class SignUp extends React.Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        Signup Page
      </div>
    );
  }
}
