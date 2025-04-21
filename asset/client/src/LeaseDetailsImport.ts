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
import type { LeaseDetailsImportApi } from './LeaseDetailsImportApi';
import { NoYes } from './NoYes';
import { AssetLeaseApprovalStatus } from './AssetLeaseApprovalStatus';
import { AssetLeaseRateValue } from './AssetLeaseRateValue';
import { NoYesCombo } from './NoYesCombo';
import { AssetLeaseImportProcessType } from './AssetLeaseImportProcessType';
import { AssetLeaseType } from './AssetLeaseType';
import { MonthsOfYear } from './MonthsOfYear';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { AssetLeaseWorkflowStatus } from './AssetLeaseWorkflowStatus';
import { AssetLeaseCompoundingInterval } from './AssetLeaseCompoundingInterval';
import { AssetLeasePaymentInterval } from './AssetLeasePaymentInterval';
import { AssetLeaseAccountingFramework } from './AssetLeaseAccountingFramework';
import { AssetLeaseAnnuityType } from './AssetLeaseAnnuityType';
import { AssetLeaseLeaseStatus } from './AssetLeaseLeaseStatus';

/**
 * This class represents the entity "LeaseDetailsImportCollection" of service "d365_metadata".
 */
export class LeaseDetailsImport<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeaseDetailsImportType<T>
{
  /**
   * Technical entity name for LeaseDetailsImport.
   */
  static override _entityName = 'LeaseDetailsImportCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseDetailsImport entity.
   */
  static _keys = ['LeaseId', 'ImportId'];
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Import Id.
   */
  declare importId: DeserializedType<T, 'Edm.String'>;
  /**
   * Signature Date.
   */
  declare signatureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Mileage Limit.
   */
  declare mileageLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Penalty For Terminating Lease.
   */
  declare penaltyForTerminatingLease: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lease Incentives.
   */
  declare leaseIncentives: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Option For Renewal.
   * @nullable
   */
  declare optionForRenewal?: NoYes | null;
  /**
   * Next Maintenance.
   */
  declare nextMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate Increase Cap.
   */
  declare rateIncreaseCap: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Approval Status.
   * @nullable
   */
  declare approvalStatus?: AssetLeaseApprovalStatus | null;
  /**
   * Interest Periods Remaining.
   */
  declare interestPeriodsRemaining: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ballon Payment Amount.
   */
  declare ballonPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Logistics Location Fk Location Id.
   * @nullable
   */
  declare logisticsLocationFkLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Adjusted.
   * @nullable
   */
  declare adjusted?: NoYes | null;
  /**
   * Present Value Over Fair Value.
   */
  declare presentValueOverFairValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Fixed Payment.
   * @nullable
   */
  declare isFixedPayment?: AssetLeaseRateValue | null;
  /**
   * Overuse Fee.
   */
  declare overuseFee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commercial Terms.
   * @nullable
   */
  declare commercialTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Ownership.
   * @nullable
   */
  declare transferOwnership?: NoYesCombo | null;
  /**
   * Undiscounted Payments Remaining.
   */
  declare undiscountedPaymentsRemaining: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Maintenance.
   */
  declare lastMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Responsible.
   * @nullable
   */
  declare responsible?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Fixed Asset.
   * @nullable
   */
  declare createFixedAsset?: NoYes | null;
  /**
   * Lease Modification Date.
   */
  declare leaseModificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Deferred Rent Treatment.
   * @nullable
   */
  declare deferredRentTreatment?: NoYes | null;
  /**
   * Lease Description.
   * @nullable
   */
  declare leaseDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Coverage.
   */
  declare maxCoverage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percent Common Area Maintenance.
   */
  declare percentCommonAreaMaintenance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Legal Entity.
   * @nullable
   */
  declare legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fair Value.
   */
  declare fairValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dismantling Costs.
   */
  declare dismantlingCosts: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Months Btw Revaluation.
   */
  declare monthsBtwRevaluation: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Month Name.
   * @nullable
   */
  declare monthName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Import Process Type.
   * @nullable
   */
  declare importProcessType?: AssetLeaseImportProcessType | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lease Type.
   * @nullable
   */
  declare leaseType?: AssetLeaseType | null;
  /**
   * Prepayments.
   */
  declare prepayments: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Incidental Cost.
   */
  declare incidentalCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Present Value Payments Remaining.
   */
  declare presentValuePaymentsRemaining: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Center Opening Date.
   */
  declare centerOpeningDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Security Deposit Reminder Date.
   */
  declare securityDepositReminderDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Fixed Exchange Rate Reporting.
   * @nullable
   */
  declare fixedExchangeRateReporting?: NoYes | null;
  /**
   * Last Depreciation Date.
   */
  declare lastDepreciationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Months Of Year.
   * @nullable
   */
  declare monthsOfYear?: MonthsOfYear | null;
  /**
   * Rentable Area.
   */
  declare rentableArea: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Index Rate Percent.
   */
  declare indexRatePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Current Principal Amount.
   */
  declare currentPrincipalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Year Name.
   */
  declare yearName: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Months Of Useful Life.
   */
  declare monthsOfUsefulLife: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Commencement Date.
   */
  declare commencementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Month Number.
   */
  declare monthNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Variable Component.
   * @nullable
   */
  declare variableComponent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Unposted Depreciation Journals.
   */
  declare unpostedDepreciationJournals: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Index Rate.
   */
  declare indexRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Date Payment Journal.
   */
  declare lastDatePaymentJournal: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lease Payments Remaining.
   */
  declare leasePaymentsRemaining: DeserializedType<T, 'Edm.Int32'>;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Rate.
   */
  declare discountRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deferred Rent Carryover.
   */
  declare deferredRentCarryover: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Current Mileage.
   */
  declare currentMileage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate Reporting.
   */
  declare exchangeRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Security Deposit Refundable.
   * @nullable
   */
  declare securityDepositRefundable?: NoYes | null;
  /**
   * Lessor Contact Name.
   * @nullable
   */
  declare lessorContactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Revaluation Date.
   */
  declare revaluationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Depreciation Periods Remaining.
   */
  declare depreciationPeriodsRemaining: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Unposted Lease Payments.
   */
  declare unpostedLeasePayments: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Lease Group.
   * @nullable
   */
  declare leaseGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unique Asset.
   * @nullable
   */
  declare uniqueAsset?: NoYes | null;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Status.
   * @nullable
   */
  declare workflowStatus?: AssetLeaseWorkflowStatus | null;
  /**
   * Payment Contract Modified.
   * @nullable
   */
  declare paymentContractModified?: NoYes | null;
  /**
   * Centre Num.
   * @nullable
   */
  declare centreNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected Termination Date.
   */
  declare expectedTerminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Extension Period.
   */
  declare extensionPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Lease Start Date.
   */
  declare leaseStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dimension Default Display.
   * @nullable
   */
  declare dimensionDefaultDisplay?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Compounding Interval.
   * @nullable
   */
  declare compoundingInterval?: AssetLeaseCompoundingInterval | null;
  /**
   * Current Liability Balance.
   */
  declare currentLiabilityBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Present Value.
   */
  declare presentValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Manually Revalue.
   * @nullable
   */
  declare manuallyRevalue?: NoYes | null;
  /**
   * Current Asset Balance.
   */
  declare currentAssetBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Years Of Lease.
   */
  declare yearsOfLease: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unposted Interest Journals.
   */
  declare unpostedInterestJournals: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Contract Number.
   * @nullable
   */
  declare contractNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origination Date.
   */
  declare originationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Index Type.
   * @nullable
   */
  declare indexType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Interval.
   * @nullable
   */
  declare paymentInterval?: AssetLeasePaymentInterval | null;
  /**
   * Borrowing Rate.
   */
  declare borrowingRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Date Entry To Post.
   */
  declare dateEntryToPost: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Last Date Interest Journal.
   */
  declare lastDateInterestJournal: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Intend To Extend Lease.
   * @nullable
   */
  declare intendToExtendLease?: NoYesCombo | null;
  /**
   * Accounting Framework.
   * @nullable
   */
  declare accountingFramework?: AssetLeaseAccountingFramework | null;
  /**
   * Fair Value Of Asset.
   */
  declare fairValueOfAsset: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Breakdown Payment Amount.
   * @nullable
   */
  declare breakdownPaymentAmount?: NoYes | null;
  /**
   * Year Of Useful Life.
   */
  declare yearOfUsefulLife: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Of Measure.
   * @nullable
   */
  declare unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Responsible Fk Personnel Number.
   * @nullable
   */
  declare workerResponsibleFkPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Annuity Type.
   * @nullable
   */
  declare annuityType?: AssetLeaseAnnuityType | null;
  /**
   * Interest Rate.
   */
  declare interestRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Lease Type.
   * @nullable
   */
  declare overrideLeaseType?: NoYes | null;
  /**
   * Logistics Address Country Region Id.
   * @nullable
   */
  declare logisticsAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Low Value Lease.
   * @nullable
   */
  declare lowValueLease?: NoYes | null;
  /**
   * Short Term Lease.
   * @nullable
   */
  declare shortTermLease?: NoYes | null;
  /**
   * Lease Term Over Useful Life.
   */
  declare leaseTermOverUsefulLife: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Decreases.
   * @nullable
   */
  declare allowDecreases?: NoYes | null;
  /**
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Holdover Fee.
   */
  declare holdoverFee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Min Liability.
   */
  declare minLiability: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Initial Direct Cost.
   */
  declare initialDirectCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Residual Value Guarantee.
   */
  declare residualValueGuarantee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Per Mile.
   */
  declare costPerMile: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Previous Lease Type.
   * @nullable
   */
  declare previousLeaseType?: AssetLeaseType | null;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Late Payment.
   */
  declare latePayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Book Table Book Type.
   * @nullable
   */
  declare bookTableBookType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Balloon Payment.
   * @nullable
   */
  declare balloonPayment?: NoYesCombo | null;
  /**
   * Lessor Reference Number.
   * @nullable
   */
  declare lessorReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Security Deposit.
   */
  declare securityDeposit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Periods.
   */
  declare numberOfPeriods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Extension Payment.
   */
  declare extensionPayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Location Memo.
   * @nullable
   */
  declare locationMemo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lease Term Months.
   */
  declare leaseTermMonths: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Lease Status.
   * @nullable
   */
  declare leaseStatus?: AssetLeaseLeaseStatus | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Periods Remaining.
   */
  declare periodsRemaining: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Fixed Exchange Rate.
   * @nullable
   */
  declare fixedExchangeRate?: NoYes | null;

  constructor(_entityApi: LeaseDetailsImportApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseDetailsImportType<
  T extends DeSerializers = DefaultDeSerializers
> {
  leaseId: DeserializedType<T, 'Edm.String'>;
  importId: DeserializedType<T, 'Edm.String'>;
  signatureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  mileageLimit: DeserializedType<T, 'Edm.Decimal'>;
  penaltyForTerminatingLease: DeserializedType<T, 'Edm.Decimal'>;
  leaseIncentives: DeserializedType<T, 'Edm.Decimal'>;
  optionForRenewal?: NoYes | null;
  nextMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  rateIncreaseCap: DeserializedType<T, 'Edm.Decimal'>;
  approvalStatus?: AssetLeaseApprovalStatus | null;
  interestPeriodsRemaining: DeserializedType<T, 'Edm.Int32'>;
  ballonPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  logisticsLocationFkLocationId?: DeserializedType<T, 'Edm.String'> | null;
  adjusted?: NoYes | null;
  presentValueOverFairValue: DeserializedType<T, 'Edm.Decimal'>;
  isFixedPayment?: AssetLeaseRateValue | null;
  overuseFee: DeserializedType<T, 'Edm.Decimal'>;
  commercialTerms?: DeserializedType<T, 'Edm.String'> | null;
  transferOwnership?: NoYesCombo | null;
  undiscountedPaymentsRemaining: DeserializedType<T, 'Edm.Decimal'>;
  lastMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  responsible?: DeserializedType<T, 'Edm.String'> | null;
  createFixedAsset?: NoYes | null;
  leaseModificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deferredRentTreatment?: NoYes | null;
  leaseDescription?: DeserializedType<T, 'Edm.String'> | null;
  maxCoverage: DeserializedType<T, 'Edm.Decimal'>;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  percentCommonAreaMaintenance: DeserializedType<T, 'Edm.Decimal'>;
  legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  fairValue: DeserializedType<T, 'Edm.Decimal'>;
  dismantlingCosts: DeserializedType<T, 'Edm.Decimal'>;
  monthsBtwRevaluation: DeserializedType<T, 'Edm.Int32'>;
  monthName?: DeserializedType<T, 'Edm.String'> | null;
  importProcessType?: AssetLeaseImportProcessType | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  leaseType?: AssetLeaseType | null;
  prepayments: DeserializedType<T, 'Edm.Decimal'>;
  incidentalCost: DeserializedType<T, 'Edm.Decimal'>;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  presentValuePaymentsRemaining: DeserializedType<T, 'Edm.Decimal'>;
  centerOpeningDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  securityDepositReminderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fixedExchangeRateReporting?: NoYes | null;
  lastDepreciationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  monthsOfYear?: MonthsOfYear | null;
  rentableArea: DeserializedType<T, 'Edm.Decimal'>;
  indexRatePercent: DeserializedType<T, 'Edm.Decimal'>;
  currentPrincipalAmount: DeserializedType<T, 'Edm.Decimal'>;
  yearName: DeserializedType<T, 'Edm.Int32'>;
  monthsOfUsefulLife: DeserializedType<T, 'Edm.Int32'>;
  commencementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  monthNumber: DeserializedType<T, 'Edm.Int32'>;
  variableComponent?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unpostedDepreciationJournals: DeserializedType<T, 'Edm.Int32'>;
  indexRate: DeserializedType<T, 'Edm.Decimal'>;
  lastDatePaymentJournal: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leasePaymentsRemaining: DeserializedType<T, 'Edm.Int32'>;
  city?: DeserializedType<T, 'Edm.String'> | null;
  discountRate: DeserializedType<T, 'Edm.Decimal'>;
  deferredRentCarryover: DeserializedType<T, 'Edm.Decimal'>;
  currentMileage: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  securityDepositRefundable?: NoYes | null;
  lessorContactName?: DeserializedType<T, 'Edm.String'> | null;
  postingLayer?: CurrentOperationsTax | null;
  revaluationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  depreciationPeriodsRemaining: DeserializedType<T, 'Edm.Int32'>;
  unpostedLeasePayments: DeserializedType<T, 'Edm.Int32'>;
  leaseGroup?: DeserializedType<T, 'Edm.String'> | null;
  uniqueAsset?: NoYes | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  workflowStatus?: AssetLeaseWorkflowStatus | null;
  paymentContractModified?: NoYes | null;
  centreNum?: DeserializedType<T, 'Edm.String'> | null;
  expectedTerminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  extensionPeriod: DeserializedType<T, 'Edm.Int32'>;
  leaseStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dimensionDefaultDisplay?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  compoundingInterval?: AssetLeaseCompoundingInterval | null;
  currentLiabilityBalance: DeserializedType<T, 'Edm.Decimal'>;
  presentValue: DeserializedType<T, 'Edm.Decimal'>;
  manuallyRevalue?: NoYes | null;
  currentAssetBalance: DeserializedType<T, 'Edm.Decimal'>;
  yearsOfLease: DeserializedType<T, 'Edm.Decimal'>;
  unpostedInterestJournals: DeserializedType<T, 'Edm.Int32'>;
  contractNumber?: DeserializedType<T, 'Edm.String'> | null;
  originationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  indexType?: DeserializedType<T, 'Edm.String'> | null;
  paymentInterval?: AssetLeasePaymentInterval | null;
  borrowingRate: DeserializedType<T, 'Edm.Decimal'>;
  dateEntryToPost: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lastDateInterestJournal: DeserializedType<T, 'Edm.DateTimeOffset'>;
  intendToExtendLease?: NoYesCombo | null;
  accountingFramework?: AssetLeaseAccountingFramework | null;
  fairValueOfAsset: DeserializedType<T, 'Edm.Decimal'>;
  breakdownPaymentAmount?: NoYes | null;
  yearOfUsefulLife: DeserializedType<T, 'Edm.Decimal'>;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  workerResponsibleFkPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  annuityType?: AssetLeaseAnnuityType | null;
  interestRate: DeserializedType<T, 'Edm.Decimal'>;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  overrideLeaseType?: NoYes | null;
  logisticsAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  lowValueLease?: NoYes | null;
  shortTermLease?: NoYes | null;
  leaseTermOverUsefulLife: DeserializedType<T, 'Edm.Decimal'>;
  allowDecreases?: NoYes | null;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  holdoverFee: DeserializedType<T, 'Edm.Decimal'>;
  minLiability: DeserializedType<T, 'Edm.Decimal'>;
  initialDirectCost: DeserializedType<T, 'Edm.Decimal'>;
  residualValueGuarantee: DeserializedType<T, 'Edm.Decimal'>;
  costPerMile: DeserializedType<T, 'Edm.Decimal'>;
  street?: DeserializedType<T, 'Edm.String'> | null;
  previousLeaseType?: AssetLeaseType | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  latePayment: DeserializedType<T, 'Edm.Decimal'>;
  bookTableBookType?: DeserializedType<T, 'Edm.String'> | null;
  balloonPayment?: NoYesCombo | null;
  lessorReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  securityDeposit: DeserializedType<T, 'Edm.Decimal'>;
  numberOfPeriods: DeserializedType<T, 'Edm.Int32'>;
  extensionPayment: DeserializedType<T, 'Edm.Decimal'>;
  locationMemo?: DeserializedType<T, 'Edm.String'> | null;
  leaseTermMonths: DeserializedType<T, 'Edm.Int32'>;
  leaseStatus?: AssetLeaseLeaseStatus | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  periodsRemaining: DeserializedType<T, 'Edm.Int32'>;
  fixedExchangeRate?: NoYes | null;
}
