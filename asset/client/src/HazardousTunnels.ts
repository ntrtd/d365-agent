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
import type { HazardousTunnelsApi } from './HazardousTunnelsApi';

/**
 * This class represents the entity "HazardousTunnels" of service "d365_metadata".
 */
export class HazardousTunnels<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements HazardousTunnelsType<T>
{
  /**
   * Technical entity name for HazardousTunnels.
   */
  static override _entityName = 'HazardousTunnels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HazardousTunnels entity.
   */
  static _keys = ['TunnelCode'];
  /**
   * Tunnel Code.
   */
  declare tunnelCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: HazardousTunnelsApi<T>) {
    super(_entityApi);
  }
}

export interface HazardousTunnelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tunnelCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
