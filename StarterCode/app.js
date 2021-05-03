// Belly Button Biodiversity - Plotly.js
//samples.json> got data for names, metadata, samples
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
d3.json("samples.json").then((data) => {
            var samples = data.samples;
            var resultsarray = samples.filter(sampleobject =>
                sampleobject.id == sample);
            var result = resultsarray[0]

            var ids = result.otu_ids;
            var labels = result.otu_labels;
            var values = result.sample_values;