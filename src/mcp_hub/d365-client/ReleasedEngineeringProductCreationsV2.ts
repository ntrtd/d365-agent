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
import type { ReleasedEngineeringProductCreationsV2Api } from './ReleasedEngineeringProductCreationsV2Api';

/**
 * This class represents the entity "ReleasedEngineeringProductCreationsV2" of service "d365_metadata".
 */
export class ReleasedEngineeringProductCreationsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedEngineeringProductCreationsV2Type<T>
{
  /**
   * Technical entity name for ReleasedEngineeringProductCreationsV2.
   */
  static override _entityName = 'ReleasedEngineeringProductCreationsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedEngineeringProductCreationsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'ProductVersionId',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductConfigurationId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Engineering Product Category Name.
   * @nullable
   */
  declare engineeringProductCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Owner Id.
   * @nullable
   */
  declare productOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ReleasedEngineeringProductCreationsV2Api<T>) {
    super(_entityApi);
  }
}

export interface ReleasedEngineeringProductCreationsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  engineeringProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  productOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
}
