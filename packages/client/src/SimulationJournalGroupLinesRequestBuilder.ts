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
import { SimulationJournalGroupLines } from './SimulationJournalGroupLines';

/**
 * Request builder class for operations supported on the {@link SimulationJournalGroupLines} entity.
 */
export class SimulationJournalGroupLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SimulationJournalGroupLines<T>, T> {
  /**
   * Returns a request builder for querying all `SimulationJournalGroupLines` entities.
   * @returns A request builder for creating requests to retrieve all `SimulationJournalGroupLines` entities.
   */
  getAll(): GetAllRequestBuilder<SimulationJournalGroupLines<T>, T> {
    return new GetAllRequestBuilder<SimulationJournalGroupLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SimulationJournalGroupLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SimulationJournalGroupLines`.
   */
  create(
    entity: SimulationJournalGroupLines<T>
  ): CreateRequestBuilder<SimulationJournalGroupLines<T>, T> {
    return new CreateRequestBuilder<SimulationJournalGroupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SimulationJournalGroupLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SimulationJournalGroupLines.dataAreaId}.
   * @param simulationJournalGroupId Key property. See {@link SimulationJournalGroupLines.simulationJournalGroupId}.
   * @param journalName Key property. See {@link SimulationJournalGroupLines.journalName}.
   * @returns A request builder for creating requests to retrieve one `SimulationJournalGroupLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    simulationJournalGroupId: DeserializedType<T, 'Edm.String'>,
    journalName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SimulationJournalGroupLines<T>, T> {
    return new GetByKeyRequestBuilder<SimulationJournalGroupLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SimulationJournalGroupId: simulationJournalGroupId,
        JournalName: journalName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SimulationJournalGroupLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SimulationJournalGroupLines`.
   */
  update(
    entity: SimulationJournalGroupLines<T>
  ): UpdateRequestBuilder<SimulationJournalGroupLines<T>, T> {
    return new UpdateRequestBuilder<SimulationJournalGroupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SimulationJournalGroupLines`.
   * @param dataAreaId Key property. See {@link SimulationJournalGroupLines.dataAreaId}.
   * @param simulationJournalGroupId Key property. See {@link SimulationJournalGroupLines.simulationJournalGroupId}.
   * @param journalName Key property. See {@link SimulationJournalGroupLines.journalName}.
   * @returns A request builder for creating requests that delete an entity of type `SimulationJournalGroupLines`.
   */
  delete(
    dataAreaId: string,
    simulationJournalGroupId: string,
    journalName: string
  ): DeleteRequestBuilder<SimulationJournalGroupLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SimulationJournalGroupLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SimulationJournalGroupLines` by taking the entity as a parameter.
   */
  delete(
    entity: SimulationJournalGroupLines<T>
  ): DeleteRequestBuilder<SimulationJournalGroupLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    simulationJournalGroupId?: string,
    journalName?: string
  ): DeleteRequestBuilder<SimulationJournalGroupLines<T>, T> {
    return new DeleteRequestBuilder<SimulationJournalGroupLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SimulationJournalGroupLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SimulationJournalGroupId: simulationJournalGroupId!,
            JournalName: journalName!
          }
    );
  }
}
