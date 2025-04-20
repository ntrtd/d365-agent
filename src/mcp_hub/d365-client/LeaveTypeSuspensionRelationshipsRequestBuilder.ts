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
import { LeaveTypeSuspensionRelationships } from './LeaveTypeSuspensionRelationships';

/**
 * Request builder class for operations supported on the {@link LeaveTypeSuspensionRelationships} entity.
 */
export class LeaveTypeSuspensionRelationshipsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveTypeSuspensionRelationships<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveTypeSuspensionRelationships` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveTypeSuspensionRelationships` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveTypeSuspensionRelationships<T>, T> {
    return new GetAllRequestBuilder<LeaveTypeSuspensionRelationships<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaveTypeSuspensionRelationships` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveTypeSuspensionRelationships`.
   */
  create(
    entity: LeaveTypeSuspensionRelationships<T>
  ): CreateRequestBuilder<LeaveTypeSuspensionRelationships<T>, T> {
    return new CreateRequestBuilder<LeaveTypeSuspensionRelationships<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveTypeSuspensionRelationships` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveTypeSuspensionRelationships.dataAreaId}.
   * @param suspendedByLeaveTypeType Key property. See {@link LeaveTypeSuspensionRelationships.suspendedByLeaveTypeType}.
   * @param suspendedLeaveTypeType Key property. See {@link LeaveTypeSuspensionRelationships.suspendedLeaveTypeType}.
   * @returns A request builder for creating requests to retrieve one `LeaveTypeSuspensionRelationships` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    suspendedByLeaveTypeType: DeserializedType<T, 'Edm.String'>,
    suspendedLeaveTypeType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaveTypeSuspensionRelationships<T>, T> {
    return new GetByKeyRequestBuilder<LeaveTypeSuspensionRelationships<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SuspendedByLeaveType_Type: suspendedByLeaveTypeType,
        SuspendedLeaveType_Type: suspendedLeaveTypeType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveTypeSuspensionRelationships`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveTypeSuspensionRelationships`.
   */
  update(
    entity: LeaveTypeSuspensionRelationships<T>
  ): UpdateRequestBuilder<LeaveTypeSuspensionRelationships<T>, T> {
    return new UpdateRequestBuilder<LeaveTypeSuspensionRelationships<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveTypeSuspensionRelationships`.
   * @param dataAreaId Key property. See {@link LeaveTypeSuspensionRelationships.dataAreaId}.
   * @param suspendedByLeaveTypeType Key property. See {@link LeaveTypeSuspensionRelationships.suspendedByLeaveTypeType}.
   * @param suspendedLeaveTypeType Key property. See {@link LeaveTypeSuspensionRelationships.suspendedLeaveTypeType}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveTypeSuspensionRelationships`.
   */
  delete(
    dataAreaId: string,
    suspendedByLeaveTypeType: string,
    suspendedLeaveTypeType: string
  ): DeleteRequestBuilder<LeaveTypeSuspensionRelationships<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveTypeSuspensionRelationships`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveTypeSuspensionRelationships` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveTypeSuspensionRelationships<T>
  ): DeleteRequestBuilder<LeaveTypeSuspensionRelationships<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    suspendedByLeaveTypeType?: string,
    suspendedLeaveTypeType?: string
  ): DeleteRequestBuilder<LeaveTypeSuspensionRelationships<T>, T> {
    return new DeleteRequestBuilder<LeaveTypeSuspensionRelationships<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveTypeSuspensionRelationships
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SuspendedByLeaveType_Type: suspendedByLeaveTypeType!,
            SuspendedLeaveType_Type: suspendedLeaveTypeType!
          }
    );
  }
}
