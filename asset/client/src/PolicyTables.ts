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
import type { PolicyTablesApi } from './PolicyTablesApi';
import { WhsGs1PolicyAction } from './WhsGs1PolicyAction';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PolicyTables" of service "d365_metadata".
 */
export class PolicyTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PolicyTablesType<T>
{
  /**
   * Technical entity name for PolicyTables.
   */
  static override _entityName = 'PolicyTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PolicyTables entity.
   */
  static _keys = ['dataAreaId', 'PolicyName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Name.
   */
  declare policyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Action.
   * @nullable
   */
  declare action?: WhsGs1PolicyAction | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Auto Submit Step.
   * @nullable
   */
  declare autoSubmitStep?: NoYes | null;

  constructor(_entityApi: PolicyTablesApi<T>) {
    super(_entityApi);
  }
}

export interface PolicyTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  policyName: DeserializedType<T, 'Edm.String'>;
  action?: WhsGs1PolicyAction | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  autoSubmitStep?: NoYes | null;
}
