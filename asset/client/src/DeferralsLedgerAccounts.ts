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
import type { DeferralsLedgerAccountsApi } from './DeferralsLedgerAccountsApi';
import { RDeferralsTransType } from './RDeferralsTransType';
import { RDeferralsTableGroupAllBook } from './RDeferralsTableGroupAllBook';
import { RDeferralsPostValue } from './RDeferralsPostValue';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "DeferralsLedgerAccounts" of service "d365_metadata".
 */
export class DeferralsLedgerAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DeferralsLedgerAccountsType<T>
{
  /**
   * Technical entity name for DeferralsLedgerAccounts.
   */
  static override _entityName = 'DeferralsLedgerAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DeferralsLedgerAccounts entity.
   */
  static _keys = [
    'dataAreaId',
    'Num',
    'TransactionType',
    'Groupings',
    'PostingProfile',
    'PostValue'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Num.
   */
  declare num: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: RDeferralsTransType | null;
  /**
   * Groupings.
   * @nullable
   */
  declare groupings?: RDeferralsTableGroupAllBook | null;
  /**
   * Posting Profile.
   */
  declare postingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Post Value.
   * @nullable
   */
  declare postValue?: RDeferralsPostValue | null;
  /**
   * Main Account Display Value.
   * @nullable
   */
  declare mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: DeferralsLedgerAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface DeferralsLedgerAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  num: DeserializedType<T, 'Edm.String'>;
  transactionType?: RDeferralsTransType | null;
  groupings?: RDeferralsTableGroupAllBook | null;
  postingProfile: DeserializedType<T, 'Edm.String'>;
  postValue?: RDeferralsPostValue | null;
  mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
