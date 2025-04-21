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
import type { EcoResCategoryHierarchyBiEntitiesApi } from './EcoResCategoryHierarchyBiEntitiesApi';
import { EcoResCategoryHierarchyModifier } from './EcoResCategoryHierarchyModifier';

/**
 * This class represents the entity "EcoResCategoryHierarchyBiEntities" of service "d365_metadata".
 */
export class EcoResCategoryHierarchyBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EcoResCategoryHierarchyBiEntitiesType<T>
{
  /**
   * Technical entity name for EcoResCategoryHierarchyBiEntities.
   */
  static override _entityName = 'EcoResCategoryHierarchyBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EcoResCategoryHierarchyBiEntities entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Hierarchy Modifier.
   * @nullable
   */
  declare hierarchyModifier?: EcoResCategoryHierarchyModifier | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: EcoResCategoryHierarchyBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface EcoResCategoryHierarchyBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  hierarchyModifier?: EcoResCategoryHierarchyModifier | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
