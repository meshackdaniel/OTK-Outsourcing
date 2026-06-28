import re

with open('app/talent/wallet/page.tsx', 'r', encoding='utf-8') as f:
    talent_code = f.read()

affiliate_code = talent_code.replace('TalentWallet', 'AffiliateWallet')
affiliate_code = affiliate_code.replace('type="talent"', 'type="affiliate"')
affiliate_code = affiliate_code.replace('Withdrawable Balance', 'Withdrawable Commission')
affiliate_code = affiliate_code.replace('?320,000', '?45,000')
affiliate_code = affiliate_code.replace('Tax Certificate', 'Statement')

affiliate_transactions = '''const initialTransactions: Transaction[] = [
  { id: "tx_1", date: "Oct 24, 2026", desc: "Commission: Acme Corp (Client)", amount: "+ ? 25,000", status: "Completed", type: "credit" },
  { id: "tx_2", date: "Oct 22, 2026", desc: "Commission: Sarah Jenkins (Talent)", amount: "+ ? 20,000", status: "Completed", type: "credit" },
  { id: "tx_3", date: "Sep 28, 2026", desc: "Withdrawal to GTBank", amount: "- ? 45,000", status: "Completed", type: "debit" },
];'''

affiliate_code = re.sub(r'const initialTransactions.*?\];', affiliate_transactions, affiliate_code, flags=re.DOTALL)

with open('app/affiliate/wallet/page.tsx', 'w', encoding='utf-8') as f:
    f.write(affiliate_code)
