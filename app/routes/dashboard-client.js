import Ember from 'ember';

let capacities = [
  {
    title: "North Bay", informations: [
    {
      title: "Design", remaining: 9, capacity: 54, background: "progress-bar-aqua", percentage: 81.25
    }, {
      title: "Render", remaining: 8, capacity: 24, background: "progress-bar-red", percentage: 66
    }, {
      title: "Audit", remaining: 6, capacity: 10, background: "progress-bar-green", percentage: 66
    }]
  }, {
    title: "South Bay", informations: [
      {
        title: "Design", remaining: 0, capacity: 18, background: "progress-bar-aqua", percentage: 100
      }, {
        title: "Render", remaining: 6, capacity: 12, background: "progress-bar-red", percentage: 50
      }, {
        title: "Audit", remaining: 0, capacity: 0, background: "progress-bar-green", percentage: 0
      }]
  }, {
    title: "Two", informations: [
      {
        title: "Design", remaining: 0, capacity: 6, background: "progress-bar-aqua", percentage: 100
      }, {
        title: "Render", remaining: 6, capacity: 6, background: "progress-bar-red", percentage: 0
      }, {
        title: "Audit", remaining: 2, capacity: 6, background: "progress-bar-green", percentage: 33
      }]
  }, {
    title: "Healthcare", informations: [
      {
        title: "Design", remaining: 0, capacity: 6, background: "progress-bar-aqua", percentage: 100
      }, {
        title: "Render", remaining: 6, capacity: 6, background: "progress-bar-red", percentage: 0
      }, {
        title: "Audit", remaining: 2, capacity: 6, background: "progress-bar-green", percentage: 33
      }]
  }];

let projects = [
  {
    id : "21121-1212",
    name : "Google San Diego 3rd Floor",
    assignee : {
      name : "Arya Stark",
      image : "img/user4-128x128.jpg"
    },
    pid : 123434,
    hours: 6,
    office: 'South Bay',
    client: 'Google',
    createdBy : {
      name : 'Cercei Lannister',
      image : "img/user7-128x128.jpg"
    },
    status: 'Open'
  },
  {
    id : "21121-23512",
    name : "LinkedIn San Diego Basement",
    assignee : {
      name : "Jon Snow",
      image : "img/user8-128x128.jpg"
    },
    pid : 121255,
    hours: 3,
    office: 'South Bay',
    client: 'LinkedIn',
    createdBy : {
      name : 'Tyrion Lannister',
      image : "img/user1-128x128.jpg"
    },
    status: 'Open'
  },
  {
    id : "21121-23512",
    name : "Stanford San Diego 1st Floor",
    assignee : {
      name : "Ned Stark",
      image : "img/user2-160x160.jpg"
    },
    pid : 1218765,
    hours: 3,
    office: 'South Bay',
    client: 'Stanford',
    createdBy : {
      name : 'Tywin Lannister',
      image : "img/user6-128x128.jpg"
    },
    status: 'In Progress'
  }
];

export default Ember.Route.extend({
  model(){
    return {
      header : {
        title : "Client",
        subTitle: "Dashboard for Clients",
        navs : [
          {
            active : true,
            title : "Client"
          }
        ]
      },

      capacities: capacities,
      projects: projects
    };
  }
});
