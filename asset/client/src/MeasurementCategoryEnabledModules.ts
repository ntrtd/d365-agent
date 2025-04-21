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
import type { MeasurementCategoryEnabledModulesApi } from './MeasurementCategoryEnabledModulesApi';
import { MeasurementCategoryEnabledForModule } from './MeasurementCategoryEnabledForModule';

/**
 * This class represents the entity "MeasurementCategoryEnabledModules" of service "d365_metadata".
 */
export class MeasurementCategoryEnabledModules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MeasurementCategoryEnabledModulesType<T>
{
  /**
   * Technical entity name for MeasurementCategoryEnabledModules.
   */
  static override _entityName = 'MeasurementCategoryEnabledModules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MeasurementCategoryEnabledModules entity.
   */
  static _keys = ['Module', 'CompanyId', 'CategoryId'];
  /**
   * Module.
   * @nullable
   */
  declare module?: MeasurementCategoryEnabledForModule | null;
  /**
   * Company Id.
   */
  declare companyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: MeasurementCategoryEnabledModulesApi<T>) {
    super(_entityApi);
  }
}

export interface MeasurementCategoryEnabledModulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  module?: MeasurementCategoryEnabledForModule | null;
  companyId: DeserializedType<T, 'Edm.String'>;
  categoryId: DeserializedType<T, 'Edm.String'>;
}
