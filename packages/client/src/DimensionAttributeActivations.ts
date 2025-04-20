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
import type { DimensionAttributeActivationsApi } from './DimensionAttributeActivationsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "DimensionAttributeActivations" of service "d365_metadata".
 */
export class DimensionAttributeActivations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimensionAttributeActivationsType<T>
{
  /**
   * Technical entity name for DimensionAttributeActivations.
   */
  static override _entityName = 'DimensionAttributeActivations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimensionAttributeActivations entity.
   */
  static _keys = ['DoActivate'];
  /**
   * Do Activate.
   * @nullable
   */
  declare doActivate?: NoYes | null;
  /**
   * Do Copy Values.
   * @nullable
   */
  declare doCopyValues?: NoYes | null;

  constructor(_entityApi: DimensionAttributeActivationsApi<T>) {
    super(_entityApi);
  }
}

export interface DimensionAttributeActivationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  doActivate?: NoYes | null;
  doCopyValues?: NoYes | null;
}
