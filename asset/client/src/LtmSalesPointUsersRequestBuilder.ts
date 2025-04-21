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
import { LtmSalesPointUsers } from './LtmSalesPointUsers';

/**
 * Request builder class for operations supported on the {@link LtmSalesPointUsers} entity.
 */
export class LtmSalesPointUsersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmSalesPointUsers<T>, T> {
  /**
   * Returns a request builder for querying all `LtmSalesPointUsers` entities.
   * @returns A request builder for creating requests to retrieve all `LtmSalesPointUsers` entities.
   */
  getAll(): GetAllRequestBuilder<LtmSalesPointUsers<T>, T> {
    return new GetAllRequestBuilder<LtmSalesPointUsers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmSalesPointUsers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmSalesPointUsers`.
   */
  create(
    entity: LtmSalesPointUsers<T>
  ): CreateRequestBuilder<LtmSalesPointUsers<T>, T> {
    return new CreateRequestBuilder<LtmSalesPointUsers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmSalesPointUsers` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmSalesPointUsers.dataAreaId}.
   * @param userId Key property. See {@link LtmSalesPointUsers.userId}.
   * @returns A request builder for creating requests to retrieve one `LtmSalesPointUsers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmSalesPointUsers<T>, T> {
    return new GetByKeyRequestBuilder<LtmSalesPointUsers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        UserId: userId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmSalesPointUsers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmSalesPointUsers`.
   */
  update(
    entity: LtmSalesPointUsers<T>
  ): UpdateRequestBuilder<LtmSalesPointUsers<T>, T> {
    return new UpdateRequestBuilder<LtmSalesPointUsers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmSalesPointUsers`.
   * @param dataAreaId Key property. See {@link LtmSalesPointUsers.dataAreaId}.
   * @param userId Key property. See {@link LtmSalesPointUsers.userId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmSalesPointUsers`.
   */
  delete(
    dataAreaId: string,
    userId: string
  ): DeleteRequestBuilder<LtmSalesPointUsers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmSalesPointUsers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmSalesPointUsers` by taking the entity as a parameter.
   */
  delete(
    entity: LtmSalesPointUsers<T>
  ): DeleteRequestBuilder<LtmSalesPointUsers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    userId?: string
  ): DeleteRequestBuilder<LtmSalesPointUsers<T>, T> {
    return new DeleteRequestBuilder<LtmSalesPointUsers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmSalesPointUsers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            UserId: userId!
          }
    );
  }
}
