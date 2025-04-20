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
import type { LeasePostingAccountsApi } from './LeasePostingAccountsApi';
import { AssetLeasePostingAccountCode } from './AssetLeasePostingAccountCode';
import { AssetLeasePostingTypes } from './AssetLeasePostingTypes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "LeasePostingAccountsCollection" of service "d365_metadata".
 */
export class LeasePostingAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeasePostingAccountsType<T>
{
  /**
   * Technical entity name for LeasePostingAccounts.
   */
  static override _entityName = 'LeasePostingAccountsCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeasePostingAccounts entity.
   */
  static _keys = ['dataAreaId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: AssetLeasePostingAccountCode | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Book Table Book Type.
   * @nullable
   */
  declare bookTableBookType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Types For The Lease.
   * @nullable
   */
  declare postingTypesForTheLease?: AssetLeasePostingTypes | null;
  /**
   * Relation.
   * @nullable
   */
  declare relation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Finance Lease Main Account Display Value.
   * @nullable
   */
  declare financeLeaseMainAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Operating Lease Main Account Display Value.
   * @nullable
   */
  declare operatingLeaseMainAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare operatingDimensionCombinationEntity?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare financeDimensionCombinationEntity?: DimensionCombinations<T> | null;

  constructor(_entityApi: LeasePostingAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface LeasePostingAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Int32'>;
  accountCode?: AssetLeasePostingAccountCode | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  bookTableBookType?: DeserializedType<T, 'Edm.String'> | null;
  postingTypesForTheLease?: AssetLeasePostingTypes | null;
  relation?: DeserializedType<T, 'Edm.String'> | null;
  financeLeaseMainAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  operatingLeaseMainAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  operatingDimensionCombinationEntity?: DimensionCombinationsType<T> | null;
  financeDimensionCombinationEntity?: DimensionCombinationsType<T> | null;
}
