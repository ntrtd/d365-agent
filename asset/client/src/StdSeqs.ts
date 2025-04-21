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
import type { StdSeqsApi } from './StdSeqsApi';
import { RTax25StdModuleType } from './RTax25StdModuleType';
import { RTax25StdChannelType } from './RTax25StdChannelType';

/**
 * This class represents the entity "StdSeqs" of service "d365_metadata".
 */
export class StdSeqs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StdSeqsType<T>
{
  /**
   * Technical entity name for StdSeqs.
   */
  static override _entityName = 'StdSeqs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StdSeqs entity.
   */
  static _keys = ['dataAreaId', 'Sequence', 'AppliedModule'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence.
   */
  declare sequence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Applied Module.
   * @nullable
   */
  declare appliedModule?: RTax25StdModuleType | null;
  /**
   * Channel.
   * @nullable
   */
  declare channel?: RTax25StdChannelType | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Channel Reference.
   * @nullable
   */
  declare channelReference?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: StdSeqsApi<T>) {
    super(_entityApi);
  }
}

export interface StdSeqsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sequence: DeserializedType<T, 'Edm.Int32'>;
  appliedModule?: RTax25StdModuleType | null;
  channel?: RTax25StdChannelType | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  channelReference?: DeserializedType<T, 'Edm.String'> | null;
}
