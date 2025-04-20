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
import type { ProjectParameterEntitiesApi } from './ProjectParameterEntitiesApi';
import { NoYes } from './NoYes';
import { TsManualAutomatic } from './TsManualAutomatic';
import { ProjLineTotal } from './ProjLineTotal';
import { ProjReduceCostPriority } from './ProjReduceCostPriority';
import { TsFieldVisibility } from './TsFieldVisibility';
import { ProjValParameter } from './ProjValParameter';
import { ErrorTolerance } from './ErrorTolerance';
import { ProjProdPostingTypeSetup } from './ProjProdPostingTypeSetup';
import { ProjBudgetaryControlOn } from './ProjBudgetaryControlOn';
import { WeekDays } from './WeekDays';
import { DetailSummary } from './DetailSummary';
import { MspIntegrationType } from './MspIntegrationType';
import { ProjGrossMarginDisplay } from './ProjGrossMarginDisplay';
import { ProjType } from './ProjType';
import { ProjTaxGroupMethod } from './ProjTaxGroupMethod';
import { ProjBudgetManagement } from './ProjBudgetManagement';
import { CreditLineErrorType } from './CreditLineErrorType';
import { PriceAmount } from './PriceAmount';
import { ProjBudgetOverrunOption } from './ProjBudgetOverrunOption';
import { ProjCostControlMethod } from './ProjCostControlMethod';
import { TaxCalculationProjDateType } from './TaxCalculationProjDateType';
import { FirstLast } from './FirstLast';
import { ProjValueAddedDisplay } from './ProjValueAddedDisplay';
import { ProjTaxItemGroupMethod } from './ProjTaxItemGroupMethod';
import { ProjBudgetInterval } from './ProjBudgetInterval';
import { TsVoucherDateChange } from './TsVoucherDateChange';

/**
 * This class represents the entity "ProjectParameterEntities" of service "d365_metadata".
 */
export class ProjectParameterEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectParameterEntitiesType<T>
{
  /**
   * Technical entity name for ProjectParameterEntities.
   */
  static override _entityName = 'ProjectParameterEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectParameterEntities entity.
   */
  static _keys = ['dataAreaId', 'ID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invoiced.
   * @nullable
   */
  declare invoiced?: NoYes | null;
  /**
   * Approved Timesheet Posting.
   * @nullable
   */
  declare approvedTimesheetPosting?: TsManualAutomatic | null;
  /**
   * Is Budget Control Outside The Project Hierarchy Allowed.
   * @nullable
   */
  declare isBudgetControlOutsideTheProjectHierarchyAllowed?: NoYes | null;
  /**
   * No One Time Customers For Project Contracts.
   * @nullable
   */
  declare noOneTimeCustomersForProjectContracts?: NoYes | null;
  /**
   * User Group.
   * @nullable
   */
  declare userGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terms Of Payment For Hours.
   * @nullable
   */
  declare termsOfPaymentForHours?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subscription.
   * @nullable
   */
  declare subscription?: ProjLineTotal | null;
  /**
   * Purchase Requisition.
   * @nullable
   */
  declare purchaseRequisition?: NoYes | null;
  /**
   * Contract Line Based Revenue Recognition.
   * @nullable
   */
  declare contractLineBasedRevenueRecognition?: NoYes | null;
  /**
   * Default Category Item.
   * @nullable
   */
  declare defaultCategoryItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Requirement.
   * @nullable
   */
  declare minimumRequirement?: ProjReduceCostPriority | null;
  /**
   * Prompt For Customer Information On Project.
   * @nullable
   */
  declare promptForCustomerInformationOnProject?: NoYes | null;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Automatically Set Accounting Date To Open Ledger Period.
   * @nullable
   */
  declare automaticallySetAccountingDateToOpenLedgerPeriod?: NoYes | null;
  /**
   * Hide Activity.
   * @nullable
   */
  declare hideActivity?: NoYes | null;
  /**
   * Expense Reduce Cost Priority 2.
   * @nullable
   */
  declare expenseReduceCostPriority2?: ProjReduceCostPriority | null;
  /**
   * Time Service Visibility Category.
   * @nullable
   */
  declare timeServiceVisibilityCategory?: TsFieldVisibility | null;
  /**
   * Item Journal.
   * @nullable
   */
  declare itemJournal?: NoYes | null;
  /**
   * Vendor Invoice.
   * @nullable
   */
  declare vendorInvoice?: NoYes | null;
  /**
   * Hour Reduce Cost Priority 2.
   * @nullable
   */
  declare hourReduceCostPriority2?: ProjReduceCostPriority | null;
  /**
   * Hour Reduce Cost Priority 3.
   * @nullable
   */
  declare hourReduceCostPriority3?: ProjReduceCostPriority | null;
  /**
   * Forecast Model.
   * @nullable
   */
  declare forecastModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hour Reduce Cost Priority 1.
   * @nullable
   */
  declare hourReduceCostPriority1?: ProjReduceCostPriority | null;
  /**
   * Value Added Decimals.
   */
  declare valueAddedDecimals: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Hour Reduce Cost Priority 4.
   * @nullable
   */
  declare hourReduceCostPriority4?: ProjReduceCostPriority | null;
  /**
   * Hour Reduce Cost Priority 5.
   * @nullable
   */
  declare hourReduceCostPriority5?: ProjReduceCostPriority | null;
  /**
   * Expense Journal Name Id.
   * @nullable
   */
  declare expenseJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Subproject Id Format.
   * @nullable
   */
  declare defaultSubprojectIdFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validation Worker Category.
   * @nullable
   */
  declare validationWorkerCategory?: ProjValParameter | null;
  /**
   * Is Hour Quantity In Consumption Statement Included.
   * @nullable
   */
  declare isHourQuantityInConsumptionStatementIncluded?: NoYes | null;
  /**
   * Default Journal Names Hour.
   * @nullable
   */
  declare defaultJournalNamesHour?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Report.
   * @nullable
   */
  declare expenseReport?: NoYes | null;
  /**
   * Internal Cost Efficiency.
   * @nullable
   */
  declare internalCostEfficiency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Estimate Posting Tolerance.
   * @nullable
   */
  declare totalEstimatePostingTolerance?: ErrorTolerance | null;
  /**
   * Default Working Calendar.
   * @nullable
   */
  declare defaultWorkingCalendar?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Price Efficiency.
   * @nullable
   */
  declare fixedPriceEfficiency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Beginning Balances.
   * @nullable
   */
  declare beginningBalances?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Service Visibility Item Sales Tax Group.
   * @nullable
   */
  declare timeServiceVisibilityItemSalesTaxGroup?: TsFieldVisibility | null;
  /**
   * Posting Method.
   * @nullable
   */
  declare postingMethod?: ProjProdPostingTypeSetup | null;
  /**
   * Is Allocation Settings Locked.
   * @nullable
   */
  declare isAllocationSettingsLocked?: NoYes | null;
  /**
   * Transaction Types Controlled.
   * @nullable
   */
  declare transactionTypesControlled?: ProjBudgetaryControlOn | null;
  /**
   * Actual Cost After Estimate Date.
   * @nullable
   */
  declare actualCostAfterEstimateDate?: NoYes | null;
  /**
   * Is Activity Expense Journal Required.
   * @nullable
   */
  declare isActivityExpenseJournalRequired?: NoYes | null;
  /**
   * Fixed Price Billable.
   * @nullable
   */
  declare fixedPriceBillable?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Autoupdate Field.
   * @nullable
   */
  declare isAutoupdateField?: NoYes | null;
  /**
   * Hide Category.
   * @nullable
   */
  declare hideCategory?: NoYes | null;
  /**
   * Cfop Id Other State.
   * @nullable
   */
  declare cfopIdOtherState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Material Billable.
   * @nullable
   */
  declare timeMaterialBillable?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Minimum Requirement.
   * @nullable
   */
  declare itemMinimumRequirement?: ProjReduceCostPriority | null;
  /**
   * Method Of Payment.
   * @nullable
   */
  declare methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Hour Scheduling Enabled.
   * @nullable
   */
  declare isHourSchedulingEnabled?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hour Reduced Minimum Requirement.
   * @nullable
   */
  declare hourReducedMinimumRequirement?: ProjReduceCostPriority | null;
  /**
   * General Budget Reservation.
   * @nullable
   */
  declare generalBudgetReservation?: NoYes | null;
  /**
   * Set The Cost Price As The Sales Price By Default.
   * @nullable
   */
  declare setTheCostPriceAsTheSalesPriceByDefault?: NoYes | null;
  /**
   * Allow Time Range Overlap.
   * @nullable
   */
  declare allowTimeRangeOverlap?: ErrorTolerance | null;
  /**
   * Travel Requisition.
   * @nullable
   */
  declare travelRequisition?: NoYes | null;
  /**
   * Committed Cost.
   * @nullable
   */
  declare committedCost?: ErrorTolerance | null;
  /**
   * Hide Line Property.
   * @nullable
   */
  declare hideLineProperty?: NoYes | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Hour Journal.
   * @nullable
   */
  declare hourJournal?: NoYes | null;
  /**
   * Category Hierarchy Name.
   * @nullable
   */
  declare categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Cancel Settled Project Invoice.
   * @nullable
   */
  declare enableCancelSettledProjectInvoice?: NoYes | null;
  /**
   * Billing Rule Fee Journal.
   * @nullable
   */
  declare billingRuleFeeJournal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount In Thousands.
   */
  declare amountInThousands: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Activity Expense Forecast Required.
   * @nullable
   */
  declare isActivityExpenseForecastRequired?: NoYes | null;
  /**
   * Prompt For Customer Information.
   * @nullable
   */
  declare promptForCustomerInformation?: NoYes | null;
  /**
   * Day Week Starts.
   * @nullable
   */
  declare dayWeekStarts?: WeekDays | null;
  /**
   * Default Posting Level.
   * @nullable
   */
  declare defaultPostingLevel?: DetailSummary | null;
  /**
   * Is Elimination Without Posting Estimates Allowed.
   * @nullable
   */
  declare isEliminationWithoutPostingEstimatesAllowed?: NoYes | null;
  /**
   * Check Budget On Document Line Save.
   * @nullable
   */
  declare checkBudgetOnDocumentLineSave?: NoYes | null;
  /**
   * Time Service Visibility Activity.
   * @nullable
   */
  declare timeServiceVisibilityActivity?: TsFieldVisibility | null;
  /**
   * Estimated.
   * @nullable
   */
  declare estimated?: NoYes | null;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: ProjLineTotal | null;
  /**
   * Is Activity Item Journal Required.
   * @nullable
   */
  declare isActivityItemJournalRequired?: NoYes | null;
  /**
   * Expense Reduce Cost Priority 4.
   * @nullable
   */
  declare expenseReduceCostPriority4?: ProjReduceCostPriority | null;
  /**
   * Is Hour Quantity In Profit Loss Statement Included.
   * @nullable
   */
  declare isHourQuantityInProfitLossStatementIncluded?: NoYes | null;
  /**
   * Expense Lump Sum Allocation Key.
   * @nullable
   */
  declare expenseLumpSumAllocationKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Before Elimination Date.
   * @nullable
   */
  declare beforeEliminationDate?: ErrorTolerance | null;
  /**
   * Investment Billable.
   * @nullable
   */
  declare investmentBillable?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Hour Cost In Consumption Statement Included.
   * @nullable
   */
  declare isHourCostInConsumptionStatementIncluded?: NoYes | null;
  /**
   * Sales Order.
   * @nullable
   */
  declare salesOrder?: NoYes | null;
  /**
   * Can Always Create Adjustment Transaction.
   * @nullable
   */
  declare canAlwaysCreateAdjustmentTransaction?: NoYes | null;
  /**
   * Committed Cost After Estimate Date.
   * @nullable
   */
  declare committedCostAfterEstimateDate?: NoYes | null;
  /**
   * Save Microsoft Project Files To.
   * @nullable
   */
  declare saveMicrosoftProjectFilesTo?: MspIntegrationType | null;
  /**
   * Use Favorites.
   * @nullable
   */
  declare useFavorites?: NoYes | null;
  /**
   * Capacity Planning Planned Order.
   * @nullable
   */
  declare capacityPlanningPlannedOrder?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Terms Of Payment For Items.
   * @nullable
   */
  declare termsOfPaymentForItems?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validation Worker Project.
   * @nullable
   */
  declare validationWorkerProject?: ProjValParameter | null;
  /**
   * Item Delete Reduced To Zero.
   * @nullable
   */
  declare itemDeleteReducedToZero?: NoYes | null;
  /**
   * Is Processing Invoice Proposals In Workflow Enabled.
   * @nullable
   */
  declare isProcessingInvoiceProposalsInWorkflowEnabled?: NoYes | null;
  /**
   * Utilization Rate.
   */
  declare utilizationRate: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Gross Margin Decimals.
   */
  declare grossMarginDecimals: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Select Project Invoice Proposal By Funding Source.
   * @nullable
   */
  declare selectProjectInvoiceProposalByFundingSource?: NoYes | null;
  /**
   * Time Projects Efficiency.
   * @nullable
   */
  declare timeProjectsEfficiency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Margin Ratio.
   * @nullable
   */
  declare grossMarginRatio?: ProjGrossMarginDisplay | null;
  /**
   * Item Lump Sum Allocation Key.
   * @nullable
   */
  declare itemLumpSumAllocationKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Service Visibility Internal Comment.
   * @nullable
   */
  declare timeServiceVisibilityInternalComment?: TsFieldVisibility | null;
  /**
   * Item Never Ledger Consum.
   * @nullable
   */
  declare itemNeverLedgerConsum?: NoYes | null;
  /**
   * Cfop Id Outside Country Region.
   * @nullable
   */
  declare cfopIdOutsideCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Item Allocation Key.
   * @nullable
   */
  declare defaultItemAllocationKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internal Cost Billable.
   * @nullable
   */
  declare internalCostBillable?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Item Consumption.
   * @nullable
   */
  declare isItemConsumption?: NoYes | null;
  /**
   * Default Cost Template.
   * @nullable
   */
  declare defaultCostTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hour Qty Decimals.
   */
  declare hourQtyDecimals: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expense Delete Reduced To Zero.
   * @nullable
   */
  declare expenseDeleteReducedToZero?: NoYes | null;
  /**
   * Investment Efficiency.
   * @nullable
   */
  declare investmentEfficiency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terms Of Payment For Expenses.
   * @nullable
   */
  declare termsOfPaymentForExpenses?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Category Hour.
   * @nullable
   */
  declare defaultCategoryHour?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Activity Hour Forecast Required.
   * @nullable
   */
  declare isActivityHourForecastRequired?: NoYes | null;
  /**
   * Default Project Type.
   * @nullable
   */
  declare defaultProjectType?: ProjType | null;
  /**
   * Hour Delete Reduced To Zero.
   * @nullable
   */
  declare hourDeleteReducedToZero?: NoYes | null;
  /**
   * Absence Project.
   * @nullable
   */
  declare absenceProject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Activity Item Forecast Required.
   * @nullable
   */
  declare isActivityItemForecastRequired?: NoYes | null;
  /**
   * Sales Tax Group Method.
   * @nullable
   */
  declare salesTaxGroupMethod?: ProjTaxGroupMethod | null;
  /**
   * Has Inactive Categories.
   * @nullable
   */
  declare hasInactiveCategories?: NoYes | null;
  /**
   * Time Service Visibility Line Property.
   * @nullable
   */
  declare timeServiceVisibilityLineProperty?: TsFieldVisibility | null;
  /**
   * Use Budget Control.
   * @nullable
   */
  declare useBudgetControl?: NoYes | null;
  /**
   * Is Invoice Printing By Invoice Type.
   * @nullable
   */
  declare isInvoicePrintingByInvoiceType?: NoYes | null;
  /**
   * Folder For Microsoft Project Files.
   * @nullable
   */
  declare folderForMicrosoftProjectFiles?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Maximum Number Of Timesheets Per Period.
   */
  declare maximumNumberOfTimesheetsPerPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Purchase Order.
   * @nullable
   */
  declare purchaseOrder?: NoYes | null;
  /**
   * Use Adjustment Date As New Project Date.
   * @nullable
   */
  declare useAdjustmentDateAsNewProjectDate?: NoYes | null;
  /**
   * Has Finished Projects.
   * @nullable
   */
  declare hasFinishedProjects?: NoYes | null;
  /**
   * Set Subproduction To Consumed.
   * @nullable
   */
  declare setSubproductionToConsumed?: NoYes | null;
  /**
   * Project Budget Management.
   * @nullable
   */
  declare projectBudgetManagement?: ProjBudgetManagement | null;
  /**
   * Is Timesheet Audit Trail Required.
   * @nullable
   */
  declare isTimesheetAuditTrailRequired?: NoYes | null;
  /**
   * Credit Line Error.
   * @nullable
   */
  declare creditLineError?: CreditLineErrorType | null;
  /**
   * Committed Cost Up To Estimate Date.
   * @nullable
   */
  declare committedCostUpToEstimateDate?: NoYes | null;
  /**
   * Has Time Registration.
   * @nullable
   */
  declare hasTimeRegistration?: NoYes | null;
  /**
   * Time Service Visibility Customer.
   * @nullable
   */
  declare timeServiceVisibilityCustomer?: TsFieldVisibility | null;
  /**
   * Default Journal Name Item.
   * @nullable
   */
  declare defaultJournalNameItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Designation Of Signatory.
   * @nullable
   */
  declare designationOfSignatory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hide External Comments.
   * @nullable
   */
  declare hideExternalComments?: NoYes | null;
  /**
   * Expense Reduce Cost Priority 3.
   * @nullable
   */
  declare expenseReduceCostPriority3?: ProjReduceCostPriority | null;
  /**
   * Has Terminated Workers.
   * @nullable
   */
  declare hasTerminatedWorkers?: NoYes | null;
  /**
   * Is Future Timesheet Entries Blocked.
   * @nullable
   */
  declare isFutureTimesheetEntriesBlocked?: NoYes | null;
  /**
   * After Elimination Date.
   * @nullable
   */
  declare afterEliminationDate?: ErrorTolerance | null;
  /**
   * Time Service Visibility External Comment.
   * @nullable
   */
  declare timeServiceVisibilityExternalComment?: TsFieldVisibility | null;
  /**
   * Is Invoice Printing By Transaction Text.
   * @nullable
   */
  declare isInvoicePrintingByTransactionText?: NoYes | null;
  /**
   * Validate Absence.
   * @nullable
   */
  declare validateAbsence?: NoYes | null;
  /**
   * Display Transactions.
   * @nullable
   */
  declare displayTransactions?: PriceAmount | null;
  /**
   * Default Category Expense.
   * @nullable
   */
  declare defaultCategoryExpense?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Activity Hour Journal Required.
   * @nullable
   */
  declare isActivityHourJournalRequired?: NoYes | null;
  /**
   * Category Name.
   * @nullable
   */
  declare categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Requirement.
   * @nullable
   */
  declare itemRequirement?: NoYes | null;
  /**
   * Allow Sales Orders For Multiple Funding Sources.
   * @nullable
   */
  declare allowSalesOrdersForMultipleFundingSources?: NoYes | null;
  /**
   * Negative Budgets To Be Carried Forward Allowed.
   * @nullable
   */
  declare negativeBudgetsToBeCarriedForwardAllowed?: NoYes | null;
  /**
   * Is Enable Alternative Account For Cancellation.
   * @nullable
   */
  declare isEnableAlternativeAccountForCancellation?: NoYes | null;
  /**
   * Time Service Visibility Sales Tax Group.
   * @nullable
   */
  declare timeServiceVisibilitySalesTaxGroup?: TsFieldVisibility | null;
  /**
   * Budget Overrun Default.
   * @nullable
   */
  declare budgetOverrunDefault?: ProjBudgetOverrunOption | null;
  /**
   * Capacity Planning Production.
   * @nullable
   */
  declare capacityPlanningProduction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Split Invoice Based On Service Code.
   * @nullable
   */
  declare isSplitInvoiceBasedOnServiceCode?: NoYes | null;
  /**
   * Enable Cancel Settled Debit Note.
   * @nullable
   */
  declare enableCancelSettledDebitNote?: NoYes | null;
  /**
   * Is Payment Criteria.
   * @nullable
   */
  declare isPaymentCriteria?: NoYes | null;
  /**
   * Is Item Never Ledger Pl.
   * @nullable
   */
  declare isItemNeverLedgerPl?: NoYes | null;
  /**
   * Time Service Enable Default Line Property.
   * @nullable
   */
  declare timeServiceEnableDefaultLineProperty?: NoYes | null;
  /**
   * Authorized Signatory.
   * @nullable
   */
  declare authorizedSignatory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Budget.
   * @nullable
   */
  declare originalBudget?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Carry Forward Remaining Budgets.
   * @nullable
   */
  declare isCarryForwardRemainingBudgets?: NoYes | null;
  /**
   * Validation Project Category.
   * @nullable
   */
  declare validationProjectCategory?: ProjValParameter | null;
  /**
   * Cost Control Methods.
   * @nullable
   */
  declare costControlMethods?: ProjCostControlMethod | null;
  /**
   * Tax Item Group On Acc.
   * @nullable
   */
  declare taxItemGroupOnAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Create Item Requirement.
   * @nullable
   */
  declare isCreateItemRequirement?: NoYes | null;
  /**
   * Total Budget.
   * @nullable
   */
  declare totalBudget?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Invoice Printing By Category.
   * @nullable
   */
  declare isInvoicePrintingByCategory?: NoYes | null;
  /**
   * Expense Reduce Cost Priority 1.
   * @nullable
   */
  declare expenseReduceCostPriority1?: ProjReduceCostPriority | null;
  /**
   * Allow Timesheet Change Reason.
   * @nullable
   */
  declare allowTimesheetChangeReason?: NoYes | null;
  /**
   * Is Date Corrections On Timesheets Allowed.
   * @nullable
   */
  declare isDateCorrectionsOnTimesheetsAllowed?: NoYes | null;
  /**
   * Time Projects Billable.
   * @nullable
   */
  declare timeProjectsBillable?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Invoice Printing By Line Specific.
   * @nullable
   */
  declare isInvoicePrintingByLineSpecific?: NoYes | null;
  /**
   * Calculation Date Type.
   * @nullable
   */
  declare calculationDateType?: TaxCalculationProjDateType | null;
  /**
   * Timesheet Journal.
   * @nullable
   */
  declare timesheetJournal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Start Stop Time Required.
   * @nullable
   */
  declare isStartStopTimeRequired?: NoYes | null;
  /**
   * Cfop Id Same State.
   * @nullable
   */
  declare cfopIdSameState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Material Efficiency.
   * @nullable
   */
  declare timeMaterialEfficiency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Category Fee.
   * @nullable
   */
  declare defaultCategoryFee?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Reduce Cost Priority 5.
   * @nullable
   */
  declare expenseReduceCostPriority5?: ProjReduceCostPriority | null;
  /**
   * Remaining Budget.
   * @nullable
   */
  declare remainingBudget?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * General Buffer Days.
   */
  declare generalBufferDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Missing Timesheets Email Id.
   * @nullable
   */
  declare missingTimesheetsEmailId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Time Increment.
   */
  declare minimumTimeIncrement: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Show Invoice Summary.
   * @nullable
   */
  declare showInvoiceSummary?: NoYes | null;
  /**
   * Require Timesheet Change Reason.
   * @nullable
   */
  declare requireTimesheetChangeReason?: NoYes | null;
  /**
   * Item Reduce Cost Priority 3.
   * @nullable
   */
  declare itemReduceCostPriority3?: ProjReduceCostPriority | null;
  /**
   * Item Reduce Cost Priority 2.
   * @nullable
   */
  declare itemReduceCostPriority2?: ProjReduceCostPriority | null;
  /**
   * Item Reduce Cost Priority 1.
   * @nullable
   */
  declare itemReduceCostPriority1?: ProjReduceCostPriority | null;
  /**
   * Accrue Revenue.
   * @nullable
   */
  declare accrueRevenue?: ProjLineTotal | null;
  /**
   * Invoice Proposal.
   * @nullable
   */
  declare invoiceProposal?: NoYes | null;
  /**
   * Item Reduce Cost Priority 5.
   * @nullable
   */
  declare itemReduceCostPriority5?: ProjReduceCostPriority | null;
  /**
   * Item Reduce Cost Priority 4.
   * @nullable
   */
  declare itemReduceCostPriority4?: ProjReduceCostPriority | null;
  /**
   * Eliminated.
   * @nullable
   */
  declare eliminated?: NoYes | null;
  /**
   * Enable Contract Currency For Rev Rec.
   * @nullable
   */
  declare enableContractCurrencyForRevRec?: NoYes | null;
  /**
   * Apply Priority Settings First Or Last In Funding Allocation Order.
   * @nullable
   */
  declare applyPrioritySettingsFirstOrLastInFundingAllocationOrder?: FirstLast | null;
  /**
   * Time Service Enable Service.
   * @nullable
   */
  declare timeServiceEnableService?: NoYes | null;
  /**
   * Is Intercompany Resource Scheduling And Timesheets Enabled.
   * @nullable
   */
  declare isIntercompanyResourceSchedulingAndTimesheetsEnabled?: NoYes | null;
  /**
   * Timesheets.
   * @nullable
   */
  declare timesheets?: NoYes | null;
  /**
   * Default Journal Names Fee.
   * @nullable
   */
  declare defaultJournalNamesFee?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Hour Cost In Profit Loss Statement Included.
   * @nullable
   */
  declare isHourCostInProfitLossStatementIncluded?: NoYes | null;
  /**
   * Adjustment.
   * @nullable
   */
  declare adjustment?: ProjLineTotal | null;
  /**
   * Is Invoice Printing By Employee.
   * @nullable
   */
  declare isInvoicePrintingByEmployee?: NoYes | null;
  /**
   * Post Costs.
   * @nullable
   */
  declare postCosts?: ProjLineTotal | null;
  /**
   * Value Added Display.
   * @nullable
   */
  declare valueAddedDisplay?: ProjValueAddedDisplay | null;
  /**
   * Item Sales Tax Group Method.
   * @nullable
   */
  declare itemSalesTaxGroupMethod?: ProjTaxItemGroupMethod | null;
  /**
   * Budget Control Interval.
   * @nullable
   */
  declare budgetControlInterval?: ProjBudgetInterval | null;
  /**
   * Amount In Millions.
   */
  declare amountInMillions: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Set Voucher Date To.
   * @nullable
   */
  declare setVoucherDateTo?: TsVoucherDateChange | null;
  /**
   * Estimate.
   * @nullable
   */
  declare estimate?: ProjLineTotal | null;
  /**
   * Production.
   * @nullable
   */
  declare production?: NoYes | null;

  constructor(_entityApi: ProjectParameterEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectParameterEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.Int32'>;
  invoiced?: NoYes | null;
  approvedTimesheetPosting?: TsManualAutomatic | null;
  isBudgetControlOutsideTheProjectHierarchyAllowed?: NoYes | null;
  noOneTimeCustomersForProjectContracts?: NoYes | null;
  userGroup?: DeserializedType<T, 'Edm.String'> | null;
  termsOfPaymentForHours?: DeserializedType<T, 'Edm.String'> | null;
  subscription?: ProjLineTotal | null;
  purchaseRequisition?: NoYes | null;
  contractLineBasedRevenueRecognition?: NoYes | null;
  defaultCategoryItem?: DeserializedType<T, 'Edm.String'> | null;
  minimumRequirement?: ProjReduceCostPriority | null;
  promptForCustomerInformationOnProject?: NoYes | null;
  isActive?: NoYes | null;
  automaticallySetAccountingDateToOpenLedgerPeriod?: NoYes | null;
  hideActivity?: NoYes | null;
  expenseReduceCostPriority2?: ProjReduceCostPriority | null;
  timeServiceVisibilityCategory?: TsFieldVisibility | null;
  itemJournal?: NoYes | null;
  vendorInvoice?: NoYes | null;
  hourReduceCostPriority2?: ProjReduceCostPriority | null;
  hourReduceCostPriority3?: ProjReduceCostPriority | null;
  forecastModel?: DeserializedType<T, 'Edm.String'> | null;
  hourReduceCostPriority1?: ProjReduceCostPriority | null;
  valueAddedDecimals: DeserializedType<T, 'Edm.Int32'>;
  hourReduceCostPriority4?: ProjReduceCostPriority | null;
  hourReduceCostPriority5?: ProjReduceCostPriority | null;
  expenseJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  defaultSubprojectIdFormat?: DeserializedType<T, 'Edm.String'> | null;
  validationWorkerCategory?: ProjValParameter | null;
  isHourQuantityInConsumptionStatementIncluded?: NoYes | null;
  defaultJournalNamesHour?: DeserializedType<T, 'Edm.String'> | null;
  expenseReport?: NoYes | null;
  internalCostEfficiency?: DeserializedType<T, 'Edm.String'> | null;
  totalEstimatePostingTolerance?: ErrorTolerance | null;
  defaultWorkingCalendar?: DeserializedType<T, 'Edm.String'> | null;
  fixedPriceEfficiency?: DeserializedType<T, 'Edm.String'> | null;
  beginningBalances?: DeserializedType<T, 'Edm.String'> | null;
  timeServiceVisibilityItemSalesTaxGroup?: TsFieldVisibility | null;
  postingMethod?: ProjProdPostingTypeSetup | null;
  isAllocationSettingsLocked?: NoYes | null;
  transactionTypesControlled?: ProjBudgetaryControlOn | null;
  actualCostAfterEstimateDate?: NoYes | null;
  isActivityExpenseJournalRequired?: NoYes | null;
  fixedPriceBillable?: DeserializedType<T, 'Edm.String'> | null;
  isAutoupdateField?: NoYes | null;
  hideCategory?: NoYes | null;
  cfopIdOtherState?: DeserializedType<T, 'Edm.String'> | null;
  timeMaterialBillable?: DeserializedType<T, 'Edm.String'> | null;
  itemMinimumRequirement?: ProjReduceCostPriority | null;
  methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  isHourSchedulingEnabled?: DeserializedType<T, 'Edm.String'> | null;
  hourReducedMinimumRequirement?: ProjReduceCostPriority | null;
  generalBudgetReservation?: NoYes | null;
  setTheCostPriceAsTheSalesPriceByDefault?: NoYes | null;
  allowTimeRangeOverlap?: ErrorTolerance | null;
  travelRequisition?: NoYes | null;
  committedCost?: ErrorTolerance | null;
  hideLineProperty?: NoYes | null;
  posted?: NoYes | null;
  hourJournal?: NoYes | null;
  categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  enableCancelSettledProjectInvoice?: NoYes | null;
  billingRuleFeeJournal?: DeserializedType<T, 'Edm.String'> | null;
  amountInThousands: DeserializedType<T, 'Edm.Int32'>;
  isActivityExpenseForecastRequired?: NoYes | null;
  promptForCustomerInformation?: NoYes | null;
  dayWeekStarts?: WeekDays | null;
  defaultPostingLevel?: DetailSummary | null;
  isEliminationWithoutPostingEstimatesAllowed?: NoYes | null;
  checkBudgetOnDocumentLineSave?: NoYes | null;
  timeServiceVisibilityActivity?: TsFieldVisibility | null;
  estimated?: NoYes | null;
  invoice?: ProjLineTotal | null;
  isActivityItemJournalRequired?: NoYes | null;
  expenseReduceCostPriority4?: ProjReduceCostPriority | null;
  isHourQuantityInProfitLossStatementIncluded?: NoYes | null;
  expenseLumpSumAllocationKey?: DeserializedType<T, 'Edm.String'> | null;
  beforeEliminationDate?: ErrorTolerance | null;
  investmentBillable?: DeserializedType<T, 'Edm.String'> | null;
  isHourCostInConsumptionStatementIncluded?: NoYes | null;
  salesOrder?: NoYes | null;
  canAlwaysCreateAdjustmentTransaction?: NoYes | null;
  committedCostAfterEstimateDate?: NoYes | null;
  saveMicrosoftProjectFilesTo?: MspIntegrationType | null;
  useFavorites?: NoYes | null;
  capacityPlanningPlannedOrder?: DeserializedType<T, 'Edm.String'> | null;
  termsOfPaymentForItems?: DeserializedType<T, 'Edm.String'> | null;
  validationWorkerProject?: ProjValParameter | null;
  itemDeleteReducedToZero?: NoYes | null;
  isProcessingInvoiceProposalsInWorkflowEnabled?: NoYes | null;
  utilizationRate: DeserializedType<T, 'Edm.Int32'>;
  grossMarginDecimals: DeserializedType<T, 'Edm.Int32'>;
  selectProjectInvoiceProposalByFundingSource?: NoYes | null;
  timeProjectsEfficiency?: DeserializedType<T, 'Edm.String'> | null;
  grossMarginRatio?: ProjGrossMarginDisplay | null;
  itemLumpSumAllocationKey?: DeserializedType<T, 'Edm.String'> | null;
  timeServiceVisibilityInternalComment?: TsFieldVisibility | null;
  itemNeverLedgerConsum?: NoYes | null;
  cfopIdOutsideCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  defaultItemAllocationKey?: DeserializedType<T, 'Edm.String'> | null;
  internalCostBillable?: DeserializedType<T, 'Edm.String'> | null;
  isItemConsumption?: NoYes | null;
  defaultCostTemplate?: DeserializedType<T, 'Edm.String'> | null;
  hourQtyDecimals: DeserializedType<T, 'Edm.Int32'>;
  expenseDeleteReducedToZero?: NoYes | null;
  investmentEfficiency?: DeserializedType<T, 'Edm.String'> | null;
  termsOfPaymentForExpenses?: DeserializedType<T, 'Edm.String'> | null;
  defaultCategoryHour?: DeserializedType<T, 'Edm.String'> | null;
  isActivityHourForecastRequired?: NoYes | null;
  defaultProjectType?: ProjType | null;
  hourDeleteReducedToZero?: NoYes | null;
  absenceProject?: DeserializedType<T, 'Edm.String'> | null;
  isActivityItemForecastRequired?: NoYes | null;
  salesTaxGroupMethod?: ProjTaxGroupMethod | null;
  hasInactiveCategories?: NoYes | null;
  timeServiceVisibilityLineProperty?: TsFieldVisibility | null;
  useBudgetControl?: NoYes | null;
  isInvoicePrintingByInvoiceType?: NoYes | null;
  folderForMicrosoftProjectFiles?: DeserializedType<T, 'Edm.String'> | null;
  maximumNumberOfTimesheetsPerPeriod: DeserializedType<T, 'Edm.Int32'>;
  purchaseOrder?: NoYes | null;
  useAdjustmentDateAsNewProjectDate?: NoYes | null;
  hasFinishedProjects?: NoYes | null;
  setSubproductionToConsumed?: NoYes | null;
  projectBudgetManagement?: ProjBudgetManagement | null;
  isTimesheetAuditTrailRequired?: NoYes | null;
  creditLineError?: CreditLineErrorType | null;
  committedCostUpToEstimateDate?: NoYes | null;
  hasTimeRegistration?: NoYes | null;
  timeServiceVisibilityCustomer?: TsFieldVisibility | null;
  defaultJournalNameItem?: DeserializedType<T, 'Edm.String'> | null;
  designationOfSignatory?: DeserializedType<T, 'Edm.String'> | null;
  hideExternalComments?: NoYes | null;
  expenseReduceCostPriority3?: ProjReduceCostPriority | null;
  hasTerminatedWorkers?: NoYes | null;
  isFutureTimesheetEntriesBlocked?: NoYes | null;
  afterEliminationDate?: ErrorTolerance | null;
  timeServiceVisibilityExternalComment?: TsFieldVisibility | null;
  isInvoicePrintingByTransactionText?: NoYes | null;
  validateAbsence?: NoYes | null;
  displayTransactions?: PriceAmount | null;
  defaultCategoryExpense?: DeserializedType<T, 'Edm.String'> | null;
  isActivityHourJournalRequired?: NoYes | null;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  itemRequirement?: NoYes | null;
  allowSalesOrdersForMultipleFundingSources?: NoYes | null;
  negativeBudgetsToBeCarriedForwardAllowed?: NoYes | null;
  isEnableAlternativeAccountForCancellation?: NoYes | null;
  timeServiceVisibilitySalesTaxGroup?: TsFieldVisibility | null;
  budgetOverrunDefault?: ProjBudgetOverrunOption | null;
  capacityPlanningProduction?: DeserializedType<T, 'Edm.String'> | null;
  isSplitInvoiceBasedOnServiceCode?: NoYes | null;
  enableCancelSettledDebitNote?: NoYes | null;
  isPaymentCriteria?: NoYes | null;
  isItemNeverLedgerPl?: NoYes | null;
  timeServiceEnableDefaultLineProperty?: NoYes | null;
  authorizedSignatory?: DeserializedType<T, 'Edm.String'> | null;
  originalBudget?: DeserializedType<T, 'Edm.String'> | null;
  isCarryForwardRemainingBudgets?: NoYes | null;
  validationProjectCategory?: ProjValParameter | null;
  costControlMethods?: ProjCostControlMethod | null;
  taxItemGroupOnAcc?: DeserializedType<T, 'Edm.String'> | null;
  isCreateItemRequirement?: NoYes | null;
  totalBudget?: DeserializedType<T, 'Edm.String'> | null;
  isInvoicePrintingByCategory?: NoYes | null;
  expenseReduceCostPriority1?: ProjReduceCostPriority | null;
  allowTimesheetChangeReason?: NoYes | null;
  isDateCorrectionsOnTimesheetsAllowed?: NoYes | null;
  timeProjectsBillable?: DeserializedType<T, 'Edm.String'> | null;
  isInvoicePrintingByLineSpecific?: NoYes | null;
  calculationDateType?: TaxCalculationProjDateType | null;
  timesheetJournal?: DeserializedType<T, 'Edm.String'> | null;
  isStartStopTimeRequired?: NoYes | null;
  cfopIdSameState?: DeserializedType<T, 'Edm.String'> | null;
  timeMaterialEfficiency?: DeserializedType<T, 'Edm.String'> | null;
  defaultCategoryFee?: DeserializedType<T, 'Edm.String'> | null;
  expenseReduceCostPriority5?: ProjReduceCostPriority | null;
  remainingBudget?: DeserializedType<T, 'Edm.String'> | null;
  generalBufferDays: DeserializedType<T, 'Edm.Int32'>;
  missingTimesheetsEmailId?: DeserializedType<T, 'Edm.String'> | null;
  minimumTimeIncrement: DeserializedType<T, 'Edm.Decimal'>;
  showInvoiceSummary?: NoYes | null;
  requireTimesheetChangeReason?: NoYes | null;
  itemReduceCostPriority3?: ProjReduceCostPriority | null;
  itemReduceCostPriority2?: ProjReduceCostPriority | null;
  itemReduceCostPriority1?: ProjReduceCostPriority | null;
  accrueRevenue?: ProjLineTotal | null;
  invoiceProposal?: NoYes | null;
  itemReduceCostPriority5?: ProjReduceCostPriority | null;
  itemReduceCostPriority4?: ProjReduceCostPriority | null;
  eliminated?: NoYes | null;
  enableContractCurrencyForRevRec?: NoYes | null;
  applyPrioritySettingsFirstOrLastInFundingAllocationOrder?: FirstLast | null;
  timeServiceEnableService?: NoYes | null;
  isIntercompanyResourceSchedulingAndTimesheetsEnabled?: NoYes | null;
  timesheets?: NoYes | null;
  defaultJournalNamesFee?: DeserializedType<T, 'Edm.String'> | null;
  isHourCostInProfitLossStatementIncluded?: NoYes | null;
  adjustment?: ProjLineTotal | null;
  isInvoicePrintingByEmployee?: NoYes | null;
  postCosts?: ProjLineTotal | null;
  valueAddedDisplay?: ProjValueAddedDisplay | null;
  itemSalesTaxGroupMethod?: ProjTaxItemGroupMethod | null;
  budgetControlInterval?: ProjBudgetInterval | null;
  amountInMillions: DeserializedType<T, 'Edm.Int32'>;
  setVoucherDateTo?: TsVoucherDateChange | null;
  estimate?: ProjLineTotal | null;
  production?: NoYes | null;
}
