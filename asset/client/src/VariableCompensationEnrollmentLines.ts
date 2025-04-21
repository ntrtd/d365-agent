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
import type { VariableCompensationEnrollmentLinesApi } from './VariableCompensationEnrollmentLinesApi';
import {
  CompVarPlanTablesV2,
  CompVarPlanTablesV2Type
} from './CompVarPlanTablesV2';

/**
 * This class represents the entity "VariableCompensationEnrollmentLines" of service "d365_metadata".
 */
export class VariableCompensationEnrollmentLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VariableCompensationEnrollmentLinesType<T>
{
  /**
   * Technical entity name for VariableCompensationEnrollmentLines.
   */
  static override _entityName = 'VariableCompensationEnrollmentLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VariableCompensationEnrollmentLines entity.
   */
  static _keys = ['dataAreaId', 'DepartmentId', 'PersonnelNumber', 'Plan'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Department Id.
   */
  declare departmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan.
   */
  declare plan: DeserializedType<T, 'Edm.String'>;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link CompVarPlanTablesV2} entity.
   */
  declare variableCompensationPlan?: CompVarPlanTablesV2<T> | null;

  constructor(_entityApi: VariableCompensationEnrollmentLinesApi<T>) {
    super(_entityApi);
  }
}

export interface VariableCompensationEnrollmentLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  departmentId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  plan: DeserializedType<T, 'Edm.String'>;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  variableCompensationPlan?: CompVarPlanTablesV2Type<T> | null;
}
