// Tier Calculator
const stackingTier = [

  { Name: "No Stack - Redeem 0 PLU", PLURequired: 0, PercentageReward: 0.03, EligibleSpendingForRewards: 0, NoOfPerks: 0 },
  { Name: "No Stack - Redeem 20 PLU", PLURequired: 0, PercentageReward: 0.03, EligibleSpendingForRewards: 1000, NoOfPerks: 0 },
  { Name: "No Stack - Redeem 50 PLU", PLURequired: 0, PercentageReward: 0.03, EligibleSpendingForRewards: 2000, NoOfPerks: 0 },
  { Name: "No Stack - Redeem 200 PLU", PLURequired: 0, PercentageReward: 0.03, EligibleSpendingForRewards: 5000, NoOfPerks: 0 },
  { Name: "No Stack - Redeem 500 PLU", PLURequired: 0, PercentageReward: 0.03, EligibleSpendingForRewards: 10000, NoOfPerks: 0 },
  
  { Name: "Hero - Redeem 20 PLU", PLURequired: 250, PercentageReward: 0.04, EligibleSpendingForRewards: 0, NoOfPerks: 4 },
  { Name: "Hero - Redeem 20 PLU", PLURequired: 250, PercentageReward: 0.04, EligibleSpendingForRewards: 1000, NoOfPerks: 4 },
  { Name: "Hero - Redeem 50 PLU", PLURequired: 250, PercentageReward: 0.04, EligibleSpendingForRewards: 2000, NoOfPerks: 4 },
  { Name: "Hero - Redeem 200 PLU", PLURequired: 250, PercentageReward: 0.04, EligibleSpendingForRewards: 5000, NoOfPerks: 4 },
  { Name: "Hero - Redeem 500 PLU", PLURequired: 250, PercentageReward: 0.04, EligibleSpendingForRewards: 1000, NoOfPerks: 4 },
  
  { Name: "Veteran - Redeem 50 PLU", PLURequired: 500, PercentageReward: 0.05, EligibleSpendingForRewards: 0, NoOfPerks: 5 },
  { Name: "Veteran - Redeem 20 PLU", PLURequired: 500, PercentageReward: 0.05, EligibleSpendingForRewards: 1000, NoOfPerks: 5 },
  { Name: "Veteran - Redeem 50 PLU", PLURequired: 500, PercentageReward: 0.05, EligibleSpendingForRewards: 2000, NoOfPerks: 5 },
  { Name: "Veteran - Redeem 200 PLU", PLURequired: 500, PercentageReward: 0.05, EligibleSpendingForRewards: 5000, NoOfPerks: 5 },
  { Name: "Veteran - Redeem 500 PLU", PLURequired: 500, PercentageReward: 0.05, EligibleSpendingForRewards: 10000, NoOfPerks: 5 },
  
  { Name: "Legend - Redeem 200 PLU", PLURequired: 1000, PercentageReward: 0.06, EligibleSpendingForRewards: 0, NoOfPerks: 6 },
  { Name: "Legend - Redeem 20 PLU", PLURequired: 1000, PercentageReward: 0.06, EligibleSpendingForRewards: 1000, NoOfPerks: 6 },
  { Name: "Legend - Redeem 50 PLU", PLURequired: 1000, PercentageReward: 0.06, EligibleSpendingForRewards: 2000, NoOfPerks: 6 },
  { Name: "Legend - Redeem 200 PLU", PLURequired: 1000, PercentageReward: 0.06, EligibleSpendingForRewards: 5000, NoOfPerks: 6 },
  { Name: "Legend - Redeem 500 PLU", PLURequired: 1000, PercentageReward: 0.06, EligibleSpendingForRewards: 10000, NoOfPerks: 6 },
  
  { Name: "Myth - Redeem 500 PLU", PLURequired: 1500, PercentageReward: 0.07, EligibleSpendingForRewards: 0, NoOfPerks: 7 },
  { Name: "Myth - Redeem 20 PLU", PLURequired: 1500, PercentageReward: 0.07, EligibleSpendingForRewards: 1000, NoOfPerks: 7 },
  { Name: "Myth - Redeem 50 PLU", PLURequired: 1500, PercentageReward: 0.07, EligibleSpendingForRewards: 2000, NoOfPerks: 7 },
  { Name: "Myth - Redeem 200 PLU", PLURequired: 1500, PercentageReward: 0.07, EligibleSpendingForRewards: 5000, NoOfPerks: 7 },
  { Name: "Myth - Redeem 500 PLU", PLURequired: 1500, PercentageReward: 0.07, EligibleSpendingForRewards: 10000, NoOfPerks: 7 },
  
  { Name: "GOAT - Redeem 0 PLU", PLURequired: 2000, PercentageReward: 0.08, EligibleSpendingForRewards: 0, NoOfPerks: 8 },
  { Name: "GOAT - Redeem 20 PLU", PLURequired: 2000, PercentageReward: 0.08, EligibleSpendingForRewards: 1000, NoOfPerks: 8 },
  { Name: "GOAT - Redeem 50 PLU", PLURequired: 2000, PercentageReward: 0.08, EligibleSpendingForRewards: 2000, NoOfPerks: 8 },
  { Name: "GOAT - Redeem 200 PLU", PLURequired: 2000, PercentageReward: 0.08, EligibleSpendingForRewards: 5000, NoOfPerks: 8 },
  { Name: "GOAT - Redeem 500 PLU", PLURequired: 2000, PercentageReward: 0.08, EligibleSpendingForRewards: 10000, NoOfPerks: 8 },
  
  { Name: "Honey Badger - Redeem 0 PLU", PLURequired: 2000, PercentageReward: 0.09, EligibleSpendingForRewards: 0, NoOfPerks: 9 },
  { Name: "Honey Badger - Redeem 20 PLU", PLURequired: 2000, PercentageReward: 0.09, EligibleSpendingForRewards: 1000, NoOfPerks: 9 },
  { Name: "Honey Badger - Redeem 50 PLU", PLURequired: 2000, PercentageReward: 0.09, EligibleSpendingForRewards: 2000, NoOfPerks: 9 },
  { Name: "Honey Badger - Redeem 200 PLU", PLURequired: 2000, PercentageReward: 0.09, EligibleSpendingForRewards: 5000, NoOfPerks: 9 },
  { Name: "Honey Badger - Redeem 500 PLU", PLURequired: 2000, PercentageReward: 0.09, EligibleSpendingForRewards: 10000, NoOfPerks: 9 },
  

  ];
  
  const subscriptionTiers = [
    { Name: 'Starter', MonthlyFee: 6.99, PercentageReward: 0.03, EligibleSpendingForRewards: 250, NoOfPerks: 1, PlutusSwapFee: 0.02 },
    { Name: 'Everyday', MonthlyFee: 14.99, PercentageReward: 0.03, EligibleSpendingForRewards: 500, NoOfPerks: 2, PlutusSwapFee: 0.005 },
    { Name: 'Premium', MonthlyFee: 24.99, PercentageReward: 0.03, EligibleSpendingForRewards: 1000, NoOfPerks: 3, PlutusSwapFee: 0 },
  ];

  const redeemTiers = [
    { RedeemPLU: "Redeem 0 PLU",EligibleSpendingForRewards: 0},
    { RedeemPLU: "Redeem 20 PLU",EligibleSpendingForRewards: 1000},
    { RedeemPLU: "Redeem 50 PLU",EligibleSpendingForRewards: 2000},
    { RedeemPLU: "Redeem 200 PLU",EligibleSpendingForRewards: 5000},
    { RedeemPLU: "Redeem 500 PLU",EligibleSpendingForRewards: 10000},
  ];



  const StackSubTiers = [];
  
  for (const stackingRow of stackingTier) {
    for (const subscriptionRow of subscriptionTiers) {
      const combinedRow = {
        Name: `${stackingRow.Name} - ${subscriptionRow.Name}`, 
        PercentageReward: Math.max(stackingRow.PercentageReward, subscriptionRow.PercentageReward),
        EligibleSpendingForRewards: stackingRow.EligibleSpendingForRewards + subscriptionRow.EligibleSpendingForRewards,
        NoOfPerks: stackingRow.NoOfPerks + subscriptionRow.NoOfPerks,
      };
  
      combinedRow.PLURequired = stackingRow.PLURequired;
      combinedRow.MonthlyFee = subscriptionRow.MonthlyFee;
  
      StackSubTiers.push(combinedRow);
    
  }
  }
  
console.table(StackSubTiers);
  


window.onload = function() {
    document.getElementById("tierRecommendations").style.display = "none";
};


function calculateTiers() {
  const monthlySpending = parseFloat(document.getElementById("monthlySpending").value);
  console.log("calculateTiers function is running.");
  if (isNaN(monthlySpending)) {
      alert("Please enter a valid monthly spending amount.");
      return;
  }

  if (monthlySpending < 0) {
      alert("PLU Police on the way for Negative Spending");
      return;
  }

  StackSubTiers.sort((a, b) => {
      const diffA = Math.abs(monthlySpending - a.EligibleSpendingForRewards);
      const diffB = Math.abs(monthlySpending - b.EligibleSpendingForRewards);
      return diffA - diffB;
  });

  const topTiers = StackSubTiers.slice(0, 4);

  const column1 = document.getElementById("column1");
  const column2 = document.getElementById("column2");
  const column3 = document.getElementById("column3");
  const column4 = document.getElementById("column4");

  column1.innerHTML = "";
  column2.innerHTML = "";
  column3.innerHTML = "";
  column4.innerHTML = "";

  topTiers.forEach((tier, index) => {
      const column = [column1, column2, column3, column4][index];
      const tierInfo = document.createElement("div");
      tierInfo.classList.add("tier-info");

      const perkRewards = tier.NoOfPerks * 10;

      let spendRewards;
      if (monthlySpending > tier.EligibleSpendingForRewards) {
          spendRewards = tier.EligibleSpendingForRewards * (tier.PercentageReward); // Adjusted to percentage
      } else {
          spendRewards = monthlySpending * (tier.PercentageReward ); // Adjusted to percentage
      }

      grossRewards = spendRewards + perkRewards;
      netRewards = grossRewards - tier.MonthlyFee;

      tierInfo.innerHTML = `
          <h2>${tier.Name}</h2>
          <p>PLU Required: ${tier.PLURequired}</p>
          <p>No of Perks: ${tier.NoOfPerks}</p>
          <p>Percentage Reward: ${Math.floor(tier.PercentageReward * 100)}%</p>
          <p>Eligible Spending for Rewards: £/€${tier.EligibleSpendingForRewards}</p>
          <p>Monthly Fee: £/€${tier.MonthlyFee}</p>
          <h3>Rewards Earned</h3>
          <p>Perk Rewards: £/€${perkRewards}</p>
          <p>Spend Rewards: £/€${spendRewards}</p>
          <p>Gross Rewards: £/€${grossRewards}</p>
          <br><br>
          <h3>Net Rewards: £/€${Math.floor(netRewards)}</h3>
          <h3>Net Rewards (Yearly): £/€${Math.floor(netRewards) * 12}</h3>
      `;

      column.appendChild(tierInfo);
  });

  document.getElementById("tierRecommendations").style.display = "block";
}




// PLU Daily Price
const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=pluton&vs_currencies=EUR%2CGBP%2CUSD";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const { eur, gbp, usd } = data.pluton;

    const pluxfiat = {
      eur,
      gbp,
      usd,
    };

    // Update USD price
    const usdPriceElement = document.querySelector("#usd-price");
    usdPriceElement.textContent = `$${usd}`;

    // Update GBP price
    const gbpPriceElement = document.querySelector("#gbp-price");
    gbpPriceElement.textContent = `£${gbp}`;

    // Update EUR price
    const eurPriceElement = document.querySelector("#eur-price");
    eurPriceElement.textContent = `€${eur}`;

  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });



//Toggle
function displayStackingTier() {
    const stackingTierContainer = document.getElementById('stackingTierContainer');
    const data = stackingTier.map(item => {
      return `
        <div class="column-info">
          <h2>${item.Name}</h2>
          <p>PLU Required: ${item.PLURequired}</p>
          <p>Percentage Reward: ${Math.floor(item.PercentageReward * 100)}%</p>
          <p>Eligible Spending for Rewards: £/€${item.EligibleSpendingForRewards}</p>
          <p>No of Perks: ${item.NoOfPerks}</p>
        </div>
      `;
    });
    stackingTierContainer.innerHTML = data.join('');
  }
  
  function displaySubscriptionTier() {
    const subscriptionTierContainer = document.getElementById('subscriptionTierContainer');
    const data = subscriptionTiers.map(item => {
      return `
        <div class="column-info">
          <h2>${item.Name}</h2>
          <p>Monthly Fee: £/€${item.MonthlyFee}</p>
          <p>Percentage Reward: ${item.PercentageReward * 100}%</p>
          <p>Eligible Spending for Rewards: £/€${item.EligibleSpendingForRewards}</p>
          <p>No of Perks: ${item.NoOfPerks}</p>
          <p>Plutus Swap Fee: ${item.PlutusSwapFee * 100}%</p>
        </div>
      `;
    });
    subscriptionTierContainer.innerHTML = data.join('');
  }
  
  function displayStackSubTiers() {
    const stackSubTierContainer = document.getElementById('stackSubTierContainer');
    const data = StackSubTiers.map(item => {
      return `
        <div class="column-info">
          <h2>${item.Name}</h2>
          <p>PLU Required: ${item.PLURequired}</p>
          <p>Monthly Fee: £/€${item.MonthlyFee}</p>
          <p>Percentage Reward: ${Math.floor(item.PercentageReward * 100)}%</p>
          <p>Eligible Spending for Rewards: £/€${item.EligibleSpendingForRewards}</p>
          <p>No of Perks: ${item.NoOfPerks}</p>
          <p>Gross Perks Rewards: £/€${item.NoOfPerks*10}</p>
          <p>Gross Rewards: £/€${(item.EligibleSpendingForRewards*item.PercentageReward)+(item.NoOfPerks*10)}</p>
          <p>Net Rewards (After Sub): £/€${(item.EligibleSpendingForRewards*item.PercentageReward)+(item.NoOfPerks*10)-(item.MonthlyFee)}</p>
          <br>
          <h3>Yearly Net Rewards (After Sub): £/€${Math.floor(((item.EligibleSpendingForRewards*item.PercentageReward)+(item.NoOfPerks*10)-(item.MonthlyFee))*12)}</h3>
        </div>
      `;
    });
    stackSubTierContainer.innerHTML = data.join('');
  }
  

  function toggleData(containerId) {
    const containers = document.querySelectorAll('#stackingTierContainer, #subscriptionTierContainer, #stackSubTierContainer');
  
    containers.forEach(container => {
      if (container.id === containerId) {

        container.style.display = 'block';
      } else {
        container.style.display = 'none';
      }
    });
  
    if (containerId === 'stackingTierContainer') {
      displayStackingTier();
    } else if (containerId === 'subscriptionTierContainer') {
      displaySubscriptionTier();
    } else if (containerId === 'stackSubTierContainer') {
      displayStackSubTiers();
    }
  }

