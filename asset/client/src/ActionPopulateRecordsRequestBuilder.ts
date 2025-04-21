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
import { ActionPopulateRecords } from './ActionPopulateRecords';

/**
 * Request builder class for operations supported on the {@link ActionPopulateRecords} entity.
 */
export class ActionPopulateRecordsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ActionPopulateRecords<T>, T> {
  /**
   * Returns a request builder for querying all `ActionPopulateRecords` entities.
   * @returns A request builder for creating requests to retrieve all `ActionPopulateRecords` entities.
   */
  getAll(): GetAllRequestBuilder<ActionPopulateRecords<T>, T> {
    return new GetAllRequestBuilder<ActionPopulateRecords<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ActionPopulateRecords` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActionPopulateRecords`.
   */
  create(
    entity: ActionPopulateRecords<T>
  ): CreateRequestBuilder<ActionPopulateRecords<T>, T> {
    return new CreateRequestBuilder<ActionPopulateRecords<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ActionPopulateRecords` entity based on its keys.
   * @param dataAreaId Key property. See {@link ActionPopulateRecords.dataAreaId}.
   * @param name Key property. See {@link ActionPopulateRecords.name}.
   * @returns A request builder for creating requests to retrieve one `ActionPopulateRecords` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ActionPopulateRecords<T>, T> {
    return new GetByKeyRequestBuilder<ActionPopulateRecords<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ActionPopulateRecords`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActionPopulateRecords`.
   */
  update(
    entity: ActionPopulateRecords<T>
  ): UpdateRequestBuilder<ActionPopulateRecords<T>, T> {
    return new UpdateRequestBuilder<ActionPopulateRecords<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ActionPopulateRecords`.
   * @param dataAreaId Key property. See {@link ActionPopulateRecords.dataAreaId}.
   * @param name Key property. See {@link ActionPopulateRecords.name}.
   * @returns A request builder for creating requests that delete an entity of type `ActionPopulateRecords`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<ActionPopulateRecords<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ActionPopulateRecords`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActionPopulateRecords` by taking the entity as a parameter.
   */
  delete(
    entity: ActionPopulateRecords<T>
  ): DeleteRequestBuilder<ActionPopulateRecords<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<ActionPopulateRecords<T>, T> {
    return new DeleteRequestBuilder<ActionPopulateRecords<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ActionPopulateRecords
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
