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
import type { DistinctProductsApi } from './DistinctProductsApi';
import { EcoResProductType } from './EcoResProductType';
import { EcoResProductServiceType } from './EcoResProductServiceType';
import { WarrantyDurationTimeUnit } from './WarrantyDurationTimeUnit';
import { NoYes } from './NoYes';
import {
  ReleasedDistinctProducts,
  ReleasedDistinctProductsType
} from './ReleasedDistinctProducts';
import {
  ReleasedDistinctProductsV2,
  ReleasedDistinctProductsV2Type
} from './ReleasedDistinctProductsV2';
import {
  ProductTranslations,
  ProductTranslationsType
} from './ProductTranslations';

/**
 * This class represents the entity "DistinctProducts" of service "d365_metadata".
 */
export class DistinctProducts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DistinctProductsType<T>
{
  /**
   * Technical entity name for DistinctProducts.
   */
  static override _entityName = 'DistinctProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DistinctProducts entity.
   */
  static _keys = ['ProductNumber'];
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Nmfc Code.
   * @nullable
   */
  declare nmfcCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: EcoResProductType | null;
  /**
   * Warranty Duration Time.
   */
  declare warrantyDurationTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Stcc Code.
   * @nullable
   */
  declare stccCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Dimension Group Name.
   * @nullable
   */
  declare storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Type.
   * @nullable
   */
  declare serviceType?: EcoResProductServiceType | null;
  /**
   * Warranty Duration Time Unit.
   * @nullable
   */
  declare warrantyDurationTimeUnit?: WarrantyDurationTimeUnit | null;
  /**
   * Is Catch Weight Product.
   * @nullable
   */
  declare isCatchWeightProduct?: NoYes | null;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Product Category Name.
   * @nullable
   */
  declare retailProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tracking Dimension Group Name.
   * @nullable
   */
  declare trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Harmonized System Code.
   * @nullable
   */
  declare harmonizedSystemCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ReleasedDistinctProducts} entity.
   */
  declare releasedDistinctProduct: ReleasedDistinctProducts<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedDistinctProductsV2} entity.
   */
  declare releasedDistinctProductV2: ReleasedDistinctProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProductTranslations} entity.
   */
  declare productTranslation: ProductTranslations<T>[];

  constructor(_entityApi: DistinctProductsApi<T>) {
    super(_entityApi);
  }
}

export interface DistinctProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  nmfcCode?: DeserializedType<T, 'Edm.String'> | null;
  productType?: EcoResProductType | null;
  warrantyDurationTime: DeserializedType<T, 'Edm.Int32'>;
  stccCode?: DeserializedType<T, 'Edm.String'> | null;
  storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  serviceType?: EcoResProductServiceType | null;
  warrantyDurationTimeUnit?: WarrantyDurationTimeUnit | null;
  isCatchWeightProduct?: NoYes | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  retailProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  harmonizedSystemCode?: DeserializedType<T, 'Edm.String'> | null;
  releasedDistinctProduct: ReleasedDistinctProductsType<T>[];
  releasedDistinctProductV2: ReleasedDistinctProductsV2Type<T>[];
  productTranslation: ProductTranslationsType<T>[];
}
