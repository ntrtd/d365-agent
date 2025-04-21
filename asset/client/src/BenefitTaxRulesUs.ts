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
import type { BenefitTaxRulesUsApi } from './BenefitTaxRulesUsApi';
import { NoYes } from './NoYes';
import { PayrollPreTaxBasis } from './PayrollPreTaxBasis';
import { PayrollCustomPretaxMethod } from './PayrollCustomPretaxMethod';
import { BenefitPlans, BenefitPlansType } from './BenefitPlans';
import { PayrollTaxGroups, PayrollTaxGroupsType } from './PayrollTaxGroups';

/**
 * This class represents the entity "BenefitTaxRulesUS" of service "d365_metadata".
 */
export class BenefitTaxRulesUs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitTaxRulesUsType<T>
{
  /**
   * Technical entity name for BenefitTaxRulesUs.
   */
  static override _entityName = 'BenefitTaxRulesUS';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitTaxRulesUs entity.
   */
  static _keys = ['BenefitPlanID'];
  /**
   * Benefit Plan Id.
   */
  declare benefitPlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Exempt From Local Income Tax.
   * @nullable
   */
  declare isExemptFromLocalIncomeTax?: NoYes | null;
  /**
   * Pre Tax Basis.
   * @nullable
   */
  declare preTaxBasis?: PayrollPreTaxBasis | null;
  /**
   * Custom Pretax Method.
   * @nullable
   */
  declare customPretaxMethod?: PayrollCustomPretaxMethod | null;
  /**
   * Is Exempt From State Income Tax.
   * @nullable
   */
  declare isExemptFromStateIncomeTax?: NoYes | null;
  /**
   * Is Exempt From Federal Income Tax.
   * @nullable
   */
  declare isExemptFromFederalIncomeTax?: NoYes | null;
  /**
   * Is Exempt From Medicare.
   * @nullable
   */
  declare isExemptFromMedicare?: NoYes | null;
  /**
   * Is Exempt From State Unemployment.
   * @nullable
   */
  declare isExemptFromStateUnemployment?: NoYes | null;
  /**
   * Tax Group Id.
   * @nullable
   */
  declare taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Exempt From State Disability Insurance.
   * @nullable
   */
  declare isExemptFromStateDisabilityInsurance?: NoYes | null;
  /**
   * Is Exempt From Fica.
   * @nullable
   */
  declare isExemptFromFica?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link BenefitPlans} entity.
   */
  declare benefitPlan?: BenefitPlans<T> | null;
  /**
   * One-to-one navigation property to the {@link PayrollTaxGroups} entity.
   */
  declare payrollTaxGroup?: PayrollTaxGroups<T> | null;

  constructor(_entityApi: BenefitTaxRulesUsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitTaxRulesUsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  benefitPlanId: DeserializedType<T, 'Edm.String'>;
  isExemptFromLocalIncomeTax?: NoYes | null;
  preTaxBasis?: PayrollPreTaxBasis | null;
  customPretaxMethod?: PayrollCustomPretaxMethod | null;
  isExemptFromStateIncomeTax?: NoYes | null;
  isExemptFromFederalIncomeTax?: NoYes | null;
  isExemptFromMedicare?: NoYes | null;
  isExemptFromStateUnemployment?: NoYes | null;
  taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isExemptFromStateDisabilityInsurance?: NoYes | null;
  isExemptFromFica?: NoYes | null;
  benefitPlan?: BenefitPlansType<T> | null;
  payrollTaxGroup?: PayrollTaxGroupsType<T> | null;
}
