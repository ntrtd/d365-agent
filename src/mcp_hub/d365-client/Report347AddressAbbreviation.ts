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
import type { Report347AddressAbbreviationApi } from './Report347AddressAbbreviationApi';

/**
 * This class represents the entity "Report347AddressAbbreviation" of service "d365_metadata".
 */
export class Report347AddressAbbreviation<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Report347AddressAbbreviationType<T>
{
  /**
   * Technical entity name for Report347AddressAbbreviation.
   */
  static override _entityName = 'Report347AddressAbbreviation';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Report347AddressAbbreviation entity.
   */
  static _keys = ['dataAreaId', 'AddressAbbreviation'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Abbreviation.
   */
  declare addressAbbreviation: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: Report347AddressAbbreviationApi<T>) {
    super(_entityApi);
  }
}

export interface Report347AddressAbbreviationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  addressAbbreviation: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
