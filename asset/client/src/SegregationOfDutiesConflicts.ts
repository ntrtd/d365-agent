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
import type { SegregationOfDutiesConflictsApi } from './SegregationOfDutiesConflictsApi';
import { RoleAssignmentMode } from './RoleAssignmentMode';
import { SegregationOfDutiesResolution } from './SegregationOfDutiesResolution';

/**
 * This class represents the entity "SegregationOfDutiesConflicts" of service "d365_metadata".
 */
export class SegregationOfDutiesConflicts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SegregationOfDutiesConflictsType<T>
{
  /**
   * Technical entity name for SegregationOfDutiesConflicts.
   */
  static override _entityName = 'SegregationOfDutiesConflicts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SegregationOfDutiesConflicts entity.
   */
  static _keys = [
    'SegregationOfDutiesRuleValidFrom',
    'SegregationOfDutiesRuleValidTo',
    'SegregationOfDutiesRuleName',
    'User',
    'ExistingRoleIdentifier',
    'ExistingDutyIdentifier',
    'NewRoleIdentifier',
    'NewDutyIdentifier'
  ];
  /**
   * Segregation Of Duties Rule Valid From.
   */
  declare segregationOfDutiesRuleValidFrom: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Segregation Of Duties Rule Valid To.
   */
  declare segregationOfDutiesRuleValidTo: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Segregation Of Duties Rule Name.
   */
  declare segregationOfDutiesRuleName: DeserializedType<T, 'Edm.String'>;
  /**
   * User.
   */
  declare user: DeserializedType<T, 'Edm.String'>;
  /**
   * Existing Role Identifier.
   */
  declare existingRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Existing Duty Identifier.
   */
  declare existingDutyIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * New Role Identifier.
   */
  declare newRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * New Duty Identifier.
   */
  declare newDutyIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Existing Duty Name.
   * @nullable
   */
  declare existingDutyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Duty Name.
   * @nullable
   */
  declare newDutyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Role Name.
   * @nullable
   */
  declare newRoleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason For Override.
   * @nullable
   */
  declare reasonForOverride?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assignment Mode.
   * @nullable
   */
  declare assignmentMode?: RoleAssignmentMode | null;
  /**
   * Existing Role Name.
   * @nullable
   */
  declare existingRoleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resolution.
   * @nullable
   */
  declare resolution?: SegregationOfDutiesResolution | null;

  constructor(_entityApi: SegregationOfDutiesConflictsApi<T>) {
    super(_entityApi);
  }
}

export interface SegregationOfDutiesConflictsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  segregationOfDutiesRuleValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  segregationOfDutiesRuleValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  segregationOfDutiesRuleName: DeserializedType<T, 'Edm.String'>;
  user: DeserializedType<T, 'Edm.String'>;
  existingRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  existingDutyIdentifier: DeserializedType<T, 'Edm.String'>;
  newRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  newDutyIdentifier: DeserializedType<T, 'Edm.String'>;
  existingDutyName?: DeserializedType<T, 'Edm.String'> | null;
  newDutyName?: DeserializedType<T, 'Edm.String'> | null;
  newRoleName?: DeserializedType<T, 'Edm.String'> | null;
  reasonForOverride?: DeserializedType<T, 'Edm.String'> | null;
  assignmentMode?: RoleAssignmentMode | null;
  existingRoleName?: DeserializedType<T, 'Edm.String'> | null;
  resolution?: SegregationOfDutiesResolution | null;
}
