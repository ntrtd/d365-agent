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
import type { CompVarPlanTablesV2Api } from './CompVarPlanTablesV2Api';
import { NoYes } from './NoYes';
import { HrmCompTolerance } from './HrmCompTolerance';
import { HrmCompVarPlanAwardBasis } from './HrmCompVarPlanAwardBasis';
import { HrmCompVarPlanCalcType } from './HrmCompVarPlanCalcType';
import { HrmCompHireRule } from './HrmCompHireRule';
import { HrmCompVarAwardBasis } from './HrmCompVarAwardBasis';
import {
  VariableCompensationEnrollmentsV2,
  VariableCompensationEnrollmentsV2Type
} from './VariableCompensationEnrollmentsV2';
import { Currencies, CurrenciesType } from './Currencies';
import {
  VariableCompensationEnrollmentLines,
  VariableCompensationEnrollmentLinesType
} from './VariableCompensationEnrollmentLines';
import {
  VariableCompensationAwards,
  VariableCompensationAwardsType
} from './VariableCompensationAwards';
import {
  CompVarPlanLevelsV2,
  CompVarPlanLevelsV2Type
} from './CompVarPlanLevelsV2';

/**
 * This class represents the entity "CompVarPlanTablesV2" of service "d365_metadata".
 */
export class CompVarPlanTablesV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CompVarPlanTablesV2Type<T>
{
  /**
   * Technical entity name for CompVarPlanTablesV2.
   */
  static override _entityName = 'CompVarPlanTablesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompVarPlanTablesV2 entity.
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
   * One-to-many navigation property to the {@link VariableCompensationEnrollmentsV2} entity.
   */
  declare employeeVariableCompensationEnrollmentV2: VariableCompensationEnrollmentsV2<T>[];
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-many navigation property to the {@link VariableCompensationEnrollmentLines} entity.
   */
  declare employeeVariableCompensationEnrollmentLine: VariableCompensationEnrollmentLines<T>[];
  /**
   * One-to-many navigation property to the {@link VariableCompensationAwards} entity.
   */
  declare variableCompensationAward: VariableCompensationAwards<T>[];
  /**
   * One-to-many navigation property to the {@link CompVarPlanLevelsV2} entity.
   */
  declare compVarPlanLevelV2: CompVarPlanLevelsV2<T>[];

  constructor(_entityApi: CompVarPlanTablesV2Api<T>) {
    super(_entityApi);
  }
}

export interface CompVarPlanTablesV2Type<
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
  employeeVariableCompensationEnrollmentV2: VariableCompensationEnrollmentsV2Type<T>[];
  currency?: CurrenciesType<T> | null;
  employeeVariableCompensationEnrollmentLine: VariableCompensationEnrollmentLinesType<T>[];
  variableCompensationAward: VariableCompensationAwardsType<T>[];
  compVarPlanLevelV2: CompVarPlanLevelsV2Type<T>[];
}
