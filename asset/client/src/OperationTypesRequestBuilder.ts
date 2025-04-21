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
import { OperationTypes } from './OperationTypes';

/**
 * Request builder class for operations supported on the {@link OperationTypes} entity.
 */
export class OperationTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OperationTypes<T>, T> {
  /**
   * Returns a request builder for querying all `OperationTypes` entities.
   * @returns A request builder for creating requests to retrieve all `OperationTypes` entities.
   */
  getAll(): GetAllRequestBuilder<OperationTypes<T>, T> {
    return new GetAllRequestBuilder<OperationTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OperationTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OperationTypes`.
   */
  create(
    entity: OperationTypes<T>
  ): CreateRequestBuilder<OperationTypes<T>, T> {
    return new CreateRequestBuilder<OperationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OperationTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link OperationTypes.dataAreaId}.
   * @param operationTypeId Key property. See {@link OperationTypes.operationTypeId}.
   * @returns A request builder for creating requests to retrieve one `OperationTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operationTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OperationTypes<T>, T> {
    return new GetByKeyRequestBuilder<OperationTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      OperationTypeID: operationTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OperationTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OperationTypes`.
   */
  update(
    entity: OperationTypes<T>
  ): UpdateRequestBuilder<OperationTypes<T>, T> {
    return new UpdateRequestBuilder<OperationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OperationTypes`.
   * @param dataAreaId Key property. See {@link OperationTypes.dataAreaId}.
   * @param operationTypeId Key property. See {@link OperationTypes.operationTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `OperationTypes`.
   */
  delete(
    dataAreaId: string,
    operationTypeId: string
  ): DeleteRequestBuilder<OperationTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OperationTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OperationTypes` by taking the entity as a parameter.
   */
  delete(entity: OperationTypes<T>): DeleteRequestBuilder<OperationTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operationTypeId?: string
  ): DeleteRequestBuilder<OperationTypes<T>, T> {
    return new DeleteRequestBuilder<OperationTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OperationTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperationTypeID: operationTypeId!
          }
    );
  }
}
