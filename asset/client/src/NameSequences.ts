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
import type { NameSequencesApi } from './NameSequencesApi';
import { DirSubNameSequenceType } from './DirSubNameSequenceType';

/**
 * This class represents the entity "NameSequences" of service "d365_metadata".
 */
export class NameSequences<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements NameSequencesType<T>
{
  /**
   * Technical entity name for NameSequences.
   */
  static override _entityName = 'NameSequences';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the NameSequences entity.
   */
  static _keys = ['NameSequence', 'LanguageId'];
  /**
   * Name Sequence.
   */
  declare nameSequence: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Position.
   * @nullable
   */
  declare firstPosition?: DirSubNameSequenceType | null;
  /**
   * Separator 3.
   * @nullable
   */
  declare separator3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Separator 2 Spaces.
   */
  declare separator2Spaces: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Separator 3 Spaces.
   */
  declare separator3Spaces: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Separator 1 Spaces.
   */
  declare separator1Spaces: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Last Position.
   * @nullable
   */
  declare lastPosition?: DirSubNameSequenceType | null;
  /**
   * Separator 2.
   * @nullable
   */
  declare separator2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Second Position.
   * @nullable
   */
  declare secondPosition?: DirSubNameSequenceType | null;
  /**
   * Third Position.
   * @nullable
   */
  declare thirdPosition?: DirSubNameSequenceType | null;
  /**
   * Separator 1.
   * @nullable
   */
  declare separator1?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: NameSequencesApi<T>) {
    super(_entityApi);
  }
}

export interface NameSequencesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  nameSequence: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  firstPosition?: DirSubNameSequenceType | null;
  separator3?: DeserializedType<T, 'Edm.String'> | null;
  separator2Spaces: DeserializedType<T, 'Edm.Int32'>;
  separator3Spaces: DeserializedType<T, 'Edm.Int32'>;
  separator1Spaces: DeserializedType<T, 'Edm.Int32'>;
  lastPosition?: DirSubNameSequenceType | null;
  separator2?: DeserializedType<T, 'Edm.String'> | null;
  secondPosition?: DirSubNameSequenceType | null;
  thirdPosition?: DirSubNameSequenceType | null;
  separator1?: DeserializedType<T, 'Edm.String'> | null;
}
