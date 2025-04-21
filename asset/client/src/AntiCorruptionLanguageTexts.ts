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
import type { AntiCorruptionLanguageTextsApi } from './AntiCorruptionLanguageTextsApi';

/**
 * This class represents the entity "AntiCorruptionLanguageTexts" of service "d365_metadata".
 */
export class AntiCorruptionLanguageTexts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AntiCorruptionLanguageTextsType<T>
{
  /**
   * Technical entity name for AntiCorruptionLanguageTexts.
   */
  static override _entityName = 'AntiCorruptionLanguageTexts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AntiCorruptionLanguageTexts entity.
   */
  static _keys = ['dataAreaId', 'LanguageId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Approver Message.
   * @nullable
   */
  declare approverMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attestation Message.
   * @nullable
   */
  declare attestationMessage?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AntiCorruptionLanguageTextsApi<T>) {
    super(_entityApi);
  }
}

export interface AntiCorruptionLanguageTextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  approverMessage?: DeserializedType<T, 'Edm.String'> | null;
  attestationMessage?: DeserializedType<T, 'Edm.String'> | null;
}
