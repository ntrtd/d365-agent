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
import type { ExpenseCategoriesApi } from './ExpenseCategoriesApi';
import { NoYes } from './NoYes';
import { TrvExpType } from './TrvExpType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "ExpenseCategories" of service "d365_metadata".
 */
export class ExpenseCategories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpenseCategoriesType<T>
{
  /**
   * Technical entity name for ExpenseCategories.
   */
  static override _entityName = 'ExpenseCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseCategories entity.
   */
  static _keys = ['dataAreaId', 'ExpenseCategory'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense Category.
   */
  declare expenseCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Payment Method.
   * @nullable
   */
  declare defaultPaymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statistics Group.
   * @nullable
   */
  declare statisticsGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Common.
   * @nullable
   */
  declare isCommon?: NoYes | null;
  /**
   * Is Itemization Mandatory.
   * @nullable
   */
  declare isItemizationMandatory?: NoYes | null;
  /**
   * Expense Type.
   * @nullable
   */
  declare expenseType?: TrvExpType | null;
  /**
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Item Group If Billed To Employee.
   * @nullable
   */
  declare taxItemGroupIfBilledToEmployee?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Is Import Only.
   * @nullable
   */
  declare isImportOnly?: NoYes | null;
  /**
   * Is Inactive.
   * @nullable
   */
  declare isInactive?: NoYes | null;
  /**
   * Use In Project.
   * @nullable
   */
  declare useInProject?: NoYes | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: ExpenseCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  expenseCategory: DeserializedType<T, 'Edm.String'>;
  defaultPaymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  statisticsGroup?: DeserializedType<T, 'Edm.String'> | null;
  isCommon?: NoYes | null;
  isItemizationMandatory?: NoYes | null;
  expenseType?: TrvExpType | null;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroupIfBilledToEmployee?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: LedgerJournalAcType | null;
  isImportOnly?: NoYes | null;
  isInactive?: NoYes | null;
  useInProject?: NoYes | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
