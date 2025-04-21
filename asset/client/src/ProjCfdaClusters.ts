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
import type { ProjCfdaClustersApi } from './ProjCfdaClustersApi';

/**
 * This class represents the entity "ProjCFDAClusters" of service "d365_metadata".
 */
export class ProjCfdaClusters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjCfdaClustersType<T>
{
  /**
   * Technical entity name for ProjCfdaClusters.
   */
  static override _entityName = 'ProjCFDAClusters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjCfdaClusters entity.
   */
  static _keys = ['dataAreaId', 'ClusterName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cluster Name.
   */
  declare clusterName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ProjCfdaClustersApi<T>) {
    super(_entityApi);
  }
}

export interface ProjCfdaClustersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  clusterName: DeserializedType<T, 'Edm.String'>;
}
