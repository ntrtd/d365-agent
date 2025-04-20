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
import type { PersonalContactOrganizationApi } from './PersonalContactOrganizationApi';
import { NoYes } from './NoYes';
import { RelationshipTypes, RelationshipTypesType } from './RelationshipTypes';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "PersonalContactOrganization" of service "d365_metadata".
 */
export class PersonalContactOrganization<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PersonalContactOrganizationType<T>
{
  /**
   * Technical entity name for PersonalContactOrganization.
   */
  static override _entityName = 'PersonalContactOrganization';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonalContactOrganization entity.
   */
  static _keys = ['WorkerPersonnelNumber', 'ContactOrganizationPartyNumber'];
  /**
   * Worker Personnel Number.
   */
  declare workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Contact Organization Party Number.
   */
  declare contactOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Organization Name.
   * @nullable
   */
  declare organizationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relationship Type.
   * @nullable
   */
  declare relationshipType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Beneficiary.
   * @nullable
   */
  declare isBeneficiary?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link RelationshipTypes} entity.
   */
  declare personalContactOrganizationRelationshipType?: RelationshipTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare personalContactOrganizationWorker?: Workers<T> | null;

  constructor(_entityApi: PersonalContactOrganizationApi<T>) {
    super(_entityApi);
  }
}

export interface PersonalContactOrganizationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  contactOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  organizationName?: DeserializedType<T, 'Edm.String'> | null;
  relationshipType?: DeserializedType<T, 'Edm.String'> | null;
  isBeneficiary?: NoYes | null;
  personalContactOrganizationRelationshipType?: RelationshipTypesType<T> | null;
  personalContactOrganizationWorker?: WorkersType<T> | null;
}
