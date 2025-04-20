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
import type { TeamsV2Api } from './TeamsV2Api';
import { NoYes } from './NoYes';
import { TeamMembersV2, TeamMembersV2Type } from './TeamMembersV2';
import {
  TeamMembershipCriterions,
  TeamMembershipCriterionsType
} from './TeamMembershipCriterions';
import {
  ReleasedProductReadinessChecks,
  ReleasedProductReadinessChecksType
} from './ReleasedProductReadinessChecks';
import {
  ProductReadinessPolicyChecks,
  ProductReadinessPolicyChecksType
} from './ProductReadinessPolicyChecks';

/**
 * This class represents the entity "TeamsV2" of service "d365_metadata".
 */
export class TeamsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TeamsV2Type<T>
{
  /**
   * Technical entity name for TeamsV2.
   */
  static override _entityName = 'TeamsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TeamsV2 entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
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
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-many navigation property to the {@link TeamMembersV2} entity.
   */
  declare teamMembers: TeamMembersV2<T>[];
  /**
   * One-to-one navigation property to the {@link TeamMembershipCriterions} entity.
   */
  declare teamMembershipCriterion?: TeamMembershipCriterions<T> | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductReadinessChecks} entity.
   */
  declare releasedProductReadinessChecks: ReleasedProductReadinessChecks<T>[];
  /**
   * One-to-many navigation property to the {@link ProductReadinessPolicyChecks} entity.
   */
  declare productReadinessPolicyChecks: ProductReadinessPolicyChecks<T>[];

  constructor(_entityApi: TeamsV2Api<T>) {
    super(_entityApi);
  }
}

export interface TeamsV2Type<T extends DeSerializers = DefaultDeSerializers> {
  name: DeserializedType<T, 'Edm.String'>;
  isActive?: NoYes | null;
  teamTypeName?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  administrator?: DeserializedType<T, 'Edm.String'> | null;
  teamMembers: TeamMembersV2Type<T>[];
  teamMembershipCriterion?: TeamMembershipCriterionsType<T> | null;
  releasedProductReadinessChecks: ReleasedProductReadinessChecksType<T>[];
  productReadinessPolicyChecks: ProductReadinessPolicyChecksType<T>[];
}
