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
import type { EmploymentCategoriesApi } from './EmploymentCategoriesApi';
import { HcmEmploymentType } from './HcmEmploymentType';
import { EmploymentDetails, EmploymentDetailsType } from './EmploymentDetails';

/**
 * This class represents the entity "EmploymentCategories" of service "d365_metadata".
 */
export class EmploymentCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EmploymentCategoriesType<T>
{
  /**
   * Technical entity name for EmploymentCategories.
   */
  static override _entityName = 'EmploymentCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmploymentCategories entity.
   */
  static _keys = ['WorkerType', 'EmploymentCategoryId'];
  /**
   * Worker Type.
   * @nullable
   */
  declare workerType?: HcmEmploymentType | null;
  /**
   * Employment Category Id.
   */
  declare employmentCategoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EmploymentDetails} entity.
   */
  declare employmentDetail: EmploymentDetails<T>[];

  constructor(_entityApi: EmploymentCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface EmploymentCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workerType?: HcmEmploymentType | null;
  employmentCategoryId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  employmentDetail: EmploymentDetailsType<T>[];
}
