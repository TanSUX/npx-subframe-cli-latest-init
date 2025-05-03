"use client";
/*
 * Documentation:
 * Bar Chart — https://app.subframe.com/f8c9bc078ebe/library?component=Bar+Chart_4d4f30e7-1869-4980-8b96-617df3b37912
 */

import React from "react";
import * as SubframeUtils from "../utils";
import * as SubframeCore from "@subframe/core";

interface BarChartRootProps
  extends React.ComponentProps<typeof SubframeCore.BarChart> {
  stacked?: boolean;
  className?: string;
}

const BarChartRoot = React.forwardRef<HTMLElement, BarChartRootProps>(
  function BarChartRoot(
    { stacked = false, className, ...otherProps }: BarChartRootProps,
    ref
  ) {
    return (
      <SubframeCore.BarChart
        className={SubframeUtils.twClassNames("h-80 w-full", className)}
        ref={ref as any}
        stacked={stacked}
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

export const BarChart = BarChartRoot;
