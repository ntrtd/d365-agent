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
import type { ProcessorPaymentMethodMappingsApi } from './ProcessorPaymentMethodMappingsApi';

/**
 * This class represents the entity "ProcessorPaymentMethodMappings" of service "d365_metadata".
 */
export class ProcessorPaymentMethodMappings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProcessorPaymentMethodMappingsType<T>
{
  /**
   * Technical entity name for ProcessorPaymentMethodMappings.
   */
  static override _entityName = 'ProcessorPaymentMethodMappings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessorPaymentMethodMappings entity.
   */
  static _keys = ['dataAreaId', 'ConnectorName', 'ProcessorPaymentMethod'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Connector Name.
   */
  declare connectorName: DeserializedType<T, 'Edm.String'>;
  /**
   * Processor Payment Method.
   */
  declare processorPaymentMethod: DeserializedType<T, 'Edm.String'>;
  /**
   * Card Type Id.
   * @nullable
   */
  declare cardTypeId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProcessorPaymentMethodMappingsApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessorPaymentMethodMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  connectorName: DeserializedType<T, 'Edm.String'>;
  processorPaymentMethod: DeserializedType<T, 'Edm.String'>;
  cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
}
