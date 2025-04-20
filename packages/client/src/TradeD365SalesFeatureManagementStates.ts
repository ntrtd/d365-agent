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
import type { TradeD365SalesFeatureManagementStatesApi } from './TradeD365SalesFeatureManagementStatesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TradeD365SalesFeatureManagementStates" of service "d365_metadata".
 */
export class TradeD365SalesFeatureManagementStates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TradeD365SalesFeatureManagementStatesType<T>
{
  /**
   * Technical entity name for TradeD365SalesFeatureManagementStates.
   */
  static override _entityName = 'TradeD365SalesFeatureManagementStates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TradeD365SalesFeatureManagementStates entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Enabled.
   * @nullable
   */
  declare isEnabled?: NoYes | null;

  constructor(_entityApi: TradeD365SalesFeatureManagementStatesApi<T>) {
    super(_entityApi);
  }
}

export interface TradeD365SalesFeatureManagementStatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  isEnabled?: NoYes | null;
}
