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
import type { OrderCommittedLicensePlateReservationsApi } from './OrderCommittedLicensePlateReservationsApi';
import { InventTransType } from './InventTransType';
import { LicensePlates, LicensePlatesType } from './LicensePlates';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { ProductColors, ProductColorsType } from './ProductColors';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { ProductSizes, ProductSizesType } from './ProductSizes';

/**
 * This class represents the entity "OrderCommittedLicensePlateReservations" of service "d365_metadata".
 */
export class OrderCommittedLicensePlateReservations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OrderCommittedLicensePlateReservationsType<T>
{
  /**
   * Technical entity name for OrderCommittedLicensePlateReservations.
   */
  static override _entityName = 'OrderCommittedLicensePlateReservations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OrderCommittedLicensePlateReservations entity.
   */
  static _keys = ['dataAreaId', 'InventoryLotId', 'LicensePlateNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Lot Id.
   */
  declare inventoryLotId: DeserializedType<T, 'Edm.String'>;
  /**
   * License Plate Number.
   */
  declare licensePlateNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Reserved Inventory Quantity.
   */
  declare reservedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Category.
   * @nullable
   */
  declare referenceCategory?: InventTransType | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Number.
   * @nullable
   */
  declare orderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link LicensePlates} entity.
   */
  declare licensePlate?: LicensePlates<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;

  constructor(_entityApi: OrderCommittedLicensePlateReservationsApi<T>) {
    super(_entityApi);
  }
}

export interface OrderCommittedLicensePlateReservationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryLotId: DeserializedType<T, 'Edm.String'>;
  licensePlateNumber: DeserializedType<T, 'Edm.String'>;
  reservedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  referenceCategory?: InventTransType | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  orderNumber?: DeserializedType<T, 'Edm.String'> | null;
  licensePlate?: LicensePlatesType<T> | null;
  productStyle?: ProductStylesType<T> | null;
  productColor?: ProductColorsType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  productSize?: ProductSizesType<T> | null;
}
