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
import type { MaterialHandlingOutboundQueuesApi } from './MaterialHandlingOutboundQueuesApi';
import { WmheOutboundTransType } from './WmheOutboundTransType';
import { WmheOutboundStatus } from './WmheOutboundStatus';

/**
 * This class represents the entity "MaterialHandlingOutboundQueues" of service "d365_metadata".
 */
export class MaterialHandlingOutboundQueues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaterialHandlingOutboundQueuesType<T>
{
  /**
   * Technical entity name for MaterialHandlingOutboundQueues.
   */
  static override _entityName = 'MaterialHandlingOutboundQueues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MaterialHandlingOutboundQueues entity.
   */
  static _keys = ['dataAreaId', 'OutboundQueueId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Outbound Queue Id.
   */
  declare outboundQueueId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outbound Trans Type.
   * @nullable
   */
  declare outboundTransType?: WmheOutboundTransType | null;
  /**
   * Data 08.
   * @nullable
   */
  declare data08?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 05.
   * @nullable
   */
  declare data05?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 01.
   * @nullable
   */
  declare data01?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 09.
   * @nullable
   */
  declare data09?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subscription Id.
   * @nullable
   */
  declare subscriptionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 06.
   * @nullable
   */
  declare data06?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 02.
   * @nullable
   */
  declare data02?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outbound Status.
   * @nullable
   */
  declare outboundStatus?: WmheOutboundStatus | null;
  /**
   * Payload.
   * @nullable
   */
  declare payload?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 07.
   * @nullable
   */
  declare data07?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 03.
   * @nullable
   */
  declare data03?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 10.
   * @nullable
   */
  declare data10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data 04.
   * @nullable
   */
  declare data04?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MaterialHandlingOutboundQueuesApi<T>) {
    super(_entityApi);
  }
}

export interface MaterialHandlingOutboundQueuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  outboundQueueId: DeserializedType<T, 'Edm.String'>;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  outboundTransType?: WmheOutboundTransType | null;
  data08?: DeserializedType<T, 'Edm.String'> | null;
  data05?: DeserializedType<T, 'Edm.String'> | null;
  data01?: DeserializedType<T, 'Edm.String'> | null;
  data09?: DeserializedType<T, 'Edm.String'> | null;
  subscriptionId?: DeserializedType<T, 'Edm.String'> | null;
  data06?: DeserializedType<T, 'Edm.String'> | null;
  data02?: DeserializedType<T, 'Edm.String'> | null;
  outboundStatus?: WmheOutboundStatus | null;
  payload?: DeserializedType<T, 'Edm.String'> | null;
  data07?: DeserializedType<T, 'Edm.String'> | null;
  data03?: DeserializedType<T, 'Edm.String'> | null;
  data10?: DeserializedType<T, 'Edm.String'> | null;
  data04?: DeserializedType<T, 'Edm.String'> | null;
}
