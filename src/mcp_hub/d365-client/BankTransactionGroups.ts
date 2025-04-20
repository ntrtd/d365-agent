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
import type { BankTransactionGroupsApi } from './BankTransactionGroupsApi';
import {
  BankTransactionTypes_1,
  BankTransactionTypes_1Type
} from './BankTransactionTypes_1';

/**
 * This class represents the entity "BankTransactionGroups" of service "d365_metadata".
 */
export class BankTransactionGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankTransactionGroupsType<T>
{
  /**
   * Technical entity name for BankTransactionGroups.
   */
  static override _entityName = 'BankTransactionGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankTransactionGroups entity.
   */
  static _keys = ['dataAreaId', 'TransactionGroupId', 'TransactionTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Group Id.
   */
  declare transactionGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type Id.
   */
  declare transactionTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BankTransactionTypes_1} entity.
   */
  declare bankTransactionType?: BankTransactionTypes_1<T> | null;

  constructor(_entityApi: BankTransactionGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface BankTransactionGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionGroupId: DeserializedType<T, 'Edm.String'>;
  transactionTypeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  bankTransactionType?: BankTransactionTypes_1Type<T> | null;
}
