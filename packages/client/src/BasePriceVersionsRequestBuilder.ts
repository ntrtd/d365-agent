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
import { BasePriceVersions } from './BasePriceVersions';

/**
 * Request builder class for operations supported on the {@link BasePriceVersions} entity.
 */
export class BasePriceVersionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BasePriceVersions<T>, T> {
  /**
   * Returns a request builder for querying all `BasePriceVersions` entities.
   * @returns A request builder for creating requests to retrieve all `BasePriceVersions` entities.
   */
  getAll(): GetAllRequestBuilder<BasePriceVersions<T>, T> {
    return new GetAllRequestBuilder<BasePriceVersions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BasePriceVersions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BasePriceVersions`.
   */
  create(
    entity: BasePriceVersions<T>
  ): CreateRequestBuilder<BasePriceVersions<T>, T> {
    return new CreateRequestBuilder<BasePriceVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BasePriceVersions` entity based on its keys.
   * @param dataAreaId Key property. See {@link BasePriceVersions.dataAreaId}.
   * @param versionId Key property. See {@link BasePriceVersions.versionId}.
   * @returns A request builder for creating requests to retrieve one `BasePriceVersions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    versionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BasePriceVersions<T>, T> {
    return new GetByKeyRequestBuilder<BasePriceVersions<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      VersionId: versionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BasePriceVersions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BasePriceVersions`.
   */
  update(
    entity: BasePriceVersions<T>
  ): UpdateRequestBuilder<BasePriceVersions<T>, T> {
    return new UpdateRequestBuilder<BasePriceVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BasePriceVersions`.
   * @param dataAreaId Key property. See {@link BasePriceVersions.dataAreaId}.
   * @param versionId Key property. See {@link BasePriceVersions.versionId}.
   * @returns A request builder for creating requests that delete an entity of type `BasePriceVersions`.
   */
  delete(
    dataAreaId: string,
    versionId: string
  ): DeleteRequestBuilder<BasePriceVersions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BasePriceVersions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BasePriceVersions` by taking the entity as a parameter.
   */
  delete(
    entity: BasePriceVersions<T>
  ): DeleteRequestBuilder<BasePriceVersions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    versionId?: string
  ): DeleteRequestBuilder<BasePriceVersions<T>, T> {
    return new DeleteRequestBuilder<BasePriceVersions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BasePriceVersions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VersionId: versionId!
          }
    );
  }
}
