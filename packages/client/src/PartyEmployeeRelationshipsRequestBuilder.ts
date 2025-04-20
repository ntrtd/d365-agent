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
import { PartyEmployeeRelationships } from './PartyEmployeeRelationships';

/**
 * Request builder class for operations supported on the {@link PartyEmployeeRelationships} entity.
 */
export class PartyEmployeeRelationshipsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PartyEmployeeRelationships<T>, T> {
  /**
   * Returns a request builder for querying all `PartyEmployeeRelationships` entities.
   * @returns A request builder for creating requests to retrieve all `PartyEmployeeRelationships` entities.
   */
  getAll(): GetAllRequestBuilder<PartyEmployeeRelationships<T>, T> {
    return new GetAllRequestBuilder<PartyEmployeeRelationships<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PartyEmployeeRelationships` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PartyEmployeeRelationships`.
   */
  create(
    entity: PartyEmployeeRelationships<T>
  ): CreateRequestBuilder<PartyEmployeeRelationships<T>, T> {
    return new CreateRequestBuilder<PartyEmployeeRelationships<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PartyEmployeeRelationships` entity based on its keys.
   * @param dataAreaId Key property. See {@link PartyEmployeeRelationships.dataAreaId}.
   * @param trvHcmWorkerPersonnelNumber Key property. See {@link PartyEmployeeRelationships.trvHcmWorkerPersonnelNumber}.
   * @returns A request builder for creating requests to retrieve one `PartyEmployeeRelationships` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    trvHcmWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PartyEmployeeRelationships<T>, T> {
    return new GetByKeyRequestBuilder<PartyEmployeeRelationships<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TrvHcmWorker_PersonnelNumber: trvHcmWorkerPersonnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PartyEmployeeRelationships`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PartyEmployeeRelationships`.
   */
  update(
    entity: PartyEmployeeRelationships<T>
  ): UpdateRequestBuilder<PartyEmployeeRelationships<T>, T> {
    return new UpdateRequestBuilder<PartyEmployeeRelationships<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PartyEmployeeRelationships`.
   * @param dataAreaId Key property. See {@link PartyEmployeeRelationships.dataAreaId}.
   * @param trvHcmWorkerPersonnelNumber Key property. See {@link PartyEmployeeRelationships.trvHcmWorkerPersonnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PartyEmployeeRelationships`.
   */
  delete(
    dataAreaId: string,
    trvHcmWorkerPersonnelNumber: string
  ): DeleteRequestBuilder<PartyEmployeeRelationships<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PartyEmployeeRelationships`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PartyEmployeeRelationships` by taking the entity as a parameter.
   */
  delete(
    entity: PartyEmployeeRelationships<T>
  ): DeleteRequestBuilder<PartyEmployeeRelationships<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    trvHcmWorkerPersonnelNumber?: string
  ): DeleteRequestBuilder<PartyEmployeeRelationships<T>, T> {
    return new DeleteRequestBuilder<PartyEmployeeRelationships<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PartyEmployeeRelationships
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TrvHcmWorker_PersonnelNumber: trvHcmWorkerPersonnelNumber!
          }
    );
  }
}
