$(() => {
  // console.log('%c Web Developer: Seeking Opportunities ', 'background-color: #ff5700; color: #fff; font-size: 18px; padding: 4px 0;');
  const project1 = $('#proj1');
  const project2 = $('#proj2');
  const project3 = $('#proj3');
  const project4 = $('#proj4');

  const description1 = $('#description1');
  const description2 = $('#description2');
  const description3 = $('#description3');
  const description4 = $('#description4');

  function mouseOver(project, description) {
    project.mouseover(() => {
      description.fadeIn('slow');
    });
  }
  function mouseOut(project, description) {
    project.mouseout(() => {
      description.hide();
    });
  }
  mouseOver(project1, description1);
  mouseOver(project2, description2);
  mouseOver(project3, description3);
  mouseOver(project4, description4);
  mouseOut(project1, description1);
  mouseOut(project2, description2);
  mouseOut(project3, description3);
  mouseOut(project4, description4);

})
