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
import type { DefaultDescriptionParametersApi } from './DefaultDescriptionParametersApi';
import { LedgerTransTxt } from './LedgerTransTxt';
import {
  DefaultDescriptions,
  DefaultDescriptionsType
} from './DefaultDescriptions';

/**
 * This class represents the entity "DefaultDescriptionParameters" of service "d365_metadata".
 */
export class DefaultDescriptionParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DefaultDescriptionParametersType<T>
{
  /**
   * Technical entity name for DefaultDescriptionParameters.
   */
  static override _entityName = 'DefaultDescriptionParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DefaultDescriptionParameters entity.
   */
  static _keys = ['dataAreaId', 'Description', 'Language', 'ParameterNumber'];
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
   * Parameter Number.
   */
  declare parameterNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reference Field Name.
   * @nullable
   */
  declare referenceFieldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Table Name.
   * @nullable
   */
  declare referenceTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DefaultDescriptions} entity.
   */
  declare defaultDescriptions?: DefaultDescriptions<T> | null;

  constructor(_entityApi: DefaultDescriptionParametersApi<T>) {
    super(_entityApi);
  }
}

export interface DefaultDescriptionParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  description?: LedgerTransTxt | null;
  language: DeserializedType<T, 'Edm.String'>;
  parameterNumber: DeserializedType<T, 'Edm.Int32'>;
  referenceFieldName?: DeserializedType<T, 'Edm.String'> | null;
  referenceTableName?: DeserializedType<T, 'Edm.String'> | null;
  defaultDescriptions?: DefaultDescriptionsType<T> | null;
}
