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
import type { BenefitsPlansApi } from './BenefitsPlansApi';
import { NoYes } from './NoYes';
import { BenefitPlanContribution } from './BenefitPlanContribution';
import { BenefitProgramPlanStatus } from './BenefitProgramPlanStatus';
import { BenefitCovIncDirection } from './BenefitCovIncDirection';
import {
  BenefitsPlanEligibilityRules,
  BenefitsPlanEligibilityRulesType
} from './BenefitsPlanEligibilityRules';
import { BenefitsPrograms, BenefitsProgramsType } from './BenefitsPrograms';
import { BenefitsBundles, BenefitsBundlesType } from './BenefitsBundles';
import {
  PayrollWorkerBenefitPlans,
  PayrollWorkerBenefitPlansType
} from './PayrollWorkerBenefitPlans';

/**
 * This class represents the entity "BenefitsPlans" of service "d365_metadata".
 */
export class BenefitsPlans<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitsPlansType<T>
{
  /**
   * Technical entity name for BenefitsPlans.
   */
  static override _entityName = 'BenefitsPlans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPlans entity.
   */
  static _keys = ['PlanId'];
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;
  /**
   * Benefit Supplier Vendor Account.
   * @nullable
   */
  declare benefitSupplierVendorAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Aca Reportable.
   * @nullable
   */
  declare acaReportable?: NoYes | null;
  /**
   * Contributor.
   * @nullable
   */
  declare contributor?: BenefitPlanContribution | null;
  /**
   * Inception Date Time.
   */
  declare inceptionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Post Tax Eligible.
   * @nullable
   */
  declare postTaxEligible?: NoYes | null;
  /**
   * Benefit Supplier Expense Account.
   * @nullable
   */
  declare benefitSupplierExpenseAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bundle Id.
   * @nullable
   */
  declare bundleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: BenefitProgramPlanStatus | null;
  /**
   * Evidence Of Insurability Amount.
   */
  declare evidenceOfInsurabilityAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pre Tax Eligible.
   * @nullable
   */
  declare preTaxEligible?: NoYes | null;
  /**
   * Benefit Administrator Expense Account.
   * @nullable
   */
  declare benefitAdministratorExpenseAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Benefit Administrator Currency.
   * @nullable
   */
  declare benefitAdministratorCurrency?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Closed For New Enrollments.
   * @nullable
   */
  declare closedForNewEnrollments?: NoYes | null;
  /**
   * Department Id.
   * @nullable
   */
  declare departmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Continue Enrollment.
   * @nullable
   */
  declare allowContinueEnrollment?: NoYes | null;
  /**
   * Employer Match Percent.
   */
  declare employerMatchPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Employer Match.
   * @nullable
   */
  declare employerMatch?: NoYes | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Maximum Annual Contribution.
   */
  declare maximumAnnualContribution: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Program Id.
   * @nullable
   */
  declare programId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bundle Required.
   * @nullable
   */
  declare bundleRequired?: NoYes | null;
  /**
   * Employer Maximum Annual Amount.
   */
  declare employerMaximumAnnualAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Plan Info.
   * @nullable
   */
  declare planInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prorate Contributions.
   * @nullable
   */
  declare prorateContributions?: NoYes | null;
  /**
   * Hipaa.
   * @nullable
   */
  declare hipaa?: NoYes | null;
  /**
   * Mandatory Plan.
   * @nullable
   */
  declare mandatoryPlan?: NoYes | null;
  /**
   * Plan Type Id.
   * @nullable
   */
  declare planTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cobra.
   * @nullable
   */
  declare cobra?: NoYes | null;
  /**
   * Auto Enroll By Default.
   * @nullable
   */
  declare autoEnrollByDefault?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bundle Master.
   * @nullable
   */
  declare bundleMaster?: NoYes | null;
  /**
   * Minimum Coverage.
   */
  declare minimumCoverage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Coverage Incremental Direction.
   * @nullable
   */
  declare coverageIncrementalDirection?: BenefitCovIncDirection | null;
  /**
   * Benefit Administrator Alternate Reference.
   * @nullable
   */
  declare benefitAdministratorAlternateReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Employer Match Cap.
   */
  declare employerMatchCap: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Coverage.
   */
  declare maximumCoverage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Position Id.
   * @nullable
   */
  declare positionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Unit Id.
   * @nullable
   */
  declare businessUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inception Date.
   */
  declare inceptionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Allow Future Birth Date Eligibility.
   * @nullable
   */
  declare allowFutureBirthDateEligibility?: NoYes | null;
  /**
   * Benefit Supplier Alternate Reference.
   * @nullable
   */
  declare benefitSupplierAlternateReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Minimum Annual Contribution.
   */
  declare minimumAnnualContribution: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Auto Enroll From Prior Year.
   * @nullable
   */
  declare autoEnrollFromPriorYear?: NoYes | null;
  /**
   * Benefit Administrator Vendor Reference.
   * @nullable
   */
  declare benefitAdministratorVendorReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Evidence Of Insurability.
   * @nullable
   */
  declare evidenceOfInsurability?: NoYes | null;
  /**
   * Benefit Supplier Vendor Reference.
   * @nullable
   */
  declare benefitSupplierVendorReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Benefit Administrator Vendor Account.
   * @nullable
   */
  declare benefitAdministratorVendorAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Coverage Incremental Amount.
   */
  declare coverageIncrementalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Use Coverage Increments.
   * @nullable
   */
  declare useCoverageIncrements?: NoYes | null;
  /**
   * Benefit Supplier Currency.
   * @nullable
   */
  declare benefitSupplierCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BenefitsPlanEligibilityRules} entity.
   */
  declare benefitsPlanEligibilityRule: BenefitsPlanEligibilityRules<T>[];
  /**
   * One-to-one navigation property to the {@link BenefitsPrograms} entity.
   */
  declare benefitsProgram?: BenefitsPrograms<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsBundles} entity.
   */
  declare benefitsBundle?: BenefitsBundles<T> | null;
  /**
   * One-to-one navigation property to the {@link PayrollWorkerBenefitPlans} entity.
   */
  declare payrollWorkerBenefitPlan?: PayrollWorkerBenefitPlans<T> | null;

  constructor(_entityApi: BenefitsPlansApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsPlansType<
  T extends DeSerializers = DefaultDeSerializers
> {
  planId: DeserializedType<T, 'Edm.String'>;
  benefitSupplierVendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  acaReportable?: NoYes | null;
  contributor?: BenefitPlanContribution | null;
  inceptionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  postTaxEligible?: NoYes | null;
  benefitSupplierExpenseAccount?: DeserializedType<T, 'Edm.String'> | null;
  bundleId?: DeserializedType<T, 'Edm.String'> | null;
  status?: BenefitProgramPlanStatus | null;
  evidenceOfInsurabilityAmount: DeserializedType<T, 'Edm.Decimal'>;
  preTaxEligible?: NoYes | null;
  benefitAdministratorExpenseAccount?: DeserializedType<T, 'Edm.String'> | null;
  benefitAdministratorCurrency?: DeserializedType<T, 'Edm.String'> | null;
  closedForNewEnrollments?: NoYes | null;
  departmentId?: DeserializedType<T, 'Edm.String'> | null;
  allowContinueEnrollment?: NoYes | null;
  employerMatchPercent: DeserializedType<T, 'Edm.Decimal'>;
  employerMatch?: NoYes | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maximumAnnualContribution: DeserializedType<T, 'Edm.Decimal'>;
  programId?: DeserializedType<T, 'Edm.String'> | null;
  bundleRequired?: NoYes | null;
  employerMaximumAnnualAmount: DeserializedType<T, 'Edm.Decimal'>;
  planInfo?: DeserializedType<T, 'Edm.String'> | null;
  prorateContributions?: NoYes | null;
  hipaa?: NoYes | null;
  mandatoryPlan?: NoYes | null;
  planTypeId?: DeserializedType<T, 'Edm.String'> | null;
  cobra?: NoYes | null;
  autoEnrollByDefault?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  bundleMaster?: NoYes | null;
  minimumCoverage: DeserializedType<T, 'Edm.Decimal'>;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  coverageIncrementalDirection?: BenefitCovIncDirection | null;
  benefitAdministratorAlternateReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  employerMatchCap: DeserializedType<T, 'Edm.Decimal'>;
  maximumCoverage: DeserializedType<T, 'Edm.Decimal'>;
  positionId?: DeserializedType<T, 'Edm.String'> | null;
  businessUnitId?: DeserializedType<T, 'Edm.String'> | null;
  inceptionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  allowFutureBirthDateEligibility?: NoYes | null;
  benefitSupplierAlternateReference?: DeserializedType<T, 'Edm.String'> | null;
  minimumAnnualContribution: DeserializedType<T, 'Edm.Decimal'>;
  autoEnrollFromPriorYear?: NoYes | null;
  benefitAdministratorVendorReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  evidenceOfInsurability?: NoYes | null;
  benefitSupplierVendorReference?: DeserializedType<T, 'Edm.String'> | null;
  benefitAdministratorVendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  coverageIncrementalAmount: DeserializedType<T, 'Edm.Decimal'>;
  useCoverageIncrements?: NoYes | null;
  benefitSupplierCurrency?: DeserializedType<T, 'Edm.String'> | null;
  benefitsPlanEligibilityRule: BenefitsPlanEligibilityRulesType<T>[];
  benefitsProgram?: BenefitsProgramsType<T> | null;
  benefitsBundle?: BenefitsBundlesType<T> | null;
  payrollWorkerBenefitPlan?: PayrollWorkerBenefitPlansType<T> | null;
}
