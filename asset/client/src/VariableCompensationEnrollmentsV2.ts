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
import type { VariableCompensationEnrollmentsV2Api } from './VariableCompensationEnrollmentsV2Api';
import { HrmCompVarEnrollEmpllStatus } from './HrmCompVarEnrollEmpllStatus';
import {
  CompVarPlanTablesV2,
  CompVarPlanTablesV2Type
} from './CompVarPlanTablesV2';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "VariableCompensationEnrollmentsV2" of service "d365_metadata".
 */
export class VariableCompensationEnrollmentsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VariableCompensationEnrollmentsV2Type<T>
{
  /**
   * Technical entity name for VariableCompensationEnrollmentsV2.
   */
  static override _entityName = 'VariableCompensationEnrollmentsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VariableCompensationEnrollmentsV2 entity.
   */
  static _keys = ['dataAreaId', 'PersonnelNumber', 'Plan', 'EffectiveDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan.
   */
  declare plan: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Award Percent.
   */
  declare awardPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Units Real.
   */
  declare numberOfUnitsReal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: HrmCompVarEnrollEmpllStatus | null;
  /**
   * Hire Rule Date.
   */
  declare hireRuleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Award Amount.
   */
  declare awardAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link CompVarPlanTablesV2} entity.
   */
  declare variableCompensationPlanV2?: CompVarPlanTablesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: VariableCompensationEnrollmentsV2Api<T>) {
    super(_entityApi);
  }
}

export interface VariableCompensationEnrollmentsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  plan: DeserializedType<T, 'Edm.String'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  awardPercent: DeserializedType<T, 'Edm.Decimal'>;
  numberOfUnitsReal: DeserializedType<T, 'Edm.Decimal'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  status?: HrmCompVarEnrollEmpllStatus | null;
  hireRuleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  awardAmount: DeserializedType<T, 'Edm.Decimal'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  variableCompensationPlanV2?: CompVarPlanTablesV2Type<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
