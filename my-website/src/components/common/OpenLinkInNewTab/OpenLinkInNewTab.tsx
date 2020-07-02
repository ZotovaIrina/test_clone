import * as React from 'react';

interface IOpenLinkInNewTab {
  link: string;
  onClick?: () => void;
}

const OpenLinkInNewTab: React.FunctionComponent<IOpenLinkInNewTab> = props => {
  return(
    <a
      href={props.link}
      rel="noopener noreferrer"
      target="_blank"
      onClick={props.onClick}
    >
      {props.children}
    </a>
  );
};

export default OpenLinkInNewTab;