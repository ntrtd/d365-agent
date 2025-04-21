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
import type { OpenPurchaseLineDiscountJournalLinesApi } from './OpenPurchaseLineDiscountJournalLinesApi';
import { NoYes } from './NoYes';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import {
  LineDiscountProductGroups,
  LineDiscountProductGroupsType
} from './LineDiscountProductGroups';
import {
  LineDiscountVendorGroups,
  LineDiscountVendorGroupsType
} from './LineDiscountVendorGroups';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import { Warehouses, WarehousesType } from './Warehouses';

/**
 * This class represents the entity "OpenPurchaseLineDiscountJournalLines" of service "d365_metadata".
 */
export class OpenPurchaseLineDiscountJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OpenPurchaseLineDiscountJournalLinesType<T>
{
  /**
   * Technical entity name for OpenPurchaseLineDiscountJournalLines.
   */
  static override _entityName = 'OpenPurchaseLineDiscountJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OpenPurchaseLineDiscountJournalLines entity.
   */
  static _keys = ['dataAreaId', 'TradeAgreementJournalNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trade Agreement Journal Number.
   */
  declare tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Search Continue.
   * @nullable
   */
  declare willSearchContinue?: NoYes | null;
  /**
   * Quantity Unit Symbol.
   * @nullable
   */
  declare quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percentage 2.
   */
  declare discountPercentage2: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Percentage 1.
   */
  declare discountPercentage1: DeserializedType<T, 'Edm.Decimal'>;
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
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Quantity.
   */
  declare toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Vendor Group Code.
   * @nullable
   */
  declare lineDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Discount Applicable From Date.
   */
  declare discountApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Discount Applicable To Date.
   */
  declare discountApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Currency Code.
   * @nullable
   */
  declare discountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Quantity.
   */
  declare fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Warehouse Id.
   * @nullable
   */
  declare discountWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Product Group Code.
   * @nullable
   */
  declare lineDiscountProductGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Site Id.
   * @nullable
   */
  declare discountSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Log.
   * @nullable
   */
  declare processingLog?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare operationalSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link LineDiscountProductGroups} entity.
   */
  declare lineDiscountProductGroup?: LineDiscountProductGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link LineDiscountVendorGroups} entity.
   */
  declare lineDiscountVendorGroup?: LineDiscountVendorGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendorV2?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;

  constructor(_entityApi: OpenPurchaseLineDiscountJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface OpenPurchaseLineDiscountJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  willSearchContinue?: NoYes | null;
  quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  discountPercentage2: DeserializedType<T, 'Edm.Decimal'>;
  discountPercentage1: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  discountApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discountApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  discountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  discountWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountProductGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  discountSiteId?: DeserializedType<T, 'Edm.String'> | null;
  processingLog?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  operationalSite?: OperationalSitesType<T> | null;
  lineDiscountProductGroup?: LineDiscountProductGroupsType<T> | null;
  lineDiscountVendorGroup?: LineDiscountVendorGroupsType<T> | null;
  vendorV2?: VendorsV2Type<T> | null;
  warehouse?: WarehousesType<T> | null;
}
