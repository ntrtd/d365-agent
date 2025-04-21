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
import type { ProjectControlsApi } from './ProjectControlsApi';
import { AmountUnit } from './AmountUnit';
import { ProjAutoManual } from './ProjAutoManual';

/**
 * This class represents the entity "ProjectControls" of service "d365_metadata".
 */
export class ProjectControls<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectControlsType<T>
{
  /**
   * Technical entity name for ProjectControls.
   */
  static override _entityName = 'ProjectControls';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectControls entity.
   */
  static _keys = ['dataAreaId', 'CostTemplateId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Template Id.
   */
  declare costTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense Cost Line Id.
   * @nullable
   */
  declare expenseCostLineId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Completion Based On.
   * @nullable
   */
  declare completionBasedOn?: AmountUnit | null;
  /**
   * Completion Method.
   * @nullable
   */
  declare completionMethod?: ProjAutoManual | null;
  /**
   * Hour Cost Line Id.
   * @nullable
   */
  declare hourCostLineId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Cost Line Id.
   * @nullable
   */
  declare itemCostLineId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjectControlsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectControlsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  costTemplateId: DeserializedType<T, 'Edm.String'>;
  expenseCostLineId?: DeserializedType<T, 'Edm.String'> | null;
  completionBasedOn?: AmountUnit | null;
  completionMethod?: ProjAutoManual | null;
  hourCostLineId?: DeserializedType<T, 'Edm.String'> | null;
  itemCostLineId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
