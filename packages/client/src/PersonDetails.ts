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
import type { PersonDetailsApi } from './PersonDetailsApi';
import { NoYes } from './NoYes';
import { HcmPersonMaritalStatus } from './HcmPersonMaritalStatus';
import { People, PeopleType } from './People';
import { VeteranStatuses, VeteranStatusesType } from './VeteranStatuses';

/**
 * This class represents the entity "PersonDetails" of service "d365_metadata".
 */
export class PersonDetails<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonDetailsType<T>
{
  /**
   * Technical entity name for PersonDetails.
   */
  static override _entityName = 'PersonDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonDetails entity.
   */
  static _keys = ['PartyNumber', 'ValidFrom', 'ValidTo'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Military Service End Date.
   */
  declare militaryServiceEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Number Of Dependents.
   */
  declare numberOfDependents: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Expatriate Ruling Applicable.
   * @nullable
   */
  declare isExpatriateRulingApplicable?: NoYes | null;
  /**
   * Is Disabled Veteran.
   * @nullable
   */
  declare isDisabledVeteran?: NoYes | null;
  /**
   * Marital Status.
   * @nullable
   */
  declare maritalStatus?: HcmPersonMaritalStatus | null;
  /**
   * Expatriate Ruling Valid To.
   */
  declare expatriateRulingValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Military Service Start Date.
   */
  declare militaryServiceStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expatriate Ruling Valid From.
   */
  declare expatriateRulingValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Veteran Status Id.
   * @nullable
   */
  declare veteranStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Benefit Marital Status Date.
   */
  declare benefitMaritalStatusDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link VeteranStatuses} entity.
   */
  declare veteranStatus?: VeteranStatuses<T> | null;

  constructor(_entityApi: PersonDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface PersonDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  militaryServiceEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  numberOfDependents: DeserializedType<T, 'Edm.Int32'>;
  isExpatriateRulingApplicable?: NoYes | null;
  isDisabledVeteran?: NoYes | null;
  maritalStatus?: HcmPersonMaritalStatus | null;
  expatriateRulingValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  militaryServiceStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expatriateRulingValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  veteranStatusId?: DeserializedType<T, 'Edm.String'> | null;
  benefitMaritalStatusDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  person?: PeopleType<T> | null;
  veteranStatus?: VeteranStatusesType<T> | null;
}
