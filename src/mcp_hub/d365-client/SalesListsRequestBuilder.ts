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
import { SalesLists } from './SalesLists';
import { ListStatus } from './ListStatus';

/**
 * Request builder class for operations supported on the {@link SalesLists} entity.
 */
export class SalesListsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesLists<T>, T> {
  /**
   * Returns a request builder for querying all `SalesLists` entities.
   * @returns A request builder for creating requests to retrieve all `SalesLists` entities.
   */
  getAll(): GetAllRequestBuilder<SalesLists<T>, T> {
    return new GetAllRequestBuilder<SalesLists<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesLists`.
   */
  create(entity: SalesLists<T>): CreateRequestBuilder<SalesLists<T>, T> {
    return new CreateRequestBuilder<SalesLists<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SalesLists` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesLists.dataAreaId}.
   * @param status Key property. See {@link SalesLists.status}.
   * @param dispatchId Key property. See {@link SalesLists.dispatchId}.
   * @param number Key property. See {@link SalesLists.number}.
   * @returns A request builder for creating requests to retrieve one `SalesLists` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.ListStatus'>,
    dispatchId: DeserializedType<T, 'Edm.String'>,
    number: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SalesLists<T>, T> {
    return new GetByKeyRequestBuilder<SalesLists<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Status: status,
      DispatchId: dispatchId,
      Number: number
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesLists`.
   */
  update(entity: SalesLists<T>): UpdateRequestBuilder<SalesLists<T>, T> {
    return new UpdateRequestBuilder<SalesLists<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesLists`.
   * @param dataAreaId Key property. See {@link SalesLists.dataAreaId}.
   * @param status Key property. See {@link SalesLists.status}.
   * @param dispatchId Key property. See {@link SalesLists.dispatchId}.
   * @param number Key property. See {@link SalesLists.number}.
   * @returns A request builder for creating requests that delete an entity of type `SalesLists`.
   */
  delete(
    dataAreaId: string,
    status: ListStatus,
    dispatchId: string,
    number: number
  ): DeleteRequestBuilder<SalesLists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesLists` by taking the entity as a parameter.
   */
  delete(entity: SalesLists<T>): DeleteRequestBuilder<SalesLists<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    status?: ListStatus,
    dispatchId?: string,
    number?: number
  ): DeleteRequestBuilder<SalesLists<T>, T> {
    return new DeleteRequestBuilder<SalesLists<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesLists
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Status: status!,
            DispatchId: dispatchId!,
            Number: number!
          }
    );
  }
}
