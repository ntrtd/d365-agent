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
import type { MaterialHandlingInboundQueuesApi } from './MaterialHandlingInboundQueuesApi';
import { WmheInboundTransType } from './WmheInboundTransType';
import { WmheInboundStatus } from './WmheInboundStatus';

/**
 * This class represents the entity "MaterialHandlingInboundQueues" of service "d365_metadata".
 */
export class MaterialHandlingInboundQueues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaterialHandlingInboundQueuesType<T>
{
  /**
   * Technical entity name for MaterialHandlingInboundQueues.
   */
  static override _entityName = 'MaterialHandlingInboundQueues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MaterialHandlingInboundQueues entity.
   */
  static _keys = ['dataAreaId', 'InboundQueueId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inbound Queue Id.
   */
  declare inboundQueueId: DeserializedType<T, 'Edm.String'>;
  /**
   * Data 01.
   * @nullable
   */
  declare data01?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 02.
   * @nullable
   */
  declare data02?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 07.
   * @nullable
   */
  declare data07?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 08.
   * @nullable
   */
  declare data08?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 10.
   * @nullable
   */
  declare data10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inbound Trans Type.
   * @nullable
   */
  declare inboundTransType?: WmheInboundTransType | null;
  /**
   * Data 05.
   * @nullable
   */
  declare data05?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 06.
   * @nullable
   */
  declare data06?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 03.
   * @nullable
   */
  declare data03?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Error Message.
   * @nullable
   */
  declare errorMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Id.
   * @nullable
   */
  declare messageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 04.
   * @nullable
   */
  declare data04?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 09.
   * @nullable
   */
  declare data09?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inbound Status.
   * @nullable
   */
  declare inboundStatus?: WmheInboundStatus | null;

  constructor(_entityApi: MaterialHandlingInboundQueuesApi<T>) {
    super(_entityApi);
  }
}

export interface MaterialHandlingInboundQueuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inboundQueueId: DeserializedType<T, 'Edm.String'>;
  data01?: DeserializedType<T, 'Edm.String'> | null;
  data02?: DeserializedType<T, 'Edm.String'> | null;
  data07?: DeserializedType<T, 'Edm.String'> | null;
  data08?: DeserializedType<T, 'Edm.String'> | null;
  data10?: DeserializedType<T, 'Edm.String'> | null;
  inboundTransType?: WmheInboundTransType | null;
  data05?: DeserializedType<T, 'Edm.String'> | null;
  data06?: DeserializedType<T, 'Edm.String'> | null;
  data03?: DeserializedType<T, 'Edm.String'> | null;
  errorMessage?: DeserializedType<T, 'Edm.String'> | null;
  messageId?: DeserializedType<T, 'Edm.String'> | null;
  data04?: DeserializedType<T, 'Edm.String'> | null;
  data09?: DeserializedType<T, 'Edm.String'> | null;
  inboundStatus?: WmheInboundStatus | null;
}
