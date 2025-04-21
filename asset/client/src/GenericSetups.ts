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
import type { GenericSetupsApi } from './GenericSetupsApi';

/**
 * This class represents the entity "GenericSetups" of service "d365_metadata".
 */
export class GenericSetups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GenericSetupsType<T>
{
  /**
   * Technical entity name for GenericSetups.
   */
  static override _entityName = 'GenericSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GenericSetups entity.
   */
  static _keys = ['MDIdentifier'];
  /**
   * Md Identifier.
   */
  declare mdIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Identifier.
   * @nullable
   */
  declare identifier?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: GenericSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface GenericSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  mdIdentifier: DeserializedType<T, 'Edm.String'>;
  identifier?: DeserializedType<T, 'Edm.String'> | null;
}
