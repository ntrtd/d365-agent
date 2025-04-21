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
import { RetailOperations } from './RetailOperations';

/**
 * Request builder class for operations supported on the {@link RetailOperations} entity.
 */
export class RetailOperationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailOperations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailOperations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailOperations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailOperations<T>, T> {
    return new GetAllRequestBuilder<RetailOperations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailOperations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailOperations`.
   */
  create(
    entity: RetailOperations<T>
  ): CreateRequestBuilder<RetailOperations<T>, T> {
    return new CreateRequestBuilder<RetailOperations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailOperations` entity based on its keys.
   * @param operationId Key property. See {@link RetailOperations.operationId}.
   * @returns A request builder for creating requests to retrieve one `RetailOperations` entity based on its keys.
   */
  getByKey(
    operationId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetailOperations<T>, T> {
    return new GetByKeyRequestBuilder<RetailOperations<T>, T>(this.entityApi, {
      OperationId: operationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailOperations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailOperations`.
   */
  update(
    entity: RetailOperations<T>
  ): UpdateRequestBuilder<RetailOperations<T>, T> {
    return new UpdateRequestBuilder<RetailOperations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailOperations`.
   * @param operationId Key property. See {@link RetailOperations.operationId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailOperations`.
   */
  delete(operationId: number): DeleteRequestBuilder<RetailOperations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailOperations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailOperations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailOperations<T>
  ): DeleteRequestBuilder<RetailOperations<T>, T>;
  delete(
    operationIdOrEntity: any
  ): DeleteRequestBuilder<RetailOperations<T>, T> {
    return new DeleteRequestBuilder<RetailOperations<T>, T>(
      this.entityApi,
      operationIdOrEntity instanceof RetailOperations
        ? operationIdOrEntity
        : { OperationId: operationIdOrEntity! }
    );
  }
}
