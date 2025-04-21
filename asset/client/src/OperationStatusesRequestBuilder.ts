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
import { OperationStatuses } from './OperationStatuses';

/**
 * Request builder class for operations supported on the {@link OperationStatuses} entity.
 */
export class OperationStatusesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OperationStatuses<T>, T> {
  /**
   * Returns a request builder for querying all `OperationStatuses` entities.
   * @returns A request builder for creating requests to retrieve all `OperationStatuses` entities.
   */
  getAll(): GetAllRequestBuilder<OperationStatuses<T>, T> {
    return new GetAllRequestBuilder<OperationStatuses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OperationStatuses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OperationStatuses`.
   */
  create(
    entity: OperationStatuses<T>
  ): CreateRequestBuilder<OperationStatuses<T>, T> {
    return new CreateRequestBuilder<OperationStatuses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OperationStatuses` entity based on its keys.
   * @param dataAreaId Key property. See {@link OperationStatuses.dataAreaId}.
   * @param operationStatus Key property. See {@link OperationStatuses.operationStatus}.
   * @returns A request builder for creating requests to retrieve one `OperationStatuses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operationStatus: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OperationStatuses<T>, T> {
    return new GetByKeyRequestBuilder<OperationStatuses<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      OperationStatus: operationStatus
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OperationStatuses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OperationStatuses`.
   */
  update(
    entity: OperationStatuses<T>
  ): UpdateRequestBuilder<OperationStatuses<T>, T> {
    return new UpdateRequestBuilder<OperationStatuses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OperationStatuses`.
   * @param dataAreaId Key property. See {@link OperationStatuses.dataAreaId}.
   * @param operationStatus Key property. See {@link OperationStatuses.operationStatus}.
   * @returns A request builder for creating requests that delete an entity of type `OperationStatuses`.
   */
  delete(
    dataAreaId: string,
    operationStatus: string
  ): DeleteRequestBuilder<OperationStatuses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OperationStatuses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OperationStatuses` by taking the entity as a parameter.
   */
  delete(
    entity: OperationStatuses<T>
  ): DeleteRequestBuilder<OperationStatuses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operationStatus?: string
  ): DeleteRequestBuilder<OperationStatuses<T>, T> {
    return new DeleteRequestBuilder<OperationStatuses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OperationStatuses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperationStatus: operationStatus!
          }
    );
  }
}
