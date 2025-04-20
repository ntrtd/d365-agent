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
import type { DocumentFacilityGroupsApi } from './DocumentFacilityGroupsApi';
import {
  DocumentFacilityTypes,
  DocumentFacilityTypesType
} from './DocumentFacilityTypes';

/**
 * This class represents the entity "DocumentFacilityGroups" of service "d365_metadata".
 */
export class DocumentFacilityGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DocumentFacilityGroupsType<T>
{
  /**
   * Technical entity name for DocumentFacilityGroups.
   */
  static override _entityName = 'DocumentFacilityGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentFacilityGroups entity.
   */
  static _keys = ['FacilityGroup'];
  /**
   * Facility Group.
   */
  declare facilityGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link DocumentFacilityTypes} entity.
   */
  declare facilityGroups: DocumentFacilityTypes<T>[];

  constructor(_entityApi: DocumentFacilityGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentFacilityGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  facilityGroup: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  facilityGroups: DocumentFacilityTypesType<T>[];
}
