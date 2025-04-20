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
import type { RetailBarcodeMaskCharactersApi } from './RetailBarcodeMaskCharactersApi';
import { RetailBarcodeMaskCharacterTypeBase } from './RetailBarcodeMaskCharacterTypeBase';

/**
 * This class represents the entity "RetailBarcodeMaskCharacters" of service "d365_metadata".
 */
export class RetailBarcodeMaskCharacters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailBarcodeMaskCharactersType<T>
{
  /**
   * Technical entity name for RetailBarcodeMaskCharacters.
   */
  static override _entityName = 'RetailBarcodeMaskCharacters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailBarcodeMaskCharacters entity.
   */
  static _keys = ['dataAreaId', 'CharacterType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Character Type.
   * @nullable
   */
  declare characterType?: RetailBarcodeMaskCharacterTypeBase | null;
  /**
   * Character.
   * @nullable
   */
  declare character?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailBarcodeMaskCharactersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailBarcodeMaskCharactersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  characterType?: RetailBarcodeMaskCharacterTypeBase | null;
  character?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
}
