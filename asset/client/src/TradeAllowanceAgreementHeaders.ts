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
import type { TradeAllowanceAgreementHeadersApi } from './TradeAllowanceAgreementHeadersApi';
import { NoYes } from './NoYes';
import { TamStatus } from './TamStatus';
import { TamPromoMgmtApprovalStatus } from './TamPromoMgmtApprovalStatus';
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
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import { Currencies, CurrenciesType } from './Currencies';
import { Workers, WorkersType } from './Workers';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import {
  TradeAllowanceAgreementFunds,
  TradeAllowanceAgreementFundsType
} from './TradeAllowanceAgreementFunds';
import {
  TradeAllowanceAgreementMerchandisingEventProductsV2,
  TradeAllowanceAgreementMerchandisingEventProductsV2Type
} from './TradeAllowanceAgreementMerchandisingEventProductsV2';
import {
  TradeAllowanceAgreementProductsV2,
  TradeAllowanceAgreementProductsV2Type
} from './TradeAllowanceAgreementProductsV2';
import {
  TradeAllowanceAgreementMerchandisingEvents,
  TradeAllowanceAgreementMerchandisingEventsType
} from './TradeAllowanceAgreementMerchandisingEvents';
import {
  TradeAllowanceAgreementProducts,
  TradeAllowanceAgreementProductsType
} from './TradeAllowanceAgreementProducts';

/**
 * This class represents the entity "TradeAllowanceAgreementHeaders" of service "d365_metadata".
 */
export class TradeAllowanceAgreementHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TradeAllowanceAgreementHeadersType<T>
{
  /**
   * Technical entity name for TradeAllowanceAgreementHeaders.
   */
  static override _entityName = 'TradeAllowanceAgreementHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TradeAllowanceAgreementHeaders entity.
   */
  static _keys = ['dataAreaId', 'AgreementId', 'CustomerAccountNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Agreement Id.
   */
  declare agreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account Number.
   */
  declare customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * From Requested Ship Date.
   */
  declare fromRequestedShipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Owning Worker Personnel Number.
   * @nullable
   */
  declare owningWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Promotion Lift Percentage.
   */
  declare promotionLiftPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Promotion Cost Amount.
   */
  declare promotionCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trade Allowance Agreement Period Name.
   * @nullable
   */
  declare tradeAllowanceAgreementPeriodName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * To Lump Sum Payout Date.
   */
  declare toLumpSumPayoutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Base Quantity Unit Symbol.
   * @nullable
   */
  declare baseQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Currency Code.
   * @nullable
   */
  declare agreementCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Quantity.
   */
  declare baseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Agreement Details.
   * @nullable
   */
  declare agreementDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Base Quantity Overridden.
   * @nullable
   */
  declare isBaseQuantityOverridden?: NoYes | null;
  /**
   * Agreement Status.
   * @nullable
   */
  declare agreementStatus?: TamStatus | null;
  /**
   * To Requested Receipt Date.
   */
  declare toRequestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Requested Ship Date.
   */
  declare toRequestedShipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Agreement Description.
   * @nullable
   */
  declare agreementDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Approval Status.
   * @nullable
   */
  declare workflowApprovalStatus?: TamPromoMgmtApprovalStatus | null;
  /**
   * From Requested Receipt Date.
   */
  declare fromRequestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * From Order Date.
   */
  declare fromOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * From Lump Sum Payout Date.
   */
  declare fromLumpSumPayoutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Order Date.
   */
  declare toOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Marketing Objective Code.
   * @nullable
   */
  declare marketingObjectiveCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected Promotional Quantity.
   */
  declare expectedPromotionalQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventFunds} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventFunds: TradeAllowanceAgreementMerchandisingEventFunds<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventLumpSums} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventLumpSums: TradeAllowanceAgreementMerchandisingEventLumpSums<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventBillBacks} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventBillBacks: TradeAllowanceAgreementMerchandisingEventBillBacks<T>[];
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare unitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare customer?: CustomersV3<T> | null;
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementFunds} entity.
   */
  declare tradeAllowanceAgreementFunds: TradeAllowanceAgreementFunds<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventProductsV2} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventProductsV2: TradeAllowanceAgreementMerchandisingEventProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementProductsV2} entity.
   */
  declare tradeAllowanceAgreementProductsV2: TradeAllowanceAgreementProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEvents} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEvents: TradeAllowanceAgreementMerchandisingEvents<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementProducts} entity.
   */
  declare tradeAllowanceAgreementProducts: TradeAllowanceAgreementProducts<T>[];

  constructor(_entityApi: TradeAllowanceAgreementHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface TradeAllowanceAgreementHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  agreementId: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  fromRequestedShipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  owningWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  promotionLiftPercentage: DeserializedType<T, 'Edm.Decimal'>;
  promotionCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  tradeAllowanceAgreementPeriodName?: DeserializedType<T, 'Edm.String'> | null;
  toLumpSumPayoutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  baseQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  agreementCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  baseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  agreementDetails?: DeserializedType<T, 'Edm.String'> | null;
  isBaseQuantityOverridden?: NoYes | null;
  agreementStatus?: TamStatus | null;
  toRequestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toRequestedShipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  agreementDescription?: DeserializedType<T, 'Edm.String'> | null;
  workflowApprovalStatus?: TamPromoMgmtApprovalStatus | null;
  fromRequestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fromOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fromLumpSumPayoutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  marketingObjectiveCode?: DeserializedType<T, 'Edm.String'> | null;
  expectedPromotionalQuantity: DeserializedType<T, 'Edm.Decimal'>;
  tradeAllowanceAgreementMerchandisingEventFunds: TradeAllowanceAgreementMerchandisingEventFundsType<T>[];
  tradeAllowanceAgreementMerchandisingEventLumpSums: TradeAllowanceAgreementMerchandisingEventLumpSumsType<T>[];
  tradeAllowanceAgreementMerchandisingEventBillBacks: TradeAllowanceAgreementMerchandisingEventBillBacksType<T>[];
  unitOfMeasure?: UnitsOfMeasureType<T> | null;
  currency?: CurrenciesType<T> | null;
  worker?: WorkersType<T> | null;
  customer?: CustomersV3Type<T> | null;
  tradeAllowanceAgreementFunds: TradeAllowanceAgreementFundsType<T>[];
  tradeAllowanceAgreementMerchandisingEventProductsV2: TradeAllowanceAgreementMerchandisingEventProductsV2Type<T>[];
  tradeAllowanceAgreementProductsV2: TradeAllowanceAgreementProductsV2Type<T>[];
  tradeAllowanceAgreementMerchandisingEvents: TradeAllowanceAgreementMerchandisingEventsType<T>[];
  tradeAllowanceAgreementProducts: TradeAllowanceAgreementProductsType<T>[];
}
