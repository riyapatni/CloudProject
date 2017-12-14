/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import { Header, Jumbotron, Footer } from 'watson-react-components';
const React = require('react');

class Application extends React.Component {
  getDescription() {
    return (
      <div>
        <div>
          This project is part of the Cloud Computing Course at NYU. Here we use Watson Discovery Service to create a news searching web app where a user can search for news articles that are relevant to their search query.
          <br />
          <br />
            Team Members: Karan Chakravarti, Riya Patni, Saif Ahmed, Udita Gupta
            <br />
          <br />
        </div>
      <div>Select from one of the following examples:</div>
        <ul>
          <li>
            <a href="./trending">Find Trending Topics</a>
          </li>
          <li>
            <a href="./search">Search for Specific Topics</a>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <html>
        <head>
          <title>My News Portal</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="og:title" content="Watson Discovery" />
          <link rel="stylesheet" type="text/css" href="/css/watson-react-components.min.css" />
          <link rel="stylesheet" type="text/css" href="/css/application.css"/>
        </head>
        <body>
          
            <h2>Cloud Computing Project Fall 2017</h2>
            <div>
            <div>
            This project is part of the Cloud Computing Course at NYU. Here we use Watson Discovery Service to create a news searching web app where a user can search for news articles that are relevant to their search query.
            <br />
            <br />
            Team Members: Karan Chakravarti, Riya Patni, Saif Ahmed, Udita Gupta
            <br />
            <br />
            </div>
            <div>Select from one of the following examples:</div>
            <ul>
            <li>
            <a href="./trending">Find Trending Topics</a>
            </li>
            <li>
            <a href="./search">Search for Specific Topics</a>
            </li>
            </ul>
            </div>
            
        </body>
      </html>
    );
  }
}

module.exports = Application;
