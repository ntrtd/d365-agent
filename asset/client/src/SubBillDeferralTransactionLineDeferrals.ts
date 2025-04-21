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
import type { SubBillDeferralTransactionLineDeferralsApi } from './SubBillDeferralTransactionLineDeferralsApi';
import { NoYes } from './NoYes';
import { SubBillDeferralScheduleType } from './SubBillDeferralScheduleType';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { AccountOffsetaccount } from './AccountOffsetaccount';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "SubBillDeferralTransactionLineDeferrals" of service "d365_metadata".
 */
export class SubBillDeferralTransactionLineDeferrals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralTransactionLineDeferralsType<T>
{
  /**
   * Technical entity name for SubBillDeferralTransactionLineDeferrals.
   */
  static override _entityName = 'SubBillDeferralTransactionLineDeferrals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralTransactionLineDeferrals entity.
   */
  static _keys = [
    'dataAreaId',
    'LineNum',
    'SalesId',
    'Voucher',
    'TransactionLineDeferralRecId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Id.
   */
  declare salesId: DeserializedType<T, 'Edm.String'>;
  /**
   * Voucher.
   */
  declare voucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Line Deferral Rec Id.
   */
  declare transactionLineDeferralRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Recognition Offset Account.
   * @nullable
   */
  declare recognitionOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferral End Date.
   */
  declare deferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Schedule From Template.
   * @nullable
   */
  declare scheduleFromTemplate?: NoYes | null;
  /**
   * Override Start Date.
   * @nullable
   */
  declare overrideStartDate?: NoYes | null;
  /**
   * Consumption Initial Recognition Account.
   * @nullable
   */
  declare consumptionInitialRecognitionAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Event Based Template.
   * @nullable
   */
  declare eventBasedTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Recognition Offset Account.
   * @nullable
   */
  declare discountRecognitionOffsetAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consumption Recognition Account.
   * @nullable
   */
  declare consumptionRecognitionAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Short Term Account.
   * @nullable
   */
  declare shortTermAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Equal Per Period.
   * @nullable
   */
  declare equalPerPeriod?: NoYes | null;
  /**
   * Schedule Type.
   * @nullable
   */
  declare scheduleType?: SubBillDeferralScheduleType | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: SubBillDeferralTransactionType | null;
  /**
   * Discount Initial Recognition Account.
   * @nullable
   */
  declare discountInitialRecognitionAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Deferral Account.
   * @nullable
   */
  declare deferralAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Recognition Offset Account.
   * @nullable
   */
  declare consumptionRecognitionOffsetAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Recognition Account.
   * @nullable
   */
  declare recognitionAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Straight Line Template.
   * @nullable
   */
  declare straightLineTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Account Display Value.
   * @nullable
   */
  declare expirationAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Discount Short Term Account.
   * @nullable
   */
  declare discountShortTermAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Deferral Account.
   * @nullable
   */
  declare discountDeferralAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Deferral Account.
   * @nullable
   */
  declare consumptionDeferralAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferred.
   * @nullable
   */
  declare deferred?: NoYes | null;
  /**
   * Consolidate Prior Periods.
   * @nullable
   */
  declare consolidatePriorPeriods?: NoYes | null;
  /**
   * Initial Recognition Account.
   * @nullable
   */
  declare initialRecognitionAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Recognition Account.
   * @nullable
   */
  declare discountRecognitionAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Short Term Account.
   * @nullable
   */
  declare consumptionShortTermAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Deferral Start Date.
   */
  declare deferralStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Account Offsetaccount.
   * @nullable
   */
  declare accountOffsetaccount?: AccountOffsetaccount | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare subBillDeferralExpirationAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare subBillDeferralRecognitionAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare subBillDeferralConRecognitionAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare subBillDeferralDiscountRecognitionAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare subBillDeferralDiscountDeferralAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare subBillDeferralAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare subBillDeferralConDeferralAccountCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: SubBillDeferralTransactionLineDeferralsApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralTransactionLineDeferralsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  salesId: DeserializedType<T, 'Edm.String'>;
  voucher: DeserializedType<T, 'Edm.String'>;
  transactionLineDeferralRecId: DeserializedType<T, 'Edm.Int64'>;
  recognitionOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  deferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  scheduleFromTemplate?: NoYes | null;
  overrideStartDate?: NoYes | null;
  consumptionInitialRecognitionAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  eventBasedTemplate?: DeserializedType<T, 'Edm.String'> | null;
  discountRecognitionOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  consumptionRecognitionAccount?: DeserializedType<T, 'Edm.String'> | null;
  shortTermAccount?: DeserializedType<T, 'Edm.String'> | null;
  equalPerPeriod?: NoYes | null;
  scheduleType?: SubBillDeferralScheduleType | null;
  transactionType?: SubBillDeferralTransactionType | null;
  discountInitialRecognitionAccount?: DeserializedType<T, 'Edm.String'> | null;
  deferralAccount?: DeserializedType<T, 'Edm.String'> | null;
  consumptionRecognitionOffsetAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  recognitionAccount?: DeserializedType<T, 'Edm.String'> | null;
  straightLineTemplate?: DeserializedType<T, 'Edm.String'> | null;
  expirationAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  discountShortTermAccount?: DeserializedType<T, 'Edm.String'> | null;
  discountDeferralAccount?: DeserializedType<T, 'Edm.String'> | null;
  consumptionDeferralAccount?: DeserializedType<T, 'Edm.String'> | null;
  deferred?: NoYes | null;
  consolidatePriorPeriods?: NoYes | null;
  initialRecognitionAccount?: DeserializedType<T, 'Edm.String'> | null;
  discountRecognitionAccount?: DeserializedType<T, 'Edm.String'> | null;
  consumptionShortTermAccount?: DeserializedType<T, 'Edm.String'> | null;
  deferralStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountOffsetaccount?: AccountOffsetaccount | null;
  subBillDeferralExpirationAccountCombination?: DimensionCombinationsType<T> | null;
  subBillDeferralRecognitionAccountCombination?: DimensionCombinationsType<T> | null;
  subBillDeferralConRecognitionAccountCombination?: DimensionCombinationsType<T> | null;
  subBillDeferralDiscountRecognitionAccountCombination?: DimensionCombinationsType<T> | null;
  subBillDeferralDiscountDeferralAccountCombination?: DimensionCombinationsType<T> | null;
  subBillDeferralAccountCombination?: DimensionCombinationsType<T> | null;
  subBillDeferralConDeferralAccountCombination?: DimensionCombinationsType<T> | null;
}
