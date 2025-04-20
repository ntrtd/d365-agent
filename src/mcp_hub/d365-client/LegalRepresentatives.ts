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
import type { LegalRepresentativesApi } from './LegalRepresentativesApi';
import { LegalRepresentativeTypeBr } from './LegalRepresentativeTypeBr';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LegalRepresentatives" of service "d365_metadata".
 */
export class LegalRepresentatives<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LegalRepresentativesType<T>
{
  /**
   * Technical entity name for LegalRepresentatives.
   */
  static override _entityName = 'LegalRepresentatives';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LegalRepresentatives entity.
   */
  static _keys = [
    'CPF',
    'FiscalOrganizationRootFiscalEstablishment',
    'FiscalOrganizationRootFiscalEstablishmentDataArea',
    'Role'
  ];
  /**
   * Cpf.
   */
  declare cpf: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Organization Root Fiscal Establishment.
   */
  declare fiscalOrganizationRootFiscalEstablishment: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Fiscal Organization Root Fiscal Establishment Data Area.
   */
  declare fiscalOrganizationRootFiscalEstablishmentDataArea: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Role.
   * @nullable
   */
  declare role?: LegalRepresentativeTypeBr | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Crc.
   * @nullable
   */
  declare crc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validated In Rfb Authority.
   * @nullable
   */
  declare validatedInRfbAuthority?: NoYes | null;
  /**
   * Crc State.
   * @nullable
   */
  declare crcState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Crc Expiration Date.
   */
  declare crcExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: LegalRepresentativesApi<T>) {
    super(_entityApi);
  }
}

export interface LegalRepresentativesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  cpf: DeserializedType<T, 'Edm.String'>;
  fiscalOrganizationRootFiscalEstablishment: DeserializedType<T, 'Edm.String'>;
  fiscalOrganizationRootFiscalEstablishmentDataArea: DeserializedType<
    T,
    'Edm.String'
  >;
  role?: LegalRepresentativeTypeBr | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  crc?: DeserializedType<T, 'Edm.String'> | null;
  validatedInRfbAuthority?: NoYes | null;
  crcState?: DeserializedType<T, 'Edm.String'> | null;
  crcExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
