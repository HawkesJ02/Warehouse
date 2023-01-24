/* SECTION Variables */

const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

/* SECTION Functions */

function draw_home(array) {
  let box_sorter = document.getElementById('main_screen')
  let foundbox = ` `
  packages.forEach(boxes => {
   foundbox += `
   <div class="p-2">
    TO: ${boxes.to},
    TRACKING NUMBER: ${boxes.trackingNumber}
    WEIGHT: ${boxes.weight}
    PRIORITY: ${boxes.priorityLevel}
    FRAGILE: ${boxes.isFragile}
    </div>`
 });
  // @ts-ignore
  box_sorter.innerHTML = foundbox
  }

draw_home()



function draw_weights(array) {
 let box_sorter = document.getElementById('main_screen')
 let foundbox = ` `
 array.forEach(boxes => {
  foundbox += `
  <div class="p-2"> BOX WEIGHT: ${boxes.weight}, ${boxes.isFragile} </div>
  `
});
 // @ts-ignore
 box_sorter.innerHTML = foundbox
 } 

 function draw_weight_filter(){
  const heavy_boxes = packages.filter(boxes => boxes.weight >= 3 )
  console.log(heavy_boxes);
  draw_weights(heavy_boxes)
 }

 function draw_priority() {
  let box_sorter = document.getElementById('main_screen')
  let foundbox = ` `
  packages.forEach(boxes => {
   foundbox += `<div class="p-2"> PRIORITY: ${boxes.priorityLevel} </div>`
 });
  // @ts-ignore
  box_sorter.innerHTML = foundbox
  }

  function draw_fragile(array) {
    let box_sorter = document.getElementById('main_screen')
    let foundbox = ` `
    array.forEach(boxes => {
     foundbox += `<div class="p-2"> FRAGILE: ${boxes.isFragile}</div>`
   });
    // @ts-ignore
    box_sorter.innerHTML = foundbox
    }

function fragile_filter(){
  const fragile_boxes = packages.filter(boxes => boxes.isFragile == true)
  console.log(fragile_boxes);
  draw_fragile(fragile_boxes);
}

fragile_filter()




  
