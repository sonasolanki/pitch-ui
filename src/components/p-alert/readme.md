# p-alert

A way of informing the user of important changes in a prominent way.

<!-- Auto Generated Below -->


## Overview

A way of informing the user of important changes in a prominent way.

## Properties

| Property        | Attribute        | Description           | Type                                                     | Default     |
| --------------- | ---------------- | --------------------- | -------------------------------------------------------- | ----------- |
| `closeUuid`     | `close-uuid`     | uuid of close button  | `string`                                                 | `undefined` |
| `inContainer`   | `in-container`   | is alert in container | `boolean`                                                | `false`     |
| `isDismissable` | `is-dismissable` | is alert dismissable  | `boolean`                                                | `false`     |
| `variant`       | `variant`        | variant of alert      | `"error" \| "info" \| "naked" \| "success" \| "warning"` | `'info'`    |


## Events

| Event     | Description                                                 | Type               |
| --------- | ----------------------------------------------------------- | ------------------ |
| `dismiss` | emits {dismissed: true} object when close button is clicked | `CustomEvent<any>` |


## CSS Custom Properties

| Name                  | Description       |
| --------------------- | ----------------- |
| `--p-alert-display`   | display type      |
| `--p-alert-min-width` | minwidth of alert |
| `--p-alert-width`     | specific width    |


## Dependencies

### Depends on

- [p-icon](../p-icon)
- [p-button](../p-button)

### Graph
```mermaid
graph TD;
  p-alert --> p-icon
  p-alert --> p-button
  p-button --> p-icon
  style p-alert fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
