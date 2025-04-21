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
import type { VendorInvoiceLineChargesApi } from './VendorInvoiceLineChargesApi';
import { MarkupCategory } from './MarkupCategory';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "VendorInvoiceLineCharges" of service "d365_metadata".
 */
export class VendorInvoiceLineCharges<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorInvoiceLineChargesType<T>
{
  /**
   * Technical entity name for VendorInvoiceLineCharges.
   */
  static override _entityName = 'VendorInvoiceLineCharges';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorInvoiceLineCharges entity.
   */
  static _keys = [
    'dataAreaId',
    'HeaderReference',
    'ChargeLineNumber',
    'InvoiceLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Reference.
   */
  declare headerReference: DeserializedType<T, 'Edm.String'>;
  /**
   * Charge Line Number.
   */
  declare chargeLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Line Number.
   */
  declare invoiceLineNumber: DeserializedType<T, 'Edm.Decimal'>;
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
   * Sales Tax Item Group Code.
   * @nullable
   */
  declare salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Category.
   * @nullable
   */
  declare chargeCategory?: MarkupCategory | null;
  /**
   * Is Intercompany Charge.
   * @nullable
   */
  declare isIntercompanyCharge?: NoYes | null;
  /**
   * Intercompany Charge Percentage.
   */
  declare intercompanyChargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Number.
   * @nullable
   */
  declare purchaseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Percentage.
   */
  declare chargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Charge Amount.
   */
  declare fixedChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Charge Amount.
   */
  declare unitChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * External Charge Amount.
   */
  declare externalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: VendorInvoiceLineChargesApi<T>) {
    super(_entityApi);
  }
}

export interface VendorInvoiceLineChargesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  headerReference: DeserializedType<T, 'Edm.String'>;
  chargeLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  invoiceLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  proportionalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  chargeDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeAccountingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  purchaseChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeCategory?: MarkupCategory | null;
  isIntercompanyCharge?: NoYes | null;
  intercompanyChargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  purchaseNumber?: DeserializedType<T, 'Edm.String'> | null;
  chargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  fixedChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  unitChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  externalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
}
