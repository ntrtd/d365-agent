/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { EssTimeOffRequestDetailApprovers } from './EssTimeOffRequestDetailApprovers';

/**
 * Request builder class for operations supported on the {@link EssTimeOffRequestDetailApprovers} entity.
 */
export class EssTimeOffRequestDetailApproversRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssTimeOffRequestDetailApprovers<T>, T> {
  /**
   * Returns a request builder for querying all `EssTimeOffRequestDetailApprovers` entities.
   * @returns A request builder for creating requests to retrieve all `EssTimeOffRequestDetailApprovers` entities.
   */
  getAll(): GetAllRequestBuilder<EssTimeOffRequestDetailApprovers<T>, T> {
    return new GetAllRequestBuilder<EssTimeOffRequestDetailApprovers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EssTimeOffRequestDetailApprovers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssTimeOffRequestDetailApprovers`.
   */
  create(
    entity: EssTimeOffRequestDetailApprovers<T>
  ): CreateRequestBuilder<EssTimeOffRequestDetailApprovers<T>, T> {
    return new CreateRequestBuilder<EssTimeOffRequestDetailApprovers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssTimeOffRequestDetailApprovers` entity based on its keys.
   * @param leaveDate Key property. See {@link EssTimeOffRequestDetailApprovers.leaveDate}.
   * @param leaveTypeId Key property. See {@link EssTimeOffRequestDetailApprovers.leaveTypeId}.
   * @returns A request builder for creating requests to retrieve one `EssTimeOffRequestDetailApprovers` entity based on its keys.
   */
  getByKey(
    leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    leaveTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EssTimeOffRequestDetailApprovers<T>, T> {
    return new GetByKeyRequestBuilder<EssTimeOffRequestDetailApprovers<T>, T>(
      this.entityApi,
      {
        LeaveDate: leaveDate,
        LeaveTypeId: leaveTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EssTimeOffRequestDetailApprovers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssTimeOffRequestDetailApprovers`.
   */
  update(
    entity: EssTimeOffRequestDetailApprovers<T>
  ): UpdateRequestBuilder<EssTimeOffRequestDetailApprovers<T>, T> {
    return new UpdateRequestBuilder<EssTimeOffRequestDetailApprovers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssTimeOffRequestDetailApprovers`.
   * @param leaveDate Key property. See {@link EssTimeOffRequestDetailApprovers.leaveDate}.
   * @param leaveTypeId Key property. See {@link EssTimeOffRequestDetailApprovers.leaveTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `EssTimeOffRequestDetailApprovers`.
   */
  delete(
    leaveDate: Moment,
    leaveTypeId: string
  ): DeleteRequestBuilder<EssTimeOffRequestDetailApprovers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssTimeOffRequestDetailApprovers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssTimeOffRequestDetailApprovers` by taking the entity as a parameter.
   */
  delete(
    entity: EssTimeOffRequestDetailApprovers<T>
  ): DeleteRequestBuilder<EssTimeOffRequestDetailApprovers<T>, T>;
  delete(
    leaveDateOrEntity: any,
    leaveTypeId?: string
  ): DeleteRequestBuilder<EssTimeOffRequestDetailApprovers<T>, T> {
    return new DeleteRequestBuilder<EssTimeOffRequestDetailApprovers<T>, T>(
      this.entityApi,
      leaveDateOrEntity instanceof EssTimeOffRequestDetailApprovers
        ? leaveDateOrEntity
        : {
            LeaveDate: leaveDateOrEntity!,
            LeaveTypeId: leaveTypeId!
          }
    );
  }
}
