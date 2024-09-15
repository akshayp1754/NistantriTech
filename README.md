# Temperature Tracker Application

This is a **Temperature Tracker Application** built using **Angular** and **Chart.js**. The application allows users to input temperature data with corresponding datetime values and view this data in a dynamic bar chart.

## Features

- **Add Temperature Data**: Users can add temperature data with a datetime value.
- **View Data**: Displays the added data in a list.
- **Dynamic Chart**: Displays temperature data over time using a chart that updates dynamically as new data is added.
- **Form Validation**: Ensures valid temperature ranges and datetime input.
- **Real-time Updates**: Updates the chart automatically when new data is added.

## Technologies Used

- **Angular**: Frontend framework for building the application.
- **Chart.js**: Library for rendering charts.
- **Angular Material**: UI component library for a modern, responsive UI.
- **RxJS**: For managing real-time data updates with `BehaviorSubject`.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Angular CLI](https://angular.io/cli)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/akshayp1754/NistantriTech.git 
   cd temperature-tracker-app

2. **Install dependencies:**

    ```bash
    npm install

3. **Run the application:**

    ```bash
    ng serve
    The app will be running on http://localhost:4200.
   
### Usage

- **Adding Data**: Input the `datetime` and `temperature` in the form.
- **Viewing Data**: The added entries will be shown in the list.
- **Chart**: The temperature data will be plotted on a bar chart, which updates dynamically with new entries.
