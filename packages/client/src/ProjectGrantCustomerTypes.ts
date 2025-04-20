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
import type { ProjectGrantCustomerTypesApi } from './ProjectGrantCustomerTypesApi';

/**
 * This class represents the entity "ProjectGrantCustomerTypes" of service "d365_metadata".
 */
export class ProjectGrantCustomerTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectGrantCustomerTypesType<T>
{
  /**
   * Technical entity name for ProjectGrantCustomerTypes.
   */
  static override _entityName = 'ProjectGrantCustomerTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectGrantCustomerTypes entity.
   */
  static _keys = ['dataAreaId', 'GrantorType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Grantor Type.
   */
  declare grantorType: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjectGrantCustomerTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectGrantCustomerTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  grantorType: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
