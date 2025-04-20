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
import type { SalesAutomaticSalesDocumentHeaderChargeApi } from './SalesAutomaticSalesDocumentHeaderChargeApi';
import { NoYes } from './NoYes';
import { MarkupCategory } from './MarkupCategory';

/**
 * This class represents the entity "SalesAutomaticSalesDocumentHeaderCharge" of service "d365_metadata".
 */
export class SalesAutomaticSalesDocumentHeaderCharge<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesAutomaticSalesDocumentHeaderChargeType<T>
{
  /**
   * Technical entity name for SalesAutomaticSalesDocumentHeaderCharge.
   */
  static override _entityName = 'SalesAutomaticSalesDocumentHeaderCharge';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesAutomaticSalesDocumentHeaderCharge entity.
   */
  static _keys = [
    'dataAreaId',
    'ChargingCustomerAccountNumber',
    'ChargingChargeCustomerGroupId',
    'ChargingDeliveryModeCode',
    'ChargingChargeDeliveryGroupId',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Charging Customer Account Number.
   */
  declare chargingCustomerAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Charging Charge Customer Group Id.
   */
  declare chargingChargeCustomerGroupId: DeserializedType<T, 'Edm.String'>;
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
   * Is Compound.
   * @nullable
   */
  declare isCompound?: NoYes | null;
  /**
   * To Total Line Amount.
   */
  declare toTotalLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Document Currency Code.
   * @nullable
   */
  declare salesDocumentCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sequence.
   */
  declare sequence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Charge Code.
   * @nullable
   */
  declare salesChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Accounting Currency Code.
   * @nullable
   */
  declare chargeAccountingCurrencyCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Will Invoice Processing Keep Charge.
   * @nullable
   */
  declare willInvoiceProcessingKeepCharge?: NoYes | null;
  /**
   * Charge Category.
   * @nullable
   */
  declare chargeCategory?: MarkupCategory | null;
  /**
   * From Total Line Amount.
   */
  declare fromTotalLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Charge Percentage.
   */
  declare chargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Charge Amount.
   */
  declare fixedChargeAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: SalesAutomaticSalesDocumentHeaderChargeApi<T>) {
    super(_entityApi);
  }
}

export interface SalesAutomaticSalesDocumentHeaderChargeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  chargingCustomerAccountNumber: DeserializedType<T, 'Edm.String'>;
  chargingChargeCustomerGroupId: DeserializedType<T, 'Edm.String'>;
  chargingDeliveryModeCode: DeserializedType<T, 'Edm.String'>;
  chargingChargeDeliveryGroupId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  isCompound?: NoYes | null;
  toTotalLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesDocumentCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  sequence: DeserializedType<T, 'Edm.Int32'>;
  salesChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeAccountingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  willInvoiceProcessingKeepCharge?: NoYes | null;
  chargeCategory?: MarkupCategory | null;
  fromTotalLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  chargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  fixedChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
}
