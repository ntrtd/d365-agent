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
import type { FiscalOrganizationFiscalEstablishmentsApi } from './FiscalOrganizationFiscalEstablishmentsApi';

/**
 * This class represents the entity "FiscalOrganizationFiscalEstablishments" of service "d365_metadata".
 */
export class FiscalOrganizationFiscalEstablishments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalOrganizationFiscalEstablishmentsType<T>
{
  /**
   * Technical entity name for FiscalOrganizationFiscalEstablishments.
   */
  static override _entityName = 'FiscalOrganizationFiscalEstablishments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalOrganizationFiscalEstablishments entity.
   */
  static _keys = ['FiscalEstablishmentDataArea', 'FiscalEstablishment'];
  /**
   * Fiscal Establishment Data Area.
   */
  declare fiscalEstablishmentDataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Establishment.
   */
  declare fiscalEstablishment: DeserializedType<T, 'Edm.String'>;
  /**
   * Root Fiscal Establishment.
   * @nullable
   */
  declare rootFiscalEstablishment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Root Fiscal Establishment Data Area.
   * @nullable
   */
  declare rootFiscalEstablishmentDataArea?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: FiscalOrganizationFiscalEstablishmentsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalOrganizationFiscalEstablishmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fiscalEstablishmentDataArea: DeserializedType<T, 'Edm.String'>;
  fiscalEstablishment: DeserializedType<T, 'Edm.String'>;
  rootFiscalEstablishment?: DeserializedType<T, 'Edm.String'> | null;
  rootFiscalEstablishmentDataArea?: DeserializedType<T, 'Edm.String'> | null;
}
