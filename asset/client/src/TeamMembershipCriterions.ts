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
import type { TeamMembershipCriterionsApi } from './TeamMembershipCriterionsApi';
import { NoYes } from './NoYes';
import { TeamsV2, TeamsV2Type } from './TeamsV2';
import { Teams, TeamsType } from './Teams';

/**
 * This class represents the entity "TeamMembershipCriterions" of service "d365_metadata".
 */
export class TeamMembershipCriterions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TeamMembershipCriterionsType<T>
{
  /**
   * Technical entity name for TeamMembershipCriterions.
   */
  static override _entityName = 'TeamMembershipCriterions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TeamMembershipCriterions entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Allow Vendor.
   * @nullable
   */
  declare allowVendor?: NoYes | null;
  /**
   * Allow Employee.
   * @nullable
   */
  declare allowEmployee?: NoYes | null;
  /**
   * Is System Criterion.
   * @nullable
   */
  declare isSystemCriterion?: NoYes | null;
  /**
   * Allow Contractor.
   * @nullable
   */
  declare allowContractor?: NoYes | null;
  /**
   * Allow Contact.
   * @nullable
   */
  declare allowContact?: NoYes | null;
  /**
   * Allow Customer.
   * @nullable
   */
  declare allowCustomer?: NoYes | null;
  /**
   * Requires Ax User.
   * @nullable
   */
  declare requiresAxUser?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link TeamsV2} entity.
   */
  declare teamV2: TeamsV2<T>[];
  /**
   * One-to-many navigation property to the {@link Teams} entity.
   */
  declare team: Teams<T>[];

  constructor(_entityApi: TeamMembershipCriterionsApi<T>) {
    super(_entityApi);
  }
}

export interface TeamMembershipCriterionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  allowVendor?: NoYes | null;
  allowEmployee?: NoYes | null;
  isSystemCriterion?: NoYes | null;
  allowContractor?: NoYes | null;
  allowContact?: NoYes | null;
  allowCustomer?: NoYes | null;
  requiresAxUser?: NoYes | null;
  teamV2: TeamsV2Type<T>[];
  team: TeamsType<T>[];
}
