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
import { ReleaseKindTables } from './ReleaseKindTables';

/**
 * Request builder class for operations supported on the {@link ReleaseKindTables} entity.
 */
export class ReleaseKindTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleaseKindTables<T>, T> {
  /**
   * Returns a request builder for querying all `ReleaseKindTables` entities.
   * @returns A request builder for creating requests to retrieve all `ReleaseKindTables` entities.
   */
  getAll(): GetAllRequestBuilder<ReleaseKindTables<T>, T> {
    return new GetAllRequestBuilder<ReleaseKindTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReleaseKindTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleaseKindTables`.
   */
  create(
    entity: ReleaseKindTables<T>
  ): CreateRequestBuilder<ReleaseKindTables<T>, T> {
    return new CreateRequestBuilder<ReleaseKindTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReleaseKindTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleaseKindTables.dataAreaId}.
   * @param releaseKindId Key property. See {@link ReleaseKindTables.releaseKindId}.
   * @returns A request builder for creating requests to retrieve one `ReleaseKindTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    releaseKindId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReleaseKindTables<T>, T> {
    return new GetByKeyRequestBuilder<ReleaseKindTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ReleaseKindId: releaseKindId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReleaseKindTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleaseKindTables`.
   */
  update(
    entity: ReleaseKindTables<T>
  ): UpdateRequestBuilder<ReleaseKindTables<T>, T> {
    return new UpdateRequestBuilder<ReleaseKindTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleaseKindTables`.
   * @param dataAreaId Key property. See {@link ReleaseKindTables.dataAreaId}.
   * @param releaseKindId Key property. See {@link ReleaseKindTables.releaseKindId}.
   * @returns A request builder for creating requests that delete an entity of type `ReleaseKindTables`.
   */
  delete(
    dataAreaId: string,
    releaseKindId: string
  ): DeleteRequestBuilder<ReleaseKindTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleaseKindTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleaseKindTables` by taking the entity as a parameter.
   */
  delete(
    entity: ReleaseKindTables<T>
  ): DeleteRequestBuilder<ReleaseKindTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    releaseKindId?: string
  ): DeleteRequestBuilder<ReleaseKindTables<T>, T> {
    return new DeleteRequestBuilder<ReleaseKindTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleaseKindTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReleaseKindId: releaseKindId!
          }
    );
  }
}
