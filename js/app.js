// /* =========================================================
// APP.JS — reads the data, crunches it, draws the charts
// ---------------------------------------------------------
// STARTER VERSION. The function NAMES and DESCRIPTIONS are
// already written. In Step 4, Gemini fills in the bodies.

// The descriptions are a "contract": they tell the AI exactly
// what each function receives and returns, so everyone in
// class gets code that works the same way.

// RULE: do not rename functions or change their inputs.
// ========================================================= */


// // Keeps track of the charts on screen so we can replace them on switch.
// let categoryChart = null;
// let trendChart = null;


// /**
// * parseCsv(csvText)
// * Turns raw CSV text into an array of row objects.
// * Uses the PapaParse library (loaded in index.html).
// * Example: "Genre,Global_Sales\nSports,82.74" -> [{ Genre: "Sports", Global_Sales: "82.74" }]
// * @param {string} csvText - the full CSV text, header row first
// * @returns {Object[]} one object per data row
// */
// function parseCsv(csvText) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * cleanRows(rows, settings)
// * Keeps only rows we can trust and counts the ones we threw away.
// * A row is SKIPPED when:
// *   - its category column is empty, or
// *   - its value column is not a number, or
// *   - its trend column is empty or "N/A".
// * @param {Object[]} rows - output of parseCsv
// * @param {Object} settings - one entry of DATASETS in config.js
// * @returns {{ clean: Object[], skipped: number }}
// */
// function cleanRows(rows, settings) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * toTrendKey(rawValue, grouping)
// * Converts a value from the trend column into the label used on the x-axis.
// *   "none"  -> unchanged             ("2006"      -> "2006")
// *   "hour"  -> hour from HH:MM       ("13:08"     -> "13:00")
// *   "month" -> YYYY-MM from M/D/YYYY ("1/5/2019"  -> "2019-01")
// *   "year"  -> YYYY from M/D/YYYY    ("1/5/2019"  -> "2019")
// * @param {string} rawValue
// * @param {string} grouping - "none" | "hour" | "month" | "year"
// * @returns {string}
// */
// function toTrendKey(rawValue, grouping) {
// // TODO (Step 4): Gemini writes this part.
// }


// *
// * groupAndAggregate(rows, groupColumn, valueColumn, aggregation, grouping)
// * Groups rows by one column and combines the numbers in each group.
// * Example: sum of "Total" per "Product line".
// * @param {Object[]} rows - cleaned rows
// * @param {string} groupColumn - column to group by
// * @param {string} valueColumn - column with the numbers
// * @param {string} aggregation - "sum" | "count" | "average"
// * @param {string} grouping - passed to toTrendKey ("none" for categories)
// * @returns {{ labels: string[], values: number[] }} in the order first seen

// function groupAndAggregate(rows, groupColumn, valueColumn, aggregation, grouping) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * sortGroups(groups, sortBy, limit)
// * Sorts grouped data and optionally keeps only the first few.
// * @param {{ labels: string[], values: number[] }} groups
// * @param {string} sortBy - "valueDesc" (biggest first) | "labelAsc" (A–Z / oldest first)
// * @param {number} [limit] - how many to keep (leave empty to keep all)
// * @returns {{ labels: string[], values: number[] }}
// */
// function sortGroups(groups, sortBy, limit) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * formatNumber(value)
// * Formats a number with commas and CHART_SETTINGS.numberDecimals decimals.
// * Example: 322966.749 -> "322,966.75"
// */
// function formatNumber(value) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * renderSummary(settings, cleanCount, skipped, total, topCategory)
// * Writes the dataset title, description and the 4 summary cards.
// * Required element IDs: dataset-title, dataset-description, dataset-source,
// * kpi-records, kpi-total, kpi-total-label, kpi-top, kpi-skipped
// */
// function renderSummary(settings, cleanCount, skipped, total, topCategory) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * renderCategoryChart(groups, settings)
// * Draws Chart 1 (bar chart) on <canvas id="chart-category">.
// * Destroys the previous chart first so switching datasets works.
// * Required element IDs: chart-category, chart-category-title
// */
// function renderCategoryChart(groups, settings) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * renderTrendChart(groups, settings)
// * Draws Chart 2 (line chart) on <canvas id="chart-trend">.
// * Destroys the previous chart first so switching datasets works.
// * Required element IDs: chart-trend, chart-trend-title
// */
// function renderTrendChart(groups, settings) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * loadDashboard(datasetKey)
// * The main function. Runs every step in order for one dataset:
// * parse -> clean -> group -> sort -> render summary -> render 2 charts.
// * @param {string} datasetKey - a key of DATASETS, e.g. "supermarket"
// */
// function loadDashboard(datasetKey) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * setupDatasetPicker()
// * Fills <select id="dataset-select"> with every dataset in DATASETS,
// * selects ACTIVE_DATASET, and reloads the dashboard when it changes.
// */
// function setupDatasetPicker() {
// // TODO (Step 4): Gemini writes this part.
// }


// // Start everything once the page has loaded.
// document.addEventListener("DOMContentLoaded", function () {
// setupDatasetPicker();
// loadDashboard(ACTIVE_DATASET);
// });


/* =========================================================
APP.JS — reads the data, crunches it, draws the charts
---------------------------------------------------------
STARTER VERSION. The function NAMES and DESCRIPTIONS are
already written. In Step 4, Gemini fills in the bodies.

The descriptions are a "contract": they tell the AI exactly
what each function receives and returns, so everyone in
class gets code that works the same way.

RULE: do not rename functions or change their inputs.
========================================================= */


// Keeps track of the charts on screen so we can replace them on switch.
let categoryChart = null;
let trendChart = null;


/**
* parseCsv(csvText)
* Turns raw CSV text into an array of row objects.
* Uses the PapaParse library (loaded in index.html).
* Example: "Genre,Global_Sales\nSports,82.74" -> [{ Genre: "Sports", Global_Sales: "82.74" }]
* @param {string} csvText - the full CSV text, header row first
* @returns {Object[]} one object per data row
*/
function parseCsv(csvText) {
  const results = Papa.parse(csvText, {
    header: true,
    dynamicTyping: false,
    skipEmptyLines: true
  });
  return results.data;
}


/**
* cleanRows(rows, settings)
* Keeps only rows we can trust and counts the ones we threw away.
* A row is SKIPPED when:
*   - its category column is empty, or
*   - its value column is not a number, or
*   - its trend column is empty or "N/A".
* @param {Object[]} rows - output of parseCsv
* @param {Object} settings - one entry of DATASETS in config.js
* @returns {{ clean: Object[], skipped: number }}
*/
function cleanRows(rows, settings) {
  let clean = [];
  let skipped = 0;
  const catCol = settings.categoryColumn;
  const valCol = settings.valueColumn;
  const trendCol = settings.trendColumn;

  for (let row of rows) {
    if (!row) {
      skipped++;
      continue;
    }
    const cat = row[catCol];
    const val = row[valCol];
    const trend = trendCol ? row[trendCol] : null;

    if (cat === undefined || cat === null || String(cat).trim() === '') {
      skipped++;
      continue;
    }

    if (val === undefined || val === null || String(val).trim() === '') {
      skipped++;
      continue;
    }
    const num = Number(val);
    if (isNaN(num)) {
      skipped++;
      continue;
    }

    if (trendCol) {
      if (trend === undefined || trend === null || String(trend).trim() === '' || String(trend).trim() === 'N/A') {
        skipped++;
        continue;
      }
    }

    clean.push(row);
  }
  return { clean, skipped };
}


/**
* toTrendKey(rawValue, grouping)
* Converts a value from the trend column into the label used on the x-axis.
*   "none"  -> unchanged             ("2006"      -> "2006")
*   "hour"  -> hour from HH:MM       ("13:08"     -> "13:00")
*   "month" -> YYYY-MM from M/D/YYYY ("1/5/2019"  -> "2019-01")
*   "year"  -> YYYY from M/D/YYYY    ("1/5/2019"  -> "2019")
* @param {string} rawValue
* @param {string} grouping - "none" | "hour" | "month" | "year"
* @returns {string}
*/
function toTrendKey(rawValue, grouping) {
  if (!grouping || grouping === "none") {
    return rawValue !== undefined && rawValue !== null ? String(rawValue).trim() : "";
  }
  const s = rawValue !== undefined && rawValue !== null ? String(rawValue).trim() : "";
  if (grouping === "hour") {
    const parts = s.split(":");
    if (parts.length >= 1 && parts[0]) {
      return parts[0].padStart(2, "0") + ":00";
    }
    return s;
  }
  if (grouping === "month" || grouping === "year") {
    let date = new Date(s);
    if (isNaN(date.getTime())) {
      const parts = s.split(/[\/\-]/);
      if (parts.length === 3) {
        if (parts[0].length === 4) {
          date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        } else {
          date = new Date(Number(parts[2]), Number(parts[0]) - 1, Number(parts[1]));
        }
      }
    }
    if (!isNaN(date.getTime())) {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      if (grouping === "year") return String(y);
      if (grouping === "month") return `${y}-${m}`;
    }
    return s;
  }
  return s;
}


/**
* groupAndAggregate(rows, groupColumn, valueColumn, aggregation, grouping)
* Groups rows by one column and combines the numbers in each group.
* Example: sum of "Total" per "Product line".
* @param {Object[]} rows - cleaned rows
* @param {string} groupColumn - column to group by
* @param {string} valueColumn - column with the numbers
* @param {string} aggregation - "sum" | "count" | "average"
* @param {string} grouping - passed to toTrendKey ("none" for categories)
* @returns {{ labels: string[], values: number[] }} in the order first seen
*/
function groupAndAggregate(rows, groupColumn, valueColumn, aggregation, grouping) {
  const map = new Map();
  const counts = new Map();
  const labels = [];

  for (let row of rows) {
    let rawKey = row[groupColumn];
    let key = toTrendKey(rawKey, grouping);
    if (key === undefined || key === null || key === '') continue;

    const val = Number(row[valueColumn]) || 0;

    if (!map.has(key)) {
      map.set(key, 0);
      counts.set(key, 0);
      labels.push(key);
    }

    map.set(key, map.get(key) + val);
    counts.set(key, counts.get(key) + 1);
  }

  const values = labels.map(label => {
    const sum = map.get(label);
    const count = counts.get(label);
    if (aggregation === "count") return count;
    if (aggregation === "average") return count > 0 ? sum / count : 0;
    return sum;
  });

  return { labels, values };
}


/**
* sortGroups(groups, sortBy, limit)
* Sorts grouped data and optionally keeps only the first few.
* @param {{ labels: string[], values: number[] }} groups
* @param {string} sortBy - "valueDesc" (biggest first) | "labelAsc" (A–Z / oldest first)
* @param {number} [limit] - how many to keep (leave empty to keep all)
* @returns {{ labels: string[], values: number[] }}
*/
function sortGroups(groups, sortBy, limit) {
  const combined = groups.labels.map((label, i) => ({
    label,
    value: groups.values[i]
  }));

  if (sortBy === "valueDesc") {
    combined.sort((a, b) => b.value - a.value);
  } else if (sortBy === "labelAsc") {
    combined.sort((a, b) => a.label.localeCompare(b.label, undefined, { numeric: true, sensitivity: 'base' }));
  }

  const target = limit !== undefined && limit !== null ? combined.slice(0, limit) : combined;

  return {
    labels: target.map(item => item.label),
    values: target.map(item => item.value)
  };
}


/**
* formatNumber(value)
* Formats a number with commas and CHART_SETTINGS.numberDecimals decimals.
* Example: 322966.749 -> "322,966.75"
*/
function formatNumber(value) {
  const decimals = (typeof CHART_SETTINGS !== 'undefined' && CHART_SETTINGS.numberDecimals !== undefined) ? CHART_SETTINGS.numberDecimals : 2;
  const num = Number(value);
  if (isNaN(num)) return "0";
  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}


/**
* renderSummary(settings, cleanCount, skipped, total, topCategory)
* Writes the dataset title, description and the 4 summary cards.
* Required element IDs: dataset-title, dataset-description, dataset-source,
* kpi-records, kpi-total, kpi-total-label, kpi-top, kpi-skipped
*/
function renderSummary(settings, cleanCount, skipped, total, topCategory) {
  const titleEl = document.getElementById("dataset-title");
  if (titleEl) titleEl.textContent = settings.title || "";

  const descEl = document.getElementById("dataset-description");
  if (descEl) descEl.textContent = settings.description || "";

  const sourceEl = document.getElementById("dataset-source");
  if (sourceEl) {
    sourceEl.href = settings.source || settings.sourceUrl || "#";
  }

  const kpiRecordsEl = document.getElementById("kpi-records");
  if (kpiRecordsEl) kpiRecordsEl.textContent = cleanCount.toLocaleString('en-US');

  const kpiTotalEl = document.getElementById("kpi-total");
  if (kpiTotalEl) {
    kpiTotalEl.textContent = (settings.currency || "$") + formatNumber(total);
  }

  const kpiTotalLabelEl = document.getElementById("kpi-total-label");
  if (kpiTotalLabelEl) {
    kpiTotalLabelEl.textContent = settings.totalLabel || settings.valueLabel || "USD Gross";
  }

  const kpiTopEl = document.getElementById("kpi-top");
  if (kpiTopEl) {
    kpiTopEl.textContent = topCategory ? topCategory.label : "N/A";
  }

  const kpiSkippedEl = document.getElementById("kpi-skipped");
  if (kpiSkippedEl) kpiSkippedEl.textContent = skipped.toLocaleString('en-US');
}


/**
* renderCategoryChart(groups, settings)
* Draws Chart 1 (bar chart) on <canvas id="chart-category">.
* Destroys the previous chart first so switching datasets works.
* Required element IDs: chart-category, chart-category-title
*/
function renderCategoryChart(groups, settings) {
  if (categoryChart) {
    categoryChart.destroy();
    categoryChart = null;
  }

  const titleEl = document.getElementById("chart-category-title");
  if (titleEl) {
    titleEl.textContent = settings.categoryChartTitle || (settings.categoryColumn ? `Total Sales by ${settings.categoryColumn}` : "Category Breakdown");
  }

  const canvas = document.getElementById("chart-category");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const primaryColor = (typeof CHART_SETTINGS !== 'undefined' && CHART_SETTINGS.primaryColor) ? CHART_SETTINGS.primaryColor : '#0f766e';

  categoryChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: groups.labels,
      datasets: [{
        label: settings.valueLabel || settings.valueColumn || 'Value',
        data: groups.values,
        backgroundColor: primaryColor,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { display: false }
        },
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


/**
* renderTrendChart(groups, settings)
* Draws Chart 2 (line chart) on <canvas id="chart-trend">.
* Destroys the previous chart first so switching datasets works.
* Required element IDs: chart-trend, chart-trend-title
*/
function renderTrendChart(groups, settings) {
  if (trendChart) {
    trendChart.destroy();
    trendChart = null;
  }

  const titleEl = document.getElementById("chart-trend-title");
  if (titleEl) {
    titleEl.textContent = settings.trendChartTitle || (settings.trendColumn ? `Total Sales by ${settings.trendColumn}` : "Trend Analysis");
  }

  const canvas = document.getElementById("chart-trend");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const primaryColor = (typeof CHART_SETTINGS !== 'undefined' && CHART_SETTINGS.primaryColor) ? CHART_SETTINGS.primaryColor : '#0f766e';

  trendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: groups.labels,
      datasets: [{
        label: settings.trendLabel || settings.trendColumn || 'Trend',
        data: groups.values,
        borderColor: primaryColor,
        backgroundColor: 'rgba(15, 118, 110, 0.1)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { display: false }
        },
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


/**
* loadDashboard(datasetKey)
* The main function. Runs every step in order for one dataset:
* parse -> clean -> group -> sort -> render summary -> render 2 charts.
* @param {string} datasetKey - a key of DATASETS, e.g. "supermarket"
*/
function loadDashboard(datasetKey) {
  const settings = DATASETS[datasetKey];
  if (!settings) return;

  let csvText = "";
  if (settings.csv !== undefined) {
    csvText = settings.csv;
  } else if (settings.dataVar && window[settings.dataVar] !== undefined) {
    csvText = window[settings.dataVar];
  } else if (window[datasetKey + "Csv"] !== undefined) {
    csvText = window[datasetKey + "Csv"];
  } else if (window[datasetKey] !== undefined && typeof window[datasetKey] === 'string') {
    csvText = window[datasetKey];
  }

  const rawRows = parseCsv(csvText);
  const { clean, skipped } = cleanRows(rawRows, settings);

  const maxCat = (typeof CHART_SETTINGS !== 'undefined' && CHART_SETTINGS.maxCategories) ? CHART_SETTINGS.maxCategories : undefined;
  const catLimit = settings.categoryLimit !== undefined ? settings.categoryLimit : maxCat;

  const catGroups = groupAndAggregate(
    clean,
    settings.categoryColumn,
    settings.valueColumn,
    settings.aggregation || "sum",
    "none"
  );
  const sortedCatGroups = sortGroups(catGroups, settings.categorySort || "valueDesc", catLimit);

  const total = catGroups.values.reduce((acc, v) => acc + v, 0);

  const topCatSorted = sortGroups(catGroups, "valueDesc", 1);
  const topCategory = {
    label: topCatSorted.labels[0] || "N/A",
    value: topCatSorted.values[0] || 0
  };

  renderSummary(settings, clean.length, skipped, total, topCategory);
  renderCategoryChart(sortedCatGroups, settings);

  if (settings.trendColumn) {
    const trendGroups = groupAndAggregate(
      clean,
      settings.trendColumn,
      settings.valueColumn,
      settings.trendAggregation || settings.aggregation || "sum",
      settings.trendGrouping || "none"
    );
    const sortedTrendGroups = sortGroups(trendGroups, settings.trendSort || "labelAsc");
    renderTrendChart(sortedTrendGroups, settings);
  } else {
    if (trendChart) {
      trendChart.destroy();
      trendChart = null;
    }
  }
}


/**
* setupDatasetPicker()
* Fills <select id="dataset-select"> with every dataset in DATASETS,
* selects ACTIVE_DATASET, and reloads the dashboard when it changes.
*/
function setupDatasetPicker() {
  const select = document.getElementById("dataset-select");
  if (!select) return;

  select.innerHTML = "";
  for (const key in DATASETS) {
    const ds = DATASETS[key];
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = ds.name || ds.title || key;
    if (key === ACTIVE_DATASET) {
      opt.selected = true;
    }
    select.appendChild(opt);
  }

  select.addEventListener("change", (e) => {
    loadDashboard(e.target.value);
  });
}


// Start everything once the page has loaded.
document.addEventListener("DOMContentLoaded", function () {
setupDatasetPicker();
loadDashboard(ACTIVE_DATASET);
});