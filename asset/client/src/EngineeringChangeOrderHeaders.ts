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
import type { EngineeringChangeOrderHeadersApi } from './EngineeringChangeOrderHeadersApi';
import {
  EngineeringChangeCategoriesV2,
  EngineeringChangeCategoriesV2Type
} from './EngineeringChangeCategoriesV2';
import { Workers, WorkersType } from './Workers';
import { ProjectsV2, ProjectsV2Type } from './ProjectsV2';
import {
  EngineeringChangeSeverities,
  EngineeringChangeSeveritiesType
} from './EngineeringChangeSeverities';
import {
  EngineeringChangeCategories,
  EngineeringChangeCategoriesType
} from './EngineeringChangeCategories';
import {
  EngineeringChangePriorities,
  EngineeringChangePrioritiesType
} from './EngineeringChangePriorities';
import {
  EngineeringChangeOrderProductsV3,
  EngineeringChangeOrderProductsV3Type
} from './EngineeringChangeOrderProductsV3';
import {
  EngineeringChangeOrderDependencies,
  EngineeringChangeOrderDependenciesType
} from './EngineeringChangeOrderDependencies';
import {
  EngineeringChangeOrderProductsV2,
  EngineeringChangeOrderProductsV2Type
} from './EngineeringChangeOrderProductsV2';
import {
  EngineeringChangeOrderProducts,
  EngineeringChangeOrderProductsType
} from './EngineeringChangeOrderProducts';

/**
 * This class represents the entity "EngineeringChangeOrderHeaders" of service "d365_metadata".
 */
export class EngineeringChangeOrderHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderHeadersType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderHeaders.
   */
  static override _entityName = 'EngineeringChangeOrderHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderHeaders entity.
   */
  static _keys = ['dataAreaId', 'OrderNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Order Number.
   */
  declare orderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Category Name.
   * @nullable
   */
  declare engineeringChangeCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Responsible Personnel Number.
   * @nullable
   */
  declare orderResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Order Title.
   * @nullable
   */
  declare orderTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Engineering Change Priority Name.
   * @nullable
   */
  declare engineeringChangePriorityName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Engineering Change Severity Name.
   * @nullable
   */
  declare engineeringChangeSeverityName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Engineer Personnel Number.
   * @nullable
   */
  declare engineerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Legal Entity Id.
   * @nullable
   */
  declare projectLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeCategoriesV2} entity.
   */
  declare engineeringChangeCategoryV2?: EngineeringChangeCategoriesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare engineerWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectsV2} entity.
   */
  declare projectV2?: ProjectsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeSeverities} entity.
   */
  declare engineeringChangeSeverity?: EngineeringChangeSeverities<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare orderResponsibleWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeCategories} entity.
   */
  declare engineeringChangeCategory?: EngineeringChangeCategories<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangePriorities} entity.
   */
  declare engineeringChangePriority?: EngineeringChangePriorities<T> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductsV3} entity.
   */
  declare engineeringChangeOrderProductsV3: EngineeringChangeOrderProductsV3<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderDependencies} entity.
   */
  declare engineeringChangeOrderDependencies: EngineeringChangeOrderDependencies<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductsV2} entity.
   */
  declare engineeringChangeOrderProductsV2: EngineeringChangeOrderProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProducts} entity.
   */
  declare engineeringChangeOrderProducts: EngineeringChangeOrderProducts<T>[];

  constructor(_entityApi: EngineeringChangeOrderHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  orderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  orderResponsiblePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  orderTitle?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangePriorityName?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeSeverityName?: DeserializedType<T, 'Edm.String'> | null;
  engineerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeCategoryV2?: EngineeringChangeCategoriesV2Type<T> | null;
  engineerWorker?: WorkersType<T> | null;
  projectV2?: ProjectsV2Type<T> | null;
  engineeringChangeSeverity?: EngineeringChangeSeveritiesType<T> | null;
  orderResponsibleWorker?: WorkersType<T> | null;
  engineeringChangeCategory?: EngineeringChangeCategoriesType<T> | null;
  engineeringChangePriority?: EngineeringChangePrioritiesType<T> | null;
  engineeringChangeOrderProductsV3: EngineeringChangeOrderProductsV3Type<T>[];
  engineeringChangeOrderDependencies: EngineeringChangeOrderDependenciesType<T>[];
  engineeringChangeOrderProductsV2: EngineeringChangeOrderProductsV2Type<T>[];
  engineeringChangeOrderProducts: EngineeringChangeOrderProductsType<T>[];
}
