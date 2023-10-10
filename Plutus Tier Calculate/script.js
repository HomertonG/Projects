const stackingTier = [
    { Name: 'No Stack', PLURequired: 0, PercentageReward: 0.03, EligibleSpendingForRewards: 0, NoOfPerks: 0 },
    { Name: 'Researcher', PLURequired: 25, PercentageReward: 0.03, EligibleSpendingForRewards: 250, NoOfPerks: 0 },
    { Name: 'Explorer', PLURequired: 50, PercentageReward: 0.03, EligibleSpendingForRewards: 500, NoOfPerks: 0 },
    { Name: 'Adventurer', PLURequired: 100, PercentageReward: 0.03, EligibleSpendingForRewards: 1000, NoOfPerks: 1 },
    { Name: 'Hero', PLURequired: 400, PercentageReward: 0.04, EligibleSpendingForRewards: 2000, NoOfPerks: 4 },
    { Name: 'Veteran', PLURequired: 800, PercentageReward: 0.05, EligibleSpendingForRewards: 4000, NoOfPerks: 5 },
    { Name: 'Legend', PLURequired: 1600, PercentageReward: 0.06, EligibleSpendingForRewards: 6000, NoOfPerks: 6 },
    { Name: 'GOAT', PLURequired: 3200, PercentageReward: 0.08, EligibleSpendingForRewards: 8000, NoOfPerks: 8 },
  ];
  
  const subscriptionTiers = [
    { Name: 'Starter', MonthlyFee: 0, PercentageReward: 0.03, EligibleSpendingForRewards: 100, NoOfPerks: 0, PlutusSwapFee: 0.02 },
    { Name: 'Everyday', MonthlyFee: 14.99, PercentageReward: 0.03, EligibleSpendingForRewards: 500, NoOfPerks: 2, PlutusSwapFee: 0.005 },
    { Name: 'Premium', MonthlyFee: 24.99, PercentageReward: 0.03, EligibleSpendingForRewards: 1000, NoOfPerks: 3, PlutusSwapFee: 0 },
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

function recommendTiers() {
    const monthlySpending = parseFloat(document.getElementById("monthlySpending").value);
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
               spendRewards = tier.EligibleSpendingForRewards * tier.PercentageReward;
           } else {
               spendRewards = monthlySpending * tier.PercentageReward;
           }

           grossRewards = spendRewards + perkRewards;

           netRewards = grossRewards - tier.MonthlyFee;


           
           


        tierInfo.innerHTML = `
            <h2>${tier.Name}</h2>
            <p>PLU Required: ${tier.PLURequired}</p>
            <p>No of Perks: ${tier.NoOfPerks}</p>
            <p>Percentage Reward: ${tier.PercentageReward * 100}%</p>
            <p>Eligible Spending for Rewards: £/€${tier.EligibleSpendingForRewards}</p>
            <p>Monthly Fee: £/€${tier.MonthlyFee}</p>
            <h3>Rewards Earned</h3>
            <p>Perk Rewards: £/€${perkRewards}</p>
            <p>Spend Rewards: £/€${spendRewards}</p>
            <p>Gross Rewards: £/€${grossRewards}</p>
            <br><br>
            <h3>Net Rewards: £/€${Math.floor(netRewards)}</h3>
        `;


        column.appendChild(tierInfo);
    });

    document.getElementById("tierRecommendations").style.display = "block";

}
