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
import { LeaseBookGroupRelations } from './LeaseBookGroupRelations';

/**
 * Request builder class for operations supported on the {@link LeaseBookGroupRelations} entity.
 */
export class LeaseBookGroupRelationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseBookGroupRelations<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseBookGroupRelations` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseBookGroupRelations` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseBookGroupRelations<T>, T> {
    return new GetAllRequestBuilder<LeaseBookGroupRelations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseBookGroupRelations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseBookGroupRelations`.
   */
  create(
    entity: LeaseBookGroupRelations<T>
  ): CreateRequestBuilder<LeaseBookGroupRelations<T>, T> {
    return new CreateRequestBuilder<LeaseBookGroupRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseBookGroupRelations` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseBookGroupRelations.dataAreaId}.
   * @param key Key property. See {@link LeaseBookGroupRelations.key}.
   * @returns A request builder for creating requests to retrieve one `LeaseBookGroupRelations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<LeaseBookGroupRelations<T>, T> {
    return new GetByKeyRequestBuilder<LeaseBookGroupRelations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Key: key
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseBookGroupRelations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseBookGroupRelations`.
   */
  update(
    entity: LeaseBookGroupRelations<T>
  ): UpdateRequestBuilder<LeaseBookGroupRelations<T>, T> {
    return new UpdateRequestBuilder<LeaseBookGroupRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseBookGroupRelations`.
   * @param dataAreaId Key property. See {@link LeaseBookGroupRelations.dataAreaId}.
   * @param key Key property. See {@link LeaseBookGroupRelations.key}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseBookGroupRelations`.
   */
  delete(
    dataAreaId: string,
    key: number
  ): DeleteRequestBuilder<LeaseBookGroupRelations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseBookGroupRelations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseBookGroupRelations` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseBookGroupRelations<T>
  ): DeleteRequestBuilder<LeaseBookGroupRelations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    key?: number
  ): DeleteRequestBuilder<LeaseBookGroupRelations<T>, T> {
    return new DeleteRequestBuilder<LeaseBookGroupRelations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseBookGroupRelations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Key: key!
          }
    );
  }
}
