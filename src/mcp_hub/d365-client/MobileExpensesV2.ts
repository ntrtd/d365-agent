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
import type { MobileExpensesV2Api } from './MobileExpensesV2Api';
import { NoYes } from './NoYes';
import { TrvCostOwner } from './TrvCostOwner';
import { TrvExpLineType } from './TrvExpLineType';
import { TrvAppStatus } from './TrvAppStatus';
import { TrvExpSplitLineType } from './TrvExpSplitLineType';
import { TrvExpType } from './TrvExpType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { TrvCarRentalVehicleClassEnum } from './TrvCarRentalVehicleClassEnum';
import { ProjExpPolicyStatus } from './ProjExpPolicyStatus';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "MobileExpensesV2" of service "d365_metadata".
 */
export class MobileExpensesV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MobileExpensesV2Type<T>
{
  /**
   * Technical entity name for MobileExpensesV2.
   */
  static override _entityName = 'MobileExpensesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MobileExpensesV2 entity.
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
   * Cash Advance Number.
   * @nullable
   */
  declare cashAdvanceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Guest Name.
   * @nullable
   */
  declare guestName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intercompany Cost Price.
   */
  declare intercompanyCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Pre Authorized.
   * @nullable
   */
  declare isPreAuthorized?: NoYes | null;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Zip Code Details.
   * @nullable
   */
  declare addressZipCodeDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purpose.
   * @nullable
   */
  declare purpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ticket Class.
   * @nullable
   */
  declare ticketClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduktion Dinner.
   */
  declare deduktionDinner: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cost Owner.
   * @nullable
   */
  declare costOwner?: TrvCostOwner | null;
  /**
   * Receipt Required.
   * @nullable
   */
  declare receiptRequired?: NoYes | null;
  /**
   * Locations Country Region Id.
   * @nullable
   */
  declare locationsCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Tax Amount.
   */
  declare totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Date To.
   */
  declare dateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Merchant Id.
   * @nullable
   */
  declare merchantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City.
   */
  declare addressCity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Number Of Legs.
   */
  declare numberOfLegs: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Regular Mileage Charges.
   */
  declare regularMileageCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Status Id.
   * @nullable
   */
  declare projStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issuing Carrier.
   * @nullable
   */
  declare issuingCarrier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date From.
   */
  declare dateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expense Line Type.
   * @nullable
   */
  declare expenseLineType?: TrvExpLineType | null;
  /**
   * Ticket Used.
   * @nullable
   */
  declare ticketUsed?: NoYes | null;
  /**
   * Expense Report Number.
   * @nullable
   */
  declare expenseReportNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Travel Agency Name.
   * @nullable
   */
  declare travelAgencyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Weekly Rental Rate.
   */
  declare weeklyRentalRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intercompany Transfer Currency.
   * @nullable
   */
  declare intercompanyTransferCurrency?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Imported Credit Card.
   * @nullable
   */
  declare importedCreditCard?: NoYes | null;
  /**
   * Approval Status.
   * @nullable
   */
  declare approvalStatus?: TrvAppStatus | null;
  /**
   * Policy Violations Level.
   */
  declare policyViolationsLevel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Locations Location.
   * @nullable
   */
  declare locationsLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason.
   * @nullable
   */
  declare reason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity Data Area Id.
   * @nullable
   */
  declare legalEntityDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Itemized Line Trans Number.
   * @nullable
   */
  declare itemizedLineTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Corrected Tax Amount.
   */
  declare correctedTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receipts Attached.
   * @nullable
   */
  declare receiptsAttached?: NoYes | null;
  /**
   * Country Region.
   * @nullable
   */
  declare countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Date.
   */
  declare returnDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Date Approved.
   */
  declare dateApproved: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Date Rejected.
   */
  declare dateRejected: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Location Of Entertainment.
   * @nullable
   */
  declare locationOfEntertainment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Receipts Received.
   * @nullable
   */
  declare originalReceiptsReceived?: NoYes | null;
  /**
   * Ticket Issue Date.
   */
  declare ticketIssueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Net Transaction Amount.
   */
  declare netTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mileage From Address.
   * @nullable
   */
  declare mileageFromAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Amount In Company Currency.
   */
  declare salesTaxAmountInCompanyCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Miles.
   */
  declare totalMiles: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Amt.
   */
  declare invoiceAmt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Passengers.
   */
  declare numberOfPassengers: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Locations State Id.
   * @nullable
   */
  declare locationsStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduktion Lunch.
   */
  declare deduktionLunch: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Total Room Nights.
   */
  declare totalRoomNights: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Check Out Date.
   */
  declare checkOutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Additional Information.
   * @nullable
   */
  declare additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Url.
   * @nullable
   */
  declare receiptUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mobile Statement.
   * @nullable
   */
  declare mobileStatement?: NoYes | null;
  /**
   * Inter Company Le.
   * @nullable
   */
  declare interCompanyLe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Km Own Car.
   */
  declare kmOwnCar: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intercompany Currency.
   * @nullable
   */
  declare intercompanyCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Ticket Number.
   * @nullable
   */
  declare originalTicketNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Split To Personal.
   * @nullable
   */
  declare isSplitToPersonal?: NoYes | null;
  /**
   * Folio Number.
   * @nullable
   */
  declare folioNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Monthly Rental Rate.
   */
  declare monthlyRentalRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Travel Agency Code.
   * @nullable
   */
  declare travelAgencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * No Show Indicator.
   * @nullable
   */
  declare noShowIndicator?: NoYes | null;
  /**
   * Split Line Type.
   * @nullable
   */
  declare splitLineType?: TrvExpSplitLineType | null;
  /**
   * Meal Reduction.
   */
  declare mealReduction: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Departure Date.
   */
  declare departureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Transaction Id.
   * @nullable
   */
  declare projectTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Justifying Worker.
   */
  declare justifyingWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Intercompany Billed.
   */
  declare intercompanyBilled: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Trans Row Num.
   */
  declare transRowNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expense Type.
   * @nullable
   */
  declare expenseType?: TrvExpType | null;
  /**
   * Post Account Identification.
   * @nullable
   */
  declare postAccountIdentification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Offset Account Type.
   * @nullable
   */
  declare postOffsetAccountType?: LedgerJournalAcType | null;
  /**
   * Vehicle Class.
   * @nullable
   */
  declare vehicleClass?: TrvCarRentalVehicleClassEnum | null;
  /**
   * Intercompany Sales Price.
   */
  declare intercompanySalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Passenger Name.
   * @nullable
   */
  declare passengerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Curr.
   */
  declare amountCurr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Km Price.
   */
  declare kmPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Errors.
   * @nullable
   */
  declare postingErrors?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reservation Number.
   * @nullable
   */
  declare reservationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City Name.
   * @nullable
   */
  declare addressCityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mileage To Address.
   * @nullable
   */
  declare mileageToAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Code.
   * @nullable
   */
  declare exchangeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vehicle Type.
   * @nullable
   */
  declare vehicleType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Ticket Number.
   * @nullable
   */
  declare exchangeTicketNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Activity Number.
   * @nullable
   */
  declare projActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Included.
   * @nullable
   */
  declare taxIncluded?: NoYes | null;
  /**
   * Check Out Location.
   * @nullable
   */
  declare checkOutLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Daily Rental Rate.
   */
  declare dailyRentalRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expense Line Level Posting.
   * @nullable
   */
  declare expenseLineLevelPosting?: NoYes | null;
  /**
   * Sub Category Cost Type.
   * @nullable
   */
  declare subCategoryCostType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Guest Number.
   */
  declare guestNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Submitter Justification Required.
   */
  declare isSubmitterJustificationRequired: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Deduktion Breakfast.
   */
  declare deduktionBreakfast: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Renter Name.
   * @nullable
   */
  declare renterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Card Local Currency.
   * @nullable
   */
  declare creditCardLocalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attached Docu Ref Id.
   */
  declare attachedDocuRefId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Policy Violation Count.
   */
  declare policyViolationCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Transaction Text.
   * @nullable
   */
  declare transactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Type.
   * @nullable
   */
  declare costType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shared Sub Category Name.
   * @nullable
   */
  declare sharedSubCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Name.
   * @nullable
   */
  declare projectName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Domestic Indicator.
   * @nullable
   */
  declare domesticIndicator?: NoYes | null;
  /**
   * Apply Action.
   * @nullable
   */
  declare applyAction?: NoYes | null;
  /**
   * Travel Agency Invoice Number.
   * @nullable
   */
  declare travelAgencyInvoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reconciled.
   */
  declare reconciled: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Location.
   * @nullable
   */
  declare returnLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Method.
   * @nullable
   */
  declare payMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check In Date.
   */
  declare checkInDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reimburse Amt.
   */
  declare reimburseAmt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: ProjExpPolicyStatus | null;
  /**
   * Inter Company Category.
   * @nullable
   */
  declare interCompanyCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Room Rent.
   */
  declare totalRoomRent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Employee Personnel Number.
   * @nullable
   */
  declare employeePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Days Rented.
   */
  declare daysRented: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Car Rental Check Out Date.
   */
  declare carRentalCheckOutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Credit Card Local Amount.
   */
  declare creditCardLocalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Submitter Justification.
   * @nullable
   */
  declare submitterJustification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Number.
   * @nullable
   */
  declare receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ticket Number.
   * @nullable
   */
  declare ticketNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: MobileExpensesV2Api<T>) {
    super(_entityApi);
  }
}

export interface MobileExpensesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  expenseTransactionNumber: DeserializedType<T, 'Edm.String'>;
  cashAdvanceNumber?: DeserializedType<T, 'Edm.String'> | null;
  guestName?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  isPreAuthorized?: NoYes | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  addressZipCodeDetails?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  ticketClass?: DeserializedType<T, 'Edm.String'> | null;
  deduktionDinner: DeserializedType<T, 'Edm.Int32'>;
  costOwner?: TrvCostOwner | null;
  receiptRequired?: NoYes | null;
  locationsCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  dateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  merchantId?: DeserializedType<T, 'Edm.String'> | null;
  addressCity: DeserializedType<T, 'Edm.Int64'>;
  numberOfLegs: DeserializedType<T, 'Edm.Int32'>;
  regularMileageCharges: DeserializedType<T, 'Edm.Decimal'>;
  projStatusId?: DeserializedType<T, 'Edm.String'> | null;
  issuingCarrier?: DeserializedType<T, 'Edm.String'> | null;
  dateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expenseLineType?: TrvExpLineType | null;
  ticketUsed?: NoYes | null;
  expenseReportNumber?: DeserializedType<T, 'Edm.String'> | null;
  travelAgencyName?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  weeklyRentalRate: DeserializedType<T, 'Edm.Decimal'>;
  intercompanyTransferCurrency?: DeserializedType<T, 'Edm.String'> | null;
  importedCreditCard?: NoYes | null;
  approvalStatus?: TrvAppStatus | null;
  policyViolationsLevel: DeserializedType<T, 'Edm.Int64'>;
  locationsLocation?: DeserializedType<T, 'Edm.String'> | null;
  reason?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  itemizedLineTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  correctedTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  receiptsAttached?: NoYes | null;
  countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  returnDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dateApproved: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dateRejected: DeserializedType<T, 'Edm.DateTimeOffset'>;
  locationOfEntertainment?: DeserializedType<T, 'Edm.String'> | null;
  originalReceiptsReceived?: NoYes | null;
  ticketIssueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  netTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  mileageFromAddress?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxAmountInCompanyCurrency: DeserializedType<T, 'Edm.Decimal'>;
  totalMiles: DeserializedType<T, 'Edm.Decimal'>;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAmt: DeserializedType<T, 'Edm.Decimal'>;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  numberOfPassengers: DeserializedType<T, 'Edm.Int32'>;
  locationsStateId?: DeserializedType<T, 'Edm.String'> | null;
  deduktionLunch: DeserializedType<T, 'Edm.Int32'>;
  totalRoomNights: DeserializedType<T, 'Edm.Int32'>;
  checkOutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
  receiptUrl?: DeserializedType<T, 'Edm.String'> | null;
  mobileStatement?: NoYes | null;
  interCompanyLe?: DeserializedType<T, 'Edm.String'> | null;
  kmOwnCar: DeserializedType<T, 'Edm.Decimal'>;
  intercompanyCurrency?: DeserializedType<T, 'Edm.String'> | null;
  originalTicketNumber?: DeserializedType<T, 'Edm.String'> | null;
  isSplitToPersonal?: NoYes | null;
  folioNumber?: DeserializedType<T, 'Edm.String'> | null;
  monthlyRentalRate: DeserializedType<T, 'Edm.Decimal'>;
  travelAgencyCode?: DeserializedType<T, 'Edm.String'> | null;
  noShowIndicator?: NoYes | null;
  splitLineType?: TrvExpSplitLineType | null;
  mealReduction: DeserializedType<T, 'Edm.Decimal'>;
  departureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  justifyingWorker: DeserializedType<T, 'Edm.Int64'>;
  intercompanyBilled: DeserializedType<T, 'Edm.Boolean'>;
  transRowNum: DeserializedType<T, 'Edm.Int32'>;
  expenseType?: TrvExpType | null;
  postAccountIdentification?: DeserializedType<T, 'Edm.String'> | null;
  postOffsetAccountType?: LedgerJournalAcType | null;
  vehicleClass?: TrvCarRentalVehicleClassEnum | null;
  intercompanySalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  passengerName?: DeserializedType<T, 'Edm.String'> | null;
  amountCurr: DeserializedType<T, 'Edm.Decimal'>;
  kmPrice: DeserializedType<T, 'Edm.Decimal'>;
  postingErrors?: DeserializedType<T, 'Edm.String'> | null;
  reservationNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressCityName?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  mileageToAddress?: DeserializedType<T, 'Edm.String'> | null;
  exchangeCode?: DeserializedType<T, 'Edm.String'> | null;
  vehicleType?: DeserializedType<T, 'Edm.String'> | null;
  exchangeTicketNumber?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  projActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxIncluded?: NoYes | null;
  checkOutLocation?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  dailyRentalRate: DeserializedType<T, 'Edm.Decimal'>;
  expenseLineLevelPosting?: NoYes | null;
  subCategoryCostType?: DeserializedType<T, 'Edm.String'> | null;
  guestNumber: DeserializedType<T, 'Edm.Int32'>;
  isSubmitterJustificationRequired: DeserializedType<T, 'Edm.Int32'>;
  deduktionBreakfast: DeserializedType<T, 'Edm.Int32'>;
  renterName?: DeserializedType<T, 'Edm.String'> | null;
  creditCardLocalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  attachedDocuRefId: DeserializedType<T, 'Edm.Int64'>;
  policyViolationCount: DeserializedType<T, 'Edm.Int32'>;
  transactionText?: DeserializedType<T, 'Edm.String'> | null;
  costType?: DeserializedType<T, 'Edm.String'> | null;
  sharedSubCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  projectName?: DeserializedType<T, 'Edm.String'> | null;
  domesticIndicator?: NoYes | null;
  applyAction?: NoYes | null;
  travelAgencyInvoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  reconciled: DeserializedType<T, 'Edm.Decimal'>;
  returnLocation?: DeserializedType<T, 'Edm.String'> | null;
  payMethod?: DeserializedType<T, 'Edm.String'> | null;
  checkInDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reimburseAmt: DeserializedType<T, 'Edm.Decimal'>;
  status?: ProjExpPolicyStatus | null;
  interCompanyCategory?: DeserializedType<T, 'Edm.String'> | null;
  totalRoomRent: DeserializedType<T, 'Edm.Decimal'>;
  employeePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  daysRented: DeserializedType<T, 'Edm.Decimal'>;
  carRentalCheckOutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  creditCardLocalAmount: DeserializedType<T, 'Edm.Decimal'>;
  submitterJustification?: DeserializedType<T, 'Edm.String'> | null;
  receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  ticketNumber?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
