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
  array.forEach(boxes => {
   foundbox += `
   <div class="p-1">
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
 function draw_weight_filter(){
  const heavy_boxes = packages.filter(boxes => boxes.weight >= 3 )
  draw_home(heavy_boxes);
 }

function priority_filter(){
  const priority_boxes = packages.filter(boxes => boxes.priorityLevel === 'express')
  draw_home(priority_boxes)
}

function fragile_filter(){
  const fragile_boxes = packages.filter(boxes => boxes.isFragile === true)
  draw_home(fragile_boxes);
}





  
