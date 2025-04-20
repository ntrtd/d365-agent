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
import type { VendorPaymentFeesApi } from './VendorPaymentFeesApi';
import { PaymFeePostingVend } from './PaymFeePostingVend';
import { LedgerJournalType } from './LedgerJournalType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  VendorPaymentJournalFees,
  VendorPaymentJournalFeesType
} from './VendorPaymentJournalFees';

/**
 * This class represents the entity "VendorPaymentFees" of service "d365_metadata".
 */
export class VendorPaymentFees<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendorPaymentFeesType<T>
{
  /**
   * Technical entity name for VendorPaymentFees.
   */
  static override _entityName = 'VendorPaymentFees';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorPaymentFees entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Text.
   * @nullable
   */
  declare transactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fee Ledger Account Display Value.
   * @nullable
   */
  declare feeLedgerAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Charge Type.
   * @nullable
   */
  declare chargeType?: PaymFeePostingVend | null;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: LedgerJournalType | null;
  /**
   * Vendor Covered Fee Ledger Account Display Value.
   * @nullable
   */
  declare vendorCoveredFeeLedgerAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Main Account Id For Ledger Fee Types Display Value.
   * @nullable
   */
  declare mainAccountIdForLedgerFeeTypesDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalFees} entity.
   */
  declare vendorPaymentJournalFee: VendorPaymentJournalFees<T>[];

  constructor(_entityApi: VendorPaymentFeesApi<T>) {
    super(_entityApi);
  }
}

export interface VendorPaymentFeesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  transactionText?: DeserializedType<T, 'Edm.String'> | null;
  feeLedgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  chargeType?: PaymFeePostingVend | null;
  journalType?: LedgerJournalType | null;
  vendorCoveredFeeLedgerAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  mainAccountIdForLedgerFeeTypesDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  vendorPaymentJournalFee: VendorPaymentJournalFeesType<T>[];
}
