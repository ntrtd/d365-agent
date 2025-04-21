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
import type { IntervatConfigurationsApi } from './IntervatConfigurationsApi';
import { TaxIntervatElement } from './TaxIntervatElement';

/**
 * This class represents the entity "IntervatConfigurations" of service "d365_metadata".
 */
export class IntervatConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IntervatConfigurationsType<T>
{
  /**
   * Technical entity name for IntervatConfigurations.
   */
  static override _entityName = 'IntervatConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntervatConfigurations entity.
   */
  static _keys = ['dataAreaId', 'Language'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Language.
   * @nullable
   */
  declare language?: TaxIntervatElement | null;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: IntervatConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface IntervatConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  language?: TaxIntervatElement | null;
  value?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
