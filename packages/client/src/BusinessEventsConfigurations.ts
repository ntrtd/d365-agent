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
import type { BusinessEventsConfigurationsApi } from './BusinessEventsConfigurationsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BusinessEventsConfigurations" of service "d365_metadata".
 */
export class BusinessEventsConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessEventsConfigurationsType<T>
{
  /**
   * Technical entity name for BusinessEventsConfigurations.
   */
  static override _entityName = 'BusinessEventsConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessEventsConfigurations entity.
   */
  static _keys = [
    'BusinessEventsTable',
    'LegalEntity',
    'BusinessEventsEndpoint_Name'
  ];
  /**
   * Business Events Table.
   */
  declare businessEventsTable: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Events Endpoint Name.
   */
  declare businessEventsEndpointName: DeserializedType<T, 'Edm.String'>;
  /**
   * Disabled.
   * @nullable
   */
  declare disabled?: NoYes | null;

  constructor(_entityApi: BusinessEventsConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessEventsConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  businessEventsTable: DeserializedType<T, 'Edm.String'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  businessEventsEndpointName: DeserializedType<T, 'Edm.String'>;
  disabled?: NoYes | null;
}
