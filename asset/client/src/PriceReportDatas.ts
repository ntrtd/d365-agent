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
import type { PriceReportDatasApi } from './PriceReportDatasApi';

/**
 * This class represents the entity "PriceReportDatas" of service "d365_metadata".
 */
export class PriceReportDatas<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PriceReportDatasType<T>
{
  /**
   * Technical entity name for PriceReportDatas.
   */
  static override _entityName = 'PriceReportDatas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PriceReportDatas entity.
   */
  static _keys = [
    'dataAreaId',
    'ReportId',
    'AccountNum',
    'ItemId',
    'FromDate',
    'ToDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Report Id.
   */
  declare reportId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Account Num.
   */
  declare accountNum: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Base Price.
   */
  declare basePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Calculated Discount.
   */
  declare calculatedDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Amount List.
   * @nullable
   */
  declare discountAmountList?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ta Journal Num.
   * @nullable
   */
  declare taJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variant Id.
   * @nullable
   */
  declare variantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit.
   * @nullable
   */
  declare salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculated Margin.
   */
  declare calculatedMargin: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Offers.
   * @nullable
   */
  declare discountOffers?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Margin Offers.
   * @nullable
   */
  declare marginOffers?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Margin Amount List.
   * @nullable
   */
  declare marginAmountList?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PriceReportDatasApi<T>) {
    super(_entityApi);
  }
}

export interface PriceReportDatasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reportId: DeserializedType<T, 'Edm.Guid'>;
  accountNum: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  basePrice: DeserializedType<T, 'Edm.Decimal'>;
  calculatedDiscount: DeserializedType<T, 'Edm.Decimal'>;
  discountAmountList?: DeserializedType<T, 'Edm.String'> | null;
  taJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  variantId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  calculatedMargin: DeserializedType<T, 'Edm.Decimal'>;
  discountOffers?: DeserializedType<T, 'Edm.String'> | null;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  marginOffers?: DeserializedType<T, 'Edm.String'> | null;
  marginAmountList?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  productName?: DeserializedType<T, 'Edm.String'> | null;
}
