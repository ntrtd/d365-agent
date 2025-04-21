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
import type { CreditManagementParametersApi } from './CreditManagementParametersApi';
import { NoYes } from './NoYes';
import { DateTransactionDuedate } from './DateTransactionDuedate';
import { CredManBlockingCalcBase } from './CredManBlockingCalcBase';
import { CredManAutoPost } from './CredManAutoPost';

/**
 * This class represents the entity "CreditManagementParameters" of service "d365_metadata".
 */
export class CreditManagementParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CreditManagementParametersType<T>
{
  /**
   * Technical entity name for CreditManagementParameters.
   */
  static override _entityName = 'CreditManagementParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CreditManagementParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Id.
   * @nullable
   */
  declare periodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Credit Limit With Post Load Validation.
   * @nullable
   */
  declare checkCreditLimitWithPostLoadValidation?: NoYes | null;
  /**
   * Credit Limit Allow Manual Editing.
   * @nullable
   */
  declare creditLimitAllowManualEditing?: NoYes | null;
  /**
   * Target Date Transaction Due Date.
   * @nullable
   */
  declare targetDateTransactionDueDate?: DateTransactionDuedate | null;
  /**
   * Cod Paym Term.
   * @nullable
   */
  declare codPaymTerm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Target Ageing.
   * @nullable
   */
  declare targetAgeing?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Margin Category Hierarchy Name.
   * @nullable
   */
  declare marginCategoryHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Release Reason Ready.
   * @nullable
   */
  declare releaseReasonReady?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period From.
   */
  declare periodFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Avg Bal One Month.
   */
  declare avgBalOneMonth: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Release Reason Cancel.
   * @nullable
   */
  declare releaseReasonCancel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check At Picking List.
   * @nullable
   */
  declare checkAtPickingList?: NoYes | null;
  /**
   * Skip Credit Check When Reducing Packing Slip.
   * @nullable
   */
  declare skipCreditCheckWhenReducingPackingSlip?: NoYes | null;
  /**
   * Skip Credit Check.
   * @nullable
   */
  declare skipCreditCheck?: NoYes | null;
  /**
   * Cross Company Credit Check.
   * @nullable
   */
  declare crossCompanyCreditCheck?: NoYes | null;
  /**
   * Exclude Sales Order Less Than.
   */
  declare excludeSalesOrderLessThan: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Day Sales Outstanding Two.
   */
  declare daySalesOutstandingTwo: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Allow Confirmation.
   * @nullable
   */
  declare allowConfirmation?: NoYes | null;
  /**
   * Day Sales Outstanding One.
   */
  declare daySalesOutstandingOne: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Skip Credit Check When Canceling Packing Slip.
   * @nullable
   */
  declare skipCreditCheckWhenCancelingPackingSlip?: NoYes | null;
  /**
   * Exclude Account Less Than.
   */
  declare excludeAccountLessThan: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exclude Credit Balance.
   * @nullable
   */
  declare excludeCreditBalance?: NoYes | null;
  /**
   * Credit Limit Exch Rate Type Name.
   * @nullable
   */
  declare creditLimitExchRateTypeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Avg Credit Limit Percent Months.
   */
  declare avgCreditLimitPercentMonths: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Release Reason Order Modified.
   * @nullable
   */
  declare releaseReasonOrderModified?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Paym Term Increase.
   * @nullable
   */
  declare checkPaymTermIncrease?: NoYes | null;
  /**
   * Blocking Calc Base.
   * @nullable
   */
  declare blockingCalcBase?: CredManBlockingCalcBase | null;
  /**
   * Delete Blocked Load Lines.
   * @nullable
   */
  declare deleteBlockedLoadLines?: NoYes | null;
  /**
   * Check Cash Disc Increase.
   * @nullable
   */
  declare checkCashDiscIncrease?: NoYes | null;
  /**
   * Exclude Overdue Less Than.
   */
  declare excludeOverdueLessThan: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Avg Bal Two Months.
   */
  declare avgBalTwoMonths: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Allow Blank Credit Limit Expiry Date.
   * @nullable
   */
  declare allowBlankCreditLimitExpiryDate?: NoYes | null;
  /**
   * Avg Exposure Percent Months.
   */
  declare avgExposurePercentMonths: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period To.
   */
  declare periodTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Auto Post.
   * @nullable
   */
  declare autoPost?: CredManAutoPost | null;
  /**
   * Allow Edit Sales Order.
   * @nullable
   */
  declare allowEditSalesOrder?: NoYes | null;

  constructor(_entityApi: CreditManagementParametersApi<T>) {
    super(_entityApi);
  }
}

export interface CreditManagementParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  periodId?: DeserializedType<T, 'Edm.String'> | null;
  checkCreditLimitWithPostLoadValidation?: NoYes | null;
  creditLimitAllowManualEditing?: NoYes | null;
  targetDateTransactionDueDate?: DateTransactionDuedate | null;
  codPaymTerm?: DeserializedType<T, 'Edm.String'> | null;
  targetAgeing?: DeserializedType<T, 'Edm.String'> | null;
  marginCategoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  releaseReasonReady?: DeserializedType<T, 'Edm.String'> | null;
  periodFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  avgBalOneMonth: DeserializedType<T, 'Edm.Int32'>;
  releaseReasonCancel?: DeserializedType<T, 'Edm.String'> | null;
  checkAtPickingList?: NoYes | null;
  skipCreditCheckWhenReducingPackingSlip?: NoYes | null;
  skipCreditCheck?: NoYes | null;
  crossCompanyCreditCheck?: NoYes | null;
  excludeSalesOrderLessThan: DeserializedType<T, 'Edm.Decimal'>;
  daySalesOutstandingTwo: DeserializedType<T, 'Edm.Int32'>;
  allowConfirmation?: NoYes | null;
  daySalesOutstandingOne: DeserializedType<T, 'Edm.Int32'>;
  skipCreditCheckWhenCancelingPackingSlip?: NoYes | null;
  excludeAccountLessThan: DeserializedType<T, 'Edm.Decimal'>;
  excludeCreditBalance?: NoYes | null;
  creditLimitExchRateTypeName?: DeserializedType<T, 'Edm.String'> | null;
  avgCreditLimitPercentMonths: DeserializedType<T, 'Edm.Int32'>;
  releaseReasonOrderModified?: DeserializedType<T, 'Edm.String'> | null;
  checkPaymTermIncrease?: NoYes | null;
  blockingCalcBase?: CredManBlockingCalcBase | null;
  deleteBlockedLoadLines?: NoYes | null;
  checkCashDiscIncrease?: NoYes | null;
  excludeOverdueLessThan: DeserializedType<T, 'Edm.Decimal'>;
  avgBalTwoMonths: DeserializedType<T, 'Edm.Int32'>;
  allowBlankCreditLimitExpiryDate?: NoYes | null;
  avgExposurePercentMonths: DeserializedType<T, 'Edm.Int32'>;
  periodTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  autoPost?: CredManAutoPost | null;
  allowEditSalesOrder?: NoYes | null;
}
