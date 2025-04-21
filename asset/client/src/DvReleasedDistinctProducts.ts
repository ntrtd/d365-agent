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
import type { DvReleasedDistinctProductsApi } from './DvReleasedDistinctProductsApi';
import { EcoResProductType } from './EcoResProductType';
import {
  CdsInventoryOnHandRequests,
  CdsInventoryOnHandRequestsType
} from './CdsInventoryOnHandRequests';
import {
  DvReleasedProducts,
  DvReleasedProductsType
} from './DvReleasedProducts';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import { ProductColors, ProductColorsType } from './ProductColors';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { ProductSizes, ProductSizesType } from './ProductSizes';

/**
 * This class represents the entity "DVReleasedDistinctProducts" of service "d365_metadata".
 */
export class DvReleasedDistinctProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DvReleasedDistinctProductsType<T>
{
  /**
   * Technical entity name for DvReleasedDistinctProducts.
   */
  static override _entityName = 'DVReleasedDistinctProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DvReleasedDistinctProducts entity.
   */
  static _keys = ['dataAreaId', 'ProductNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: EcoResProductType | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-many navigation property to the {@link CdsInventoryOnHandRequests} entity.
   */
  declare cdsInventoryOnHandRequests: CdsInventoryOnHandRequests<T>[];
  /**
   * One-to-one navigation property to the {@link DvReleasedProducts} entity.
   */
  declare dvReleasedProduct?: DvReleasedProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare productVersion?: ProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;

  constructor(_entityApi: DvReleasedDistinctProductsApi<T>) {
    super(_entityApi);
  }
}

export interface DvReleasedDistinctProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productType?: EcoResProductType | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  cdsInventoryOnHandRequests: CdsInventoryOnHandRequestsType<T>[];
  dvReleasedProduct?: DvReleasedProductsType<T> | null;
  productVersion?: ProductVersionsType<T> | null;
  productColor?: ProductColorsType<T> | null;
  productStyle?: ProductStylesType<T> | null;
  productSize?: ProductSizesType<T> | null;
}
