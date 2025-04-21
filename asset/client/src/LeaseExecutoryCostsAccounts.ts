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
import type { LeaseExecutoryCostsAccountsApi } from './LeaseExecutoryCostsAccountsApi';
import { AssetLeasePostingAccountCode } from './AssetLeasePostingAccountCode';

/**
 * This class represents the entity "LeaseExecutoryCostsAccountsCollection" of service "d365_metadata".
 */
export class LeaseExecutoryCostsAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseExecutoryCostsAccountsType<T>
{
  /**
   * Technical entity name for LeaseExecutoryCostsAccounts.
   */
  static override _entityName = 'LeaseExecutoryCostsAccountsCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseExecutoryCostsAccounts entity.
   */
  static _keys = ['dataAreaId', 'RecordCounter'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Counter.
   */
  declare recordCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: AssetLeasePostingAccountCode | null;
  /**
   * Expense Type.
   * @nullable
   */
  declare expenseType?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: LeaseExecutoryCostsAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseExecutoryCostsAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recordCounter: DeserializedType<T, 'Edm.Int32'>;
  accountCode?: AssetLeasePostingAccountCode | null;
  expenseType?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  bookTableBookType?: DeserializedType<T, 'Edm.String'> | null;
  relation?: DeserializedType<T, 'Edm.String'> | null;
  financeLeaseMainAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  operatingLeaseMainAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}
