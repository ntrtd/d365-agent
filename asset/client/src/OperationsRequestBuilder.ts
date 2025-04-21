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
import { Operations } from './Operations';

/**
 * Request builder class for operations supported on the {@link Operations} entity.
 */
export class OperationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Operations<T>, T> {
  /**
   * Returns a request builder for querying all `Operations` entities.
   * @returns A request builder for creating requests to retrieve all `Operations` entities.
   */
  getAll(): GetAllRequestBuilder<Operations<T>, T> {
    return new GetAllRequestBuilder<Operations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Operations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Operations`.
   */
  create(entity: Operations<T>): CreateRequestBuilder<Operations<T>, T> {
    return new CreateRequestBuilder<Operations<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Operations` entity based on its keys.
   * @param dataAreaId Key property. See {@link Operations.dataAreaId}.
   * @param operationId Key property. See {@link Operations.operationId}.
   * @returns A request builder for creating requests to retrieve one `Operations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Operations<T>, T> {
    return new GetByKeyRequestBuilder<Operations<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      OperationId: operationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Operations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Operations`.
   */
  update(entity: Operations<T>): UpdateRequestBuilder<Operations<T>, T> {
    return new UpdateRequestBuilder<Operations<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Operations`.
   * @param dataAreaId Key property. See {@link Operations.dataAreaId}.
   * @param operationId Key property. See {@link Operations.operationId}.
   * @returns A request builder for creating requests that delete an entity of type `Operations`.
   */
  delete(
    dataAreaId: string,
    operationId: string
  ): DeleteRequestBuilder<Operations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Operations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Operations` by taking the entity as a parameter.
   */
  delete(entity: Operations<T>): DeleteRequestBuilder<Operations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operationId?: string
  ): DeleteRequestBuilder<Operations<T>, T> {
    return new DeleteRequestBuilder<Operations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Operations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperationId: operationId!
          }
    );
  }
}
