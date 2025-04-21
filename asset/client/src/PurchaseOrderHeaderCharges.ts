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
import type { PurchaseOrderHeaderChargesApi } from './PurchaseOrderHeaderChargesApi';
import { MarkupCategory } from './MarkupCategory';
import { NoYes } from './NoYes';
import {
  PurchaseOrderHeadersV2,
  PurchaseOrderHeadersV2Type
} from './PurchaseOrderHeadersV2';
import { Currencies, CurrenciesType } from './Currencies';
import { TaxGroups, TaxGroupsType } from './TaxGroups';
import { TaxItemGroups, TaxItemGroupsType } from './TaxItemGroups';

/**
 * This class represents the entity "PurchaseOrderHeaderCharges" of service "d365_metadata".
 */
export class PurchaseOrderHeaderCharges<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderHeaderChargesType<T>
{
  /**
   * Technical entity name for PurchaseOrderHeaderCharges.
   */
  static override _entityName = 'PurchaseOrderHeaderCharges';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderHeaderCharges entity.
   */
  static _keys = ['dataAreaId', 'PurchaseOrderNumber', 'ChargeLineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Number.
   */
  declare purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
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
   * Charge Percentage.
   */
  declare chargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Charge Amount.
   */
  declare fixedChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * External Charge Amount.
   */
  declare externalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link PurchaseOrderHeadersV2} entity.
   */
  declare purchaseOrderHeaderV2?: PurchaseOrderHeadersV2<T> | null;
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

  constructor(_entityApi: PurchaseOrderHeaderChargesApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderHeaderChargesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  chargeLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  proportionalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  chargeDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeAccountingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  purchaseChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeCategory?: MarkupCategory | null;
  isIntercompanyCharge?: NoYes | null;
  chargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  fixedChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  externalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  purchaseOrderHeaderV2?: PurchaseOrderHeadersV2Type<T> | null;
  currency?: CurrenciesType<T> | null;
  taxGroup?: TaxGroupsType<T> | null;
  taxItemGroup?: TaxItemGroupsType<T> | null;
}
