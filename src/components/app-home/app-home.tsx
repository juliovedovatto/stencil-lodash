import { Component, h } from '@stencil/core';

import { Dictionary } from 'lodash';
import isEqual from 'lodash/isEqual';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  private testVar: Dictionary | null = null


  isEqual(): boolean {
    return isEqual(this.testVar, 'Lorem Ipsum')
  }


  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <p>testVar value = <strong>{this.testVar}</strong></p>
        <p>testVar isEqual? <strong>{this.isEqual ? 'true' : 'false'}</strong></p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
