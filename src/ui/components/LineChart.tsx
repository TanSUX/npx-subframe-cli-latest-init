"use client";
/*
 * Documentation:
 * Line Chart — https://app.subframe.com/f8c9bc078ebe/library?component=Line+Chart_22944dd2-3cdd-42fd-913a-1b11a3c1d16d
 */

import React from "react";
import * as SubframeUtils from "../utils";
import * as SubframeCore from "@subframe/core";

interface LineChartRootProps
  extends React.ComponentProps<typeof SubframeCore.LineChart> {
  className?: string;
}

const LineChartRoot = React.forwardRef<HTMLElement, LineChartRootProps>(
  function LineChartRoot(
    { className, ...otherProps }: LineChartRootProps,
    ref
  ) {
    return (
      <SubframeCore.LineChart
        className={SubframeUtils.twClassNames("h-80 w-full", className)}
        ref={ref as any}
        colors={[
          "#f43f5e",
          "#fecdd3",
          "#e11d48",
          "#fda4af",
          "#be123c",
          "#fb7185",
        ]}
        {...otherProps}
      />
    );
  }
);

export const LineChart = LineChartRoot;
