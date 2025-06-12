export function isTimeValid(deliveryTime) {
  if (!deliveryTime) {
    console.warn("No delivery time provided");
    return false;
  }

  const now = new Date();
  const delivery = new Date(deliveryTime);

  if (isNaN(delivery.getTime())) {
    console.warn("Invalid date format");
    return false;
  }

  const diff = (delivery - now) / (1000 * 60 * 60);
  console.log("Time difference (hours):", diff);
  
  return diff >= 5;
}
  
  