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
import { PartitionedSecurityUserRoleAssociations } from './PartitionedSecurityUserRoleAssociations';

/**
 * Request builder class for operations supported on the {@link PartitionedSecurityUserRoleAssociations} entity.
 */
export class PartitionedSecurityUserRoleAssociationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PartitionedSecurityUserRoleAssociations<T>, T> {
  /**
   * Returns a request builder for querying all `PartitionedSecurityUserRoleAssociations` entities.
   * @returns A request builder for creating requests to retrieve all `PartitionedSecurityUserRoleAssociations` entities.
   */
  getAll(): GetAllRequestBuilder<
    PartitionedSecurityUserRoleAssociations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PartitionedSecurityUserRoleAssociations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PartitionedSecurityUserRoleAssociations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PartitionedSecurityUserRoleAssociations`.
   */
  create(
    entity: PartitionedSecurityUserRoleAssociations<T>
  ): CreateRequestBuilder<PartitionedSecurityUserRoleAssociations<T>, T> {
    return new CreateRequestBuilder<
      PartitionedSecurityUserRoleAssociations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PartitionedSecurityUserRoleAssociations` entity based on its keys.
   * @param userId Key property. See {@link PartitionedSecurityUserRoleAssociations.userId}.
   * @param securityRoleIdentifier Key property. See {@link PartitionedSecurityUserRoleAssociations.securityRoleIdentifier}.
   * @returns A request builder for creating requests to retrieve one `PartitionedSecurityUserRoleAssociations` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>,
    securityRoleIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PartitionedSecurityUserRoleAssociations<T>, T> {
    return new GetByKeyRequestBuilder<
      PartitionedSecurityUserRoleAssociations<T>,
      T
    >(this.entityApi, {
      UserId: userId,
      SecurityRoleIdentifier: securityRoleIdentifier
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PartitionedSecurityUserRoleAssociations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PartitionedSecurityUserRoleAssociations`.
   */
  update(
    entity: PartitionedSecurityUserRoleAssociations<T>
  ): UpdateRequestBuilder<PartitionedSecurityUserRoleAssociations<T>, T> {
    return new UpdateRequestBuilder<
      PartitionedSecurityUserRoleAssociations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PartitionedSecurityUserRoleAssociations`.
   * @param userId Key property. See {@link PartitionedSecurityUserRoleAssociations.userId}.
   * @param securityRoleIdentifier Key property. See {@link PartitionedSecurityUserRoleAssociations.securityRoleIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `PartitionedSecurityUserRoleAssociations`.
   */
  delete(
    userId: string,
    securityRoleIdentifier: string
  ): DeleteRequestBuilder<PartitionedSecurityUserRoleAssociations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PartitionedSecurityUserRoleAssociations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PartitionedSecurityUserRoleAssociations` by taking the entity as a parameter.
   */
  delete(
    entity: PartitionedSecurityUserRoleAssociations<T>
  ): DeleteRequestBuilder<PartitionedSecurityUserRoleAssociations<T>, T>;
  delete(
    userIdOrEntity: any,
    securityRoleIdentifier?: string
  ): DeleteRequestBuilder<PartitionedSecurityUserRoleAssociations<T>, T> {
    return new DeleteRequestBuilder<
      PartitionedSecurityUserRoleAssociations<T>,
      T
    >(
      this.entityApi,
      userIdOrEntity instanceof PartitionedSecurityUserRoleAssociations
        ? userIdOrEntity
        : {
            UserId: userIdOrEntity!,
            SecurityRoleIdentifier: securityRoleIdentifier!
          }
    );
  }
}
