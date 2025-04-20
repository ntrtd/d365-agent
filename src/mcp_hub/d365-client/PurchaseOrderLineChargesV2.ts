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
import type { PurchaseOrderLineChargesV2Api } from './PurchaseOrderLineChargesV2Api';
import { MarkupCategory } from './MarkupCategory';
import { NoYes } from './NoYes';
import {
  PurchaseOrderLinesV2,
  PurchaseOrderLinesV2Type
} from './PurchaseOrderLinesV2';
import { Currencies, CurrenciesType } from './Currencies';
import { TaxGroups, TaxGroupsType } from './TaxGroups';
import { TaxItemGroups, TaxItemGroupsType } from './TaxItemGroups';

/**
 * This class represents the entity "PurchaseOrderLineChargesV2" of service "d365_metadata".
 */
export class PurchaseOrderLineChargesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderLineChargesV2Type<T>
{
  /**
   * Technical entity name for PurchaseOrderLineChargesV2.
   */
  static override _entityName = 'PurchaseOrderLineChargesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderLineChargesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'PurchaseOrderNumber',
    'PurchaseOrderLineNumber',
    'ChargeLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Number.
   */
  declare purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Line Number.
   */
  declare purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Charge Line Number.
   */
  declare chargeLineNumber: DeserializedType<T, 'Edm.Decimal'>;
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
  /**
   * One-to-one navigation property to the {@link PurchaseOrderLinesV2} entity.
   */
  declare purchaseOrderLineV2?: PurchaseOrderLinesV2<T> | null;
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

  constructor(_entityApi: PurchaseOrderLineChargesV2Api<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderLineChargesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  chargeLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  proportionalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  chargeDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeAccountingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  purchaseChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeCategory?: MarkupCategory | null;
  isIntercompanyCharge?: NoYes | null;
  intercompanyChargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  chargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  fixedChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  unitChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  externalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  purchaseOrderLineV2?: PurchaseOrderLinesV2Type<T> | null;
  currency?: CurrenciesType<T> | null;
  taxGroup?: TaxGroupsType<T> | null;
  taxItemGroup?: TaxItemGroupsType<T> | null;
}
