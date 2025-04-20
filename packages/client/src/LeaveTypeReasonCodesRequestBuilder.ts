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
import { LeaveTypeReasonCodes } from './LeaveTypeReasonCodes';

/**
 * Request builder class for operations supported on the {@link LeaveTypeReasonCodes} entity.
 */
export class LeaveTypeReasonCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveTypeReasonCodes<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveTypeReasonCodes` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveTypeReasonCodes` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveTypeReasonCodes<T>, T> {
    return new GetAllRequestBuilder<LeaveTypeReasonCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaveTypeReasonCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveTypeReasonCodes`.
   */
  create(
    entity: LeaveTypeReasonCodes<T>
  ): CreateRequestBuilder<LeaveTypeReasonCodes<T>, T> {
    return new CreateRequestBuilder<LeaveTypeReasonCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveTypeReasonCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveTypeReasonCodes.dataAreaId}.
   * @param leaveType Key property. See {@link LeaveTypeReasonCodes.leaveType}.
   * @param reasonCodeId Key property. See {@link LeaveTypeReasonCodes.reasonCodeId}.
   * @returns A request builder for creating requests to retrieve one `LeaveTypeReasonCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaveType: DeserializedType<T, 'Edm.String'>,
    reasonCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaveTypeReasonCodes<T>, T> {
    return new GetByKeyRequestBuilder<LeaveTypeReasonCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LeaveType: leaveType,
        ReasonCodeId: reasonCodeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveTypeReasonCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveTypeReasonCodes`.
   */
  update(
    entity: LeaveTypeReasonCodes<T>
  ): UpdateRequestBuilder<LeaveTypeReasonCodes<T>, T> {
    return new UpdateRequestBuilder<LeaveTypeReasonCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveTypeReasonCodes`.
   * @param dataAreaId Key property. See {@link LeaveTypeReasonCodes.dataAreaId}.
   * @param leaveType Key property. See {@link LeaveTypeReasonCodes.leaveType}.
   * @param reasonCodeId Key property. See {@link LeaveTypeReasonCodes.reasonCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveTypeReasonCodes`.
   */
  delete(
    dataAreaId: string,
    leaveType: string,
    reasonCodeId: string
  ): DeleteRequestBuilder<LeaveTypeReasonCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveTypeReasonCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveTypeReasonCodes` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveTypeReasonCodes<T>
  ): DeleteRequestBuilder<LeaveTypeReasonCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaveType?: string,
    reasonCodeId?: string
  ): DeleteRequestBuilder<LeaveTypeReasonCodes<T>, T> {
    return new DeleteRequestBuilder<LeaveTypeReasonCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveTypeReasonCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaveType: leaveType!,
            ReasonCodeId: reasonCodeId!
          }
    );
  }
}
