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
import type { ComponentectGroupAssignmentsApi } from './ComponentectGroupAssignmentsApi';

/**
 * This class represents the entity "ComponentectGroupAssignments" of service "d365_metadata".
 */
export class ComponentectGroupAssignments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ComponentectGroupAssignmentsType<T>
{
  /**
   * Technical entity name for ComponentectGroupAssignments.
   */
  static override _entityName = 'ComponentectGroupAssignments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ComponentectGroupAssignments entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjectContractID',
    'CustomerAccount',
    'EffectiveFrom',
    'ProjectID',
    'Category'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Contract Id.
   */
  declare projectContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account.
   */
  declare customerAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective From.
   */
  declare effectiveFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Personnel Number.
   * @nullable
   */
  declare resourcePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indirect Cost Component Group.
   * @nullable
   */
  declare indirectCostComponentGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rule Search Key.
   */
  declare ruleSearchKey: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: ComponentectGroupAssignmentsApi<T>) {
    super(_entityApi);
  }
}

export interface ComponentectGroupAssignmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  customerAccount: DeserializedType<T, 'Edm.String'>;
  effectiveFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  category: DeserializedType<T, 'Edm.String'>;
  resourcePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  indirectCostComponentGroup?: DeserializedType<T, 'Edm.String'> | null;
  ruleSearchKey: DeserializedType<T, 'Edm.Int64'>;
}
