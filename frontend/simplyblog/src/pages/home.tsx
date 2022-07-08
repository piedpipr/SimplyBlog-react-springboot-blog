import * as React from 'react';

export interface HomeProps {
}

export interface HomeState {
}

export default class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}
