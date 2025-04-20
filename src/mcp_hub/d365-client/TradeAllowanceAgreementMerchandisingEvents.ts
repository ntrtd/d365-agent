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
import type { TradeAllowanceAgreementMerchandisingEventsApi } from './TradeAllowanceAgreementMerchandisingEventsApi';
import { McrMerchandisingEventCategory } from './McrMerchandisingEventCategory';
import {
  TradeAllowanceAgreementMerchandisingEventFunds,
  TradeAllowanceAgreementMerchandisingEventFundsType
} from './TradeAllowanceAgreementMerchandisingEventFunds';
import {
  TradeAllowanceAgreementMerchandisingEventLumpSums,
  TradeAllowanceAgreementMerchandisingEventLumpSumsType
} from './TradeAllowanceAgreementMerchandisingEventLumpSums';
import {
  TradeAllowanceAgreementMerchandisingEventBillBacks,
  TradeAllowanceAgreementMerchandisingEventBillBacksType
} from './TradeAllowanceAgreementMerchandisingEventBillBacks';
import {
  TradeAllowanceAgreementMerchandisingEventProducts,
  TradeAllowanceAgreementMerchandisingEventProductsType
} from './TradeAllowanceAgreementMerchandisingEventProducts';
import {
  TradeAllowanceAgreementMerchandisingEventDiscounts,
  TradeAllowanceAgreementMerchandisingEventDiscountsType
} from './TradeAllowanceAgreementMerchandisingEventDiscounts';
import {
  TradeAllowanceAgreementMerchandisingEventProductsV2,
  TradeAllowanceAgreementMerchandisingEventProductsV2Type
} from './TradeAllowanceAgreementMerchandisingEventProductsV2';
import {
  TradeAllowanceAgreementHeaders,
  TradeAllowanceAgreementHeadersType
} from './TradeAllowanceAgreementHeaders';

/**
 * This class represents the entity "TradeAllowanceAgreementMerchandisingEvents" of service "d365_metadata".
 */
export class TradeAllowanceAgreementMerchandisingEvents<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TradeAllowanceAgreementMerchandisingEventsType<T>
{
  /**
   * Technical entity name for TradeAllowanceAgreementMerchandisingEvents.
   */
  static override _entityName = 'TradeAllowanceAgreementMerchandisingEvents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TradeAllowanceAgreementMerchandisingEvents entity.
   */
  static _keys = [
    'dataAreaId',
    'TradeAllowanceAgreementId',
    'CustomerAccountNumber',
    'EventId'
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
   * Event Id.
   */
  declare eventId: DeserializedType<T, 'Edm.String'>;
  /**
   * Standard Merchandising Event Category Type.
   * @nullable
   */
  declare standardMerchandisingEventCategoryType?: McrMerchandisingEventCategory | null;
  /**
   * Merchandising Event Category Name.
   * @nullable
   */
  declare merchandisingEventCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Event Description.
   * @nullable
   */
  declare eventDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Event Cost Amount.
   */
  declare eventCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventFunds} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventFunds: TradeAllowanceAgreementMerchandisingEventFunds<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventLumpSums} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventLumpSums: TradeAllowanceAgreementMerchandisingEventLumpSums<T>[];
  /**
   * One-to-one navigation property to the {@link TradeAllowanceAgreementMerchandisingEventBillBacks} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventBillBack?: TradeAllowanceAgreementMerchandisingEventBillBacks<T> | null;
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventProducts} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventProducts: TradeAllowanceAgreementMerchandisingEventProducts<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventDiscounts} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventDiscounts: TradeAllowanceAgreementMerchandisingEventDiscounts<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventProductsV2} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventProductsV2: TradeAllowanceAgreementMerchandisingEventProductsV2<T>[];
  /**
   * One-to-one navigation property to the {@link TradeAllowanceAgreementHeaders} entity.
   */
  declare tradeAllowanceAgreementHeader?: TradeAllowanceAgreementHeaders<T> | null;

  constructor(_entityApi: TradeAllowanceAgreementMerchandisingEventsApi<T>) {
    super(_entityApi);
  }
}

export interface TradeAllowanceAgreementMerchandisingEventsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  eventId: DeserializedType<T, 'Edm.String'>;
  standardMerchandisingEventCategoryType?: McrMerchandisingEventCategory | null;
  merchandisingEventCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  eventDescription?: DeserializedType<T, 'Edm.String'> | null;
  eventCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  tradeAllowanceAgreementMerchandisingEventFunds: TradeAllowanceAgreementMerchandisingEventFundsType<T>[];
  tradeAllowanceAgreementMerchandisingEventLumpSums: TradeAllowanceAgreementMerchandisingEventLumpSumsType<T>[];
  tradeAllowanceAgreementMerchandisingEventBillBack?: TradeAllowanceAgreementMerchandisingEventBillBacksType<T> | null;
  tradeAllowanceAgreementMerchandisingEventProducts: TradeAllowanceAgreementMerchandisingEventProductsType<T>[];
  tradeAllowanceAgreementMerchandisingEventDiscounts: TradeAllowanceAgreementMerchandisingEventDiscountsType<T>[];
  tradeAllowanceAgreementMerchandisingEventProductsV2: TradeAllowanceAgreementMerchandisingEventProductsV2Type<T>[];
  tradeAllowanceAgreementHeader?: TradeAllowanceAgreementHeadersType<T> | null;
}
