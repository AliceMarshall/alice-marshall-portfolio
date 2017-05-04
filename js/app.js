$(() => {
  console.log('jq loaded');
  const project1 = $('#proj1');
  const project2 = $('#proj2');
  const project3 = $('#proj3');
  const project4 = $('#proj4');

  project1.mouseover(() => {
    $("#description1").show();
  });
  project1.mouseout(() => {
    $("#description1").hide();
  });

  project2.mouseover(() => {
    $("#description2").show();
  });
  project2.mouseout(() => {
    $("#description2").hide();
  });

  project3.mouseover(() => {
    $("#description3").show();
  });
  project3.mouseout(() => {
    $("#description3").hide();
  });

  project4.mouseover(() => {
    $("#description4").show();
  });
  project4.mouseout(() => {
    $("#description4").hide();
  });
})
