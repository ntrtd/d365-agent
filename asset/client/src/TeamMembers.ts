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
import type { TeamMembersApi } from './TeamMembersApi';
import { People, PeopleType } from './People';
import { RelationshipTypes, RelationshipTypesType } from './RelationshipTypes';
import { Teams, TeamsType } from './Teams';

/**
 * This class represents the entity "TeamMembers" of service "d365_metadata".
 */
export class TeamMembers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TeamMembersType<T>
{
  /**
   * Technical entity name for TeamMembers.
   */
  static override _entityName = 'TeamMembers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TeamMembers entity.
   */
  static _keys = [
    'RelationshipTypeId',
    'TeamMemberPartyNumber',
    'TeamPartyNumber',
    'ValidTo',
    'ValidFrom'
  ];
  /**
   * Relationship Type Id.
   */
  declare relationshipTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Team Member Party Number.
   */
  declare teamMemberPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Team Party Number.
   */
  declare teamPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Team Name.
   * @nullable
   */
  declare teamName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Team Member Name.
   * @nullable
   */
  declare teamMemberName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare teams?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link RelationshipTypes} entity.
   */
  declare relationshipType?: RelationshipTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Teams} entity.
   */
  declare team?: Teams<T> | null;

  constructor(_entityApi: TeamMembersApi<T>) {
    super(_entityApi);
  }
}

export interface TeamMembersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  relationshipTypeId: DeserializedType<T, 'Edm.String'>;
  teamMemberPartyNumber: DeserializedType<T, 'Edm.String'>;
  teamPartyNumber: DeserializedType<T, 'Edm.String'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  teamName?: DeserializedType<T, 'Edm.String'> | null;
  teamMemberName?: DeserializedType<T, 'Edm.String'> | null;
  teams?: PeopleType<T> | null;
  relationshipType?: RelationshipTypesType<T> | null;
  team?: TeamsType<T> | null;
}
