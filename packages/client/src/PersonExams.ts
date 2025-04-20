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
import type { PersonExamsApi } from './PersonExamsApi';
import { HcmCompletionStatus } from './HcmCompletionStatus';
import { TestTypes, TestTypesType } from './TestTypes';
import { People, PeopleType } from './People';

/**
 * This class represents the entity "PersonExams" of service "d365_metadata".
 */
export class PersonExams<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonExamsType<T>
{
  /**
   * Technical entity name for PersonExams.
   */
  static override _entityName = 'PersonExams';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonExams entity.
   */
  static _keys = ['PartyNumber', 'TestId', 'RequiredBy'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Test Id.
   */
  declare testId: DeserializedType<T, 'Edm.String'>;
  /**
   * Required By.
   */
  declare requiredBy: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Completed On.
   */
  declare completedOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Score.
   */
  declare score: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: HcmCompletionStatus | null;
  /**
   * One-to-one navigation property to the {@link TestTypes} entity.
   */
  declare testType?: TestTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;

  constructor(_entityApi: PersonExamsApi<T>) {
    super(_entityApi);
  }
}

export interface PersonExamsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  testId: DeserializedType<T, 'Edm.String'>;
  requiredBy: DeserializedType<T, 'Edm.DateTimeOffset'>;
  completedOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  score: DeserializedType<T, 'Edm.Int32'>;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  status?: HcmCompletionStatus | null;
  testType?: TestTypesType<T> | null;
  person?: PeopleType<T> | null;
}
