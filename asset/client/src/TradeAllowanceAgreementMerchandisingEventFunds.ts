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
import type { TradeAllowanceAgreementMerchandisingEventFundsApi } from './TradeAllowanceAgreementMerchandisingEventFundsApi';
import {
  TradeAllowanceAgreementMerchandisingEvents,
  TradeAllowanceAgreementMerchandisingEventsType
} from './TradeAllowanceAgreementMerchandisingEvents';
import {
  TradeAllowanceAgreementHeaders,
  TradeAllowanceAgreementHeadersType
} from './TradeAllowanceAgreementHeaders';

/**
 * This class represents the entity "TradeAllowanceAgreementMerchandisingEventFunds" of service "d365_metadata".
 */
export class TradeAllowanceAgreementMerchandisingEventFunds<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TradeAllowanceAgreementMerchandisingEventFundsType<T>
{
  /**
   * Technical entity name for TradeAllowanceAgreementMerchandisingEventFunds.
   */
  static override _entityName =
    'TradeAllowanceAgreementMerchandisingEventFunds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TradeAllowanceAgreementMerchandisingEventFunds entity.
   */
  static _keys = [
    'dataAreaId',
    'TradeAllowanceAgreementId',
    'CustomerAccountNumber',
    'TradeAllowanceAgreementMerchandisingEventId',
    'PromotionFundId'
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
   * Promotion Fund Id.
   */
  declare promotionFundId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Allocation Percentage.
   */
  declare costAllocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link TradeAllowanceAgreementMerchandisingEvents} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEvent?: TradeAllowanceAgreementMerchandisingEvents<T> | null;
  /**
   * One-to-one navigation property to the {@link TradeAllowanceAgreementHeaders} entity.
   */
  declare tradeAllowanceAgreementHeader?: TradeAllowanceAgreementHeaders<T> | null;

  constructor(
    _entityApi: TradeAllowanceAgreementMerchandisingEventFundsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface TradeAllowanceAgreementMerchandisingEventFundsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  tradeAllowanceAgreementMerchandisingEventId: DeserializedType<
    T,
    'Edm.String'
  >;
  promotionFundId: DeserializedType<T, 'Edm.String'>;
  costAllocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  tradeAllowanceAgreementMerchandisingEvent?: TradeAllowanceAgreementMerchandisingEventsType<T> | null;
  tradeAllowanceAgreementHeader?: TradeAllowanceAgreementHeadersType<T> | null;
}
