# Angular pagination library

A reusable and responsive pagination library built with Angular 17, designed to be customizable and easy to integrate into your Angular applications. 

## Features

- **Customizable Page Size:** Adjust page size, total pages, and current page dynamically.
- **Page Navigation:**  Navigate between pages with ease.
- **Responsive Design:**  Adjusts to various screen sizes for better usability.
- **Event Emission:**  Emits events for page and page size changes, enabling dynamic data fetching.
---

## Getting Started

### Installation

Install the package via npm:

```bash
npm install @bittu1040/pagination-ng
```

## API Documentation

### Inputs

| Input                | Type       | Description                                              |
|----------------------|------------|----------------------------------------------------------|
| `currentPageNumber`  | `number`   | The current page number.                                 |
| `totalPages`         | `number`   | The total number of pages.                               |
| `currentPageSize`    | `number`   | The current page size (e.g., items per page).            |
| `pageSizes`          | `number[]` | The array of available page size options.                |
| `totalItems`         | `number`   | The total number of items in the dataset.                |

### Outputs

| Output               | Type       | Description                                              |
|----------------------|------------|----------------------------------------------------------|
| `pageChange`         | `number`   | Emits the new page number when a page is changed.        |
| `pageSizeChange`     | `number`   | Emits the updated page size when the selection is changed. |

### Usage

#### Import in Your Component

First, import the `PaginationNgComponent` into your Angular component:

```typescript
import { PaginationNgComponent } from '@bittu1040/pagination-ng';

@Component({
  selector: 'app-mini-features',
  standalone: true,
  imports: [PaginationNgComponent],
  templateUrl: './mini-features.component.html',
  styleUrls: ['./mini-features.component.scss']
})
export class MiniFeaturesComponent {
  pageNumber: number = 1;
  totalPages: number = 10;
  currentPageSize: number = 20; // Choose a default page size from the pageSizes array
  pageSizes: number[] = [20, 50, 100];
  totalItems: number = 200;

  onPageChange(newPage: number): void {
    this.pageNumber = newPage;
    console.log(`Page changed to: ${this.pageNumber}`);
    // Add logic to fetch data for the new page
  }

  onPageSizeUpdate(newPageSize: number): void {
    this.currentPageSize = newPageSize;
    console.log(`Page size updated to: ${this.currentPageSize}`);
    // Add logic to update the page size and refresh data
  }
}
```

#### Component Template

Use the component in your template:

```html
<pagination-ng 
  [currentPageNumber]="pageNumber"
  [totalPages]="totalPages"
  [currentPageSize]="currentPageSize"
  [pageSizes]="pageSizes"
  [totalItems]="totalItems"
  (pageChange)="onPageChange($event)"
  (pageSizeChange)="onPageSizeUpdate($event)"
></pagination-ng>
```

## Further help:
Contact here if you face any issue while integrating in your angular project
"[Bittu Kumar ](https://www.linkedin.com/in/bittukumar-web/)"

You are welcome to raise issues/PR for any contribution !! 
