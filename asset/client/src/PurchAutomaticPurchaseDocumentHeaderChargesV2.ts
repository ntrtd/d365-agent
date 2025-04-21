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
import type { PurchAutomaticPurchaseDocumentHeaderChargesV2Api } from './PurchAutomaticPurchaseDocumentHeaderChargesV2Api';
import { MarkupCategory } from './MarkupCategory';

/**
 * This class represents the entity "PurchAutomaticPurchaseDocumentHeaderChargesV2" of service "d365_metadata".
 */
export class PurchAutomaticPurchaseDocumentHeaderChargesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchAutomaticPurchaseDocumentHeaderChargesV2Type<T>
{
  /**
   * Technical entity name for PurchAutomaticPurchaseDocumentHeaderChargesV2.
   */
  static override _entityName = 'PurchAutomaticPurchaseDocumentHeaderChargesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchAutomaticPurchaseDocumentHeaderChargesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ChargingVendorAccountNumber',
    'ChargingChargeVendorGroupId',
    'ChargingDeliveryModeCode',
    'ChargingChargeDeliveryGroupId',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Charging Vendor Account Number.
   */
  declare chargingVendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Charging Charge Vendor Group Id.
   */
  declare chargingChargeVendorGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Charging Delivery Mode Code.
   */
  declare chargingDeliveryModeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Charging Charge Delivery Group Id.
   */
  declare chargingChargeDeliveryGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * From Total Line Amount.
   */
  declare fromTotalLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proportional Charge Amount.
   */
  declare proportionalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Charge Description.
   * @nullable
   */
  declare chargeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Accounting Currency Code.
   * @nullable
   */
  declare chargeAccountingCurrencyCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purchase Charge Code.
   * @nullable
   */
  declare purchaseChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Site Id.
   * @nullable
   */
  declare receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Category.
   * @nullable
   */
  declare chargeCategory?: MarkupCategory | null;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Percentage.
   */
  declare chargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Document Currency Code.
   * @nullable
   */
  declare purchaseDocumentCurrencyCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fixed Charge Amount.
   */
  declare fixedChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * To Total Line Amount.
   */
  declare toTotalLineAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: PurchAutomaticPurchaseDocumentHeaderChargesV2Api<T>) {
    super(_entityApi);
  }
}

export interface PurchAutomaticPurchaseDocumentHeaderChargesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  chargingVendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  chargingChargeVendorGroupId: DeserializedType<T, 'Edm.String'>;
  chargingDeliveryModeCode: DeserializedType<T, 'Edm.String'>;
  chargingChargeDeliveryGroupId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  fromTotalLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  proportionalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  chargeDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeAccountingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  purchaseChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  chargeCategory?: MarkupCategory | null;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  chargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  purchaseDocumentCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  fixedChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  toTotalLineAmount: DeserializedType<T, 'Edm.Decimal'>;
}
