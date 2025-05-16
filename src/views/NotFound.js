import React, {useEffect} from 'react';

//export class NotFound extends React.Component {
export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found | Barnett UX";
  },[]);

  return (
    <div className="not-found">
      <h1 className="page-title">This is awkward...</h1>
      <p>
        The content you're looking for is missing or never existed.
        {/* add something fun here, maybe a preview for work and play items */}
      </p>
    </div>
  );
}