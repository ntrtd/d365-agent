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
import type { PricingPrioritiesApi } from './PricingPrioritiesApi';

/**
 * This class represents the entity "PricingPriorities" of service "d365_metadata".
 */
export class PricingPriorities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PricingPrioritiesType<T>
{
  /**
   * Technical entity name for PricingPriorities.
   */
  static override _entityName = 'PricingPriorities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PricingPriorities entity.
   */
  static _keys = ['dataAreaId', 'PricingPriorityNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pricing Priority Number.
   */
  declare pricingPriorityNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pricing Priority Name.
   * @nullable
   */
  declare pricingPriorityName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PricingPrioritiesApi<T>) {
    super(_entityApi);
  }
}

export interface PricingPrioritiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  pricingPriorityNumber: DeserializedType<T, 'Edm.Int32'>;
  pricingPriorityName?: DeserializedType<T, 'Edm.String'> | null;
}
