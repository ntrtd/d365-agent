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
import type { IncomeExpenseAccountsApi } from './IncomeExpenseAccountsApi';
import { RetailIncomeExpense } from './RetailIncomeExpense';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "IncomeExpenseAccounts" of service "d365_metadata".
 */
export class IncomeExpenseAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IncomeExpenseAccountsType<T>
{
  /**
   * Technical entity name for IncomeExpenseAccounts.
   */
  static override _entityName = 'IncomeExpenseAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IncomeExpenseAccounts entity.
   */
  static _keys = ['dataAreaId', 'StoreNumber', 'AccountNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Number.
   */
  declare accountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Slip Text 2.
   * @nullable
   */
  declare slipText2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Slip Text 1.
   * @nullable
   */
  declare slipText1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Line 2.
   * @nullable
   */
  declare messageLine2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Line 1.
   * @nullable
   */
  declare messageLine1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Account Display Value.
   * @nullable
   */
  declare ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: RetailIncomeExpense | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: IncomeExpenseAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface IncomeExpenseAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  accountNumber: DeserializedType<T, 'Edm.String'>;
  slipText2?: DeserializedType<T, 'Edm.String'> | null;
  slipText1?: DeserializedType<T, 'Edm.String'> | null;
  messageLine2?: DeserializedType<T, 'Edm.String'> | null;
  messageLine1?: DeserializedType<T, 'Edm.String'> | null;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: RetailIncomeExpense | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
