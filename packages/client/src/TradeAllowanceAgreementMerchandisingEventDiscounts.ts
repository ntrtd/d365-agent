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
import type { TradeAllowanceAgreementMerchandisingEventDiscountsApi } from './TradeAllowanceAgreementMerchandisingEventDiscountsApi';
import { NoYes } from './NoYes';
import {
  TradeAllowanceAgreementMerchandisingEvents,
  TradeAllowanceAgreementMerchandisingEventsType
} from './TradeAllowanceAgreementMerchandisingEvents';

/**
 * This class represents the entity "TradeAllowanceAgreementMerchandisingEventDiscounts" of service "d365_metadata".
 */
export class TradeAllowanceAgreementMerchandisingEventDiscounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TradeAllowanceAgreementMerchandisingEventDiscountsType<T>
{
  /**
   * Technical entity name for TradeAllowanceAgreementMerchandisingEventDiscounts.
   */
  static override _entityName =
    'TradeAllowanceAgreementMerchandisingEventDiscounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TradeAllowanceAgreementMerchandisingEventDiscounts entity.
   */
  static _keys = [
    'dataAreaId',
    'TradeAllowanceAgreementId',
    'CustomerAccountNumber',
    'TradeAllowanceAgreementMerchandisingEventId',
    'DiscountLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trade Allowance Agreement Id.
   */
  declare tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account Number.
   */
  declare customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Trade Allowance Agreement Merchandising Event Id.
   */
  declare tradeAllowanceAgreementMerchandisingEventId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Discount Line Number.
   */
  declare discountLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * From Quantity.
   */
  declare fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * L Ine Discount Amount.
   */
  declare lIneDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * To Quantity.
   */
  declare toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Will Analytics Include Discount.
   * @nullable
   */
  declare willAnalyticsIncludeDiscount?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link TradeAllowanceAgreementMerchandisingEvents} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEvent?: TradeAllowanceAgreementMerchandisingEvents<T> | null;

  constructor(
    _entityApi: TradeAllowanceAgreementMerchandisingEventDiscountsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface TradeAllowanceAgreementMerchandisingEventDiscountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  tradeAllowanceAgreementMerchandisingEventId: DeserializedType<
    T,
    'Edm.String'
  >;
  discountLineNumber: DeserializedType<T, 'Edm.Int64'>;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  lIneDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  willAnalyticsIncludeDiscount?: NoYes | null;
  tradeAllowanceAgreementMerchandisingEvent?: TradeAllowanceAgreementMerchandisingEventsType<T> | null;
}
