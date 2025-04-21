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
import type { IntrastatPortsApi } from './IntrastatPortsApi';

/**
 * This class represents the entity "IntrastatPorts" of service "d365_metadata".
 */
export class IntrastatPorts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IntrastatPortsType<T>
{
  /**
   * Technical entity name for IntrastatPorts.
   */
  static override _entityName = 'IntrastatPorts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntrastatPorts entity.
   */
  static _keys = ['dataAreaId', 'PortId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Port Id.
   */
  declare portId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Describe Port.
   * @nullable
   */
  declare describePort?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Port State.
   * @nullable
   */
  declare portState?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: IntrastatPortsApi<T>) {
    super(_entityApi);
  }
}

export interface IntrastatPortsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  portId: DeserializedType<T, 'Edm.String'>;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  describePort?: DeserializedType<T, 'Edm.String'> | null;
  portState?: DeserializedType<T, 'Edm.String'> | null;
}
