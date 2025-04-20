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
import type { BenefitPlansApi } from './BenefitPlansApi';
import { NoYes } from './NoYes';
import { PayrollContributionMethod } from './PayrollContributionMethod';
import { PayrollLimitPeriod } from './PayrollLimitPeriod';
import { PayrollImpact } from './PayrollImpact';
import { PayrollRetirementType } from './PayrollRetirementType';
import { PayrollArrearLimitMethod } from './PayrollArrearLimitMethod';
import { PayrollContributionLimitMethod } from './PayrollContributionLimitMethod';
import { Benefits, BenefitsType } from './Benefits';
import {
  BenefitExternalReportings,
  BenefitExternalReportingsType
} from './BenefitExternalReportings';
import {
  BenefitEligibilityOverrides,
  BenefitEligibilityOverridesType
} from './BenefitEligibilityOverrides';
import {
  RetirementBenefitPlanDetails,
  RetirementBenefitPlanDetailsType
} from './RetirementBenefitPlanDetails';
import { BenefitTaxRulesUs, BenefitTaxRulesUsType } from './BenefitTaxRulesUs';
import {
  BenefitPlanDefaultDimensions,
  BenefitPlanDefaultDimensionsType
} from './BenefitPlanDefaultDimensions';
import { Currencies, CurrenciesType } from './Currencies';
import { BenefitTypes, BenefitTypesType } from './BenefitTypes';

/**
 * This class represents the entity "BenefitPlans" of service "d365_metadata".
 */
export class BenefitPlans<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitPlansType<T>
{
  /**
   * Technical entity name for BenefitPlans.
   */
  static override _entityName = 'BenefitPlans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitPlans entity.
   */
  static _keys = ['Plan'];
  /**
   * Plan.
   */
  declare plan: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Affordable Care Act Reportable.
   * @nullable
   */
  declare isAffordableCareActReportable?: NoYes | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contribution Method.
   * @nullable
   */
  declare contributionMethod?: PayrollContributionMethod | null;
  /**
   * Default Contribution Limit Period.
   * @nullable
   */
  declare defaultContributionLimitPeriod?: PayrollLimitPeriod | null;
  /**
   * Payment Type Is Additional.
   * @nullable
   */
  declare paymentTypeIsAdditional?: NoYes | null;
  /**
   * Deduction Priority.
   */
  declare deductionPriority: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Payment Type Is Gross Up.
   * @nullable
   */
  declare paymentTypeIsGrossUp?: NoYes | null;
  /**
   * Payroll Impact.
   * @nullable
   */
  declare payrollImpact?: PayrollImpact | null;
  /**
   * Retirement Type.
   * @nullable
   */
  declare retirementType?: PayrollRetirementType | null;
  /**
   * Deduction Method.
   * @nullable
   */
  declare deductionMethod?: PayrollArrearLimitMethod | null;
  /**
   * Payment Type Is Primary.
   * @nullable
   */
  declare paymentTypeIsPrimary?: NoYes | null;
  /**
   * Default Contribution Limit Amount.
   */
  declare defaultContributionLimitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Deduction Limit Amount.
   */
  declare defaultDeductionLimitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Deduction Limit Period.
   * @nullable
   */
  declare defaultDeductionLimitPeriod?: PayrollLimitPeriod | null;
  /**
   * Contribution Limit Method.
   * @nullable
   */
  declare contributionLimitMethod?: PayrollContributionLimitMethod | null;
  /**
   * Is Pay Statement Line Locked.
   * @nullable
   */
  declare isPayStatementLineLocked?: NoYes | null;
  /**
   * Type Id.
   * @nullable
   */
  declare typeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Arrear Generated.
   * @nullable
   */
  declare isArrearGenerated?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link Benefits} entity.
   */
  declare benefits: Benefits<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitExternalReportings} entity.
   */
  declare benefitExternalReporting: BenefitExternalReportings<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitEligibilityOverrides} entity.
   */
  declare benefitEligibilityOverrides: BenefitEligibilityOverrides<T>[];
  /**
   * One-to-one navigation property to the {@link RetirementBenefitPlanDetails} entity.
   */
  declare retirementBenefitPlanDetail?: RetirementBenefitPlanDetails<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitTaxRulesUs} entity.
   */
  declare benefitTaxRuleUs?: BenefitTaxRulesUs<T> | null;
  /**
   * One-to-many navigation property to the {@link BenefitPlanDefaultDimensions} entity.
   */
  declare defaultDimensions: BenefitPlanDefaultDimensions<T>[];
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitTypes} entity.
   */
  declare benefitType?: BenefitTypes<T> | null;

  constructor(_entityApi: BenefitPlansApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitPlansType<
  T extends DeSerializers = DefaultDeSerializers
> {
  plan: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isAffordableCareActReportable?: NoYes | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  contributionMethod?: PayrollContributionMethod | null;
  defaultContributionLimitPeriod?: PayrollLimitPeriod | null;
  paymentTypeIsAdditional?: NoYes | null;
  deductionPriority: DeserializedType<T, 'Edm.Int64'>;
  paymentTypeIsGrossUp?: NoYes | null;
  payrollImpact?: PayrollImpact | null;
  retirementType?: PayrollRetirementType | null;
  deductionMethod?: PayrollArrearLimitMethod | null;
  paymentTypeIsPrimary?: NoYes | null;
  defaultContributionLimitAmount: DeserializedType<T, 'Edm.Decimal'>;
  defaultDeductionLimitAmount: DeserializedType<T, 'Edm.Decimal'>;
  defaultDeductionLimitPeriod?: PayrollLimitPeriod | null;
  contributionLimitMethod?: PayrollContributionLimitMethod | null;
  isPayStatementLineLocked?: NoYes | null;
  typeId?: DeserializedType<T, 'Edm.String'> | null;
  isArrearGenerated?: NoYes | null;
  benefits: BenefitsType<T>[];
  benefitExternalReporting: BenefitExternalReportingsType<T>[];
  benefitEligibilityOverrides: BenefitEligibilityOverridesType<T>[];
  retirementBenefitPlanDetail?: RetirementBenefitPlanDetailsType<T> | null;
  benefitTaxRuleUs?: BenefitTaxRulesUsType<T> | null;
  defaultDimensions: BenefitPlanDefaultDimensionsType<T>[];
  currency?: CurrenciesType<T> | null;
  benefitType?: BenefitTypesType<T> | null;
}
