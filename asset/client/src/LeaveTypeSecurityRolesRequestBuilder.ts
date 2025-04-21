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
import { LeaveTypeSecurityRoles } from './LeaveTypeSecurityRoles';

/**
 * Request builder class for operations supported on the {@link LeaveTypeSecurityRoles} entity.
 */
export class LeaveTypeSecurityRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveTypeSecurityRoles<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveTypeSecurityRoles` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveTypeSecurityRoles` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveTypeSecurityRoles<T>, T> {
    return new GetAllRequestBuilder<LeaveTypeSecurityRoles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaveTypeSecurityRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveTypeSecurityRoles`.
   */
  create(
    entity: LeaveTypeSecurityRoles<T>
  ): CreateRequestBuilder<LeaveTypeSecurityRoles<T>, T> {
    return new CreateRequestBuilder<LeaveTypeSecurityRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveTypeSecurityRoles` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveTypeSecurityRoles.dataAreaId}.
   * @param securityRoleAotName Key property. See {@link LeaveTypeSecurityRoles.securityRoleAotName}.
   * @param leaveTypeType Key property. See {@link LeaveTypeSecurityRoles.leaveTypeType}.
   * @returns A request builder for creating requests to retrieve one `LeaveTypeSecurityRoles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    securityRoleAotName: DeserializedType<T, 'Edm.String'>,
    leaveTypeType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaveTypeSecurityRoles<T>, T> {
    return new GetByKeyRequestBuilder<LeaveTypeSecurityRoles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SecurityRole_AotName: securityRoleAotName,
        LeaveType_Type: leaveTypeType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveTypeSecurityRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveTypeSecurityRoles`.
   */
  update(
    entity: LeaveTypeSecurityRoles<T>
  ): UpdateRequestBuilder<LeaveTypeSecurityRoles<T>, T> {
    return new UpdateRequestBuilder<LeaveTypeSecurityRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveTypeSecurityRoles`.
   * @param dataAreaId Key property. See {@link LeaveTypeSecurityRoles.dataAreaId}.
   * @param securityRoleAotName Key property. See {@link LeaveTypeSecurityRoles.securityRoleAotName}.
   * @param leaveTypeType Key property. See {@link LeaveTypeSecurityRoles.leaveTypeType}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveTypeSecurityRoles`.
   */
  delete(
    dataAreaId: string,
    securityRoleAotName: string,
    leaveTypeType: string
  ): DeleteRequestBuilder<LeaveTypeSecurityRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveTypeSecurityRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveTypeSecurityRoles` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveTypeSecurityRoles<T>
  ): DeleteRequestBuilder<LeaveTypeSecurityRoles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    securityRoleAotName?: string,
    leaveTypeType?: string
  ): DeleteRequestBuilder<LeaveTypeSecurityRoles<T>, T> {
    return new DeleteRequestBuilder<LeaveTypeSecurityRoles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveTypeSecurityRoles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SecurityRole_AotName: securityRoleAotName!,
            LeaveType_Type: leaveTypeType!
          }
    );
  }
}
