$(document).one('pageinit', function(){


    showRuns();

//add handler
  $('#submitAdd').on('tap', addRun);

  //edit handleer
  $('#submitEdit').on('tap', editRun);

  //delete run
  $('#stats').on('tap', '#deleteLink', deleteRun);

  //setcurrent
  $('#stats').on('tap', '#editLink', function(event) {
      //event.preventDefault();

      /* Store data in localstorage */
      localStorage.setItem('currentDate', $(this).data('date'));
      localStorage.setItem('currentMiles', $(this).data('miles'));

      //set form value
      $('#editDate').val(localStorage.getItem('currentDate'));
      $('#editMiles').val(localStorage.getItem('currentMiles'));

  });

//setcurrent
  $('#clearRuns').on('tap', function(event) {
      //event.preventDefault();

        localStorage.removeItem('runs');


        $('#stats').html('<p>You have not logged run</p>');

        redirect
        window.location.href =  'home.html';

        return false;

  });



/*
 * show runs
*/
function showRuns(){

    var runs = getRunsObject();

    if(runs != '' && runs != null){

        for (var i = 0; i < runs.length; i++) {
            $('#stats').append('<li class="ui-body-inherit ui-li-static"><strong>date:</strong>'+
                runs[i]["date"]+
                    '<br/><strong>Activity:</strong>'+runs[i]["miles"] +
                    '<div class="controls">'+
                        '<a href="#edit" id="editLink" data-miles="'+ runs[i]["miles"]+'" data-date="'+ runs[i]["date"]+'">Edit</a> | <a href="#" id="deleteLink" data-miles="'+ runs[i]["miles"]+'" data-date="'+ runs[i]["date"]+'" onClick="return confirm(\' Are you sure?\')">Delete</a>'
                    +'</div></li>')
        };

    $('#home').bind('pageInit', function(event) {
        $('stats').listView('refresh');
    });

    }
    else{
            $('#stats').html('<p>You have no logged run</p>');

    }

}


/*
 * Add a run
*/
    function addRun(){

    //get the values
    var miles = $('#addMiles').val();
    var date = $('#addDate').val();


    //create run boject
    var run = {
            date:date,
            miles:miles
    }

    //get current run
    var runs = getRunsObject();

    //add run to runs array
    runs.push(run);
    alert('Run added');

    //stringify
    localStorage.setItem('runs', JSON.stringify(runs));

    //redirect
    window.location.href =  'home.html';

    return false;

}

/*
 * edit a run
*/
    function editRun(){

        //get current values
        currentDate = localStorage.getItem('currentDate');
        currentMiles = localStorage.getItem('currentMiles');

        //get current run
    var runs = getRunsObject();

    for (var i = 0; i < runs.length; i++) {
        if(runs[i]['date'] == currentDate && runs[i]['miles'] == currentMiles){

            runs.splice(i, 1);
        }
        localStorage.setItem('runs', JSON.stringify(runs));
    };

    //get the values
    var miles = $('#editMiles').val();
    var date = $('#editDate').val();
   


    //create run boject
    var run_update = {
            date:date,
            miles:parseFloat(miles)
    }


    //add run to runs array
    runs.push(run_update);
    alert('Run updated');

    //stringify
    localStorage.setItem('runs', JSON.stringify(runs));

    //redirect
    window.location.href =  'home.html';

    return false;

}



/*
 * delete a run
*/
    function deleteRun(){

        /* Store data in localstorage */
      localStorage.setItem('currentDate', $(this).data('date'));
      localStorage.setItem('currentMiles', $(this).data('miles'));


        //get current values
        currentDate = localStorage.getItem('currentDate');
        currentMiles = localStorage.getItem('currentMiles');

        //get current run
    var runs = getRunsObject();

    for (var i = 0; i < runs.length; i++) {
        if(runs[i]['date'] == currentDate && runs[i]['miles'] == currentMiles){

            runs.splice(i, 1);
        }
        localStorage.setItem('runs', JSON.stringify(runs));
    };


    alert('Run deleted');


    //redirect
    window.location.href =  'home.html';

    return false;

}



    /*
    *
    */
    function getRunsObject(){

        //set runs array
        var runs = new Array();
        //get current array from localstorage
        var currentRuns = localStorage.getItem('runs');
 
        if(currentRuns != null ){

                var  runs = JSON.parse(currentRuns);
                
        }

        //return runs object
        return runs.sort(function(a,b){return new Date(b.date) - new Date(b.date)});

    }

});