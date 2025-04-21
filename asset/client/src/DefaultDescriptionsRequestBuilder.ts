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
import { DefaultDescriptions } from './DefaultDescriptions';
import { LedgerTransTxt } from './LedgerTransTxt';

/**
 * Request builder class for operations supported on the {@link DefaultDescriptions} entity.
 */
export class DefaultDescriptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DefaultDescriptions<T>, T> {
  /**
   * Returns a request builder for querying all `DefaultDescriptions` entities.
   * @returns A request builder for creating requests to retrieve all `DefaultDescriptions` entities.
   */
  getAll(): GetAllRequestBuilder<DefaultDescriptions<T>, T> {
    return new GetAllRequestBuilder<DefaultDescriptions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DefaultDescriptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DefaultDescriptions`.
   */
  create(
    entity: DefaultDescriptions<T>
  ): CreateRequestBuilder<DefaultDescriptions<T>, T> {
    return new CreateRequestBuilder<DefaultDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DefaultDescriptions` entity based on its keys.
   * @param dataAreaId Key property. See {@link DefaultDescriptions.dataAreaId}.
   * @param description Key property. See {@link DefaultDescriptions.description}.
   * @param language Key property. See {@link DefaultDescriptions.language}.
   * @returns A request builder for creating requests to retrieve one `DefaultDescriptions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    description: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LedgerTransTxt'
    >,
    language: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DefaultDescriptions<T>, T> {
    return new GetByKeyRequestBuilder<DefaultDescriptions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Description: description,
        Language: language
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DefaultDescriptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DefaultDescriptions`.
   */
  update(
    entity: DefaultDescriptions<T>
  ): UpdateRequestBuilder<DefaultDescriptions<T>, T> {
    return new UpdateRequestBuilder<DefaultDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DefaultDescriptions`.
   * @param dataAreaId Key property. See {@link DefaultDescriptions.dataAreaId}.
   * @param description Key property. See {@link DefaultDescriptions.description}.
   * @param language Key property. See {@link DefaultDescriptions.language}.
   * @returns A request builder for creating requests that delete an entity of type `DefaultDescriptions`.
   */
  delete(
    dataAreaId: string,
    description: LedgerTransTxt,
    language: string
  ): DeleteRequestBuilder<DefaultDescriptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DefaultDescriptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DefaultDescriptions` by taking the entity as a parameter.
   */
  delete(
    entity: DefaultDescriptions<T>
  ): DeleteRequestBuilder<DefaultDescriptions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    description?: LedgerTransTxt,
    language?: string
  ): DeleteRequestBuilder<DefaultDescriptions<T>, T> {
    return new DeleteRequestBuilder<DefaultDescriptions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DefaultDescriptions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Description: description!,
            Language: language!
          }
    );
  }
}
