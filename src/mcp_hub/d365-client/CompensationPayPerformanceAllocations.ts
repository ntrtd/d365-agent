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
import type { CompensationPayPerformanceAllocationsApi } from './CompensationPayPerformanceAllocationsApi';
import {
  CompensationPayPerformanceAllocationLines,
  CompensationPayPerformanceAllocationLinesType
} from './CompensationPayPerformanceAllocationLines';
import {
  CompensationPerformancePlans,
  CompensationPerformancePlansType
} from './CompensationPerformancePlans';
import { Departments, DepartmentsType } from './Departments';
import { OperatingUnits, OperatingUnitsType } from './OperatingUnits';

/**
 * This class represents the entity "CompensationPayPerformanceAllocations" of service "d365_metadata".
 */
export class CompensationPayPerformanceAllocations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CompensationPayPerformanceAllocationsType<T>
{
  /**
   * Technical entity name for CompensationPayPerformanceAllocations.
   */
  static override _entityName = 'CompensationPayPerformanceAllocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationPayPerformanceAllocations entity.
   */
  static _keys = ['dataAreaId', 'DepartmentNumber', 'Plan'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Department Number.
   */
  declare departmentNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan.
   */
  declare plan: DeserializedType<T, 'Edm.String'>;
  /**
   * Allocation.
   * @nullable
   */
  declare allocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective.
   */
  declare effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration.
   */
  declare expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link CompensationPayPerformanceAllocationLines} entity.
   */
  declare compensationPayPerformanceAllocationLine: CompensationPayPerformanceAllocationLines<T>[];
  /**
   * One-to-one navigation property to the {@link CompensationPerformancePlans} entity.
   */
  declare compensationPerformancePlan?: CompensationPerformancePlans<T> | null;
  /**
   * One-to-one navigation property to the {@link Departments} entity.
   */
  declare department?: Departments<T> | null;
  /**
   * One-to-one navigation property to the {@link OperatingUnits} entity.
   */
  declare operatingUnit?: OperatingUnits<T> | null;

  constructor(_entityApi: CompensationPayPerformanceAllocationsApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationPayPerformanceAllocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  departmentNumber: DeserializedType<T, 'Edm.String'>;
  plan: DeserializedType<T, 'Edm.String'>;
  allocation?: DeserializedType<T, 'Edm.String'> | null;
  effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  compensationPayPerformanceAllocationLine: CompensationPayPerformanceAllocationLinesType<T>[];
  compensationPerformancePlan?: CompensationPerformancePlansType<T> | null;
  department?: DepartmentsType<T> | null;
  operatingUnit?: OperatingUnitsType<T> | null;
}
