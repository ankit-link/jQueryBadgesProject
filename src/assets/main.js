$(function() {

   $.ajax({
    url: 'https://www.codeschool.com/users/ankit123.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      var completed = response.courses.completed;
      var badges = $('#badges');
      $.each(completed,function(ind,val){
      	var title = $('<h3>'+ val.title + '</h3>')
      	var html = $('<div class="course"/>')
      	var img = $('<img src="'+ val.badge+'">')
      	var anchor = $('<a target="_blank" class="btn btn-primary" href="' + val.url + ' ">See course </a>' )
      	html.append(title);
      	html.append(img);
      	html.append(anchor);
      	badges.append(html);
      })
      console.log("response received",response)
    }
  });

});
