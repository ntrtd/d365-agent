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
import type { TradeD365SalesFeatureManagementStatesV2Api } from './TradeD365SalesFeatureManagementStatesV2Api';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TradeD365SalesFeatureManagementStatesV2" of service "d365_metadata".
 */
export class TradeD365SalesFeatureManagementStatesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TradeD365SalesFeatureManagementStatesV2Type<T>
{
  /**
   * Technical entity name for TradeD365SalesFeatureManagementStatesV2.
   */
  static override _entityName = 'TradeD365SalesFeatureManagementStatesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TradeD365SalesFeatureManagementStatesV2 entity.
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

  constructor(_entityApi: TradeD365SalesFeatureManagementStatesV2Api<T>) {
    super(_entityApi);
  }
}

export interface TradeD365SalesFeatureManagementStatesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  isEnabled?: NoYes | null;
}
