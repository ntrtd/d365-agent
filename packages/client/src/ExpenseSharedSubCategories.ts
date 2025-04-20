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
import type { ExpenseSharedSubCategoriesApi } from './ExpenseSharedSubCategoriesApi';
import { NoYes } from './NoYes';
import { SharedCategories, SharedCategoriesType } from './SharedCategories';
import {
  ExpenseSubCategories,
  ExpenseSubCategoriesType
} from './ExpenseSubCategories';

/**
 * This class represents the entity "ExpenseSharedSubCategories" of service "d365_metadata".
 */
export class ExpenseSharedSubCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpenseSharedSubCategoriesType<T>
{
  /**
   * Technical entity name for ExpenseSharedSubCategories.
   */
  static override _entityName = 'ExpenseSharedSubCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseSharedSubCategories entity.
   */
  static _keys = ['Name', 'SharedCategoryId'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Shared Category Id.
   */
  declare sharedCategoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Type.
   */
  declare chargeType: DeserializedType<T, 'Edm.Int32'>;
  /**
   * System Created.
   * @nullable
   */
  declare systemCreated?: NoYes | null;
  /**
   * Exclude From Recovery.
   * @nullable
   */
  declare excludeFromRecovery?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link SharedCategories} entity.
   */
  declare belongsTo?: SharedCategories<T> | null;
  /**
   * One-to-many navigation property to the {@link ExpenseSubCategories} entity.
   */
  declare expenseSubCategory: ExpenseSubCategories<T>[];

  constructor(_entityApi: ExpenseSharedSubCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseSharedSubCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  sharedCategoryId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  chargeType: DeserializedType<T, 'Edm.Int32'>;
  systemCreated?: NoYes | null;
  excludeFromRecovery?: NoYes | null;
  belongsTo?: SharedCategoriesType<T> | null;
  expenseSubCategory: ExpenseSubCategoriesType<T>[];
}
