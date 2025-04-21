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
import type { PersonalCharacterTypesApi } from './PersonalCharacterTypesApi';

/**
 * This class represents the entity "PersonalCharacterTypes" of service "d365_metadata".
 */
export class PersonalCharacterTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PersonalCharacterTypesType<T>
{
  /**
   * Technical entity name for PersonalCharacterTypes.
   */
  static override _entityName = 'PersonalCharacterTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonalCharacterTypes entity.
   */
  static _keys = ['dataAreaId', 'TypeName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Name.
   */
  declare typeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Description.
   * @nullable
   */
  declare typeDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PersonalCharacterTypesApi<T>) {
    super(_entityApi);
  }
}

export interface PersonalCharacterTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  typeName: DeserializedType<T, 'Edm.String'>;
  typeDescription?: DeserializedType<T, 'Edm.String'> | null;
}
