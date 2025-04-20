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
import type { TnvedToCustomsPaymentsRelationsApi } from './TnvedToCustomsPaymentsRelationsApi';
import { CustomAllImportExportRu } from './CustomAllImportExportRu';

/**
 * This class represents the entity "TNVEDToCustomsPaymentsRelations" of service "d365_metadata".
 */
export class TnvedToCustomsPaymentsRelations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TnvedToCustomsPaymentsRelationsType<T>
{
  /**
   * Technical entity name for TnvedToCustomsPaymentsRelations.
   */
  static override _entityName = 'TNVEDToCustomsPaymentsRelations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TnvedToCustomsPaymentsRelations entity.
   */
  static _keys = [
    'dataAreaId',
    'FromDate',
    'TnVedCode',
    'Direction',
    'CountryRegionId',
    'VAT'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tn Ved Code.
   */
  declare tnVedCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Direction.
   * @nullable
   */
  declare direction?: CustomAllImportExportRu | null;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vat.
   */
  declare vat: DeserializedType<T, 'Edm.String'>;
  /**
   * Customs Duty.
   * @nullable
   */
  declare customsDuty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise.
   * @nullable
   */
  declare excise?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TnvedToCustomsPaymentsRelationsApi<T>) {
    super(_entityApi);
  }
}

export interface TnvedToCustomsPaymentsRelationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  tnVedCode: DeserializedType<T, 'Edm.String'>;
  direction?: CustomAllImportExportRu | null;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  vat: DeserializedType<T, 'Edm.String'>;
  customsDuty?: DeserializedType<T, 'Edm.String'> | null;
  excise?: DeserializedType<T, 'Edm.String'> | null;
}
