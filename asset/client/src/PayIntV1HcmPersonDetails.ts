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
import type { PayIntV1HcmPersonDetailsApi } from './PayIntV1HcmPersonDetailsApi';
import { NoYes } from './NoYes';
import { HcmPersonMaritalStatus } from './HcmPersonMaritalStatus';
import { People, PeopleType } from './People';
import { VeteranStatuses, VeteranStatusesType } from './VeteranStatuses';

/**
 * This class represents the entity "PayIntV1HcmPersonDetails" of service "d365_metadata".
 */
export class PayIntV1HcmPersonDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1HcmPersonDetailsType<T>
{
  /**
   * Technical entity name for PayIntV1HcmPersonDetails.
   */
  static override _entityName = 'PayIntV1HcmPersonDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1HcmPersonDetails entity.
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
   * Benefit Marital Status Date.
   */
  declare benefitMaritalStatusDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link VeteranStatuses} entity.
   */
  declare veteranStatus?: VeteranStatuses<T> | null;

  constructor(_entityApi: PayIntV1HcmPersonDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1HcmPersonDetailsType<
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
  benefitMaritalStatusDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expatriateRulingValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  militaryServiceStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expatriateRulingValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  veteranStatusId?: DeserializedType<T, 'Edm.String'> | null;
  person?: PeopleType<T> | null;
  veteranStatus?: VeteranStatusesType<T> | null;
}
