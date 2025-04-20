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
import type { ReturnPolicyChannelsApi } from './ReturnPolicyChannelsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ReturnPolicyChannels" of service "d365_metadata".
 */
export class ReturnPolicyChannels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReturnPolicyChannelsType<T>
{
  /**
   * Technical entity name for ReturnPolicyChannels.
   */
  static override _entityName = 'ReturnPolicyChannels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReturnPolicyChannels entity.
   */
  static _keys = ['dataAreaId', 'PolicyName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Name.
   */
  declare policyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Manager Override Enabled.
   * @nullable
   */
  declare isManagerOverrideEnabled?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ReturnPolicyChannelsApi<T>) {
    super(_entityApi);
  }
}

export interface ReturnPolicyChannelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  policyName: DeserializedType<T, 'Edm.String'>;
  isManagerOverrideEnabled?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
