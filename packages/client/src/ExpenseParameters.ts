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
import type { ExpenseParametersApi } from './ExpenseParametersApi';
import { NoYes } from './NoYes';
import { TrvPerDiemCalculation } from './TrvPerDiemCalculation';
import { TrvPersonalPaidBy } from './TrvPersonalPaidBy';
import { TrvEvaluateExpensePolicies } from './TrvEvaluateExpensePolicies';
import { TrvPerDiemRounding } from './TrvPerDiemRounding';
import { TrvMealReductionType } from './TrvMealReductionType';

/**
 * This class represents the entity "ExpenseParameters" of service "d365_metadata".
 */
export class ExpenseParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpenseParametersType<T>
{
  /**
   * Technical entity name for ExpenseParameters.
   */
  static override _entityName = 'ExpenseParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Travel Requisition Mandatory For Expense.
   * @nullable
   */
  declare isTravelRequisitionMandatoryForExpense?: NoYes | null;
  /**
   * Per Diem Calculation.
   * @nullable
   */
  declare perDiemCalculation?: TrvPerDiemCalculation | null;
  /**
   * Personal Paid By.
   * @nullable
   */
  declare personalPaidBy?: TrvPersonalPaidBy | null;
  /**
   * Is Allow Update Accounting Date.
   * @nullable
   */
  declare isAllowUpdateAccountingDate?: NoYes | null;
  /**
   * Is Allow Submit Requisition On Budget Fail.
   * @nullable
   */
  declare isAllowSubmitRequisitionOnBudgetFail?: NoYes | null;
  /**
   * Other Reduction Def.
   */
  declare otherReductionDef: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Km Price.
   */
  declare kmPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Edit Distributions.
   * @nullable
   */
  declare allowEditDistributions?: NoYes | null;
  /**
   * Min Hours.
   */
  declare minHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deduct Lunch.
   */
  declare deductLunch: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Include User Id In Barcode.
   * @nullable
   */
  declare includeUserIdInBarcode?: NoYes | null;
  /**
   * Hotel Reduction Def.
   */
  declare hotelReductionDef: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Include Overview In Cover Page.
   * @nullable
   */
  declare includeOverviewInCoverPage?: NoYes | null;
  /**
   * Display Entire Expense On Drill Back.
   * @nullable
   */
  declare displayEntireExpenseOnDrillBack?: NoYes | null;
  /**
   * Deduct Breakf.
   */
  declare deductBreakf: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Enable Tax Recovery.
   * @nullable
   */
  declare enableTaxRecovery?: NoYes | null;
  /**
   * When To Evaluate Policy.
   * @nullable
   */
  declare whenToEvaluatePolicy?: TrvEvaluateExpensePolicies | null;
  /**
   * Is Allow Approve Expense On Budget Fail.
   * @nullable
   */
  declare isAllowApproveExpenseOnBudgetFail?: NoYes | null;
  /**
   * Bar Code Setup Id.
   * @nullable
   */
  declare barCodeSetupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Immediately.
   * @nullable
   */
  declare postImmediately?: NoYes | null;
  /**
   * Validate Travel Purpose.
   * @nullable
   */
  declare validateTravelPurpose?: NoYes | null;
  /**
   * Per Diem Rounding.
   * @nullable
   */
  declare perDiemRounding?: TrvPerDiemRounding | null;
  /**
   * Use Anti Corruption.
   * @nullable
   */
  declare useAntiCorruption?: NoYes | null;
  /**
   * Meal Reduction Def.
   */
  declare mealReductionDef: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Allow Submit Expense On Budget Fail.
   * @nullable
   */
  declare isAllowSubmitExpenseOnBudgetFail?: NoYes | null;
  /**
   * Use Inter Company Expense.
   * @nullable
   */
  declare useInterCompanyExpense?: NoYes | null;
  /**
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Included.
   * @nullable
   */
  declare taxIncluded?: NoYes | null;
  /**
   * Is Release Encumbrances On Close Requisition.
   * @nullable
   */
  declare isReleaseEncumbrancesOnCloseRequisition?: NoYes | null;
  /**
   * Deduct Dinner.
   */
  declare deductDinner: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Convert Pbs Exch To Internal.
   * @nullable
   */
  declare convertPbsExchToInternal?: NoYes | null;
  /**
   * Meal Reduction Type.
   * @nullable
   */
  declare mealReductionType?: TrvMealReductionType | null;
  /**
   * Allow Edit Credit Card Exch Rate.
   * @nullable
   */
  declare allowEditCreditCardExchRate?: NoYes | null;
  /**
   * Gl Work Sheet.
   * @nullable
   */
  declare glWorkSheet?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpenseParametersApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  isTravelRequisitionMandatoryForExpense?: NoYes | null;
  perDiemCalculation?: TrvPerDiemCalculation | null;
  personalPaidBy?: TrvPersonalPaidBy | null;
  isAllowUpdateAccountingDate?: NoYes | null;
  isAllowSubmitRequisitionOnBudgetFail?: NoYes | null;
  otherReductionDef: DeserializedType<T, 'Edm.Decimal'>;
  kmPrice: DeserializedType<T, 'Edm.Decimal'>;
  allowEditDistributions?: NoYes | null;
  minHours: DeserializedType<T, 'Edm.Decimal'>;
  deductLunch: DeserializedType<T, 'Edm.Decimal'>;
  includeUserIdInBarcode?: NoYes | null;
  hotelReductionDef: DeserializedType<T, 'Edm.Decimal'>;
  includeOverviewInCoverPage?: NoYes | null;
  displayEntireExpenseOnDrillBack?: NoYes | null;
  deductBreakf: DeserializedType<T, 'Edm.Decimal'>;
  enableTaxRecovery?: NoYes | null;
  whenToEvaluatePolicy?: TrvEvaluateExpensePolicies | null;
  isAllowApproveExpenseOnBudgetFail?: NoYes | null;
  barCodeSetupId?: DeserializedType<T, 'Edm.String'> | null;
  postImmediately?: NoYes | null;
  validateTravelPurpose?: NoYes | null;
  perDiemRounding?: TrvPerDiemRounding | null;
  useAntiCorruption?: NoYes | null;
  mealReductionDef: DeserializedType<T, 'Edm.Decimal'>;
  isAllowSubmitExpenseOnBudgetFail?: NoYes | null;
  useInterCompanyExpense?: NoYes | null;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  taxIncluded?: NoYes | null;
  isReleaseEncumbrancesOnCloseRequisition?: NoYes | null;
  deductDinner: DeserializedType<T, 'Edm.Decimal'>;
  convertPbsExchToInternal?: NoYes | null;
  mealReductionType?: TrvMealReductionType | null;
  allowEditCreditCardExchRate?: NoYes | null;
  glWorkSheet?: DeserializedType<T, 'Edm.String'> | null;
}
