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
import type { PeriodCloseTemplateTasksApi } from './PeriodCloseTemplateTasksApi';
import { LedgerPeriodCloseTaskAction } from './LedgerPeriodCloseTaskAction';

/**
 * This class represents the entity "PeriodCloseTemplateTasks" of service "d365_metadata".
 */
export class PeriodCloseTemplateTasks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PeriodCloseTemplateTasksType<T>
{
  /**
   * Technical entity name for PeriodCloseTemplateTasks.
   */
  static override _entityName = 'PeriodCloseTemplateTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PeriodCloseTemplateTasks entity.
   */
  static _keys = ['Template', 'LineNumber'];
  /**
   * Template.
   */
  declare template: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Target Days From Project Complete.
   */
  declare targetDaysFromProjectComplete: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Closing Role.
   * @nullable
   */
  declare closingRole?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Link Type.
   * @nullable
   */
  declare taskLinkType?: LedgerPeriodCloseTaskAction | null;
  /**
   * Task Link.
   * @nullable
   */
  declare taskLink?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Time.
   */
  declare dueTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Task.
   * @nullable
   */
  declare task?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Area.
   * @nullable
   */
  declare area?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Selection.
   * @nullable
   */
  declare companySelection?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PeriodCloseTemplateTasksApi<T>) {
    super(_entityApi);
  }
}

export interface PeriodCloseTemplateTasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  template: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  targetDaysFromProjectComplete: DeserializedType<T, 'Edm.Int32'>;
  closingRole?: DeserializedType<T, 'Edm.String'> | null;
  taskLinkType?: LedgerPeriodCloseTaskAction | null;
  taskLink?: DeserializedType<T, 'Edm.String'> | null;
  dueTime: DeserializedType<T, 'Edm.Int32'>;
  task?: DeserializedType<T, 'Edm.String'> | null;
  area?: DeserializedType<T, 'Edm.String'> | null;
  companySelection?: DeserializedType<T, 'Edm.String'> | null;
}
