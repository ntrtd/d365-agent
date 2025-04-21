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
import type { FiscalOrganizationRelatedScPsApi } from './FiscalOrganizationRelatedScPsApi';

/**
 * This class represents the entity "FiscalOrganizationRelatedSCPs" of service "d365_metadata".
 */
export class FiscalOrganizationRelatedScPs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalOrganizationRelatedScPsType<T>
{
  /**
   * Technical entity name for FiscalOrganizationRelatedScPs.
   */
  static override _entityName = 'FiscalOrganizationRelatedSCPs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalOrganizationRelatedScPs entity.
   */
  static _keys = [
    'RootFiscalEstablishmentDataArea',
    'RootFiscalEstablishment',
    'Code',
    'Name'
  ];
  /**
   * Root Fiscal Establishment Data Area.
   */
  declare rootFiscalEstablishmentDataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Root Fiscal Establishment.
   */
  declare rootFiscalEstablishment: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: FiscalOrganizationRelatedScPsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalOrganizationRelatedScPsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  rootFiscalEstablishmentDataArea: DeserializedType<T, 'Edm.String'>;
  rootFiscalEstablishment: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
}
