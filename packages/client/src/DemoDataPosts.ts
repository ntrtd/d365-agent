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
import type { DemoDataPostsApi } from './DemoDataPostsApi';
import { DemoDataPostDocument } from './DemoDataPostDocument';
import { DemoDataPostRunStatus } from './DemoDataPostRunStatus';
import { DemoDataPostDocumentTarget } from './DemoDataPostDocumentTarget';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "DemoDataPosts" of service "d365_metadata".
 */
export class DemoDataPosts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DemoDataPostsType<T>
{
  /**
   * Technical entity name for DemoDataPosts.
   */
  static override _entityName = 'DemoDataPosts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DemoDataPosts entity.
   */
  static _keys = ['dataAreaId', 'DemoDataJob', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Demo Data Job.
   */
  declare demoDataJob: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Document.
   * @nullable
   */
  declare document?: DemoDataPostDocument | null;
  /**
   * Demo Data Job Status.
   * @nullable
   */
  declare demoDataJobStatus?: DemoDataPostRunStatus | null;
  /**
   * To Document.
   * @nullable
   */
  declare toDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * From Document.
   * @nullable
   */
  declare fromDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Data Project Id.
   * @nullable
   */
  declare dataProjectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Target.
   * @nullable
   */
  declare documentTarget?: DemoDataPostDocumentTarget | null;
  /**
   * Process On Import.
   * @nullable
   */
  declare processOnImport?: NoYes | null;

  constructor(_entityApi: DemoDataPostsApi<T>) {
    super(_entityApi);
  }
}

export interface DemoDataPostsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  demoDataJob: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  document?: DemoDataPostDocument | null;
  demoDataJobStatus?: DemoDataPostRunStatus | null;
  toDocument?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fromDocument?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dataProjectId?: DeserializedType<T, 'Edm.String'> | null;
  documentTarget?: DemoDataPostDocumentTarget | null;
  processOnImport?: NoYes | null;
}
