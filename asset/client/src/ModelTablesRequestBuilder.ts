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
import { ModelTables } from './ModelTables';

/**
 * Request builder class for operations supported on the {@link ModelTables} entity.
 */
export class ModelTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ModelTables<T>, T> {
  /**
   * Returns a request builder for querying all `ModelTables` entities.
   * @returns A request builder for creating requests to retrieve all `ModelTables` entities.
   */
  getAll(): GetAllRequestBuilder<ModelTables<T>, T> {
    return new GetAllRequestBuilder<ModelTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ModelTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ModelTables`.
   */
  create(entity: ModelTables<T>): CreateRequestBuilder<ModelTables<T>, T> {
    return new CreateRequestBuilder<ModelTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ModelTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ModelTables.dataAreaId}.
   * @param model Key property. See {@link ModelTables.model}.
   * @returns A request builder for creating requests to retrieve one `ModelTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    model: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ModelTables<T>, T> {
    return new GetByKeyRequestBuilder<ModelTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Model: model
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ModelTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ModelTables`.
   */
  update(entity: ModelTables<T>): UpdateRequestBuilder<ModelTables<T>, T> {
    return new UpdateRequestBuilder<ModelTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ModelTables`.
   * @param dataAreaId Key property. See {@link ModelTables.dataAreaId}.
   * @param model Key property. See {@link ModelTables.model}.
   * @returns A request builder for creating requests that delete an entity of type `ModelTables`.
   */
  delete(
    dataAreaId: string,
    model: string
  ): DeleteRequestBuilder<ModelTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ModelTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ModelTables` by taking the entity as a parameter.
   */
  delete(entity: ModelTables<T>): DeleteRequestBuilder<ModelTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    model?: string
  ): DeleteRequestBuilder<ModelTables<T>, T> {
    return new DeleteRequestBuilder<ModelTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ModelTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Model: model!
          }
    );
  }
}
