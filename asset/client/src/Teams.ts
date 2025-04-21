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
import type { TeamsApi } from './TeamsApi';
import { NoYes } from './NoYes';
import { TeamMembers, TeamMembersType } from './TeamMembers';
import {
  TeamMembershipCriterions,
  TeamMembershipCriterionsType
} from './TeamMembershipCriterions';

/**
 * This class represents the entity "Teams" of service "d365_metadata".
 */
export class Teams<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TeamsType<T>
{
  /**
   * Technical entity name for Teams.
   */
  static override _entityName = 'Teams';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Teams entity.
   */
  static _keys = ['PartyNumber'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Team Type Name.
   * @nullable
   */
  declare teamTypeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Administrator.
   * @nullable
   */
  declare administrator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link TeamMembers} entity.
   */
  declare teamMembers: TeamMembers<T>[];
  /**
   * One-to-one navigation property to the {@link TeamMembershipCriterions} entity.
   */
  declare teamMembershipCriterion?: TeamMembershipCriterions<T> | null;

  constructor(_entityApi: TeamsApi<T>) {
    super(_entityApi);
  }
}

export interface TeamsType<T extends DeSerializers = DefaultDeSerializers> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: NoYes | null;
  teamTypeName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  administrator?: DeserializedType<T, 'Edm.String'> | null;
  teamMembers: TeamMembersType<T>[];
  teamMembershipCriterion?: TeamMembershipCriterionsType<T> | null;
}
