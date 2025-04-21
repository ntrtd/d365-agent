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
import type { LegalRepresentativeContactsApi } from './LegalRepresentativeContactsApi';
import { LegalRepresentativeTypeBr } from './LegalRepresentativeTypeBr';
import { NoYes } from './NoYes';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';

/**
 * This class represents the entity "LegalRepresentativeContacts" of service "d365_metadata".
 */
export class LegalRepresentativeContacts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LegalRepresentativeContactsType<T>
{
  /**
   * Technical entity name for LegalRepresentativeContacts.
   */
  static override _entityName = 'LegalRepresentativeContacts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LegalRepresentativeContacts entity.
   */
  static _keys = [
    'FiscalOrganizationRootFiscalEstablishmentDataArea',
    'FiscalOrganizationRootFiscalEstablishment',
    'LegalRepresentativeCPF',
    'LegalRepresentativeRole',
    'ContactNumberOrAddress'
  ];
  /**
   * Fiscal Organization Root Fiscal Establishment Data Area.
   */
  declare fiscalOrganizationRootFiscalEstablishmentDataArea: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Fiscal Organization Root Fiscal Establishment.
   */
  declare fiscalOrganizationRootFiscalEstablishment: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Legal Representative Cpf.
   */
  declare legalRepresentativeCpf: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Representative Role.
   * @nullable
   */
  declare legalRepresentativeRole?: LegalRepresentativeTypeBr | null;
  /**
   * Contact Number Or Address.
   */
  declare contactNumberOrAddress: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Private.
   * @nullable
   */
  declare isPrivate?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary.
   * @nullable
   */
  declare isPrimary?: NoYes | null;
  /**
   * Extension.
   * @nullable
   */
  declare extension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: LogisticsElectronicAddressMethodType | null;
  /**
   * Is Mobile Phone.
   * @nullable
   */
  declare isMobilePhone?: NoYes | null;
  /**
   * Is Instant Message.
   * @nullable
   */
  declare isInstantMessage?: NoYes | null;
  /**
   * International Calling Code.
   * @nullable
   */
  declare internationalCallingCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LegalRepresentativeContactsApi<T>) {
    super(_entityApi);
  }
}

export interface LegalRepresentativeContactsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fiscalOrganizationRootFiscalEstablishmentDataArea: DeserializedType<
    T,
    'Edm.String'
  >;
  fiscalOrganizationRootFiscalEstablishment: DeserializedType<T, 'Edm.String'>;
  legalRepresentativeCpf: DeserializedType<T, 'Edm.String'>;
  legalRepresentativeRole?: LegalRepresentativeTypeBr | null;
  contactNumberOrAddress: DeserializedType<T, 'Edm.String'>;
  isPrivate?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isPrimary?: NoYes | null;
  extension?: DeserializedType<T, 'Edm.String'> | null;
  type?: LogisticsElectronicAddressMethodType | null;
  isMobilePhone?: NoYes | null;
  isInstantMessage?: NoYes | null;
  internationalCallingCode?: DeserializedType<T, 'Edm.String'> | null;
}
