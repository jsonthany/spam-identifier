export const suspiciousKeywords = [
    'cash',
    'free',
    'money',
    'dollar',
    'prize',
    'lottery',
    'click',
    'enlargement',
    'congratulations',
    'fees',
    'hidden',
    'diet',
    'weight',
    'reward',
    'rewards',
    'bonus',
    'bonuses',
    'win',
    'sexy',
    'claim',
    'lucky',
    'selected',
    'offer',
    'survey',
    'chosen',
    'casino',
    'trial',
    'promo',
    'promotion',
    'shop',
    'shopping'
] as const;

export type SuspiciousKeywords = typeof suspiciousKeywords[number];