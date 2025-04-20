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
import type { GstReliefCategoriesApi } from './GstReliefCategoriesApi';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "GSTReliefCategories" of service "d365_metadata".
 */
export class GstReliefCategories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GstReliefCategoriesType<T>
{
  /**
   * Technical entity name for GstReliefCategories.
   */
  static override _entityName = 'GSTReliefCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GstReliefCategories entity.
   */
  static _keys = ['dataAreaId', 'ReliefCategoryEntityKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Relief Category Entity Key.
   */
  declare reliefCategoryEntityKey: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Relief Schedule.
   * @nullable
   */
  declare reliefSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relief Category Id.
   * @nullable
   */
  declare reliefCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relief Item Number.
   * @nullable
   */
  declare reliefItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];

  constructor(_entityApi: GstReliefCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface GstReliefCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reliefCategoryEntityKey: DeserializedType<T, 'Edm.Guid'>;
  reliefSchedule?: DeserializedType<T, 'Edm.String'> | null;
  reliefCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  reliefItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  releasedProductsV2: ReleasedProductsV2Type<T>[];
}
