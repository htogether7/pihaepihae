import React, { memo } from "react";
import Share from "./Share";

const ShareContainer = () => {
  return (
    <div id="share-container">
      <Share />
    </div>
  );
};

export default memo(ShareContainer);
