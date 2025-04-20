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
import type { TradeAllowanceAgreementMerchandisingEventBillBackLinesApi } from './TradeAllowanceAgreementMerchandisingEventBillBackLinesApi';
import { PdsRebateAmtType } from './PdsRebateAmtType';
import {
  TradeAllowanceAgreementMerchandisingEventBillBacks,
  TradeAllowanceAgreementMerchandisingEventBillBacksType
} from './TradeAllowanceAgreementMerchandisingEventBillBacks';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import { Currencies, CurrenciesType } from './Currencies';

/**
 * This class represents the entity "TradeAllowanceAgreementMerchandisingEventBillBackLines" of service "d365_metadata".
 */
export class TradeAllowanceAgreementMerchandisingEventBillBackLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TradeAllowanceAgreementMerchandisingEventBillBackLinesType<T>
{
  /**
   * Technical entity name for TradeAllowanceAgreementMerchandisingEventBillBackLines.
   */
  static override _entityName =
    'TradeAllowanceAgreementMerchandisingEventBillBackLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TradeAllowanceAgreementMerchandisingEventBillBackLines entity.
   */
  static _keys = [
    'dataAreaId',
    'TradeAllowanceAgreementId',
    'CustomerAccountNumber',
    'TradeAllowanceAgreementMerchandisingEventId',
    'TradeAllowanceAgreementMerchandisingEventBillBackId',
    'LineNumber'
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
   * Trade Allowance Agreement Merchandising Event Bill Back Id.
   */
  declare tradeAllowanceAgreementMerchandisingEventBillBackId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * From Bill Back Quantity.
   */
  declare fromBillBackQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bill Back Amount Currency Code.
   * @nullable
   */
  declare billBackAmountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill Back Quantity Unit Symbol.
   * @nullable
   */
  declare billBackQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill Back Amount Type.
   * @nullable
   */
  declare billBackAmountType?: PdsRebateAmtType | null;
  /**
   * To Bill Back Quantity.
   */
  declare toBillBackQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bill Back Amount.
   */
  declare billBackAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link TradeAllowanceAgreementMerchandisingEventBillBacks} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventBillBack?: TradeAllowanceAgreementMerchandisingEventBillBacks<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare billBackQuantityUnitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare billBackAmountCurrency?: Currencies<T> | null;

  constructor(
    _entityApi: TradeAllowanceAgreementMerchandisingEventBillBackLinesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface TradeAllowanceAgreementMerchandisingEventBillBackLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  tradeAllowanceAgreementMerchandisingEventId: DeserializedType<
    T,
    'Edm.String'
  >;
  tradeAllowanceAgreementMerchandisingEventBillBackId: DeserializedType<
    T,
    'Edm.String'
  >;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  fromBillBackQuantity: DeserializedType<T, 'Edm.Decimal'>;
  billBackAmountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  billBackQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  billBackAmountType?: PdsRebateAmtType | null;
  toBillBackQuantity: DeserializedType<T, 'Edm.Decimal'>;
  billBackAmount: DeserializedType<T, 'Edm.Decimal'>;
  tradeAllowanceAgreementMerchandisingEventBillBack?: TradeAllowanceAgreementMerchandisingEventBillBacksType<T> | null;
  billBackQuantityUnitOfMeasure?: UnitsOfMeasureType<T> | null;
  billBackAmountCurrency?: CurrenciesType<T> | null;
}
