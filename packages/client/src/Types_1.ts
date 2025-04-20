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
import type { Types_1Api } from './Types_1Api';

/**
 * This class represents the entity "Types" of service "d365_metadata".
 */
export class Types_1<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Types_1Type<T>
{
  /**
   * Technical entity name for Types_1.
   */
  static override _entityName = 'Types';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Types_1 entity.
   */
  static _keys = ['dataAreaId', 'FlTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fl Type Id.
   */
  declare flTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Short Name.
   * @nullable
   */
  declare shortName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: Types_1Api<T>) {
    super(_entityApi);
  }
}

export interface Types_1Type<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  flTypeId: DeserializedType<T, 'Edm.String'>;
  shortName?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
