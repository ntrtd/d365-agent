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
import { SalesContactPersonTitles } from './SalesContactPersonTitles';

/**
 * Request builder class for operations supported on the {@link SalesContactPersonTitles} entity.
 */
export class SalesContactPersonTitlesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesContactPersonTitles<T>, T> {
  /**
   * Returns a request builder for querying all `SalesContactPersonTitles` entities.
   * @returns A request builder for creating requests to retrieve all `SalesContactPersonTitles` entities.
   */
  getAll(): GetAllRequestBuilder<SalesContactPersonTitles<T>, T> {
    return new GetAllRequestBuilder<SalesContactPersonTitles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesContactPersonTitles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesContactPersonTitles`.
   */
  create(
    entity: SalesContactPersonTitles<T>
  ): CreateRequestBuilder<SalesContactPersonTitles<T>, T> {
    return new CreateRequestBuilder<SalesContactPersonTitles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesContactPersonTitles` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesContactPersonTitles.dataAreaId}.
   * @param jobTitleAlias Key property. See {@link SalesContactPersonTitles.jobTitleAlias}.
   * @returns A request builder for creating requests to retrieve one `SalesContactPersonTitles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    jobTitleAlias: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesContactPersonTitles<T>, T> {
    return new GetByKeyRequestBuilder<SalesContactPersonTitles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JobTitleAlias: jobTitleAlias
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesContactPersonTitles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesContactPersonTitles`.
   */
  update(
    entity: SalesContactPersonTitles<T>
  ): UpdateRequestBuilder<SalesContactPersonTitles<T>, T> {
    return new UpdateRequestBuilder<SalesContactPersonTitles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesContactPersonTitles`.
   * @param dataAreaId Key property. See {@link SalesContactPersonTitles.dataAreaId}.
   * @param jobTitleAlias Key property. See {@link SalesContactPersonTitles.jobTitleAlias}.
   * @returns A request builder for creating requests that delete an entity of type `SalesContactPersonTitles`.
   */
  delete(
    dataAreaId: string,
    jobTitleAlias: string
  ): DeleteRequestBuilder<SalesContactPersonTitles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesContactPersonTitles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesContactPersonTitles` by taking the entity as a parameter.
   */
  delete(
    entity: SalesContactPersonTitles<T>
  ): DeleteRequestBuilder<SalesContactPersonTitles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    jobTitleAlias?: string
  ): DeleteRequestBuilder<SalesContactPersonTitles<T>, T> {
    return new DeleteRequestBuilder<SalesContactPersonTitles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesContactPersonTitles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JobTitleAlias: jobTitleAlias!
          }
    );
  }
}
