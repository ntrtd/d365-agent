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
import type { ChannelPlannerConfigurationsApi } from './ChannelPlannerConfigurationsApi';
import { RetailChannelPlannerConfigurationState } from './RetailChannelPlannerConfigurationState';

/**
 * This class represents the entity "ChannelPlannerConfigurations" of service "d365_metadata".
 */
export class ChannelPlannerConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ChannelPlannerConfigurationsType<T>
{
  /**
   * Technical entity name for ChannelPlannerConfigurations.
   */
  static override _entityName = 'ChannelPlannerConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ChannelPlannerConfigurations entity.
   */
  static _keys = ['PlanId'];
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;
  /**
   * State.
   * @nullable
   */
  declare state?: RetailChannelPlannerConfigurationState | null;
  /**
   * Store Number.
   * @nullable
   */
  declare storeNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ChannelPlannerConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface ChannelPlannerConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  planId: DeserializedType<T, 'Edm.String'>;
  state?: RetailChannelPlannerConfigurationState | null;
  storeNumber?: DeserializedType<T, 'Edm.String'> | null;
}
