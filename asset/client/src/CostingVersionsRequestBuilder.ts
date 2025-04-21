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
import { CostingVersions } from './CostingVersions';

/**
 * Request builder class for operations supported on the {@link CostingVersions} entity.
 */
export class CostingVersionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostingVersions<T>, T> {
  /**
   * Returns a request builder for querying all `CostingVersions` entities.
   * @returns A request builder for creating requests to retrieve all `CostingVersions` entities.
   */
  getAll(): GetAllRequestBuilder<CostingVersions<T>, T> {
    return new GetAllRequestBuilder<CostingVersions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostingVersions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostingVersions`.
   */
  create(
    entity: CostingVersions<T>
  ): CreateRequestBuilder<CostingVersions<T>, T> {
    return new CreateRequestBuilder<CostingVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CostingVersions` entity based on its keys.
   * @param dataAreaId Key property. See {@link CostingVersions.dataAreaId}.
   * @param versionId Key property. See {@link CostingVersions.versionId}.
   * @returns A request builder for creating requests to retrieve one `CostingVersions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    versionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostingVersions<T>, T> {
    return new GetByKeyRequestBuilder<CostingVersions<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      VersionId: versionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostingVersions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostingVersions`.
   */
  update(
    entity: CostingVersions<T>
  ): UpdateRequestBuilder<CostingVersions<T>, T> {
    return new UpdateRequestBuilder<CostingVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostingVersions`.
   * @param dataAreaId Key property. See {@link CostingVersions.dataAreaId}.
   * @param versionId Key property. See {@link CostingVersions.versionId}.
   * @returns A request builder for creating requests that delete an entity of type `CostingVersions`.
   */
  delete(
    dataAreaId: string,
    versionId: string
  ): DeleteRequestBuilder<CostingVersions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostingVersions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostingVersions` by taking the entity as a parameter.
   */
  delete(
    entity: CostingVersions<T>
  ): DeleteRequestBuilder<CostingVersions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    versionId?: string
  ): DeleteRequestBuilder<CostingVersions<T>, T> {
    return new DeleteRequestBuilder<CostingVersions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CostingVersions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VersionId: versionId!
          }
    );
  }
}
