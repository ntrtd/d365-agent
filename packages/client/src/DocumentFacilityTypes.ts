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
import type { DocumentFacilityTypesApi } from './DocumentFacilityTypesApi';
import { BankDocumentType } from './BankDocumentType';
import {
  DocumentFacilityGroups,
  DocumentFacilityGroupsType
} from './DocumentFacilityGroups';

/**
 * This class represents the entity "DocumentFacilityTypes" of service "d365_metadata".
 */
export class DocumentFacilityTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DocumentFacilityTypesType<T>
{
  /**
   * Technical entity name for DocumentFacilityTypes.
   */
  static override _entityName = 'DocumentFacilityTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentFacilityTypes entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Facility Group Name.
   * @nullable
   */
  declare facilityGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Facility Nature.
   * @nullable
   */
  declare facilityNature?: BankDocumentType | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DocumentFacilityGroups} entity.
   */
  declare documentFacilityGroup?: DocumentFacilityGroups<T> | null;

  constructor(_entityApi: DocumentFacilityTypesApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentFacilityTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  facilityGroupName?: DeserializedType<T, 'Edm.String'> | null;
  facilityNature?: BankDocumentType | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  documentFacilityGroup?: DocumentFacilityGroupsType<T> | null;
}
