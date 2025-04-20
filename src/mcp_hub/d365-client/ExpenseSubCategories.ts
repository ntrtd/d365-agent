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
import type { ExpenseSubCategoriesApi } from './ExpenseSubCategoriesApi';
import { NoYes } from './NoYes';
import {
  ExpenseSharedSubCategories,
  ExpenseSharedSubCategoriesType
} from './ExpenseSharedSubCategories';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "ExpenseSubCategories" of service "d365_metadata".
 */
export class ExpenseSubCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpenseSubCategoriesType<T>
{
  /**
   * Technical entity name for ExpenseSubCategories.
   */
  static override _entityName = 'ExpenseSubCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseSubCategories entity.
   */
  static _keys = ['dataAreaId', 'ExpenseCategory', 'SharedSubCategoryName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense Category.
   */
  declare expenseCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Shared Sub Category Name.
   */
  declare sharedSubCategoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Item Group If Billed To Employee.
   * @nullable
   */
  declare taxItemGroupIfBilledToEmployee?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Inactive.
   * @nullable
   */
  declare isInactive?: NoYes | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Category Rec Id.
   */
  declare subCategoryRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One-to-one navigation property to the {@link ExpenseSharedSubCategories} entity.
   */
  declare expenseSharedSubCategory?: ExpenseSharedSubCategories<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: ExpenseSubCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseSubCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  expenseCategory: DeserializedType<T, 'Edm.String'>;
  sharedSubCategoryName: DeserializedType<T, 'Edm.String'>;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  displayOrder: DeserializedType<T, 'Edm.Int32'>;
  taxItemGroupIfBilledToEmployee?: DeserializedType<T, 'Edm.String'> | null;
  isInactive?: NoYes | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  subCategoryRecId: DeserializedType<T, 'Edm.Int64'>;
  expenseSharedSubCategory?: ExpenseSharedSubCategoriesType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
