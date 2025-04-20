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
import type { RAssetLedgerAccountsApi } from './RAssetLedgerAccountsApi';
import { RAssetTransType } from './RAssetTransType';
import { RAssetTableGroupAllStandard } from './RAssetTableGroupAllStandard';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "RAssetLedgerAccounts" of service "d365_metadata".
 */
export class RAssetLedgerAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RAssetLedgerAccountsType<T>
{
  /**
   * Technical entity name for RAssetLedgerAccounts.
   */
  static override _entityName = 'RAssetLedgerAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetLedgerAccounts entity.
   */
  static _keys = [
    'dataAreaId',
    'AccountGroupNumber',
    'TransactionType',
    'Groupings',
    'PostingProfile'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Group Number.
   */
  declare accountGroupNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: RAssetTransType | null;
  /**
   * Groupings.
   * @nullable
   */
  declare groupings?: RAssetTableGroupAllStandard | null;
  /**
   * Posting Profile.
   */
  declare postingProfile: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: RAssetLedgerAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetLedgerAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountGroupNumber: DeserializedType<T, 'Edm.String'>;
  transactionType?: RAssetTransType | null;
  groupings?: RAssetTableGroupAllStandard | null;
  postingProfile: DeserializedType<T, 'Edm.String'>;
  mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
