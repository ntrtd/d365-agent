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
import type { MaterialHandlingSubscriptionsApi } from './MaterialHandlingSubscriptionsApi';
import { NoYes } from './NoYes';
import { WmheOutboundTransType } from './WmheOutboundTransType';

/**
 * This class represents the entity "MaterialHandlingSubscriptions" of service "d365_metadata".
 */
export class MaterialHandlingSubscriptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaterialHandlingSubscriptionsType<T>
{
  /**
   * Technical entity name for MaterialHandlingSubscriptions.
   */
  static override _entityName = 'MaterialHandlingSubscriptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MaterialHandlingSubscriptions entity.
   */
  static _keys = ['dataAreaId', 'Subscription'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Subscription.
   */
  declare subscription: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Payload Generator.
   * @nullable
   */
  declare payloadGenerator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Field Name.
   * @nullable
   */
  declare refFieldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Query.
   * @nullable
   */
  declare query?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Subscription Id.
   * @nullable
   */
  declare subscriptionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Run Query.
   * @nullable
   */
  declare runQuery?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Table Name.
   * @nullable
   */
  declare refTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Field Name.
   * @nullable
   */
  declare dataFieldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outbound Transaction Type.
   * @nullable
   */
  declare outboundTransactionType?: WmheOutboundTransType | null;

  constructor(_entityApi: MaterialHandlingSubscriptionsApi<T>) {
    super(_entityApi);
  }
}

export interface MaterialHandlingSubscriptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  subscription: DeserializedType<T, 'Edm.Int64'>;
  payloadGenerator?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  refFieldName?: DeserializedType<T, 'Edm.String'> | null;
  query?: DeserializedType<T, 'Edm.Binary'> | null;
  subscriptionId?: DeserializedType<T, 'Edm.String'> | null;
  runQuery?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  refTableName?: DeserializedType<T, 'Edm.String'> | null;
  dataFieldName?: DeserializedType<T, 'Edm.String'> | null;
  outboundTransactionType?: WmheOutboundTransType | null;
}
