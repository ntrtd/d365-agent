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
import type { TeamMembersV2Api } from './TeamMembersV2Api';
import { NoYes } from './NoYes';
import { People, PeopleType } from './People';
import { TeamsV2, TeamsV2Type } from './TeamsV2';

/**
 * This class represents the entity "TeamMembersV2" of service "d365_metadata".
 */
export class TeamMembersV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TeamMembersV2Type<T>
{
  /**
   * Technical entity name for TeamMembersV2.
   */
  static override _entityName = 'TeamMembersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TeamMembersV2 entity.
   */
  static _keys = ['TeamMemberPartyNumber', 'TeamName', 'ValidFrom'];
  /**
   * Team Member Party Number.
   */
  declare teamMemberPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Team Name.
   */
  declare teamName: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Team Lead.
   * @nullable
   */
  declare isTeamLead?: NoYes | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * One-to-one navigation property to the {@link TeamsV2} entity.
   */
  declare team?: TeamsV2<T> | null;

  constructor(_entityApi: TeamMembersV2Api<T>) {
    super(_entityApi);
  }
}

export interface TeamMembersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  teamMemberPartyNumber: DeserializedType<T, 'Edm.String'>;
  teamName: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isTeamLead?: NoYes | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  teamMemberName?: DeserializedType<T, 'Edm.String'> | null;
  teams?: PeopleType<T> | null;
  team?: TeamsV2Type<T> | null;
}
