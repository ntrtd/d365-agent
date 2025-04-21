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
import type { ProductLifecycleStatesApi } from './ProductLifecycleStatesApi';
import { NoYes } from './NoYes';
import {
  EngineeringProductCategoryDetails,
  EngineeringProductCategoryDetailsType
} from './EngineeringProductCategoryDetails';
import {
  ReleasedProductVariants,
  ReleasedProductVariantsType
} from './ReleasedProductVariants';
import {
  EngineeringChangeOrderProductsV3,
  EngineeringChangeOrderProductsV3Type
} from './EngineeringChangeOrderProductsV3';
import {
  EngineeringChangeOrderProductsV2,
  EngineeringChangeOrderProductsV2Type
} from './EngineeringChangeOrderProductsV2';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  ReleasedEngineeringProductVersions,
  ReleasedEngineeringProductVersionsType
} from './ReleasedEngineeringProductVersions';
import {
  AssetMaintenanceReleasedProducts,
  AssetMaintenanceReleasedProductsType
} from './AssetMaintenanceReleasedProducts';
import {
  ReleasedProductVariantsV2,
  ReleasedProductVariantsV2Type
} from './ReleasedProductVariantsV2';
import {
  ProductLifecycleStateProcesses,
  ProductLifecycleStateProcessesType
} from './ProductLifecycleStateProcesses';
import {
  EngineeringChangeOrderProducts,
  EngineeringChangeOrderProductsType
} from './EngineeringChangeOrderProducts';

/**
 * This class represents the entity "ProductLifecycleStates" of service "d365_metadata".
 */
export class ProductLifecycleStates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductLifecycleStatesType<T>
{
  /**
   * Technical entity name for ProductLifecycleStates.
   */
  static override _entityName = 'ProductLifecycleStates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductLifecycleStates entity.
   */
  static _keys = ['LifecycleStateId'];
  /**
   * Lifecycle State Id.
   */
  declare lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Default On Product Release.
   * @nullable
   */
  declare isDefaultOnProductRelease?: NoYes | null;
  /**
   * Lifecycle State Description.
   * @nullable
   */
  declare lifecycleStateDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active For Planning.
   * @nullable
   */
  declare isActiveForPlanning?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link EngineeringProductCategoryDetails} entity.
   */
  declare engineeringProductCategoryDetails: EngineeringProductCategoryDetails<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductVariants} entity.
   */
  declare releasedProductVariants: ReleasedProductVariants<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductsV3} entity.
   */
  declare engineeringChangeOrderProductsV3: EngineeringChangeOrderProductsV3<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductsV2} entity.
   */
  declare engineeringChangeOrderProductsV2: EngineeringChangeOrderProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedEngineeringProductVersions} entity.
   */
  declare releasedEngineeringProductVersions: ReleasedEngineeringProductVersions<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceReleasedProducts} entity.
   */
  declare entAssetReleasedProductsProductLifecycleState: AssetMaintenanceReleasedProducts<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductVariantsV2} entity.
   */
  declare releasedProductVariantsV2: ReleasedProductVariantsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProductLifecycleStateProcesses} entity.
   */
  declare productLifecycleStateProcesses: ProductLifecycleStateProcesses<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProducts} entity.
   */
  declare engineeringChangeOrderProducts: EngineeringChangeOrderProducts<T>[];

  constructor(_entityApi: ProductLifecycleStatesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductLifecycleStatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  isDefaultOnProductRelease?: NoYes | null;
  lifecycleStateDescription?: DeserializedType<T, 'Edm.String'> | null;
  isActiveForPlanning?: NoYes | null;
  engineeringProductCategoryDetails: EngineeringProductCategoryDetailsType<T>[];
  releasedProductVariants: ReleasedProductVariantsType<T>[];
  engineeringChangeOrderProductsV3: EngineeringChangeOrderProductsV3Type<T>[];
  engineeringChangeOrderProductsV2: EngineeringChangeOrderProductsV2Type<T>[];
  releasedProductsV2: ReleasedProductsV2Type<T>[];
  releasedEngineeringProductVersions: ReleasedEngineeringProductVersionsType<T>[];
  entAssetReleasedProductsProductLifecycleState: AssetMaintenanceReleasedProductsType<T>[];
  releasedProductVariantsV2: ReleasedProductVariantsV2Type<T>[];
  productLifecycleStateProcesses: ProductLifecycleStateProcessesType<T>[];
  engineeringChangeOrderProducts: EngineeringChangeOrderProductsType<T>[];
}
