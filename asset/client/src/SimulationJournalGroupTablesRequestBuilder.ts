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
import { SimulationJournalGroupTables } from './SimulationJournalGroupTables';

/**
 * Request builder class for operations supported on the {@link SimulationJournalGroupTables} entity.
 */
export class SimulationJournalGroupTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SimulationJournalGroupTables<T>, T> {
  /**
   * Returns a request builder for querying all `SimulationJournalGroupTables` entities.
   * @returns A request builder for creating requests to retrieve all `SimulationJournalGroupTables` entities.
   */
  getAll(): GetAllRequestBuilder<SimulationJournalGroupTables<T>, T> {
    return new GetAllRequestBuilder<SimulationJournalGroupTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SimulationJournalGroupTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SimulationJournalGroupTables`.
   */
  create(
    entity: SimulationJournalGroupTables<T>
  ): CreateRequestBuilder<SimulationJournalGroupTables<T>, T> {
    return new CreateRequestBuilder<SimulationJournalGroupTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SimulationJournalGroupTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link SimulationJournalGroupTables.dataAreaId}.
   * @param groupId Key property. See {@link SimulationJournalGroupTables.groupId}.
   * @returns A request builder for creating requests to retrieve one `SimulationJournalGroupTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SimulationJournalGroupTables<T>, T> {
    return new GetByKeyRequestBuilder<SimulationJournalGroupTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SimulationJournalGroupTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SimulationJournalGroupTables`.
   */
  update(
    entity: SimulationJournalGroupTables<T>
  ): UpdateRequestBuilder<SimulationJournalGroupTables<T>, T> {
    return new UpdateRequestBuilder<SimulationJournalGroupTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SimulationJournalGroupTables`.
   * @param dataAreaId Key property. See {@link SimulationJournalGroupTables.dataAreaId}.
   * @param groupId Key property. See {@link SimulationJournalGroupTables.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `SimulationJournalGroupTables`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<SimulationJournalGroupTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SimulationJournalGroupTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SimulationJournalGroupTables` by taking the entity as a parameter.
   */
  delete(
    entity: SimulationJournalGroupTables<T>
  ): DeleteRequestBuilder<SimulationJournalGroupTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<SimulationJournalGroupTables<T>, T> {
    return new DeleteRequestBuilder<SimulationJournalGroupTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SimulationJournalGroupTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
