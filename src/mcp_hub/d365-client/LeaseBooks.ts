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
import type { LeaseBooksApi } from './LeaseBooksApi';
import { NoYesCombo } from './NoYesCombo';
import { AssetLeaseLeasingConvention } from './AssetLeaseLeasingConvention';
import { AssetLeaseType } from './AssetLeaseType';
import { NoYes } from './NoYes';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { AssetLeaseCompoundingInterval } from './AssetLeaseCompoundingInterval';
import { AssetLeaseAccountingFramework } from './AssetLeaseAccountingFramework';
import { AssetLeaseAnnuityType } from './AssetLeaseAnnuityType';
import { AssetLeaseLeaseStatus } from './AssetLeaseLeaseStatus';
import { ParentLeases, ParentLeasesType } from './ParentLeases';

/**
 * This class represents the entity "LeaseBooks" of service "d365_metadata".
 */
export class LeaseBooks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeaseBooksType<T>
{
  /**
   * Technical entity name for LeaseBooks.
   */
  static override _entityName = 'LeaseBooks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseBooks entity.
   */
  static _keys = ['dataAreaId', 'LeaseId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Mileage Limit.
   */
  declare mileageLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lease Incentives.
   */
  declare leaseIncentives: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Override Reason.
   * @nullable
   */
  declare overrideReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Asset Number.
   * @nullable
   */
  declare fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interest Periods Remaining.
   */
  declare interestPeriodsRemaining: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Transfer Of Ownership.
   * @nullable
   */
  declare transferOfOwnership?: NoYesCombo | null;
  /**
   * Implicit Rate.
   */
  declare implicitRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Present Value Over Fair Value.
   */
  declare presentValueOverFairValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Overuse Fee.
   */
  declare overuseFee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Undiscounted Payments Remaining.
   */
  declare undiscountedPaymentsRemaining: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Book Type.
   * @nullable
   */
  declare bookType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Opening Date.
   */
  declare locationOpeningDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lease Modification Date.
   */
  declare leaseModificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Financing Amount.
   */
  declare financingAmount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Percent Common Area Maintenance.
   */
  declare percentCommonAreaMaintenance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Index Change To Apply.
   */
  declare indexChangeToApply: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Leasing Convention.
   * @nullable
   */
  declare leasingConvention?: AssetLeaseLeasingConvention | null;
  /**
   * Dismantling Costs.
   */
  declare dismantlingCosts: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Months Between Revaluations.
   */
  declare monthsBetweenRevaluations: DeserializedType<T, 'Edm.Int32'>;
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
   * Index Rate Type.
   * @nullable
   */
  declare indexRateType?: DeserializedType<T, 'Edm.String'> | null;
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
   * Rentable Area.
   */
  declare rentableArea: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commencement Date.
   */
  declare commencementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fixed Asset Book Id.
   * @nullable
   */
  declare fixedAssetBookId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Percent Of Index Change To Apply.
   */
  declare percentOfIndexChangeToApply: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Master Lease Id.
   * @nullable
   */
  declare masterLeaseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Security Deposit Refundable.
   * @nullable
   */
  declare securityDepositRefundable?: NoYes | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
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
   * Limit On Rate Increase.
   */
  declare limitOnRateIncrease: DeserializedType<T, 'Edm.Decimal'>;
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
   * Payment Contract Modified.
   * @nullable
   */
  declare paymentContractModified?: NoYes | null;
  /**
   * Expected Termination Date.
   */
  declare expectedTerminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lease Start Date.
   */
  declare leaseStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bank Contract Number.
   * @nullable
   */
  declare bankContractNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Manually Revalue.
   * @nullable
   */
  declare manuallyRevalue?: NoYes | null;
  /**
   * Financial Commercial Terms.
   * @nullable
   */
  declare financialCommercialTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Current Asset Balance.
   */
  declare currentAssetBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unposted Interest Journals.
   */
  declare unpostedInterestJournals: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Minimun Limits Of Liability.
   */
  declare minimunLimitsOfLiability: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lease Classification.
   * @nullable
   */
  declare leaseClassification?: AssetLeaseAccountingFramework | null;
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
   * Accounting Framework.
   * @nullable
   */
  declare accountingFramework?: AssetLeaseAccountingFramework | null;
  /**
   * Lease Prepayments.
   */
  declare leasePrepayments: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fair Value Of Asset.
   */
  declare fairValueOfAsset: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Of Measure.
   * @nullable
   */
  declare unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Annuity Type.
   * @nullable
   */
  declare annuityType?: AssetLeaseAnnuityType | null;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Signature Date.
   */
  declare contractSignatureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Asset Useful Life.
   */
  declare assetUsefulLife: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Holdover Fee.
   */
  declare holdoverFee: DeserializedType<T, 'Edm.Decimal'>;
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
   * Security Deposit.
   */
  declare securityDeposit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Location Number.
   * @nullable
   */
  declare locationNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Fixed Exchange Rate.
   * @nullable
   */
  declare fixedExchangeRate?: NoYes | null;
  /**
   * Dimension Default Display Value.
   * @nullable
   */
  declare dimensionDefaultDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link ParentLeases} entity.
   */
  declare leaseIdMasterLeaseId?: ParentLeases<T> | null;

  constructor(_entityApi: LeaseBooksApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseBooksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  mileageLimit: DeserializedType<T, 'Edm.Decimal'>;
  leaseIncentives: DeserializedType<T, 'Edm.Decimal'>;
  overrideReason?: DeserializedType<T, 'Edm.String'> | null;
  fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  interestPeriodsRemaining: DeserializedType<T, 'Edm.Int32'>;
  transferOfOwnership?: NoYesCombo | null;
  implicitRate: DeserializedType<T, 'Edm.Decimal'>;
  presentValueOverFairValue: DeserializedType<T, 'Edm.Decimal'>;
  overuseFee: DeserializedType<T, 'Edm.Decimal'>;
  undiscountedPaymentsRemaining: DeserializedType<T, 'Edm.Decimal'>;
  bookType?: DeserializedType<T, 'Edm.String'> | null;
  locationOpeningDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leaseModificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leaseDescription?: DeserializedType<T, 'Edm.String'> | null;
  maxCoverage: DeserializedType<T, 'Edm.Decimal'>;
  financingAmount: DeserializedType<T, 'Edm.Int32'>;
  percentCommonAreaMaintenance: DeserializedType<T, 'Edm.Decimal'>;
  indexChangeToApply: DeserializedType<T, 'Edm.Decimal'>;
  leasingConvention?: AssetLeaseLeasingConvention | null;
  dismantlingCosts: DeserializedType<T, 'Edm.Decimal'>;
  monthsBetweenRevaluations: DeserializedType<T, 'Edm.Int32'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  leaseType?: AssetLeaseType | null;
  incidentalCost: DeserializedType<T, 'Edm.Decimal'>;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  presentValuePaymentsRemaining: DeserializedType<T, 'Edm.Decimal'>;
  indexRateType?: DeserializedType<T, 'Edm.String'> | null;
  securityDepositReminderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fixedExchangeRateReporting?: NoYes | null;
  lastDepreciationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  rentableArea: DeserializedType<T, 'Edm.Decimal'>;
  commencementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fixedAssetBookId?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unpostedDepreciationJournals: DeserializedType<T, 'Edm.Int32'>;
  indexRate: DeserializedType<T, 'Edm.Decimal'>;
  lastDatePaymentJournal: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leasePaymentsRemaining: DeserializedType<T, 'Edm.Int32'>;
  city?: DeserializedType<T, 'Edm.String'> | null;
  deferredRentCarryover: DeserializedType<T, 'Edm.Decimal'>;
  currentMileage: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  percentOfIndexChangeToApply: DeserializedType<T, 'Edm.Decimal'>;
  masterLeaseId?: DeserializedType<T, 'Edm.String'> | null;
  securityDepositRefundable?: NoYes | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  postingLayer?: CurrentOperationsTax | null;
  revaluationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  depreciationPeriodsRemaining: DeserializedType<T, 'Edm.Int32'>;
  limitOnRateIncrease: DeserializedType<T, 'Edm.Decimal'>;
  unpostedLeasePayments: DeserializedType<T, 'Edm.Int32'>;
  leaseGroup?: DeserializedType<T, 'Edm.String'> | null;
  uniqueAsset?: NoYes | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  paymentContractModified?: NoYes | null;
  expectedTerminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leaseStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bankContractNumber?: DeserializedType<T, 'Edm.String'> | null;
  compoundingInterval?: AssetLeaseCompoundingInterval | null;
  currentLiabilityBalance: DeserializedType<T, 'Edm.Decimal'>;
  manuallyRevalue?: NoYes | null;
  financialCommercialTerms?: DeserializedType<T, 'Edm.String'> | null;
  currentAssetBalance: DeserializedType<T, 'Edm.Decimal'>;
  unpostedInterestJournals: DeserializedType<T, 'Edm.Int32'>;
  minimunLimitsOfLiability: DeserializedType<T, 'Edm.Decimal'>;
  leaseClassification?: AssetLeaseAccountingFramework | null;
  borrowingRate: DeserializedType<T, 'Edm.Decimal'>;
  dateEntryToPost: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lastDateInterestJournal: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountingFramework?: AssetLeaseAccountingFramework | null;
  leasePrepayments: DeserializedType<T, 'Edm.Decimal'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  fairValueOfAsset: DeserializedType<T, 'Edm.Decimal'>;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  annuityType?: AssetLeaseAnnuityType | null;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  contractSignatureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lowValueLease?: NoYes | null;
  shortTermLease?: NoYes | null;
  leaseTermOverUsefulLife: DeserializedType<T, 'Edm.Decimal'>;
  allowDecreases?: NoYes | null;
  assetUsefulLife: DeserializedType<T, 'Edm.Int32'>;
  holdoverFee: DeserializedType<T, 'Edm.Decimal'>;
  initialDirectCost: DeserializedType<T, 'Edm.Decimal'>;
  residualValueGuarantee: DeserializedType<T, 'Edm.Decimal'>;
  costPerMile: DeserializedType<T, 'Edm.Decimal'>;
  street?: DeserializedType<T, 'Edm.String'> | null;
  previousLeaseType?: AssetLeaseType | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  latePayment: DeserializedType<T, 'Edm.Decimal'>;
  securityDeposit: DeserializedType<T, 'Edm.Decimal'>;
  locationNumber?: DeserializedType<T, 'Edm.String'> | null;
  leaseTermMonths: DeserializedType<T, 'Edm.Int32'>;
  leaseStatus?: AssetLeaseLeaseStatus | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchangeRate?: NoYes | null;
  dimensionDefaultDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  leaseIdMasterLeaseId?: ParentLeasesType<T> | null;
}
