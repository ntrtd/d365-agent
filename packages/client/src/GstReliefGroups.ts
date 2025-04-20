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
import type { GstReliefGroupsApi } from './GstReliefGroupsApi';

/**
 * This class represents the entity "GSTReliefGroups" of service "d365_metadata".
 */
export class GstReliefGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GstReliefGroupsType<T>
{
  /**
   * Technical entity name for GstReliefGroups.
   */
  static override _entityName = 'GSTReliefGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GstReliefGroups entity.
   */
  static _keys = ['dataAreaId', 'Name', 'ReliefCategoryId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Relief Category Id.
   */
  declare reliefCategoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: GstReliefGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface GstReliefGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  reliefCategoryId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
