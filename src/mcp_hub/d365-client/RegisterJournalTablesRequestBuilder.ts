/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { RegisterJournalTables } from './RegisterJournalTables';
import { RTax25PeriodType } from './RTax25PeriodType';
import { RTax25RegisterJournalType } from './RTax25RegisterJournalType';

/**
 * Request builder class for operations supported on the {@link RegisterJournalTables} entity.
 */
export class RegisterJournalTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RegisterJournalTables<T>, T> {
  /**
   * Returns a request builder for querying all `RegisterJournalTables` entities.
   * @returns A request builder for creating requests to retrieve all `RegisterJournalTables` entities.
   */
  getAll(): GetAllRequestBuilder<RegisterJournalTables<T>, T> {
    return new GetAllRequestBuilder<RegisterJournalTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RegisterJournalTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RegisterJournalTables`.
   */
  create(
    entity: RegisterJournalTables<T>
  ): CreateRequestBuilder<RegisterJournalTables<T>, T> {
    return new CreateRequestBuilder<RegisterJournalTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RegisterJournalTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link RegisterJournalTables.dataAreaId}.
   * @param journalNumber Key property. See {@link RegisterJournalTables.journalNumber}.
   * @param periodNumber Key property. See {@link RegisterJournalTables.periodNumber}.
   * @param periodTypes Key property. See {@link RegisterJournalTables.periodTypes}.
   * @param years Key property. See {@link RegisterJournalTables.years}.
   * @param journalType Key property. See {@link RegisterJournalTables.journalType}.
   * @returns A request builder for creating requests to retrieve one `RegisterJournalTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>,
    periodNumber: DeserializedType<T, 'Edm.Int32'>,
    periodTypes: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RTax25PeriodType'
    >,
    years: DeserializedType<T, 'Edm.Int32'>,
    journalType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RTax25RegisterJournalType'
    >
  ): GetByKeyRequestBuilder<RegisterJournalTables<T>, T> {
    return new GetByKeyRequestBuilder<RegisterJournalTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber,
        PeriodNumber: periodNumber,
        PeriodTypes: periodTypes,
        Years: years,
        JournalType: journalType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RegisterJournalTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RegisterJournalTables`.
   */
  update(
    entity: RegisterJournalTables<T>
  ): UpdateRequestBuilder<RegisterJournalTables<T>, T> {
    return new UpdateRequestBuilder<RegisterJournalTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RegisterJournalTables`.
   * @param dataAreaId Key property. See {@link RegisterJournalTables.dataAreaId}.
   * @param journalNumber Key property. See {@link RegisterJournalTables.journalNumber}.
   * @param periodNumber Key property. See {@link RegisterJournalTables.periodNumber}.
   * @param periodTypes Key property. See {@link RegisterJournalTables.periodTypes}.
   * @param years Key property. See {@link RegisterJournalTables.years}.
   * @param journalType Key property. See {@link RegisterJournalTables.journalType}.
   * @returns A request builder for creating requests that delete an entity of type `RegisterJournalTables`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string,
    periodNumber: number,
    periodTypes: RTax25PeriodType,
    years: number,
    journalType: RTax25RegisterJournalType
  ): DeleteRequestBuilder<RegisterJournalTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RegisterJournalTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RegisterJournalTables` by taking the entity as a parameter.
   */
  delete(
    entity: RegisterJournalTables<T>
  ): DeleteRequestBuilder<RegisterJournalTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string,
    periodNumber?: number,
    periodTypes?: RTax25PeriodType,
    years?: number,
    journalType?: RTax25RegisterJournalType
  ): DeleteRequestBuilder<RegisterJournalTables<T>, T> {
    return new DeleteRequestBuilder<RegisterJournalTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RegisterJournalTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!,
            PeriodNumber: periodNumber!,
            PeriodTypes: periodTypes!,
            Years: years!,
            JournalType: journalType!
          }
    );
  }
}
