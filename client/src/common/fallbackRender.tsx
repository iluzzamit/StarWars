import React from "react";

export function fallbackRender({ error }: { error: Error }) {
  return (
    <React.Fragment>{error.message}</React.Fragment>
  );
}