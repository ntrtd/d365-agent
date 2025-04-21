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
import type { SubBillDetailLineBiEntitiesApi } from './SubBillDetailLineBiEntitiesApi';
import { NoYes } from './NoYes';
import { SubBillMarkdownType } from './SubBillMarkdownType';
import { SubBillCreditDeferralAdjMethod } from './SubBillCreditDeferralAdjMethod';

/**
 * This class represents the entity "SubBillDetailLineBiEntities" of service "d365_metadata".
 */
export class SubBillDetailLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDetailLineBiEntitiesType<T>
{
  /**
   * Technical entity name for SubBillDetailLineBiEntities.
   */
  static override _entityName = 'SubBillDetailLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDetailLineBiEntities entity.
   */
  static _keys = ['dataAreaId', 'LineNum', 'SubBillSchedLineRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Sched Line Rec Id.
   */
  declare subBillSchedLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Deferral End Date.
   */
  declare subBillDeferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sub Bill Markdown Percentage.
   */
  declare subBillMarkdownPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Start Date.
   */
  declare subBillStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Text Comments.
   * @nullable
   */
  declare subBillTextComments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Period Revenue.
   */
  declare subBillPeriodRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Proj Proposal Id.
   * @nullable
   */
  declare subBillProjProposalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Min Max Committed.
   */
  declare subBillMinMaxCommitted: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Markdown Amount.
   */
  declare subBillMarkdownAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Free Text Line Rec Id.
   */
  declare subBillFreeTextLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Consumed Qty.
   */
  declare subBillConsumedQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Deferral Start Date.
   */
  declare subBillDeferralStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Line Rec Id.
   */
  declare salesLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill Resume Hold Line.
   * @nullable
   */
  declare subBillResumeHoldLine?: NoYes | null;
  /**
   * Sub Bill Auto Renewal Partial Line.
   * @nullable
   */
  declare subBillAutoRenewalPartialLine?: NoYes | null;
  /**
   * Sub Bill Orig Support.
   * @nullable
   */
  declare subBillOrigSupport?: NoYes | null;
  /**
   * Sub Bill End Date.
   */
  declare subBillEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sub Bill Termination Credit Line.
   * @nullable
   */
  declare subBillTerminationCreditLine?: NoYes | null;
  /**
   * Sub Bill Free Text Rec Id.
   */
  declare subBillFreeTextRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sub Bill Mea Def Rev Amount.
   */
  declare subBillMeaDefRevAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Estimated Qty.
   */
  declare subBillEstimatedQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Current Reading.
   */
  declare subBillCurrentReading: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Free Qty.
   */
  declare subBillFreeQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Invoice Trans Rec Id.
   */
  declare custInvoiceTransRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Comments.
   * @nullable
   */
  declare subBillComments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sub Bill System Created.
   * @nullable
   */
  declare subBillSystemCreated?: NoYes | null;
  /**
   * Sub Bill Proj Invoice Item Rec Id.
   */
  declare subBillProjInvoiceItemRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Unit.
   * @nullable
   */
  declare salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Markdown Type.
   * @nullable
   */
  declare subBillMarkdownType?: SubBillMarkdownType | null;
  /**
   * Sub Bill Unbilled Adjustment Journal Num.
   * @nullable
   */
  declare subBillUnbilledAdjustmentJournalNum?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Trade Agreement Discount Amount.
   */
  declare tradeAgreementDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Line Amount.
   */
  declare salesLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Billed.
   * @nullable
   */
  declare subBillBilled?: NoYes | null;
  /**
   * Sales Agreement Discount Amount.
   */
  declare salesAgreementDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Credit Deferral Adj Method.
   * @nullable
   */
  declare subBillCreditDeferralAdjMethod?: SubBillCreditDeferralAdjMethod | null;
  /**
   * Sub Bill Billable Qty.
   */
  declare subBillBillableQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Prorate Termination Daily.
   * @nullable
   */
  declare subBillProrateTerminationDaily?: NoYes | null;

  constructor(_entityApi: SubBillDetailLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDetailLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  subBillSchedLineRecId: DeserializedType<T, 'Edm.Int64'>;
  subBillDeferralEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subBillMarkdownPercentage: DeserializedType<T, 'Edm.Decimal'>;
  subBillStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  subBillTextComments?: DeserializedType<T, 'Edm.String'> | null;
  subBillPeriodRevenue: DeserializedType<T, 'Edm.Decimal'>;
  subBillProjProposalId?: DeserializedType<T, 'Edm.String'> | null;
  subBillMinMaxCommitted: DeserializedType<T, 'Edm.Decimal'>;
  subBillMarkdownAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  subBillFreeTextLineRecId: DeserializedType<T, 'Edm.Int64'>;
  subBillConsumedQty: DeserializedType<T, 'Edm.Decimal'>;
  subBillDeferralStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesLineRecId: DeserializedType<T, 'Edm.Int64'>;
  subBillResumeHoldLine?: NoYes | null;
  subBillAutoRenewalPartialLine?: NoYes | null;
  subBillOrigSupport?: NoYes | null;
  subBillEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subBillTerminationCreditLine?: NoYes | null;
  subBillFreeTextRecId: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  subBillMeaDefRevAmount: DeserializedType<T, 'Edm.Decimal'>;
  subBillEstimatedQty: DeserializedType<T, 'Edm.Decimal'>;
  subBillCurrentReading: DeserializedType<T, 'Edm.Decimal'>;
  subBillFreeQty: DeserializedType<T, 'Edm.Decimal'>;
  custInvoiceTransRecId: DeserializedType<T, 'Edm.Int64'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  subBillComments?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  subBillSystemCreated?: NoYes | null;
  subBillProjInvoiceItemRecId: DeserializedType<T, 'Edm.Int64'>;
  salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  subBillMarkdownType?: SubBillMarkdownType | null;
  subBillUnbilledAdjustmentJournalNum?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  tradeAgreementDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  subBillBilled?: NoYes | null;
  salesAgreementDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  subBillCreditDeferralAdjMethod?: SubBillCreditDeferralAdjMethod | null;
  subBillBillableQty: DeserializedType<T, 'Edm.Decimal'>;
  subBillProrateTerminationDaily?: NoYes | null;
}
