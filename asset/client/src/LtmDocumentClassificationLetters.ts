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
import type { LtmDocumentClassificationLettersApi } from './LtmDocumentClassificationLettersApi';

/**
 * This class represents the entity "LTMDocumentClassificationLetters" of service "d365_metadata".
 */
export class LtmDocumentClassificationLetters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmDocumentClassificationLettersType<T>
{
  /**
   * Technical entity name for LtmDocumentClassificationLetters.
   */
  static override _entityName = 'LTMDocumentClassificationLetters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmDocumentClassificationLetters entity.
   */
  static _keys = ['dataAreaId', 'Name', 'Id'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Prefix.
   * @nullable
   */
  declare prefix?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmDocumentClassificationLettersApi<T>) {
    super(_entityApi);
  }
}

export interface LtmDocumentClassificationLettersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.String'>;
  prefix?: DeserializedType<T, 'Edm.String'> | null;
}
