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
import type { FiscalOrganizationAuditorsApi } from './FiscalOrganizationAuditorsApi';

/**
 * This class represents the entity "FiscalOrganizationAuditors" of service "d365_metadata".
 */
export class FiscalOrganizationAuditors<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalOrganizationAuditorsType<T>
{
  /**
   * Technical entity name for FiscalOrganizationAuditors.
   */
  static override _entityName = 'FiscalOrganizationAuditors';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalOrganizationAuditors entity.
   */
  static _keys = [
    'CVMNumber',
    'Name',
    'RootFiscalEstablishmentDataArea',
    'RootFiscalEstablishment'
  ];
  /**
   * Cvm Number.
   */
  declare cvmNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Root Fiscal Establishment Data Area.
   */
  declare rootFiscalEstablishmentDataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Root Fiscal Establishment.
   */
  declare rootFiscalEstablishment: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: FiscalOrganizationAuditorsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalOrganizationAuditorsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  cvmNumber: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  rootFiscalEstablishmentDataArea: DeserializedType<T, 'Edm.String'>;
  rootFiscalEstablishment: DeserializedType<T, 'Edm.String'>;
}
