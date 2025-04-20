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
import type { RelationshipTypesApi } from './RelationshipTypesApi';
import { DirPartyType } from './DirPartyType';
import { DirSystemRelationshipType } from './DirSystemRelationshipType';
import { NoYes } from './NoYes';
import { TeamMembers, TeamMembersType } from './TeamMembers';
import {
  PersonalContactPeople,
  PersonalContactPeopleType
} from './PersonalContactPeople';
import {
  PartyRelationships,
  PartyRelationshipsType
} from './PartyRelationships';
import {
  BenefitPersonalContactPeople,
  BenefitPersonalContactPeopleType
} from './BenefitPersonalContactPeople';
import {
  PersonalContactOrganization,
  PersonalContactOrganizationType
} from './PersonalContactOrganization';

/**
 * This class represents the entity "RelationshipTypes" of service "d365_metadata".
 */
export class RelationshipTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RelationshipTypesType<T>
{
  /**
   * Technical entity name for RelationshipTypes.
   */
  static override _entityName = 'RelationshipTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RelationshipTypes entity.
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Party A Type.
   * @nullable
   */
  declare partyAType?: DirPartyType | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relationship B To A.
   * @nullable
   */
  declare relationshipBToA?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party B Type.
   * @nullable
   */
  declare partyBType?: DirPartyType | null;
  /**
   * Relationship A To B.
   * @nullable
   */
  declare relationshipAToB?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Type.
   * @nullable
   */
  declare systemType?: DirSystemRelationshipType | null;
  /**
   * Symmetric.
   * @nullable
   */
  declare symmetric?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link TeamMembers} entity.
   */
  declare teamMember: TeamMembers<T>[];
  /**
   * One-to-many navigation property to the {@link PersonalContactPeople} entity.
   */
  declare personalContactPersonWorkerRelationshipType: PersonalContactPeople<T>[];
  /**
   * One-to-many navigation property to the {@link PartyRelationships} entity.
   */
  declare partyRelationships: PartyRelationships<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitPersonalContactPeople} entity.
   */
  declare benefitPersonalContactPersonWorkerRelationshipType: BenefitPersonalContactPeople<T>[];
  /**
   * One-to-many navigation property to the {@link PersonalContactOrganization} entity.
   */
  declare personalContactOrganizationWorkerRelationshipType1: PersonalContactOrganization<T>[];

  constructor(_entityApi: RelationshipTypesApi<T>) {
    super(_entityApi);
  }
}

export interface RelationshipTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  partyAType?: DirPartyType | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  relationshipBToA?: DeserializedType<T, 'Edm.String'> | null;
  partyBType?: DirPartyType | null;
  relationshipAToB?: DeserializedType<T, 'Edm.String'> | null;
  systemType?: DirSystemRelationshipType | null;
  symmetric?: NoYes | null;
  teamMember: TeamMembersType<T>[];
  personalContactPersonWorkerRelationshipType: PersonalContactPeopleType<T>[];
  partyRelationships: PartyRelationshipsType<T>[];
  benefitPersonalContactPersonWorkerRelationshipType: BenefitPersonalContactPeopleType<T>[];
  personalContactOrganizationWorkerRelationshipType1: PersonalContactOrganizationType<T>[];
}
