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
import type { FiscalEstablishmentIePerStatesApi } from './FiscalEstablishmentIePerStatesApi';
import {
  FiscalEstablishments,
  FiscalEstablishmentsType
} from './FiscalEstablishments';

/**
 * This class represents the entity "FiscalEstablishmentIEPerStates" of service "d365_metadata".
 */
export class FiscalEstablishmentIePerStates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalEstablishmentIePerStatesType<T>
{
  /**
   * Technical entity name for FiscalEstablishmentIePerStates.
   */
  static override _entityName = 'FiscalEstablishmentIEPerStates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalEstablishmentIePerStates entity.
   */
  static _keys = ['dataAreaId', 'FiscalEstablishmentId', 'State'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Establishment Id.
   */
  declare fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * State.
   */
  declare state: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ie.
   * @nullable
   */
  declare ie?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link FiscalEstablishments} entity.
   */
  declare fiscalEstablishment?: FiscalEstablishments<T> | null;

  constructor(_entityApi: FiscalEstablishmentIePerStatesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalEstablishmentIePerStatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>;
  state: DeserializedType<T, 'Edm.String'>;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  ie?: DeserializedType<T, 'Edm.String'> | null;
  fiscalEstablishment?: FiscalEstablishmentsType<T> | null;
}
