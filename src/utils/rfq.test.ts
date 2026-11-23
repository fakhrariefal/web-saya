import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppRfqUrl,
  formatRfqReferenceId,
  isValidBusinessContact,
  validateRfqInput,
} from './rfq';

test('isValidBusinessContact accepts valid emails and Indonesian phone numbers', () => {
  assert.equal(isValidBusinessContact('budi.santoso@industri.co.id'), true);
  assert.equal(isValidBusinessContact('+62 857-0637-5004'), true);
  assert.equal(isValidBusinessContact('081234567890'), true);
  assert.equal(isValidBusinessContact('12345'), false);
  assert.equal(isValidBusinessContact('budi@'), false);
  assert.equal(isValidBusinessContact(''), false);
});

test('validateRfqInput catches missing or invalid fields without fallback bypass', () => {
  const invalid = validateRfqInput({
    picAndCompany: 'Ab',
    contact: 'invalid-contact',
    serviceType: 'General Supplier / Procurement',
    summary: 'Need',
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.picAndCompany);
  assert.ok(invalid.errors.contact);
  assert.ok(invalid.errors.summary);

  const valid = validateRfqInput({
    picAndCompany: 'Rina Kusuma — PT Nusantara Logistik',
    contact: 'rina@nusantaralogistik.co.id',
    serviceType: 'Both (Procurement + ERP)',
    summary: 'Procurement of 40 operational laptops and warehouse inventory ERP integration.',
  });

  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});

test('buildWhatsAppRfqUrl encodes official number and structured RFQ payload', () => {
  const url = buildWhatsAppRfqUrl({
    picAndCompany: 'Andi Wijaya — PT Baja Mandiri',
    contact: '081299887766',
    serviceType: 'ERP System Implementation',
    summary: 'Migration from manual stock spreadsheets to ERP across 3 warehouse branches.',
  });

  assert.ok(url.startsWith('https://wa.me/6285706375004?text='));
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.match(decoded, /Andi Wijaya — PT Baja Mandiri/);
  assert.match(decoded, /ERP System Implementation/);
  assert.match(decoded, /Migration from manual stock spreadsheets/);
});

test('formatRfqReferenceId formats deterministic DQH reference string', () => {
  const ref = formatRfqReferenceId(new Date(2026, 8, 25, 14, 30));
  assert.equal(ref, 'DQH-RFQ-20260925-1430');
});
