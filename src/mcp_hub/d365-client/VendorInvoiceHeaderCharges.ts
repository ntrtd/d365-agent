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
import type { VendorInvoiceHeaderChargesApi } from './VendorInvoiceHeaderChargesApi';
import { NoYes } from './NoYes';
import { MarkupCategory } from './MarkupCategory';
import { Currencies, CurrenciesType } from './Currencies';
import { TaxGroups, TaxGroupsType } from './TaxGroups';
import { TaxItemGroups, TaxItemGroupsType } from './TaxItemGroups';

/**
 * This class represents the entity "VendorInvoiceHeaderCharges" of service "d365_metadata".
 */
export class VendorInvoiceHeaderCharges<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorInvoiceHeaderChargesType<T>
{
  /**
   * Technical entity name for VendorInvoiceHeaderCharges.
   */
  static override _entityName = 'VendorInvoiceHeaderCharges';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorInvoiceHeaderCharges entity.
   */
  static _keys = [
    'dataAreaId',
    'HeaderReference',
    'ChargeLineNumber',
    'VendInvoiceInfoTableDataAreaId'
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
   * Vend Invoice Info Table Data Area Id.
   */
  declare vendInvoiceInfoTableDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Charge Code.
   * @nullable
   */
  declare purchaseChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Intercompany Charge.
   * @nullable
   */
  declare isIntercompanyCharge?: NoYes | null;
  /**
   * Charge Description.
   * @nullable
   */
  declare chargeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proportional Charge Amount.
   */
  declare proportionalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * External Charge Amount.
   */
  declare externalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Charge Percentage.
   */
  declare chargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Charge Amount.
   */
  declare fixedChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxGroups} entity.
   */
  declare taxGroup?: TaxGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxItemGroups} entity.
   */
  declare taxItemGroup?: TaxItemGroups<T> | null;

  constructor(_entityApi: VendorInvoiceHeaderChargesApi<T>) {
    super(_entityApi);
  }
}

export interface VendorInvoiceHeaderChargesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  headerReference: DeserializedType<T, 'Edm.String'>;
  chargeLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  vendInvoiceInfoTableDataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  isIntercompanyCharge?: NoYes | null;
  chargeDescription?: DeserializedType<T, 'Edm.String'> | null;
  proportionalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  externalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeAccountingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeCategory?: MarkupCategory | null;
  chargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  fixedChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  currency?: CurrenciesType<T> | null;
  taxGroup?: TaxGroupsType<T> | null;
  taxItemGroup?: TaxItemGroupsType<T> | null;
}
