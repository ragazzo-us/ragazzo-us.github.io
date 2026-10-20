// Estudo (backtest com a cotacao real da OANDA, jul/2025 -> set/2026, 15 divulgacoes), conta de 10.000 USD,
// risco de 0,5% por operacao (o do EA). Horas de Chicago. Resultado liquido (spread descontado).
// Tirado de backtest_files/validar.py: validar.monetizar(t, 0.005), composto.
const ESTUDO = {"inicial": 10000, "risco_pct": 0.5, "noticias": 15, "dd_patrimonio": 0.23, "ops": [
  {"ent": "2025-08-12 00:55", "sai": "2025-08-12 01:00", "lado": "compra", "usd": 49.82, "saldo": 10049.82},
  {"ent": "2025-11-11 00:05", "sai": "2025-11-11 00:30", "lado": "compra", "usd": 44.74, "saldo": 10094.56},
  {"ent": "2026-04-21 00:11", "sai": "2026-04-21 01:00", "lado": "compra", "usd": 33.11, "saldo": 10127.66},
  {"ent": "2026-05-19 00:33", "sai": "2026-05-19 00:53", "lado": "compra", "usd": 49.45, "saldo": 10177.12},
  {"ent": "2026-08-17 23:43", "sai": "2026-08-18 01:03", "lado": "venda", "usd": 40.48, "saldo": 10217.60}
]};
