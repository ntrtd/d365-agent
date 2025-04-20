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
import type { BankTransactionTypes_1Api } from './BankTransactionTypes_1Api';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  BankTransactionGroups,
  BankTransactionGroupsType
} from './BankTransactionGroups';

/**
 * This class represents the entity "BankTransactionTypes" of service "d365_metadata".
 */
export class BankTransactionTypes_1<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankTransactionTypes_1Type<T>
{
  /**
   * Technical entity name for BankTransactionTypes_1.
   */
  static override _entityName = 'BankTransactionTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankTransactionTypes_1 entity.
   */
  static _keys = ['dataAreaId', 'TransactionTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type Id.
   */
  declare transactionTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Id Display Value.
   * @nullable
   */
  declare mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-many navigation property to the {@link BankTransactionGroups} entity.
   */
  declare bankTransactionGroup: BankTransactionGroups<T>[];

  constructor(_entityApi: BankTransactionTypes_1Api<T>) {
    super(_entityApi);
  }
}

export interface BankTransactionTypes_1Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionTypeId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  bankTransactionGroup: BankTransactionGroupsType<T>[];
}
