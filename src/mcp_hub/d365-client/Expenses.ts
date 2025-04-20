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
import type { ExpensesApi } from './ExpensesApi';
import { NoYes } from './NoYes';
import { TrvExpLineType } from './TrvExpLineType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { ProjExpPolicyStatus } from './ProjExpPolicyStatus';
import { TrvExpType } from './TrvExpType';
import { TrvCostOwner } from './TrvCostOwner';
import { TrvExpSplitLineType } from './TrvExpSplitLineType';
import { TrvAppStatus } from './TrvAppStatus';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "Expenses" of service "d365_metadata".
 */
export class Expenses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpensesType<T>
{
  /**
   * Technical entity name for Expenses.
   */
  static override _entityName = 'Expenses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Expenses entity.
   */
  static _keys = ['dataAreaId', 'ExpenseTransactionNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense Transaction Number.
   */
  declare expenseTransactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Required.
   * @nullable
   */
  declare receiptRequired?: NoYes | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Line Type.
   * @nullable
   */
  declare expenseLineType?: TrvExpLineType | null;
  /**
   * Address Zip Code Details.
   * @nullable
   */
  declare addressZipCodeDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dinner.
   */
  declare dinner: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Receipts Attached.
   * @nullable
   */
  declare receiptsAttached?: NoYes | null;
  /**
   * Breakfast.
   */
  declare breakfast: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Post Offset Account Type.
   * @nullable
   */
  declare postOffsetAccountType?: LedgerJournalAcType | null;
  /**
   * Apply Action.
   * @nullable
   */
  declare applyAction?: NoYes | null;
  /**
   * Billable.
   * @nullable
   */
  declare billable?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mileage From Address.
   * @nullable
   */
  declare mileageFromAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ticket Used.
   * @nullable
   */
  declare ticketUsed?: NoYes | null;
  /**
   * Intercompany Billed.
   */
  declare intercompanyBilled: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Country Region.
   * @nullable
   */
  declare countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: ProjExpPolicyStatus | null;
  /**
   * Transaction Amount.
   */
  declare transactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Amount In Company Currency.
   */
  declare salesTaxAmountInCompanyCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Date Rejected.
   */
  declare dateRejected: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Merchant.
   * @nullable
   */
  declare merchant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reconciled.
   */
  declare reconciled: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Itemized Line Trans Number.
   * @nullable
   */
  declare itemizedLineTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Approved.
   */
  declare dateApproved: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Included.
   * @nullable
   */
  declare taxIncluded?: NoYes | null;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Locations State Id.
   * @nullable
   */
  declare locationsStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Card Local Currency.
   * @nullable
   */
  declare creditCardLocalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ticket Number.
   * @nullable
   */
  declare ticketNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vehicle Type.
   * @nullable
   */
  declare vehicleType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intercompany Legal Entity.
   * @nullable
   */
  declare intercompanyLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Transaction Amount.
   */
  declare netTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Split To Personal.
   * @nullable
   */
  declare isSplitToPersonal?: NoYes | null;
  /**
   * Additional Information.
   * @nullable
   */
  declare additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Personnel Number.
   * @nullable
   */
  declare employeePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Transaction Id.
   * @nullable
   */
  declare projectTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Passengers.
   */
  declare numberOfPassengers: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Intercompany Currency.
   * @nullable
   */
  declare intercompanyCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Receipts Received.
   * @nullable
   */
  declare originalReceiptsReceived?: NoYes | null;
  /**
   * Location Of Entertainment.
   * @nullable
   */
  declare locationOfEntertainment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Type.
   * @nullable
   */
  declare expenseType?: TrvExpType | null;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Owner.
   * @nullable
   */
  declare costOwner?: TrvCostOwner | null;
  /**
   * Purpose.
   * @nullable
   */
  declare purpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Pre Authorized.
   * @nullable
   */
  declare isPreAuthorized?: NoYes | null;
  /**
   * Post Account Identification.
   * @nullable
   */
  declare postAccountIdentification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intercompany Transfer Currency.
   * @nullable
   */
  declare intercompanyTransferCurrency?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mileage.
   */
  declare mileage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Actual Sales Tax Amount.
   */
  declare actualSalesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intercompany Sales Price.
   */
  declare intercompanySalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address City Name.
   * @nullable
   */
  declare addressCityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Advance Number.
   * @nullable
   */
  declare cashAdvanceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Row Num.
   */
  declare transRowNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expense Category.
   * @nullable
   */
  declare expenseCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Method.
   * @nullable
   */
  declare paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Per Diem To Date.
   */
  declare perDiemToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reimbursement Amount.
   */
  declare reimbursementAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rate Per Mile.
   */
  declare ratePerMile: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shared Sub Category Name.
   * @nullable
   */
  declare sharedSubCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Imported Credit Card.
   * @nullable
   */
  declare importedCreditCard?: NoYes | null;
  /**
   * Credit Card Local Amount.
   */
  declare creditCardLocalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intercompany Cost Price.
   */
  declare intercompanyCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Split Line Type.
   * @nullable
   */
  declare splitLineType?: TrvExpSplitLineType | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Report Number.
   * @nullable
   */
  declare expenseReportNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internal Note.
   * @nullable
   */
  declare internalNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Category Cost Type.
   * @nullable
   */
  declare subCategoryCostType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Locations Country Region Id.
   * @nullable
   */
  declare locationsCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity Data Area Id.
   * @nullable
   */
  declare legalEntityDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approval Status.
   * @nullable
   */
  declare approvalStatus?: TrvAppStatus | null;
  /**
   * Expense Line Level Posting.
   * @nullable
   */
  declare expenseLineLevelPosting?: NoYes | null;
  /**
   * Receipt Number.
   * @nullable
   */
  declare receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intercompany Project Category.
   * @nullable
   */
  declare intercompanyProjectCategory?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Category Description.
   * @nullable
   */
  declare categoryDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Locations Location.
   * @nullable
   */
  declare locationsLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lunch.
   */
  declare lunch: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mobile Statement.
   * @nullable
   */
  declare mobileStatement?: NoYes | null;
  /**
   * Mileage To Address.
   * @nullable
   */
  declare mileageToAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Amount.
   */
  declare invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Errors.
   * @nullable
   */
  declare postingErrors?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ticket Class.
   * @nullable
   */
  declare ticketClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Per Diem From Date.
   */
  declare perDiemFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Meal Reduction.
   */
  declare mealReduction: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: ExpensesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpensesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  expenseTransactionNumber: DeserializedType<T, 'Edm.String'>;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  receiptRequired?: NoYes | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  expenseLineType?: TrvExpLineType | null;
  addressZipCodeDetails?: DeserializedType<T, 'Edm.String'> | null;
  dinner: DeserializedType<T, 'Edm.Int32'>;
  receiptsAttached?: NoYes | null;
  breakfast: DeserializedType<T, 'Edm.Int32'>;
  postOffsetAccountType?: LedgerJournalAcType | null;
  applyAction?: NoYes | null;
  billable?: DeserializedType<T, 'Edm.String'> | null;
  mileageFromAddress?: DeserializedType<T, 'Edm.String'> | null;
  ticketUsed?: NoYes | null;
  intercompanyBilled: DeserializedType<T, 'Edm.Boolean'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  status?: ProjExpPolicyStatus | null;
  transactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxAmountInCompanyCurrency: DeserializedType<T, 'Edm.Decimal'>;
  dateRejected: DeserializedType<T, 'Edm.DateTimeOffset'>;
  merchant?: DeserializedType<T, 'Edm.String'> | null;
  reconciled: DeserializedType<T, 'Edm.Decimal'>;
  itemizedLineTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  dateApproved: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxIncluded?: NoYes | null;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  locationsStateId?: DeserializedType<T, 'Edm.String'> | null;
  creditCardLocalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  ticketNumber?: DeserializedType<T, 'Edm.String'> | null;
  vehicleType?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  netTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  isSplitToPersonal?: NoYes | null;
  additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
  employeePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  projectTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  numberOfPassengers: DeserializedType<T, 'Edm.Int32'>;
  intercompanyCurrency?: DeserializedType<T, 'Edm.String'> | null;
  originalReceiptsReceived?: NoYes | null;
  locationOfEntertainment?: DeserializedType<T, 'Edm.String'> | null;
  expenseType?: TrvExpType | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  costOwner?: TrvCostOwner | null;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  isPreAuthorized?: NoYes | null;
  postAccountIdentification?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyTransferCurrency?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  mileage: DeserializedType<T, 'Edm.Decimal'>;
  actualSalesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  intercompanySalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  addressCityName?: DeserializedType<T, 'Edm.String'> | null;
  cashAdvanceNumber?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  transRowNum: DeserializedType<T, 'Edm.Int32'>;
  expenseCategory?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  perDiemToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reimbursementAmount: DeserializedType<T, 'Edm.Decimal'>;
  ratePerMile: DeserializedType<T, 'Edm.Decimal'>;
  sharedSubCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  importedCreditCard?: NoYes | null;
  creditCardLocalAmount: DeserializedType<T, 'Edm.Decimal'>;
  intercompanyCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  splitLineType?: TrvExpSplitLineType | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  expenseReportNumber?: DeserializedType<T, 'Edm.String'> | null;
  internalNote?: DeserializedType<T, 'Edm.String'> | null;
  subCategoryCostType?: DeserializedType<T, 'Edm.String'> | null;
  locationsCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  approvalStatus?: TrvAppStatus | null;
  expenseLineLevelPosting?: NoYes | null;
  receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyProjectCategory?: DeserializedType<T, 'Edm.String'> | null;
  categoryDescription?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  locationsLocation?: DeserializedType<T, 'Edm.String'> | null;
  lunch: DeserializedType<T, 'Edm.Int32'>;
  mobileStatement?: NoYes | null;
  mileageToAddress?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  postingErrors?: DeserializedType<T, 'Edm.String'> | null;
  ticketClass?: DeserializedType<T, 'Edm.String'> | null;
  perDiemFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  mealReduction: DeserializedType<T, 'Edm.Decimal'>;
  dimensionSet?: DimensionSetsType<T> | null;
}
