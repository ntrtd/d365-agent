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
import type { TradeAllowanceAgreementMerchandisingEventBillBacksApi } from './TradeAllowanceAgreementMerchandisingEventBillBacksApi';
import { PdsUnitType } from './PdsUnitType';
import { PdsRebateCalcDateType } from './PdsRebateCalcDateType';
import { NoYes } from './NoYes';
import { PdsRebateUomOption } from './PdsRebateUomOption';
import { PdsCumulationPeriod } from './PdsCumulationPeriod';
import { PdsRebateLineBreakType } from './PdsRebateLineBreakType';
import { PdsRebateTakenFrom } from './PdsRebateTakenFrom';
import {
  TradeAllowanceAgreementMerchandisingEventBillBackLines,
  TradeAllowanceAgreementMerchandisingEventBillBackLinesType
} from './TradeAllowanceAgreementMerchandisingEventBillBackLines';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  TradeAllowanceAgreementMerchandisingEvents,
  TradeAllowanceAgreementMerchandisingEventsType
} from './TradeAllowanceAgreementMerchandisingEvents';
import {
  TradeAllowanceAgreementHeaders,
  TradeAllowanceAgreementHeadersType
} from './TradeAllowanceAgreementHeaders';

/**
 * This class represents the entity "TradeAllowanceAgreementMerchandisingEventBillBacks" of service "d365_metadata".
 */
export class TradeAllowanceAgreementMerchandisingEventBillBacks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TradeAllowanceAgreementMerchandisingEventBillBacksType<T>
{
  /**
   * Technical entity name for TradeAllowanceAgreementMerchandisingEventBillBacks.
   */
  static override _entityName =
    'TradeAllowanceAgreementMerchandisingEventBillBacks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TradeAllowanceAgreementMerchandisingEventBillBacks entity.
   */
  static _keys = [
    'dataAreaId',
    'TradeAllowanceAgreementId',
    'CustomerAccountNumber',
    'TradeAllowanceAgreementMerchandisingEventId',
    'BillBackId'
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
   * Bill Back Id.
   */
  declare billBackId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bill Back Quantity Type.
   * @nullable
   */
  declare billBackQuantityType?: PdsUnitType | null;
  /**
   * Sales Cumulation Method Customized Period Type.
   * @nullable
   */
  declare salesCumulationMethodCustomizedPeriodType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Expense Main Account Id Display Value.
   * @nullable
   */
  declare expenseMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Calculation Search Date Type.
   * @nullable
   */
  declare calculationSearchDateType?: PdsRebateCalcDateType | null;
  /**
   * Sales Rebate Program Type Id.
   * @nullable
   */
  declare salesRebateProgramTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Bill Back Quantity Qualifying Rebate.
   */
  declare minimumBillBackQuantityQualifyingRebate: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Is Approval Required.
   * @nullable
   */
  declare isApprovalRequired?: NoYes | null;
  /**
   * Is Taxable.
   * @nullable
   */
  declare isTaxable?: NoYes | null;
  /**
   * Bill Back Unit Symbol.
   * @nullable
   */
  declare billBackUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill Back Amount Calculation Option.
   * @nullable
   */
  declare billBackAmountCalculationOption?: PdsRebateUomOption | null;
  /**
   * Accrual Main Account Id Display Value.
   * @nullable
   */
  declare accrualMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Minimum Bill Back Amount Qualifying Rebate.
   */
  declare minimumBillBackAmountQualifyingRebate: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Sales Cumulation Method.
   * @nullable
   */
  declare salesCumulationMethod?: PdsCumulationPeriod | null;
  /**
   * Rebate Break Basis.
   * @nullable
   */
  declare rebateBreakBasis?: PdsRebateLineBreakType | null;
  /**
   * Line Amount Basis.
   * @nullable
   */
  declare lineAmountBasis?: PdsRebateTakenFrom | null;
  /**
   * Bill Back Claim Vendor Account Number.
   * @nullable
   */
  declare billBackClaimVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventBillBackLines} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventBillBackLines: TradeAllowanceAgreementMerchandisingEventBillBackLines<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare expenseMainAccount?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare accrualMainAccount?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link TradeAllowanceAgreementMerchandisingEvents} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEvent?: TradeAllowanceAgreementMerchandisingEvents<T> | null;
  /**
   * One-to-one navigation property to the {@link TradeAllowanceAgreementHeaders} entity.
   */
  declare tradeAllowanceAgreementHeader?: TradeAllowanceAgreementHeaders<T> | null;

  constructor(
    _entityApi: TradeAllowanceAgreementMerchandisingEventBillBacksApi<T>
  ) {
    super(_entityApi);
  }
}

export interface TradeAllowanceAgreementMerchandisingEventBillBacksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  tradeAllowanceAgreementMerchandisingEventId: DeserializedType<
    T,
    'Edm.String'
  >;
  billBackId: DeserializedType<T, 'Edm.String'>;
  billBackQuantityType?: PdsUnitType | null;
  salesCumulationMethodCustomizedPeriodType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  expenseMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  calculationSearchDateType?: PdsRebateCalcDateType | null;
  salesRebateProgramTypeId?: DeserializedType<T, 'Edm.String'> | null;
  minimumBillBackQuantityQualifyingRebate: DeserializedType<T, 'Edm.Int32'>;
  isApprovalRequired?: NoYes | null;
  isTaxable?: NoYes | null;
  billBackUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  billBackAmountCalculationOption?: PdsRebateUomOption | null;
  accrualMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  minimumBillBackAmountQualifyingRebate: DeserializedType<T, 'Edm.Decimal'>;
  salesCumulationMethod?: PdsCumulationPeriod | null;
  rebateBreakBasis?: PdsRebateLineBreakType | null;
  lineAmountBasis?: PdsRebateTakenFrom | null;
  billBackClaimVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  tradeAllowanceAgreementMerchandisingEventBillBackLines: TradeAllowanceAgreementMerchandisingEventBillBackLinesType<T>[];
  expenseMainAccount?: DimensionCombinationsType<T> | null;
  accrualMainAccount?: DimensionCombinationsType<T> | null;
  tradeAllowanceAgreementMerchandisingEvent?: TradeAllowanceAgreementMerchandisingEventsType<T> | null;
  tradeAllowanceAgreementHeader?: TradeAllowanceAgreementHeadersType<T> | null;
}
