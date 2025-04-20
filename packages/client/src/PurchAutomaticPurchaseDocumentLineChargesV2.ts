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
import type { PurchAutomaticPurchaseDocumentLineChargesV2Api } from './PurchAutomaticPurchaseDocumentLineChargesV2Api';
import { MarkupCategory } from './MarkupCategory';
import { ProcurementCharge, ProcurementChargeType } from './ProcurementCharge';

/**
 * This class represents the entity "PurchAutomaticPurchaseDocumentLineChargesV2" of service "d365_metadata".
 */
export class PurchAutomaticPurchaseDocumentLineChargesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchAutomaticPurchaseDocumentLineChargesV2Type<T>
{
  /**
   * Technical entity name for PurchAutomaticPurchaseDocumentLineChargesV2.
   */
  static override _entityName = 'PurchAutomaticPurchaseDocumentLineChargesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchAutomaticPurchaseDocumentLineChargesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ChargingVendorAccountNumber',
    'ChargingChargeVendorGroupId',
    'ChargingItemNumber',
    'ChargingChargeProductGroupId',
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
   * Charging Item Number.
   */
  declare chargingItemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Charging Charge Product Group Id.
   */
  declare chargingChargeProductGroupId: DeserializedType<T, 'Edm.String'>;
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
   * Intercompany Charge Percentage.
   */
  declare intercompanyChargePercentage: DeserializedType<T, 'Edm.Decimal'>;
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
   * Unit Charge Amount.
   */
  declare unitChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link ProcurementCharge} entity.
   */
  declare purchProcurementCharge?: ProcurementCharge<T> | null;

  constructor(_entityApi: PurchAutomaticPurchaseDocumentLineChargesV2Api<T>) {
    super(_entityApi);
  }
}

export interface PurchAutomaticPurchaseDocumentLineChargesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  chargingVendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  chargingChargeVendorGroupId: DeserializedType<T, 'Edm.String'>;
  chargingItemNumber: DeserializedType<T, 'Edm.String'>;
  chargingChargeProductGroupId: DeserializedType<T, 'Edm.String'>;
  chargingDeliveryModeCode: DeserializedType<T, 'Edm.String'>;
  chargingChargeDeliveryGroupId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  proportionalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  chargeDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeAccountingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  purchaseChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  chargeCategory?: MarkupCategory | null;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyChargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  chargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  purchaseDocumentCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  fixedChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  unitChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  purchProcurementCharge?: ProcurementChargeType<T> | null;
}
