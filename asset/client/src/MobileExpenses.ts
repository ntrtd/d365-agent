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
import type { MobileExpensesApi } from './MobileExpensesApi';
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
 * This class represents the entity "MobileExpenses" of service "d365_metadata".
 */
export class MobileExpenses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MobileExpensesType<T>
{
  /**
   * Technical entity name for MobileExpenses.
   */
  static override _entityName = 'MobileExpenses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MobileExpenses entity.
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
   * Reimburse Amt.
   */
  declare reimburseAmt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Km Own Car.
   */
  declare kmOwnCar: DeserializedType<T, 'Edm.Decimal'>;
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
   * Receipts Attached.
   * @nullable
   */
  declare receiptsAttached?: NoYes | null;
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
   * Pay Method.
   * @nullable
   */
  declare payMethod?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sales Tax Amount In Company Currency.
   */
  declare salesTaxAmountInCompanyCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Date Rejected.
   */
  declare dateRejected: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Activity Number.
   * @nullable
   */
  declare projActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Exchange Code.
   * @nullable
   */
  declare exchangeCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Amt.
   */
  declare invoiceAmt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Corrected Tax Amount.
   */
  declare correctedTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Net Transaction Amount.
   */
  declare netTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inter Company Le.
   * @nullable
   */
  declare interCompanyLe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Split To Personal.
   * @nullable
   */
  declare isSplitToPersonal?: NoYes | null;
  /**
   * Project Name.
   * @nullable
   */
  declare projectName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Category.
   * @nullable
   */
  declare interCompanyCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Information.
   * @nullable
   */
  declare additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date From.
   */
  declare dateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
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
   * Transaction Text.
   * @nullable
   */
  declare transactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Receipts Received.
   * @nullable
   */
  declare originalReceiptsReceived?: NoYes | null;
  /**
   * Merchant Id.
   * @nullable
   */
  declare merchantId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
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
   * Deduktion Lunch.
   */
  declare deduktionLunch: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Deduktion Breakfast.
   */
  declare deduktionBreakfast: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Amount Curr.
   */
  declare amountCurr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intercompany Sales Price.
   */
  declare intercompanySalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Status Id.
   * @nullable
   */
  declare projStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
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
   * Deduktion Dinner.
   */
  declare deduktionDinner: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Cost Type.
   * @nullable
   */
  declare costType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date To.
   */
  declare dateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Km Price.
   */
  declare kmPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expense Report Number.
   * @nullable
   */
  declare expenseReportNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Number.
   * @nullable
   */
  declare receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Violation Count.
   */
  declare policyViolationCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Locations Location.
   * @nullable
   */
  declare locationsLocation?: DeserializedType<T, 'Edm.String'> | null;
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
   * Posting Errors.
   * @nullable
   */
  declare postingErrors?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Violations Level.
   */
  declare policyViolationsLevel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ticket Class.
   * @nullable
   */
  declare ticketClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Meal Reduction.
   */
  declare mealReduction: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: MobileExpensesApi<T>) {
    super(_entityApi);
  }
}

export interface MobileExpensesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  expenseTransactionNumber: DeserializedType<T, 'Edm.String'>;
  receiptRequired?: NoYes | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  reimburseAmt: DeserializedType<T, 'Edm.Decimal'>;
  kmOwnCar: DeserializedType<T, 'Edm.Decimal'>;
  expenseLineType?: TrvExpLineType | null;
  addressZipCodeDetails?: DeserializedType<T, 'Edm.String'> | null;
  receiptsAttached?: NoYes | null;
  postOffsetAccountType?: LedgerJournalAcType | null;
  applyAction?: NoYes | null;
  mileageFromAddress?: DeserializedType<T, 'Edm.String'> | null;
  ticketUsed?: NoYes | null;
  payMethod?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyBilled: DeserializedType<T, 'Edm.Boolean'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  status?: ProjExpPolicyStatus | null;
  salesTaxAmountInCompanyCurrency: DeserializedType<T, 'Edm.Decimal'>;
  dateRejected: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  reconciled: DeserializedType<T, 'Edm.Decimal'>;
  itemizedLineTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  exchangeCode?: DeserializedType<T, 'Edm.String'> | null;
  dateApproved: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxIncluded?: NoYes | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceAmt: DeserializedType<T, 'Edm.Decimal'>;
  correctedTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  locationsStateId?: DeserializedType<T, 'Edm.String'> | null;
  creditCardLocalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  ticketNumber?: DeserializedType<T, 'Edm.String'> | null;
  vehicleType?: DeserializedType<T, 'Edm.String'> | null;
  netTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  interCompanyLe?: DeserializedType<T, 'Edm.String'> | null;
  isSplitToPersonal?: NoYes | null;
  projectName?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyCategory?: DeserializedType<T, 'Edm.String'> | null;
  additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
  dateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employeePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  projectTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  numberOfPassengers: DeserializedType<T, 'Edm.Int32'>;
  intercompanyCurrency?: DeserializedType<T, 'Edm.String'> | null;
  transactionText?: DeserializedType<T, 'Edm.String'> | null;
  originalReceiptsReceived?: NoYes | null;
  merchantId?: DeserializedType<T, 'Edm.String'> | null;
  locationOfEntertainment?: DeserializedType<T, 'Edm.String'> | null;
  expenseType?: TrvExpType | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  costOwner?: TrvCostOwner | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  isPreAuthorized?: NoYes | null;
  postAccountIdentification?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyTransferCurrency?: DeserializedType<T, 'Edm.String'> | null;
  deduktionLunch: DeserializedType<T, 'Edm.Int32'>;
  deduktionBreakfast: DeserializedType<T, 'Edm.Int32'>;
  amountCurr: DeserializedType<T, 'Edm.Decimal'>;
  intercompanySalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  projStatusId?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  addressCityName?: DeserializedType<T, 'Edm.String'> | null;
  cashAdvanceNumber?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  transRowNum: DeserializedType<T, 'Edm.Int32'>;
  deduktionDinner: DeserializedType<T, 'Edm.Int32'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  sharedSubCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  importedCreditCard?: NoYes | null;
  costType?: DeserializedType<T, 'Edm.String'> | null;
  dateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  creditCardLocalAmount: DeserializedType<T, 'Edm.Decimal'>;
  intercompanyCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  splitLineType?: TrvExpSplitLineType | null;
  kmPrice: DeserializedType<T, 'Edm.Decimal'>;
  expenseReportNumber?: DeserializedType<T, 'Edm.String'> | null;
  subCategoryCostType?: DeserializedType<T, 'Edm.String'> | null;
  locationsCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  approvalStatus?: TrvAppStatus | null;
  expenseLineLevelPosting?: NoYes | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  policyViolationCount: DeserializedType<T, 'Edm.Int32'>;
  locationsLocation?: DeserializedType<T, 'Edm.String'> | null;
  mobileStatement?: NoYes | null;
  mileageToAddress?: DeserializedType<T, 'Edm.String'> | null;
  postingErrors?: DeserializedType<T, 'Edm.String'> | null;
  policyViolationsLevel: DeserializedType<T, 'Edm.Int64'>;
  ticketClass?: DeserializedType<T, 'Edm.String'> | null;
  mealReduction: DeserializedType<T, 'Edm.Decimal'>;
  dimensionSet?: DimensionSetsType<T> | null;
}
