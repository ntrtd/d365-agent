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
import type { CustomerPaymentFeesApi } from './CustomerPaymentFeesApi';
import { LedgerJournalType } from './LedgerJournalType';
import { PaymFeePostingCust } from './PaymFeePostingCust';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  CustomerPaymentJournalFees,
  CustomerPaymentJournalFeesType
} from './CustomerPaymentJournalFees';

/**
 * This class represents the entity "CustomerPaymentFees" of service "d365_metadata".
 */
export class CustomerPaymentFees<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomerPaymentFeesType<T>
{
  /**
   * Technical entity name for CustomerPaymentFees.
   */
  static override _entityName = 'CustomerPaymentFees';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerPaymentFees entity.
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
   * Journal Type.
   * @nullable
   */
  declare journalType?: LedgerJournalType | null;
  /**
   * Transaction Text.
   * @nullable
   */
  declare transactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Type.
   * @nullable
   */
  declare chargeType?: PaymFeePostingCust | null;
  /**
   * Main Account Id Display Value.
   * @nullable
   */
  declare mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalFees} entity.
   */
  declare customerPaymentJournalFee: CustomerPaymentJournalFees<T>[];

  constructor(_entityApi: CustomerPaymentFeesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerPaymentFeesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  journalType?: LedgerJournalType | null;
  transactionText?: DeserializedType<T, 'Edm.String'> | null;
  chargeType?: PaymFeePostingCust | null;
  mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  customerPaymentJournalFee: CustomerPaymentJournalFeesType<T>[];
}
