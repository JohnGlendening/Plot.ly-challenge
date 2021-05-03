// Belly Button Biodiversity - Plotly.js
//samples.json> get data for metadata, names, % samples
// BONUS: Build the Gauge Chart

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultsarray = metadata.filter(sampleobject =>
            sampleobject.id == sample);
        var result = resultsarray[0]
        var panel = d3.select("#sample-metadata");
        panel.html("");
        Object.entries(result).forEach(([key, value]) => {
            panel.append("h6").text(`${key}: ${value}`);
        });
    });
}

function buildCharts(sample) {

    d3.json("samples.json").then((data) => {
                var samples = data.samples;
                var resultsarray = samples.filter(sampleobject =>
                    sampleobject.id == sample);
                var result = resultsarray[0]

                var ids = result.otu_ids;
                var labels = result.otu_labels;
                var values = result.sample_values;

                var LayoutBubble = {
                    margin: { t: 0 },
                    xaxis: { title: "OTU ID" },
                    hovermode: "closest",
                };

                var DataBubble = [{
                    x: ids,
                    y: values,
                    text: labels,
                    mode: "markers",
                    marker: {
                        color: ids,
                        size: values,
                    }
                }];

                Plotly.newPlot("bubble", DataBubble, LayoutBubble);