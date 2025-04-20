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
import type { SharedCategoriesApi } from './SharedCategoriesApi';
import { NoYes } from './NoYes';
import { TrvExpType } from './TrvExpType';
import {
  ExpenseSharedSubCategories,
  ExpenseSharedSubCategoriesType
} from './ExpenseSharedSubCategories';
import { Categories, CategoriesType } from './Categories';

/**
 * This class represents the entity "SharedCategories" of service "d365_metadata".
 */
export class SharedCategories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SharedCategoriesType<T>
{
  /**
   * Technical entity name for SharedCategories.
   */
  static override _entityName = 'SharedCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SharedCategories entity.
   */
  static _keys = ['CategoryId'];
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Name.
   * @nullable
   */
  declare categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use In Expense.
   * @nullable
   */
  declare useInExpense?: NoYes | null;
  /**
   * Use In Project.
   * @nullable
   */
  declare useInProject?: NoYes | null;
  /**
   * Expense Type.
   * @nullable
   */
  declare expenseType?: TrvExpType | null;
  /**
   * Use In Production.
   * @nullable
   */
  declare useInProduction?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link ExpenseSharedSubCategories} entity.
   */
  declare contains: ExpenseSharedSubCategories<T>[];
  /**
   * One-to-many navigation property to the {@link Categories} entity.
   */
  declare category: Categories<T>[];

  constructor(_entityApi: SharedCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface SharedCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryId: DeserializedType<T, 'Edm.String'>;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  useInExpense?: NoYes | null;
  useInProject?: NoYes | null;
  expenseType?: TrvExpType | null;
  useInProduction?: NoYes | null;
  contains: ExpenseSharedSubCategoriesType<T>[];
  category: CategoriesType<T>[];
}
