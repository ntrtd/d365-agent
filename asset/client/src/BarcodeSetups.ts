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
import type { BarcodeSetupsApi } from './BarcodeSetupsApi';
import { BarcodeType } from './BarcodeType';
import {
  ProductNumberIdentifiedBarcodes,
  ProductNumberIdentifiedBarcodesType
} from './ProductNumberIdentifiedBarcodes';
import {
  ProductBarcodeAssociations,
  ProductBarcodeAssociationsType
} from './ProductBarcodeAssociations';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { ProductBarcodesV3, ProductBarcodesV3Type } from './ProductBarcodesV3';

/**
 * This class represents the entity "BarcodeSetups" of service "d365_metadata".
 */
export class BarcodeSetups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BarcodeSetupsType<T>
{
  /**
   * Technical entity name for BarcodeSetups.
   */
  static override _entityName = 'BarcodeSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BarcodeSetups entity.
   */
  static _keys = ['dataAreaId', 'BarcodeSetupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Barcode Setup Id.
   */
  declare barcodeSetupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Font Size.
   */
  declare fontSize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Barcode Mask Id.
   * @nullable
   */
  declare barcodeMaskId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Barcode Description.
   * @nullable
   */
  declare barcodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Barcode Type.
   * @nullable
   */
  declare barcodeType?: BarcodeType | null;
  /**
   * Maximum Barcode Length.
   */
  declare maximumBarcodeLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Minimum Barcode Length.
   */
  declare minimumBarcodeLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Font Name.
   * @nullable
   */
  declare fontName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ProductNumberIdentifiedBarcodes} entity.
   */
  declare productBarcodes: ProductNumberIdentifiedBarcodes<T>[];
  /**
   * One-to-many navigation property to the {@link ProductBarcodeAssociations} entity.
   */
  declare productBarcodesV2: ProductBarcodeAssociations<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProductBarcodesV3} entity.
   */
  declare productBarcodesV3: ProductBarcodesV3<T>[];

  constructor(_entityApi: BarcodeSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface BarcodeSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  barcodeSetupId: DeserializedType<T, 'Edm.String'>;
  fontSize: DeserializedType<T, 'Edm.Int32'>;
  barcodeMaskId?: DeserializedType<T, 'Edm.String'> | null;
  barcodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  barcodeType?: BarcodeType | null;
  maximumBarcodeLength: DeserializedType<T, 'Edm.Int32'>;
  minimumBarcodeLength: DeserializedType<T, 'Edm.Int32'>;
  fontName?: DeserializedType<T, 'Edm.String'> | null;
  productBarcodes: ProductNumberIdentifiedBarcodesType<T>[];
  productBarcodesV2: ProductBarcodeAssociationsType<T>[];
  releasedProductsV2: ReleasedProductsV2Type<T>[];
  productBarcodesV3: ProductBarcodesV3Type<T>[];
}
