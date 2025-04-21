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
import type { ProjectIntercompanyParameterEntitiesApi } from './ProjectIntercompanyParameterEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ProjectIntercompanyParameterEntities" of service "d365_metadata".
 */
export class ProjectIntercompanyParameterEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectIntercompanyParameterEntitiesType<T>
{
  /**
   * Technical entity name for ProjectIntercompanyParameterEntities.
   */
  static override _entityName = 'ProjectIntercompanyParameterEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectIntercompanyParameterEntities entity.
   */
  static _keys = ['dataAreaId', 'BorrowingLegalEntity'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Borrowing Legal Entity.
   */
  declare borrowingLegalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Timesheet Category.
   * @nullable
   */
  declare defaultTimesheetCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Expense Category.
   * @nullable
   */
  declare defaultExpenseCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accrue Revenue.
   * @nullable
   */
  declare accrueRevenue?: NoYes | null;

  constructor(_entityApi: ProjectIntercompanyParameterEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectIntercompanyParameterEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  borrowingLegalEntity: DeserializedType<T, 'Edm.String'>;
  defaultTimesheetCategory?: DeserializedType<T, 'Edm.String'> | null;
  defaultExpenseCategory?: DeserializedType<T, 'Edm.String'> | null;
  accrueRevenue?: NoYes | null;
}
