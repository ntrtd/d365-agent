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
import type { MainAccountCategoriesApi } from './MainAccountCategoriesApi';
import { DimensionLedgerAccCategoryAccountType } from './DimensionLedgerAccCategoryAccountType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "MainAccountCategories" of service "d365_metadata".
 */
export class MainAccountCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MainAccountCategoriesType<T>
{
  /**
   * Technical entity name for MainAccountCategories.
   */
  static override _entityName = 'MainAccountCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MainAccountCategories entity.
   */
  static _keys = ['ReferenceId'];
  /**
   * Reference Id.
   */
  declare referenceId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Main Account Type.
   * @nullable
   */
  declare mainAccountType?: DimensionLedgerAccCategoryAccountType | null;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Closed.
   * @nullable
   */
  declare closed?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Category.
   * @nullable
   */
  declare mainAccountCategory?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MainAccountCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface MainAccountCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  referenceId: DeserializedType<T, 'Edm.Int32'>;
  mainAccountType?: DimensionLedgerAccCategoryAccountType | null;
  displayOrder: DeserializedType<T, 'Edm.Int32'>;
  closed?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountCategory?: DeserializedType<T, 'Edm.String'> | null;
}
