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
import { LeaveTypes } from './LeaveTypes';

/**
 * Request builder class for operations supported on the {@link LeaveTypes} entity.
 */
export class LeaveTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveTypes<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveTypes` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveTypes` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveTypes<T>, T> {
    return new GetAllRequestBuilder<LeaveTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaveTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveTypes`.
   */
  create(entity: LeaveTypes<T>): CreateRequestBuilder<LeaveTypes<T>, T> {
    return new CreateRequestBuilder<LeaveTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LeaveTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveTypes.dataAreaId}.
   * @param type Key property. See {@link LeaveTypes.type}.
   * @returns A request builder for creating requests to retrieve one `LeaveTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaveTypes<T>, T> {
    return new GetByKeyRequestBuilder<LeaveTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Type: type
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveTypes`.
   */
  update(entity: LeaveTypes<T>): UpdateRequestBuilder<LeaveTypes<T>, T> {
    return new UpdateRequestBuilder<LeaveTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveTypes`.
   * @param dataAreaId Key property. See {@link LeaveTypes.dataAreaId}.
   * @param type Key property. See {@link LeaveTypes.type}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveTypes`.
   */
  delete(
    dataAreaId: string,
    type: string
  ): DeleteRequestBuilder<LeaveTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveTypes` by taking the entity as a parameter.
   */
  delete(entity: LeaveTypes<T>): DeleteRequestBuilder<LeaveTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    type?: string
  ): DeleteRequestBuilder<LeaveTypes<T>, T> {
    return new DeleteRequestBuilder<LeaveTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Type: type!
          }
    );
  }
}
