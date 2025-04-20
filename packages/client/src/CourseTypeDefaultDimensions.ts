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
import type { CourseTypeDefaultDimensionsApi } from './CourseTypeDefaultDimensionsApi';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { CourseTypes, CourseTypesType } from './CourseTypes';

/**
 * This class represents the entity "CourseTypeDefaultDimensions" of service "d365_metadata".
 */
export class CourseTypeDefaultDimensions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CourseTypeDefaultDimensionsType<T>
{
  /**
   * Technical entity name for CourseTypeDefaultDimensions.
   */
  static override _entityName = 'CourseTypeDefaultDimensions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CourseTypeDefaultDimensions entity.
   */
  static _keys = ['CourseTypeId', 'Company'];
  /**
   * Course Type Id.
   */
  declare courseTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link CourseTypes} entity.
   */
  declare courseTypes?: CourseTypes<T> | null;

  constructor(_entityApi: CourseTypeDefaultDimensionsApi<T>) {
    super(_entityApi);
  }
}

export interface CourseTypeDefaultDimensionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  courseTypeId: DeserializedType<T, 'Edm.String'>;
  company: DeserializedType<T, 'Edm.String'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  courseTypes?: CourseTypesType<T> | null;
}
