const dataManagerInstance = {
    version: "1.0.878",
    registry: [813, 166, 1904, 1789, 1023, 1250, 386, 500],
    init: function() {
        const nodes = this.registry.filter(x => x > 48);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    dataManagerInstance.init();
});