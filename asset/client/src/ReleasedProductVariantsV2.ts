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
import type { ReleasedProductVariantsV2Api } from './ReleasedProductVariantsV2Api';
import {
  InventoryCountingJournalLines,
  InventoryCountingJournalLinesType
} from './InventoryCountingJournalLines';
import {
  ReleasedProductMasters,
  ReleasedProductMastersType
} from './ReleasedProductMasters';
import {
  ReleasedProductMastersV2,
  ReleasedProductMastersV2Type
} from './ReleasedProductMastersV2';
import { ProductMasters, ProductMastersType } from './ProductMasters';
import {
  ProductLifecycleStates,
  ProductLifecycleStatesType
} from './ProductLifecycleStates';
import { ProductVariantsV2, ProductVariantsV2Type } from './ProductVariantsV2';
import {
  ReleasedProductVariantExternalCodesV2,
  ReleasedProductVariantExternalCodesV2Type
} from './ReleasedProductVariantExternalCodesV2';

/**
 * This class represents the entity "ReleasedProductVariantsV2" of service "d365_metadata".
 */
export class ReleasedProductVariantsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedProductVariantsV2Type<T>
{
  /**
   * Technical entity name for ReleasedProductVariantsV2.
   */
  static override _entityName = 'ReleasedProductVariantsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedProductVariantsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ProductMasterNumber',
    'ProductConfigurationId',
    'ProductSizeId',
    'ProductColorId',
    'ProductStyleId',
    'ProductVersionId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Master Number.
   */
  declare productMasterNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Lifecycle State Id.
   * @nullable
   */
  declare productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Sales Tax Item Group Code.
   * @nullable
   */
  declare salesSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Product Variant Number.
   * @nullable
   */
  declare productVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InventoryCountingJournalLines} entity.
   */
  declare inventoryCountingJournalLines: InventoryCountingJournalLines<T>[];
  /**
   * One-to-one navigation property to the {@link ReleasedProductMasters} entity.
   */
  declare releasedProductMaster?: ReleasedProductMasters<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductMastersV2} entity.
   */
  declare releasedProductMasterV2?: ReleasedProductMastersV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductMasters} entity.
   */
  declare productMaster?: ProductMasters<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductLifecycleStates} entity.
   */
  declare productLifecycleState?: ProductLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVariantsV2} entity.
   */
  declare productVariantV2?: ProductVariantsV2<T> | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductVariantExternalCodesV2} entity.
   */
  declare releasedProductVariantExternalCodesV2: ReleasedProductVariantExternalCodesV2<T>[];

  constructor(_entityApi: ReleasedProductVariantsV2Api<T>) {
    super(_entityApi);
  }
}

export interface ReleasedProductVariantsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productMasterNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  purchaseSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  inventoryCountingJournalLines: InventoryCountingJournalLinesType<T>[];
  releasedProductMaster?: ReleasedProductMastersType<T> | null;
  releasedProductMasterV2?: ReleasedProductMastersV2Type<T> | null;
  productMaster?: ProductMastersType<T> | null;
  productLifecycleState?: ProductLifecycleStatesType<T> | null;
  productVariantV2?: ProductVariantsV2Type<T> | null;
  releasedProductVariantExternalCodesV2: ReleasedProductVariantExternalCodesV2Type<T>[];
}
