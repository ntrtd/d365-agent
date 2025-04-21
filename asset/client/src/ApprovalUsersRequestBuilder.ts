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
import { ApprovalUsers } from './ApprovalUsers';

/**
 * Request builder class for operations supported on the {@link ApprovalUsers} entity.
 */
export class ApprovalUsersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApprovalUsers<T>, T> {
  /**
   * Returns a request builder for querying all `ApprovalUsers` entities.
   * @returns A request builder for creating requests to retrieve all `ApprovalUsers` entities.
   */
  getAll(): GetAllRequestBuilder<ApprovalUsers<T>, T> {
    return new GetAllRequestBuilder<ApprovalUsers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApprovalUsers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApprovalUsers`.
   */
  create(entity: ApprovalUsers<T>): CreateRequestBuilder<ApprovalUsers<T>, T> {
    return new CreateRequestBuilder<ApprovalUsers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApprovalUsers` entity based on its keys.
   * @param userId Key property. See {@link ApprovalUsers.userId}.
   * @returns A request builder for creating requests to retrieve one `ApprovalUsers` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApprovalUsers<T>, T> {
    return new GetByKeyRequestBuilder<ApprovalUsers<T>, T>(this.entityApi, {
      UserId: userId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ApprovalUsers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApprovalUsers`.
   */
  update(entity: ApprovalUsers<T>): UpdateRequestBuilder<ApprovalUsers<T>, T> {
    return new UpdateRequestBuilder<ApprovalUsers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApprovalUsers`.
   * @param userId Key property. See {@link ApprovalUsers.userId}.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalUsers`.
   */
  delete(userId: string): DeleteRequestBuilder<ApprovalUsers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApprovalUsers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalUsers` by taking the entity as a parameter.
   */
  delete(entity: ApprovalUsers<T>): DeleteRequestBuilder<ApprovalUsers<T>, T>;
  delete(userIdOrEntity: any): DeleteRequestBuilder<ApprovalUsers<T>, T> {
    return new DeleteRequestBuilder<ApprovalUsers<T>, T>(
      this.entityApi,
      userIdOrEntity instanceof ApprovalUsers
        ? userIdOrEntity
        : { UserId: userIdOrEntity! }
    );
  }
}
