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
import type { KeyboardMappingCodesApi } from './KeyboardMappingCodesApi';

/**
 * This class represents the entity "KeyboardMappingCodes" of service "d365_metadata".
 */
export class KeyboardMappingCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements KeyboardMappingCodesType<T>
{
  /**
   * Technical entity name for KeyboardMappingCodes.
   */
  static override _entityName = 'KeyboardMappingCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the KeyboardMappingCodes entity.
   */
  static _keys = ['KeyboardMappingGroup', 'AsciiValue'];
  /**
   * Keyboard Mapping Group.
   */
  declare keyboardMappingGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Ascii Value.
   */
  declare asciiValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Operation.
   */
  declare operation: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Key Character.
   * @nullable
   */
  declare keyCharacter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Action Property.
   * @nullable
   */
  declare actionProperty?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: KeyboardMappingCodesApi<T>) {
    super(_entityApi);
  }
}

export interface KeyboardMappingCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  keyboardMappingGroup: DeserializedType<T, 'Edm.String'>;
  asciiValue: DeserializedType<T, 'Edm.Int32'>;
  operation: DeserializedType<T, 'Edm.Int32'>;
  keyCharacter?: DeserializedType<T, 'Edm.String'> | null;
  actionProperty?: DeserializedType<T, 'Edm.String'> | null;
}
