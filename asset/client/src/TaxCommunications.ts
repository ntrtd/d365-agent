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
import type { TaxCommunicationsApi } from './TaxCommunicationsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TaxCommunications" of service "d365_metadata".
 */
export class TaxCommunications<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxCommunicationsType<T>
{
  /**
   * Technical entity name for TaxCommunications.
   */
  static override _entityName = 'TaxCommunications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxCommunications entity.
   */
  static _keys = ['dataAreaId', 'Years', 'ATECOFINCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Years.
   */
  declare years: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Atecofin Code.
   */
  declare atecofinCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Date Of Export.
   */
  declare dateOfExport: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exported.
   * @nullable
   */
  declare exported?: NoYes | null;
  /**
   * Tax Communication Id.
   * @nullable
   */
  declare taxCommunicationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Export File Name.
   * @nullable
   */
  declare exportFileName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxCommunicationsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxCommunicationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  years: DeserializedType<T, 'Edm.Int32'>;
  atecofinCode: DeserializedType<T, 'Edm.String'>;
  dateOfExport: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exported?: NoYes | null;
  taxCommunicationId?: DeserializedType<T, 'Edm.String'> | null;
  exportFileName?: DeserializedType<T, 'Edm.String'> | null;
}
