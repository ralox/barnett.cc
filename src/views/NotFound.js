import React from 'react';

export class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h2>This is awkward...</h2>
        <p>
          The content you're looking for is missing or never existed.
          {/* add something fun here, maybe a preview for work and play items */}
        </p>
      </div>
    );
  }
}