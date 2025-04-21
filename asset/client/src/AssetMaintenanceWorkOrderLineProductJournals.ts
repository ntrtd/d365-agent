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
import type { AssetMaintenanceWorkOrderLineProductJournalsApi } from './AssetMaintenanceWorkOrderLineProductJournalsApi';
import { NoYes } from './NoYes';
import {
  OperationalSitesV2,
  OperationalSitesV2Type
} from './OperationalSitesV2';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import { ProductColors, ProductColorsType } from './ProductColors';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { Warehouses, WarehousesType } from './Warehouses';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { ProductSizes, ProductSizesType } from './ProductSizes';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderLineProductJournals" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderLineProductJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderLineProductJournalsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderLineProductJournals.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderLineProductJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderLineProductJournals entity.
   */
  static _keys = [
    'dataAreaId',
    'WorkOrderId',
    'WorkOrderJobNumber',
    'ProductConsumptionNumber',
    'ProductConsumptionLineNumber',
    'Voucher'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Id.
   */
  declare workOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Job Number.
   */
  declare workOrderJobNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Consumption Number.
   */
  declare productConsumptionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Consumption Line Number.
   */
  declare productConsumptionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voucher.
   */
  declare voucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage Site Id.
   * @nullable
   */
  declare storageSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tracking Batch Id.
   * @nullable
   */
  declare trackingBatchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 6.
   * @nullable
   */
  declare inventDimension6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 9.
   */
  declare inventDimension9: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 4.
   * @nullable
   */
  declare inventDimension4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 3.
   * @nullable
   */
  declare inventDimension3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Line Posted.
   * @nullable
   */
  declare isLinePosted?: NoYes | null;
  /**
   * Cost Amount.
   */
  declare costAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Dimension 8.
   * @nullable
   */
  declare inventDimension8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Markup.
   */
  declare costMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Dimension 1.
   * @nullable
   */
  declare inventDimension1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 7.
   * @nullable
   */
  declare inventDimension7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 10.
   */
  declare inventDimension10: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Dimension 11.
   * @nullable
   */
  declare inventDimension11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 12.
   * @nullable
   */
  declare inventDimension12?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Warehouse Id.
   * @nullable
   */
  declare storageWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Price.
   */
  declare costPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tracking Serial Id.
   * @nullable
   */
  declare trackingSerialId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 5.
   * @nullable
   */
  declare inventDimension5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Consumption Unit Id.
   * @nullable
   */
  declare productConsumptionUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 2.
   * @nullable
   */
  declare inventDimension2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Warehouse Location Id.
   * @nullable
   */
  declare storageWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSitesV2} entity.
   */
  declare storageProductSite?: OperationalSitesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  declare storageProductWarehouseLocation?: WarehouseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare storageProductWarehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;

  constructor(_entityApi: AssetMaintenanceWorkOrderLineProductJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderLineProductJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
  workOrderJobNumber: DeserializedType<T, 'Edm.Int64'>;
  productConsumptionNumber: DeserializedType<T, 'Edm.String'>;
  productConsumptionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  voucher: DeserializedType<T, 'Edm.String'>;
  storageSiteId?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  trackingBatchId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension6?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension9: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension4?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension3?: DeserializedType<T, 'Edm.String'> | null;
  isLinePosted?: NoYes | null;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  inventDimension8?: DeserializedType<T, 'Edm.String'> | null;
  costMarkup: DeserializedType<T, 'Edm.Decimal'>;
  inventDimension1?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension7?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension10: DeserializedType<T, 'Edm.Decimal'>;
  inventDimension11?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension12?: DeserializedType<T, 'Edm.String'> | null;
  storageWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  costPrice: DeserializedType<T, 'Edm.Decimal'>;
  trackingSerialId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension5?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  productConsumptionUnitId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension2?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  storageWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  storageProductSite?: OperationalSitesV2Type<T> | null;
  storageProductWarehouseLocation?: WarehouseLocationsType<T> | null;
  productColor?: ProductColorsType<T> | null;
  productStyle?: ProductStylesType<T> | null;
  storageProductWarehouse?: WarehousesType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  productSize?: ProductSizesType<T> | null;
}
