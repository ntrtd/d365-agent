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
import type { CompensationPayPerformanceAllocationLinesApi } from './CompensationPayPerformanceAllocationLinesApi';
import { HrmCompPlanType } from './HrmCompPlanType';
import { HrmCompRatingModel } from './HrmCompRatingModel';
import {
  CompensationPerformanceRatings,
  CompensationPerformanceRatingsType
} from './CompensationPerformanceRatings';
import { RatingLevels, RatingLevelsType } from './RatingLevels';
import {
  CompensationPayPerformanceAllocations,
  CompensationPayPerformanceAllocationsType
} from './CompensationPayPerformanceAllocations';

/**
 * This class represents the entity "CompensationPayPerformanceAllocationLines" of service "d365_metadata".
 */
export class CompensationPayPerformanceAllocationLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CompensationPayPerformanceAllocationLinesType<T>
{
  /**
   * Technical entity name for CompensationPayPerformanceAllocationLines.
   */
  static override _entityName = 'CompensationPayPerformanceAllocationLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationPayPerformanceAllocationLines entity.
   */
  static _keys = [
    'dataAreaId',
    'RatingLevelId',
    'AllocationId',
    'PlanType',
    'RatingModelType',
    'CompPerfRatingId',
    'RatingModelId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rating Level Id.
   */
  declare ratingLevelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Allocation Id.
   */
  declare allocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Type.
   * @nullable
   */
  declare planType?: HrmCompPlanType | null;
  /**
   * Rating Model Type.
   * @nullable
   */
  declare ratingModelType?: HrmCompRatingModel | null;
  /**
   * Comp Perf Rating Id.
   */
  declare compPerfRatingId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rating Model Id.
   */
  declare ratingModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Perf Factor Percent.
   */
  declare perfFactorPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link CompensationPerformanceRatings} entity.
   */
  declare compensationPerformanceRating?: CompensationPerformanceRatings<T> | null;
  /**
   * One-to-one navigation property to the {@link RatingLevels} entity.
   */
  declare ratingLevel?: RatingLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link CompensationPayPerformanceAllocations} entity.
   */
  declare compensationPayPerformanceAllocation?: CompensationPayPerformanceAllocations<T> | null;

  constructor(_entityApi: CompensationPayPerformanceAllocationLinesApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationPayPerformanceAllocationLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ratingLevelId: DeserializedType<T, 'Edm.String'>;
  allocationId: DeserializedType<T, 'Edm.String'>;
  planType?: HrmCompPlanType | null;
  ratingModelType?: HrmCompRatingModel | null;
  compPerfRatingId: DeserializedType<T, 'Edm.String'>;
  ratingModelId: DeserializedType<T, 'Edm.String'>;
  perfFactorPercent: DeserializedType<T, 'Edm.Decimal'>;
  compensationPerformanceRating?: CompensationPerformanceRatingsType<T> | null;
  ratingLevel?: RatingLevelsType<T> | null;
  compensationPayPerformanceAllocation?: CompensationPayPerformanceAllocationsType<T> | null;
}
