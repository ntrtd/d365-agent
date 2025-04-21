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
import type { HumanResourcesParametersApi } from './HumanResourcesParametersApi';
import { NoYes } from './NoYes';
import { HcmFmlaEligibilityPriorityDateType } from './HcmFmlaEligibilityPriorityDateType';
import { PeriodUnit } from './PeriodUnit';
import { HcmViewExitingWorkerOption } from './HcmViewExitingWorkerOption';
import { HcmYearsOfServiceDisplay } from './HcmYearsOfServiceDisplay';
import { HcmOpenPositionsType } from './HcmOpenPositionsType';
import { HcmFmlaEligibilityPeriodType } from './HcmFmlaEligibilityPeriodType';
import { HcmFmlaCalendarType } from './HcmFmlaCalendarType';
import { HrmCompRatingModel } from './HrmCompRatingModel';
import { LeaveAmountUnit } from './LeaveAmountUnit';
import { LeaveBalanceCalculationOption } from './LeaveBalanceCalculationOption';
import { LeaveMonthsOfServiceCalculationOption } from './LeaveMonthsOfServiceCalculationOption';
import { RatingModels, RatingModelsType } from './RatingModels';
import {
  IdentificationTypes,
  IdentificationTypesType
} from './IdentificationTypes';

/**
 * This class represents the entity "HumanResourcesParameters" of service "d365_metadata".
 */
export class HumanResourcesParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HumanResourcesParametersType<T>
{
  /**
   * Technical entity name for HumanResourcesParameters.
   */
  static override _entityName = 'HumanResourcesParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HumanResourcesParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Enable Injury Illness Incident Retention.
   * @nullable
   */
  declare enableInjuryIllnessIncidentRetention?: NoYes | null;
  /**
   * Fmla Eligibility Priority Date Sequence 4.
   * @nullable
   */
  declare fmlaEligibilityPriorityDateSequence4?: HcmFmlaEligibilityPriorityDateType | null;
  /**
   * Fmla Entitlement Standard Hours.
   */
  declare fmlaEntitlementStandardHours: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mss Exiting Workers Period Unit.
   * @nullable
   */
  declare mssExitingWorkersPeriodUnit?: PeriodUnit | null;
  /**
   * Fmla Eligibility Length Of Employment.
   */
  declare fmlaEligibilityLengthOfEmployment: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Payment Method Other.
   * @nullable
   */
  declare paymentMethodOther?: NoYes | null;
  /**
   * View Expiring Records Range.
   */
  declare viewExpiringRecordsRange: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Leaving Soon Workers Period Unit.
   * @nullable
   */
  declare leavingSoonWorkersPeriodUnit?: PeriodUnit | null;
  /**
   * Postal Address Change Period.
   */
  declare postalAddressChangePeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Application Word Docu Type Id.
   * @nullable
   */
  declare applicationWordDocuTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Method Check.
   * @nullable
   */
  declare paymentMethodCheck?: NoYes | null;
  /**
   * Fmla Entitlement Anniversary Priority Date Sequence 4.
   * @nullable
   */
  declare fmlaEntitlementAnniversaryPriorityDateSequence4?: HcmFmlaEligibilityPriorityDateType | null;
  /**
   * Fmla Entitlement Anniversary Priority Date Sequence 2.
   * @nullable
   */
  declare fmlaEntitlementAnniversaryPriorityDateSequence2?: HcmFmlaEligibilityPriorityDateType | null;
  /**
   * Fmla Entitlement Anniversary Priority Date Sequence 3.
   * @nullable
   */
  declare fmlaEntitlementAnniversaryPriorityDateSequence3?: HcmFmlaEligibilityPriorityDateType | null;
  /**
   * Fmla Entitlement Anniversary Priority Date Sequence 1.
   * @nullable
   */
  declare fmlaEntitlementAnniversaryPriorityDateSequence1?: HcmFmlaEligibilityPriorityDateType | null;
  /**
   * Leaving Soon Workers Period.
   */
  declare leavingSoonWorkersPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Injury Illness Incident Retention Days.
   */
  declare injuryIllnessIncidentRetentionDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Absence Status Color.
   */
  declare absenceStatusColor: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mss View Exiting Worker Option.
   * @nullable
   */
  declare mssViewExitingWorkerOption?: HcmViewExitingWorkerOption | null;
  /**
   * Years Of Service Display.
   * @nullable
   */
  declare yearsOfServiceDisplay?: HcmYearsOfServiceDisplay | null;
  /**
   * Fmla Eligibility Priority Date Sequence 3.
   * @nullable
   */
  declare fmlaEligibilityPriorityDateSequence3?: HcmFmlaEligibilityPriorityDateType | null;
  /**
   * View Expired Records Range.
   */
  declare viewExpiredRecordsRange: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Compensation Competency Rating Model Id.
   * @nullable
   */
  declare compensationCompetencyRatingModelId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fmla Eligibility Priority Date Sequence 2.
   * @nullable
   */
  declare fmlaEligibilityPriorityDateSequence2?: HcmFmlaEligibilityPriorityDateType | null;
  /**
   * Recent Hire Workers Period.
   */
  declare recentHireWorkersPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mss Open Positions Type.
   * @nullable
   */
  declare mssOpenPositionsType?: HcmOpenPositionsType | null;
  /**
   * Default Identification Type Id.
   * @nullable
   */
  declare defaultIdentificationTypeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fmla Eligibility Period Type.
   * @nullable
   */
  declare fmlaEligibilityPeriodType?: HcmFmlaEligibilityPeriodType | null;
  /**
   * Fmla Eligibility Priority Date Sequence 1.
   * @nullable
   */
  declare fmlaEligibilityPriorityDateSequence1?: HcmFmlaEligibilityPriorityDateType | null;
  /**
   * Payment Method Bank Draft.
   * @nullable
   */
  declare paymentMethodBankDraft?: NoYes | null;
  /**
   * Application Expiration Period Unit.
   * @nullable
   */
  declare applicationExpirationPeriodUnit?: PeriodUnit | null;
  /**
   * Application Email Docu Type Id.
   * @nullable
   */
  declare applicationEmailDocuTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Application Attachment Type.
   * @nullable
   */
  declare applicationAttachmentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Application Expiration Period.
   */
  declare applicationExpirationPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Electronic Disbursement Validation Disabled.
   * @nullable
   */
  declare electronicDisbursementValidationDisabled?: NoYes | null;
  /**
   * Identification Type Default.
   */
  declare identificationTypeDefault: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Allow Rehire Default.
   * @nullable
   */
  declare allowRehireDefault?: NoYes | null;
  /**
   * Payment Method Electronic Payment.
   * @nullable
   */
  declare paymentMethodElectronicPayment?: NoYes | null;
  /**
   * Mss Exiting Workers Period.
   */
  declare mssExitingWorkersPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bank Account And Routing Number Validation Disabled.
   * @nullable
   */
  declare bankAccountAndRoutingNumberValidationDisabled?: NoYes | null;
  /**
   * Fmla Entitlement Use Eligibility Priority Sequence.
   * @nullable
   */
  declare fmlaEntitlementUseEligibilityPrioritySequence?: NoYes | null;
  /**
   * Fmla Entitlement Leave Calendar Type.
   * @nullable
   */
  declare fmlaEntitlementLeaveCalendarType?: HcmFmlaCalendarType | null;
  /**
   * Payment Method Cash.
   * @nullable
   */
  declare paymentMethodCash?: NoYes | null;
  /**
   * Fmla Entitlement Military Hours.
   */
  declare fmlaEntitlementMilitaryHours: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Fmla Eligibility Hours Worked.
   */
  declare fmlaEligibilityHoursWorked: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Application Unsolicted Recruiting Id.
   * @nullable
   */
  declare applicationUnsolictedRecruitingId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Recent Hire Workers Period Unit.
   * @nullable
   */
  declare recentHireWorkersPeriodUnit?: PeriodUnit | null;
  /**
   * Fmla Entitlement Leave Calendar Start Date.
   */
  declare fmlaEntitlementLeaveCalendarStartDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Benefit Do Not Restrict Updates To Plans With Life Event.
   * @nullable
   */
  declare benefitDoNotRestrictUpdatesToPlansWithLifeEvent?: NoYes | null;
  /**
   * Benefit Extended Designee Requirements.
   * @nullable
   */
  declare benefitExtendedDesigneeRequirements?: NoYes | null;
  /**
   * Benefit Enrollment Confirmation Default Email From Address.
   * @nullable
   */
  declare benefitEnrollmentConfirmationDefaultEmailFromAddress?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Benefit Lock Confirmed Plans.
   * @nullable
   */
  declare benefitLockConfirmedPlans?: NoYes | null;
  /**
   * Benefit Enrollment Confirmation Send Email.
   * @nullable
   */
  declare benefitEnrollmentConfirmationSendEmail?: NoYes | null;
  /**
   * Benefit Ess New Hire Enrollment Period.
   */
  declare benefitEssNewHireEnrollmentPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Benefit Future Birth Date Eligibility.
   * @nullable
   */
  declare benefitFutureBirthDateEligibility?: NoYes | null;
  /**
   * Benefit Enrollment Confirmation Email Template Id.
   * @nullable
   */
  declare benefitEnrollmentConfirmationEmailTemplateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Exited Workers Period.
   */
  declare exitedWorkersPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Exited Workers Period Unit.
   * @nullable
   */
  declare exitedWorkersPeriodUnit?: PeriodUnit | null;
  /**
   * Compensation Rating Source.
   * @nullable
   */
  declare compensationRatingSource?: HrmCompRatingModel | null;
  /**
   * Enable Half Day Definition.
   * @nullable
   */
  declare enableHalfDayDefinition?: NoYes | null;
  /**
   * Leave Amount Unit.
   * @nullable
   */
  declare leaveAmountUnit?: LeaveAmountUnit | null;
  /**
   * Leave Balance Calculation Option.
   * @nullable
   */
  declare leaveBalanceCalculationOption?: LeaveBalanceCalculationOption | null;
  /**
   * Leave Months Of Service Calculation Option.
   * @nullable
   */
  declare leaveMonthsOfServiceCalculationOption?: LeaveMonthsOfServiceCalculationOption | null;
  /**
   * One-to-one navigation property to the {@link RatingModels} entity.
   */
  declare compensationCompetencyRatingModel?: RatingModels<T> | null;
  /**
   * One-to-one navigation property to the {@link IdentificationTypes} entity.
   */
  declare defaultIdentificationType?: IdentificationTypes<T> | null;

  constructor(_entityApi: HumanResourcesParametersApi<T>) {
    super(_entityApi);
  }
}

export interface HumanResourcesParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  enableInjuryIllnessIncidentRetention?: NoYes | null;
  fmlaEligibilityPriorityDateSequence4?: HcmFmlaEligibilityPriorityDateType | null;
  fmlaEntitlementStandardHours: DeserializedType<T, 'Edm.Int32'>;
  mssExitingWorkersPeriodUnit?: PeriodUnit | null;
  fmlaEligibilityLengthOfEmployment: DeserializedType<T, 'Edm.Int32'>;
  paymentMethodOther?: NoYes | null;
  viewExpiringRecordsRange: DeserializedType<T, 'Edm.Int32'>;
  leavingSoonWorkersPeriodUnit?: PeriodUnit | null;
  postalAddressChangePeriod: DeserializedType<T, 'Edm.Int32'>;
  applicationWordDocuTypeId?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethodCheck?: NoYes | null;
  fmlaEntitlementAnniversaryPriorityDateSequence4?: HcmFmlaEligibilityPriorityDateType | null;
  fmlaEntitlementAnniversaryPriorityDateSequence2?: HcmFmlaEligibilityPriorityDateType | null;
  fmlaEntitlementAnniversaryPriorityDateSequence3?: HcmFmlaEligibilityPriorityDateType | null;
  fmlaEntitlementAnniversaryPriorityDateSequence1?: HcmFmlaEligibilityPriorityDateType | null;
  leavingSoonWorkersPeriod: DeserializedType<T, 'Edm.Int32'>;
  injuryIllnessIncidentRetentionDays: DeserializedType<T, 'Edm.Int32'>;
  absenceStatusColor: DeserializedType<T, 'Edm.Int32'>;
  mssViewExitingWorkerOption?: HcmViewExitingWorkerOption | null;
  yearsOfServiceDisplay?: HcmYearsOfServiceDisplay | null;
  fmlaEligibilityPriorityDateSequence3?: HcmFmlaEligibilityPriorityDateType | null;
  viewExpiredRecordsRange: DeserializedType<T, 'Edm.Int32'>;
  compensationCompetencyRatingModelId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  fmlaEligibilityPriorityDateSequence2?: HcmFmlaEligibilityPriorityDateType | null;
  recentHireWorkersPeriod: DeserializedType<T, 'Edm.Int32'>;
  mssOpenPositionsType?: HcmOpenPositionsType | null;
  defaultIdentificationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  fmlaEligibilityPeriodType?: HcmFmlaEligibilityPeriodType | null;
  fmlaEligibilityPriorityDateSequence1?: HcmFmlaEligibilityPriorityDateType | null;
  paymentMethodBankDraft?: NoYes | null;
  applicationExpirationPeriodUnit?: PeriodUnit | null;
  applicationEmailDocuTypeId?: DeserializedType<T, 'Edm.String'> | null;
  applicationAttachmentType?: DeserializedType<T, 'Edm.String'> | null;
  applicationExpirationPeriod: DeserializedType<T, 'Edm.Int32'>;
  electronicDisbursementValidationDisabled?: NoYes | null;
  identificationTypeDefault: DeserializedType<T, 'Edm.Int64'>;
  allowRehireDefault?: NoYes | null;
  paymentMethodElectronicPayment?: NoYes | null;
  mssExitingWorkersPeriod: DeserializedType<T, 'Edm.Int32'>;
  bankAccountAndRoutingNumberValidationDisabled?: NoYes | null;
  fmlaEntitlementUseEligibilityPrioritySequence?: NoYes | null;
  fmlaEntitlementLeaveCalendarType?: HcmFmlaCalendarType | null;
  paymentMethodCash?: NoYes | null;
  fmlaEntitlementMilitaryHours: DeserializedType<T, 'Edm.Int32'>;
  fmlaEligibilityHoursWorked: DeserializedType<T, 'Edm.Int32'>;
  applicationUnsolictedRecruitingId?: DeserializedType<T, 'Edm.String'> | null;
  recentHireWorkersPeriodUnit?: PeriodUnit | null;
  fmlaEntitlementLeaveCalendarStartDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  benefitDoNotRestrictUpdatesToPlansWithLifeEvent?: NoYes | null;
  benefitExtendedDesigneeRequirements?: NoYes | null;
  benefitEnrollmentConfirmationDefaultEmailFromAddress?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  benefitLockConfirmedPlans?: NoYes | null;
  benefitEnrollmentConfirmationSendEmail?: NoYes | null;
  benefitEssNewHireEnrollmentPeriod: DeserializedType<T, 'Edm.Int32'>;
  benefitFutureBirthDateEligibility?: NoYes | null;
  benefitEnrollmentConfirmationEmailTemplateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  exitedWorkersPeriod: DeserializedType<T, 'Edm.Int32'>;
  exitedWorkersPeriodUnit?: PeriodUnit | null;
  compensationRatingSource?: HrmCompRatingModel | null;
  enableHalfDayDefinition?: NoYes | null;
  leaveAmountUnit?: LeaveAmountUnit | null;
  leaveBalanceCalculationOption?: LeaveBalanceCalculationOption | null;
  leaveMonthsOfServiceCalculationOption?: LeaveMonthsOfServiceCalculationOption | null;
  compensationCompetencyRatingModel?: RatingModelsType<T> | null;
  defaultIdentificationType?: IdentificationTypesType<T> | null;
}
