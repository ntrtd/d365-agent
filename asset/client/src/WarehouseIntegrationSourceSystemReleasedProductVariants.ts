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
import type { WarehouseIntegrationSourceSystemReleasedProductVariantsApi } from './WarehouseIntegrationSourceSystemReleasedProductVariantsApi';

/**
 * This class represents the entity "WarehouseIntegrationSourceSystemReleasedProductVariants" of service "d365_metadata".
 */
export class WarehouseIntegrationSourceSystemReleasedProductVariants<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseIntegrationSourceSystemReleasedProductVariantsType<T>
{
  /**
   * Technical entity name for WarehouseIntegrationSourceSystemReleasedProductVariants.
   */
  static override _entityName =
    'WarehouseIntegrationSourceSystemReleasedProductVariants';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseIntegrationSourceSystemReleasedProductVariants entity.
   */
  static _keys = ['dataAreaId', 'ProductVariantNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Variant Number.
   */
  declare productVariantNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Item Number.
   * @nullable
   */
  declare sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Master Number.
   * @nullable
   */
  declare productMasterNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Sales Tax Item Group Code.
   * @nullable
   */
  declare salesSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Product Number.
   * @nullable
   */
  declare sourceSystemProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Sales Tax Item Group Code.
   * @nullable
   */
  declare purchaseSalesTaxItemGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source System Id.
   * @nullable
   */
  declare sourceSystemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(
    _entityApi: WarehouseIntegrationSourceSystemReleasedProductVariantsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface WarehouseIntegrationSourceSystemReleasedProductVariantsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productVariantNumber: DeserializedType<T, 'Edm.String'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  productMasterNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  purchaseSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemId?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
}
