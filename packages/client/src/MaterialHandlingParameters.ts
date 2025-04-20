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
import type { MaterialHandlingParametersApi } from './MaterialHandlingParametersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "MaterialHandlingParameters" of service "d365_metadata".
 */
export class MaterialHandlingParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaterialHandlingParametersType<T>
{
  /**
   * Technical entity name for MaterialHandlingParameters.
   */
  static override _entityName = 'MaterialHandlingParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MaterialHandlingParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Enable Manual Inbound Message Creation.
   * @nullable
   */
  declare enableManualInboundMessageCreation?: NoYes | null;
  /**
   * User Id.
   * @nullable
   */
  declare userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Message Id.
   * @nullable
   */
  declare enableMessageId?: NoYes | null;

  constructor(_entityApi: MaterialHandlingParametersApi<T>) {
    super(_entityApi);
  }
}

export interface MaterialHandlingParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  enableManualInboundMessageCreation?: NoYes | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  enableMessageId?: NoYes | null;
}
