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
import type { TestTypesApi } from './TestTypesApi';
import { HcmFrequencyGenerateFrom } from './HcmFrequencyGenerateFrom';
import { HcmFrequencyUnit } from './HcmFrequencyUnit';
import { PersonExams, PersonExamsType } from './PersonExams';
import { JobPreferredExams, JobPreferredExamsType } from './JobPreferredExams';
import { JobTemplateExams, JobTemplateExamsType } from './JobTemplateExams';
import { WorkerExams, WorkerExamsType } from './WorkerExams';

/**
 * This class represents the entity "TestTypes" of service "d365_metadata".
 */
export class TestTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TestTypesType<T>
{
  /**
   * Technical entity name for TestTypes.
   */
  static override _entityName = 'TestTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TestTypes entity.
   */
  static _keys = ['TestId'];
  /**
   * Test Id.
   */
  declare testId: DeserializedType<T, 'Edm.String'>;
  /**
   * Generate From.
   * @nullable
   */
  declare generateFrom?: HcmFrequencyGenerateFrom | null;
  /**
   * Interval.
   */
  declare interval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Passing Score.
   */
  declare passingScore: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Frequency.
   * @nullable
   */
  declare frequency?: HcmFrequencyUnit | null;
  /**
   * One-to-many navigation property to the {@link PersonExams} entity.
   */
  declare personExam: PersonExams<T>[];
  /**
   * One-to-many navigation property to the {@link JobPreferredExams} entity.
   */
  declare jobPreferredExam: JobPreferredExams<T>[];
  /**
   * One-to-many navigation property to the {@link JobTemplateExams} entity.
   */
  declare jobTemplateExam: JobTemplateExams<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerExams} entity.
   */
  declare workerExam: WorkerExams<T>[];

  constructor(_entityApi: TestTypesApi<T>) {
    super(_entityApi);
  }
}

export interface TestTypesType<T extends DeSerializers = DefaultDeSerializers> {
  testId: DeserializedType<T, 'Edm.String'>;
  generateFrom?: HcmFrequencyGenerateFrom | null;
  interval: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  passingScore: DeserializedType<T, 'Edm.Int32'>;
  frequency?: HcmFrequencyUnit | null;
  personExam: PersonExamsType<T>[];
  jobPreferredExam: JobPreferredExamsType<T>[];
  jobTemplateExam: JobTemplateExamsType<T>[];
  workerExam: WorkerExamsType<T>[];
}
