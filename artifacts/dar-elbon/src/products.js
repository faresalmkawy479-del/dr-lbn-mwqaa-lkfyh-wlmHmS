const parseRows = (rows) => rows.trim().split("\n").map((line) => {
  const [name, price] = line.split("|");
  const prices = price.split("/").map(Number);
  return { name, prices };
});

export const menuCategories = [
  { name: "قهوة", items: parseRows(`Turkish Coffee|30/35
French Coffee|40/45
Nutella Coffee|45/50
Flavored Coffee|40/45
Espresso|35/40
Macchiato|40/45
Mocha|50/55
Mocha White|50/55
Latte|45/50
Cappuccino|45/50
Spanish Latte|55/60
Caramel Macchiato|55/60
Cortado|45/50
American|35/40
American White|40/45
Nescafe|40/45
Nescafe Black|25/30
Green Coffee|25/30`) },
  { name: "مشروبات تانية", items: parseRows(`Hot Chocolate|45/50
Red Tea|15/20
Milk Tea|20/25
Flavored Tea|20/25
Herbal|25/30
Herbal Cocktail|30/35
Hot Cider|35/40`) },
  { name: "قهوة مثلجة", items: parseRows(`Ice Cappuccino|65
Ice Nescafe|50
Ice Latte|65
Ice Mocha|70
Ice Mocha White|70
Ice Zebra Mocha|70
Ice Chocolate|60
Ice Frappe|65
Ice Frappe Flavor|75
Ice Americano|50
Ice Spanish Latte|80
Ice Blue Latte|75
Cold Brew|70
Salted Caramel|85
Ice Caramel Macchiato|80`) },
  { name: "مشروبات باردة", items: parseRows(`Ice Tea Flavor Basic|50
Ice Tea Flavor Soda|65
Mojito Classic|60
Mojito Flavor|70`) },
  { name: "عصائر فريش", items: parseRows(`Lemon|30
Orange|40
Lemon Mint|35
Bananas|50
Dates|50
Watermelon|45
Mango|50
Guava|40
Strawberries|40
Pomegranate|45`) },
  { name: "سموذي", items: parseRows(`Watermelon|60
Mango|60
Strawberries|60
Blueberry|60
Passion|60
Green Apple|60
Mango Passion|60
Mango Peach|60
Watermelon Mint|60`) },
  { name: "ميلك شيك", items: parseRows(`Milk Vanilla|65
Milk Nutella|75
Milk Mango|65
Milk Strawberry|65
Milk Blueberry|65
Milk Oreo|75`) },
];

export const beanGroups = [
  { name: "بن ساده", products: parseRows(`بن ساده فاتح|480
بن ساده وسط|480
بن ساده غامق|480
بن سوبر وسط|640
بن اسبيشيال وسط|720
بن كولومبي وسط|880
بن كولومبي غامق|920
بن برازيلي وسط|680
بن حبشي وسط|640
بن هندي أرابيكا وسط|800
بن اسبرسو وسط|740`) },
  { name: "بن محوج", products: parseRows(`بن فاتح|560/640
بن وسط|560/640
بن غامق|560/640
بن سوبر وسط|720/800
بن اسبيشيال وسط|800/880
بن كولومبي وسط|960/1040
بن كولومبي غامق|1000/1080
بن برازيلي وسط|760/840
بن حبشي وسط|720/800
بن هندي أرابيكا وسط|880/960`).map((product) => ({ ...product, types: ["محوج", "محوج مخصوص"] })) },
  { name: "بن نكهات", products: parseRows(`بن بندق|520
بن بندق قطع|560
بن شيكولاته|520
بن شيكولاته قطع|560
بن كراميل|520
بن فرنساوي|560
بن أخضر تخسيس|520
بن عربي|600
نسكافية كلاسيك|920
نسكافية جولد|1200
كاكاو خام|520`) },
];