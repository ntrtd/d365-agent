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
import { Groups } from './Groups';

/**
 * Request builder class for operations supported on the {@link Groups} entity.
 */
export class GroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Groups<T>, T> {
  /**
   * Returns a request builder for querying all `Groups` entities.
   * @returns A request builder for creating requests to retrieve all `Groups` entities.
   */
  getAll(): GetAllRequestBuilder<Groups<T>, T> {
    return new GetAllRequestBuilder<Groups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Groups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Groups`.
   */
  create(entity: Groups<T>): CreateRequestBuilder<Groups<T>, T> {
    return new CreateRequestBuilder<Groups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Groups` entity based on its keys.
   * @param dataAreaId Key property. See {@link Groups.dataAreaId}.
   * @param deferralsGroup Key property. See {@link Groups.deferralsGroup}.
   * @returns A request builder for creating requests to retrieve one `Groups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    deferralsGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Groups<T>, T> {
    return new GetByKeyRequestBuilder<Groups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      DeferralsGroup: deferralsGroup
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Groups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Groups`.
   */
  update(entity: Groups<T>): UpdateRequestBuilder<Groups<T>, T> {
    return new UpdateRequestBuilder<Groups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Groups`.
   * @param dataAreaId Key property. See {@link Groups.dataAreaId}.
   * @param deferralsGroup Key property. See {@link Groups.deferralsGroup}.
   * @returns A request builder for creating requests that delete an entity of type `Groups`.
   */
  delete(
    dataAreaId: string,
    deferralsGroup: string
  ): DeleteRequestBuilder<Groups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Groups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Groups` by taking the entity as a parameter.
   */
  delete(entity: Groups<T>): DeleteRequestBuilder<Groups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    deferralsGroup?: string
  ): DeleteRequestBuilder<Groups<T>, T> {
    return new DeleteRequestBuilder<Groups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Groups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DeferralsGroup: deferralsGroup!
          }
    );
  }
}
