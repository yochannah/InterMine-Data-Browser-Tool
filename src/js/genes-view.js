$(document).ready(function() {

    window.currentClassView = "Gene";
    document.title = window.currentClassView + " in HumanMine";
    $("#proteinsButton").removeClass("btn-primary").addClass("btn-default");
    $("#genesButton").removeClass("btn-default").addClass("btn-primary");

    // Instantiate the im-table with all the data available in Gene from HumanMine
    var selector = '#dataTable';
    var service = {
        root: 'http://www.humanmine.org/humanmine/service'
    };
    var query = {
        select: ['*'],
        from: 'Gene'
    };

    imtables.configure({
        TableCell: {
            PreviewTrigger: 'click'
        }
    });

    imtables.configure('TableResults.CacheFactor', 20);

    var imtable = imtables.loadTable(
        selector, {
            "start": 0,
            "size": 25
        }, {
            service: service,
            query: query
        }
    ).then(
        function(table) {
            //console.log('Table loaded', table);
            //this .on listener will do something when someone interacts with the table. 
            table.on("all", function(changeDetail) {
                updateElements(table.history.currentQuery.constraints, "genesViewPieChart1");
            });
        },
        function(error) {
            console.error('Could not load table', error);
        }
    );
});