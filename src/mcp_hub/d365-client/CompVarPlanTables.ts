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
import type { CompVarPlanTablesApi } from './CompVarPlanTablesApi';
import { NoYes } from './NoYes';
import { HrmCompTolerance } from './HrmCompTolerance';
import { HrmCompVarPlanAwardBasis } from './HrmCompVarPlanAwardBasis';
import { HrmCompVarPlanCalcType } from './HrmCompVarPlanCalcType';
import { HrmCompHireRule } from './HrmCompHireRule';
import { HrmCompVarAwardBasis } from './HrmCompVarAwardBasis';
import {
  VariableCompensationEnrollments,
  VariableCompensationEnrollmentsType
} from './VariableCompensationEnrollments';
import { Currencies, CurrenciesType } from './Currencies';

/**
 * This class represents the entity "CompVarPlanTables" of service "d365_metadata".
 */
export class CompVarPlanTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CompVarPlanTablesType<T>
{
  /**
   * Technical entity name for CompVarPlanTables.
   */
  static override _entityName = 'CompVarPlanTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompVarPlanTables entity.
   */
  static _keys = ['dataAreaId', 'PlanId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Relationship.
   * @nullable
   */
  declare unitRelationship?: NoYes | null;
  /**
   * Leverage Tolerance Min.
   * @nullable
   */
  declare leverageToleranceMin?: HrmCompTolerance | null;
  /**
   * Percent Of Basis.
   */
  declare percentOfBasis: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Variable Compensation Type.
   * @nullable
   */
  declare variableCompensationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Award Basis Calculation.
   * @nullable
   */
  declare awardBasisCalculation?: HrmCompVarPlanAwardBasis | null;
  /**
   * Enable Levels.
   * @nullable
   */
  declare enableLevels?: NoYes | null;
  /**
   * Vesting Rule.
   * @nullable
   */
  declare vestingRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Leverage 100 Percent.
   */
  declare leverage100Percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Enable Recommendation.
   * @nullable
   */
  declare enableRecommendation?: NoYes | null;
  /**
   * Enable Enrollment.
   * @nullable
   */
  declare enableEnrollment?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Leverage Under Objective.
   */
  declare leverageUnderObjective: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Currency Code.
   * @nullable
   */
  declare unitCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Calculation Type.
   * @nullable
   */
  declare calculationType?: HrmCompVarPlanCalcType | null;
  /**
   * Hire Rule.
   * @nullable
   */
  declare hireRule?: HrmCompHireRule | null;
  /**
   * Leverage Over Objective.
   */
  declare leverageOverObjective: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Units Real.
   */
  declare numberOfUnitsReal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Leverage Maximum.
   */
  declare leverageMaximum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Leverage Minimum.
   */
  declare leverageMinimum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Variable Award Basis.
   * @nullable
   */
  declare variableAwardBasis?: HrmCompVarAwardBasis | null;
  /**
   * Unit Value.
   */
  declare unitValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Leverage Tolerance Max.
   * @nullable
   */
  declare leverageToleranceMax?: HrmCompTolerance | null;
  /**
   * One-to-many navigation property to the {@link VariableCompensationEnrollments} entity.
   */
  declare employeeVariableCompensationEnrollment: VariableCompensationEnrollments<T>[];
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;

  constructor(_entityApi: CompVarPlanTablesApi<T>) {
    super(_entityApi);
  }
}

export interface CompVarPlanTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  planId: DeserializedType<T, 'Edm.String'>;
  unitRelationship?: NoYes | null;
  leverageToleranceMin?: HrmCompTolerance | null;
  percentOfBasis: DeserializedType<T, 'Edm.Decimal'>;
  variableCompensationType?: DeserializedType<T, 'Edm.String'> | null;
  awardBasisCalculation?: HrmCompVarPlanAwardBasis | null;
  enableLevels?: NoYes | null;
  vestingRule?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leverage100Percent: DeserializedType<T, 'Edm.Decimal'>;
  enableRecommendation?: NoYes | null;
  enableEnrollment?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  leverageUnderObjective: DeserializedType<T, 'Edm.Decimal'>;
  unitCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  calculationType?: HrmCompVarPlanCalcType | null;
  hireRule?: HrmCompHireRule | null;
  leverageOverObjective: DeserializedType<T, 'Edm.Decimal'>;
  numberOfUnitsReal: DeserializedType<T, 'Edm.Decimal'>;
  leverageMaximum: DeserializedType<T, 'Edm.Decimal'>;
  leverageMinimum: DeserializedType<T, 'Edm.Decimal'>;
  variableAwardBasis?: HrmCompVarAwardBasis | null;
  unitValue: DeserializedType<T, 'Edm.Decimal'>;
  leverageToleranceMax?: HrmCompTolerance | null;
  employeeVariableCompensationEnrollment: VariableCompensationEnrollmentsType<T>[];
  currency?: CurrenciesType<T> | null;
}
