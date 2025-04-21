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
import type { OpenSalesLineDiscountJournalLinesApi } from './OpenSalesLineDiscountJournalLinesApi';
import { NoYes } from './NoYes';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import {
  LineDiscountCustomerGroups,
  LineDiscountCustomerGroupsType
} from './LineDiscountCustomerGroups';
import {
  LineDiscountProductGroups,
  LineDiscountProductGroupsType
} from './LineDiscountProductGroups';
import { Warehouses, WarehousesType } from './Warehouses';
import { CustomersV3, CustomersV3Type } from './CustomersV3';

/**
 * This class represents the entity "OpenSalesLineDiscountJournalLines" of service "d365_metadata".
 */
export class OpenSalesLineDiscountJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OpenSalesLineDiscountJournalLinesType<T>
{
  /**
   * Technical entity name for OpenSalesLineDiscountJournalLines.
   */
  static override _entityName = 'OpenSalesLineDiscountJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OpenSalesLineDiscountJournalLines entity.
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
   * Line Discount Customer Group Code.
   * @nullable
   */
  declare lineDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Is Generic Currency Search Enabled.
   * @nullable
   */
  declare isGenericCurrencySearchEnabled?: NoYes | null;
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
   * One-to-one navigation property to the {@link LineDiscountCustomerGroups} entity.
   */
  declare lineDiscountCustomerGroup?: LineDiscountCustomerGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link LineDiscountProductGroups} entity.
   */
  declare lineDiscountProductGroup?: LineDiscountProductGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare customerV3?: CustomersV3<T> | null;

  constructor(_entityApi: OpenSalesLineDiscountJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface OpenSalesLineDiscountJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  willSearchContinue?: NoYes | null;
  quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  discountPercentage2: DeserializedType<T, 'Edm.Decimal'>;
  discountPercentage1: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  discountApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discountApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  discountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  discountWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountProductGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  isGenericCurrencySearchEnabled?: NoYes | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  discountSiteId?: DeserializedType<T, 'Edm.String'> | null;
  processingLog?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  operationalSite?: OperationalSitesType<T> | null;
  lineDiscountCustomerGroup?: LineDiscountCustomerGroupsType<T> | null;
  lineDiscountProductGroup?: LineDiscountProductGroupsType<T> | null;
  warehouse?: WarehousesType<T> | null;
  customerV3?: CustomersV3Type<T> | null;
}
