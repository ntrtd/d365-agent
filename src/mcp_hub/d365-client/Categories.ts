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
import type { CategoriesApi } from './CategoriesApi';
import { NoYes } from './NoYes';
import {
  EngineeringProductCategoryDetails,
  EngineeringProductCategoryDetailsType
} from './EngineeringProductCategoryDetails';
import { SharedCategories, SharedCategoriesType } from './SharedCategories';

/**
 * This class represents the entity "Categories" of service "d365_metadata".
 */
export class Categories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CategoriesType<T>
{
  /**
   * Technical entity name for Categories.
   */
  static override _entityName = 'Categories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Categories entity.
   */
  static _keys = ['dataAreaId', 'CategoryId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shared Category Id.
   * @nullable
   */
  declare sharedCategoryId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Category Name.
   * @nullable
   */
  declare categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use In Production.
   * @nullable
   */
  declare useInProduction?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link EngineeringProductCategoryDetails} entity.
   */
  declare engineeringProductCategoryDetails?: EngineeringProductCategoryDetails<T> | null;
  /**
   * One-to-one navigation property to the {@link SharedCategories} entity.
   */
  declare sharedCategory?: SharedCategories<T> | null;

  constructor(_entityApi: CategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface CategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  categoryId: DeserializedType<T, 'Edm.String'>;
  sharedCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  useInExpense?: NoYes | null;
  useInProject?: NoYes | null;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  useInProduction?: NoYes | null;
  engineeringProductCategoryDetails?: EngineeringProductCategoryDetailsType<T> | null;
  sharedCategory?: SharedCategoriesType<T> | null;
}
