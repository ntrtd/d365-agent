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
import type { PersonIdentificationNumbersApi } from './PersonIdentificationNumbersApi';
import { NoYes } from './NoYes';
import {
  PayrollEmployeesV2,
  PayrollEmployeesV2Type
} from './PayrollEmployeesV2';
import { People, PeopleType } from './People';
import {
  IdentificationTypes,
  IdentificationTypesType
} from './IdentificationTypes';
import { IssuingAgencies, IssuingAgenciesType } from './IssuingAgencies';
import { PayrollEmployees, PayrollEmployeesType } from './PayrollEmployees';

/**
 * This class represents the entity "PersonIdentificationNumbers" of service "d365_metadata".
 */
export class PersonIdentificationNumbers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PersonIdentificationNumbersType<T>
{
  /**
   * Technical entity name for PersonIdentificationNumbers.
   */
  static override _entityName = 'PersonIdentificationNumbers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonIdentificationNumbers entity.
   */
  static _keys = [
    'PartyNumber',
    'IdentificationTypeId',
    'IdentificationNumber'
  ];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Identification Type Id.
   */
  declare identificationTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Identification Number.
   */
  declare identificationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Issued Date.
   */
  declare issuedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Issuing Agency Id.
   * @nullable
   */
  declare issuingAgencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entry Type.
   * @nullable
   */
  declare entryType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PayrollEmployeesV2} entity.
   */
  declare payrollEmployeeV2: PayrollEmployeesV2<T>[];
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link IdentificationTypes} entity.
   */
  declare identificationType?: IdentificationTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link IssuingAgencies} entity.
   */
  declare issuingAgency?: IssuingAgencies<T> | null;
  /**
   * One-to-many navigation property to the {@link PayrollEmployees} entity.
   */
  declare payrollEmployee: PayrollEmployees<T>[];

  constructor(_entityApi: PersonIdentificationNumbersApi<T>) {
    super(_entityApi);
  }
}

export interface PersonIdentificationNumbersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  identificationTypeId: DeserializedType<T, 'Edm.String'>;
  identificationNumber: DeserializedType<T, 'Edm.String'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isPrimary?: NoYes | null;
  issuedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  issuingAgencyId?: DeserializedType<T, 'Edm.String'> | null;
  entryType?: DeserializedType<T, 'Edm.String'> | null;
  payrollEmployeeV2: PayrollEmployeesV2Type<T>[];
  person?: PeopleType<T> | null;
  identificationType?: IdentificationTypesType<T> | null;
  issuingAgency?: IssuingAgenciesType<T> | null;
  payrollEmployee: PayrollEmployeesType<T>[];
}
