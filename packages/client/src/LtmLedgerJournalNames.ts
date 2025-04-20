/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { LtmLedgerJournalNamesApi } from './LtmLedgerJournalNamesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LTMLedgerJournalNames" of service "d365_metadata".
 */
export class LtmLedgerJournalNames<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmLedgerJournalNamesType<T>
{
  /**
   * Technical entity name for LtmLedgerJournalNames.
   */
  static override _entityName = 'LTMLedgerJournalNames';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmLedgerJournalNames entity.
   */
  static _keys = ['dataAreaId', 'JournalNameId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Name Id.
   */
  declare journalNameId: DeserializedType<T, 'Edm.String'>;
  /**
   * Disable Settlement X Rate Edit.
   * @nullable
   */
  declare disableSettlementXRateEdit?: NoYes | null;
  /**
   * Default Gl Voucher Class Id.
   * @nullable
   */
  declare defaultGlVoucherClassId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dafault Vend Voucher Class Id.
   * @nullable
   */
  declare dafaultVendVoucherClassId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Cust Voucher Class Id.
   * @nullable
   */
  declare defaultCustVoucherClassId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Bank Voucher Class Id.
   * @nullable
   */
  declare defaultBankVoucherClassId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmLedgerJournalNamesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmLedgerJournalNamesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNameId: DeserializedType<T, 'Edm.String'>;
  disableSettlementXRateEdit?: NoYes | null;
  defaultGlVoucherClassId?: DeserializedType<T, 'Edm.String'> | null;
  dafaultVendVoucherClassId?: DeserializedType<T, 'Edm.String'> | null;
  defaultCustVoucherClassId?: DeserializedType<T, 'Edm.String'> | null;
  defaultBankVoucherClassId?: DeserializedType<T, 'Edm.String'> | null;
}
