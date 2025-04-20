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
import type { ReleasedEngineeringProductVersionsApi } from './ReleasedEngineeringProductVersionsApi';
import { NoYes } from './NoYes';
import {
  ReleasedProductReadinessChecks,
  ReleasedProductReadinessChecksType
} from './ReleasedProductReadinessChecks';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import { ProductColors, ProductColorsType } from './ProductColors';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import {
  ProductLifecycleStates,
  ProductLifecycleStatesType
} from './ProductLifecycleStates';
import {
  EngineeringProductVersions,
  EngineeringProductVersionsType
} from './EngineeringProductVersions';

/**
 * This class represents the entity "ReleasedEngineeringProductVersions" of service "d365_metadata".
 */
export class ReleasedEngineeringProductVersions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedEngineeringProductVersionsType<T>
{
  /**
   * Technical entity name for ReleasedEngineeringProductVersions.
   */
  static override _entityName = 'ReleasedEngineeringProductVersions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedEngineeringProductVersions entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringProductNumber',
    'EngineeringProductVersionId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Product Number.
   */
  declare engineeringProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Product Version Id.
   */
  declare engineeringProductVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective From Date.
   */
  declare effectiveFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Lifecycle State Id.
   * @nullable
   */
  declare productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective To Date.
   */
  declare effectiveToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Version Active.
   * @nullable
   */
  declare isVersionActive?: NoYes | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductReadinessChecks} entity.
   */
  declare releasedProductReadinessChecks: ReleasedProductReadinessChecks<T>[];
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductLifecycleStates} entity.
   */
  declare productLifecycleState?: ProductLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringProductVersions} entity.
   */
  declare engineeringProductVersion?: EngineeringProductVersions<T> | null;

  constructor(_entityApi: ReleasedEngineeringProductVersionsApi<T>) {
    super(_entityApi);
  }
}

export interface ReleasedEngineeringProductVersionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringProductNumber: DeserializedType<T, 'Edm.String'>;
  engineeringProductVersionId: DeserializedType<T, 'Edm.String'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  effectiveFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  effectiveToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isVersionActive?: NoYes | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  releasedProductReadinessChecks: ReleasedProductReadinessChecksType<T>[];
  productSize?: ProductSizesType<T> | null;
  productColor?: ProductColorsType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  productStyle?: ProductStylesType<T> | null;
  productLifecycleState?: ProductLifecycleStatesType<T> | null;
  engineeringProductVersion?: EngineeringProductVersionsType<T> | null;
}
