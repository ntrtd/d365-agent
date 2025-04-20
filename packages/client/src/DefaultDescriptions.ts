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
import type { DefaultDescriptionsApi } from './DefaultDescriptionsApi';
import { LedgerTransTxt } from './LedgerTransTxt';
import {
  DefaultDescriptionParameters,
  DefaultDescriptionParametersType
} from './DefaultDescriptionParameters';

/**
 * This class represents the entity "DefaultDescriptions" of service "d365_metadata".
 */
export class DefaultDescriptions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DefaultDescriptionsType<T>
{
  /**
   * Technical entity name for DefaultDescriptions.
   */
  static override _entityName = 'DefaultDescriptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DefaultDescriptions entity.
   */
  static _keys = ['dataAreaId', 'Description', 'Language'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: LedgerTransTxt | null;
  /**
   * Language.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link DefaultDescriptionParameters} entity.
   */
  declare defaultDescriptionParameters: DefaultDescriptionParameters<T>[];

  constructor(_entityApi: DefaultDescriptionsApi<T>) {
    super(_entityApi);
  }
}

export interface DefaultDescriptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  description?: LedgerTransTxt | null;
  language: DeserializedType<T, 'Edm.String'>;
  text?: DeserializedType<T, 'Edm.String'> | null;
  defaultDescriptionParameters: DefaultDescriptionParametersType<T>[];
}
