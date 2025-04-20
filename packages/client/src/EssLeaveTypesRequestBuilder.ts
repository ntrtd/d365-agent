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
import { EssLeaveTypes } from './EssLeaveTypes';

/**
 * Request builder class for operations supported on the {@link EssLeaveTypes} entity.
 */
export class EssLeaveTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssLeaveTypes<T>, T> {
  /**
   * Returns a request builder for querying all `EssLeaveTypes` entities.
   * @returns A request builder for creating requests to retrieve all `EssLeaveTypes` entities.
   */
  getAll(): GetAllRequestBuilder<EssLeaveTypes<T>, T> {
    return new GetAllRequestBuilder<EssLeaveTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EssLeaveTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssLeaveTypes`.
   */
  create(entity: EssLeaveTypes<T>): CreateRequestBuilder<EssLeaveTypes<T>, T> {
    return new CreateRequestBuilder<EssLeaveTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssLeaveTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link EssLeaveTypes.dataAreaId}.
   * @param leaveTypeId Key property. See {@link EssLeaveTypes.leaveTypeId}.
   * @returns A request builder for creating requests to retrieve one `EssLeaveTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaveTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EssLeaveTypes<T>, T> {
    return new GetByKeyRequestBuilder<EssLeaveTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LeaveTypeId: leaveTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EssLeaveTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssLeaveTypes`.
   */
  update(entity: EssLeaveTypes<T>): UpdateRequestBuilder<EssLeaveTypes<T>, T> {
    return new UpdateRequestBuilder<EssLeaveTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssLeaveTypes`.
   * @param dataAreaId Key property. See {@link EssLeaveTypes.dataAreaId}.
   * @param leaveTypeId Key property. See {@link EssLeaveTypes.leaveTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveTypes`.
   */
  delete(
    dataAreaId: string,
    leaveTypeId: string
  ): DeleteRequestBuilder<EssLeaveTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssLeaveTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveTypes` by taking the entity as a parameter.
   */
  delete(entity: EssLeaveTypes<T>): DeleteRequestBuilder<EssLeaveTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaveTypeId?: string
  ): DeleteRequestBuilder<EssLeaveTypes<T>, T> {
    return new DeleteRequestBuilder<EssLeaveTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EssLeaveTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaveTypeId: leaveTypeId!
          }
    );
  }
}
