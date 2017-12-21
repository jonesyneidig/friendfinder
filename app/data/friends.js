// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friends = [
  {
      "name":"Trump",
      "photo":"https://venezuelanalysis.com/files/images/2017/07/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners_1.jpg",
      "scores":[
         5,
         1,
         4,
         4,
         5,
         1,
         2,
         5,
         4,
         1
          ]
      },
  {
  "name":"Obama",
  "photo":"https://thenypost.files.wordpress.com/2017/03/obamagdp1.jpg?quality=90&strip=all&w=1200",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
      ]
},
{
  "name":"Bush",
  "photo":"https://cdn.totalfratmove.com/wp-content/uploads/2013/10/678d12741729e00a5d8a19b47edcb865214846856.jpg",
  "scores":[
     3,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
      ]
},
{
  "name":"Bill Clinton",
  "photo":"http://thehilltalk.com/wp-content/uploads/2017/05/bill-clinton-sex-scandals-hillary-campaign.jpg",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     1,
     2,
     5,
     4
      ]
}
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
