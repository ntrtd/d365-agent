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
import { EssLeaveTypeReasonCodes } from './EssLeaveTypeReasonCodes';

/**
 * Request builder class for operations supported on the {@link EssLeaveTypeReasonCodes} entity.
 */
export class EssLeaveTypeReasonCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssLeaveTypeReasonCodes<T>, T> {
  /**
   * Returns a request builder for querying all `EssLeaveTypeReasonCodes` entities.
   * @returns A request builder for creating requests to retrieve all `EssLeaveTypeReasonCodes` entities.
   */
  getAll(): GetAllRequestBuilder<EssLeaveTypeReasonCodes<T>, T> {
    return new GetAllRequestBuilder<EssLeaveTypeReasonCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EssLeaveTypeReasonCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssLeaveTypeReasonCodes`.
   */
  create(
    entity: EssLeaveTypeReasonCodes<T>
  ): CreateRequestBuilder<EssLeaveTypeReasonCodes<T>, T> {
    return new CreateRequestBuilder<EssLeaveTypeReasonCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssLeaveTypeReasonCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link EssLeaveTypeReasonCodes.dataAreaId}.
   * @param leaveTypeId Key property. See {@link EssLeaveTypeReasonCodes.leaveTypeId}.
   * @param reasonCodeId Key property. See {@link EssLeaveTypeReasonCodes.reasonCodeId}.
   * @returns A request builder for creating requests to retrieve one `EssLeaveTypeReasonCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaveTypeId: DeserializedType<T, 'Edm.String'>,
    reasonCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EssLeaveTypeReasonCodes<T>, T> {
    return new GetByKeyRequestBuilder<EssLeaveTypeReasonCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LeaveTypeId: leaveTypeId,
        ReasonCodeId: reasonCodeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EssLeaveTypeReasonCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssLeaveTypeReasonCodes`.
   */
  update(
    entity: EssLeaveTypeReasonCodes<T>
  ): UpdateRequestBuilder<EssLeaveTypeReasonCodes<T>, T> {
    return new UpdateRequestBuilder<EssLeaveTypeReasonCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssLeaveTypeReasonCodes`.
   * @param dataAreaId Key property. See {@link EssLeaveTypeReasonCodes.dataAreaId}.
   * @param leaveTypeId Key property. See {@link EssLeaveTypeReasonCodes.leaveTypeId}.
   * @param reasonCodeId Key property. See {@link EssLeaveTypeReasonCodes.reasonCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveTypeReasonCodes`.
   */
  delete(
    dataAreaId: string,
    leaveTypeId: string,
    reasonCodeId: string
  ): DeleteRequestBuilder<EssLeaveTypeReasonCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssLeaveTypeReasonCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveTypeReasonCodes` by taking the entity as a parameter.
   */
  delete(
    entity: EssLeaveTypeReasonCodes<T>
  ): DeleteRequestBuilder<EssLeaveTypeReasonCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaveTypeId?: string,
    reasonCodeId?: string
  ): DeleteRequestBuilder<EssLeaveTypeReasonCodes<T>, T> {
    return new DeleteRequestBuilder<EssLeaveTypeReasonCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EssLeaveTypeReasonCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaveTypeId: leaveTypeId!,
            ReasonCodeId: reasonCodeId!
          }
    );
  }
}
