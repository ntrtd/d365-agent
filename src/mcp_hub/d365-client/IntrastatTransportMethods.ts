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
import type { IntrastatTransportMethodsApi } from './IntrastatTransportMethodsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "IntrastatTransportMethods" of service "d365_metadata".
 */
export class IntrastatTransportMethods<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IntrastatTransportMethodsType<T>
{
  /**
   * Technical entity name for IntrastatTransportMethods.
   */
  static override _entityName = 'IntrastatTransportMethods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntrastatTransportMethods entity.
   */
  static _keys = ['dataAreaId', 'Transport'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transport.
   */
  declare transport: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Port.
   * @nullable
   */
  declare port?: NoYes | null;

  constructor(_entityApi: IntrastatTransportMethodsApi<T>) {
    super(_entityApi);
  }
}

export interface IntrastatTransportMethodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transport: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  port?: NoYes | null;
}
