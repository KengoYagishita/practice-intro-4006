'use strict';
import dc from 'damage-calc';
const root = document.getElementById('root');

// cryptoモジュールの動作確認
import crypto from 'crypto';
root.innerHTML = '<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、'
  + dc.effectiveDamage(100, 50, 30) + '</p><p>' 
  + crypto.randomBytes(8).toString('hex') + '</p>';