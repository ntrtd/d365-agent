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
import { IntegrationSourceMappings } from './IntegrationSourceMappings';
import { RetailTeamsIntegrationSourceType } from './RetailTeamsIntegrationSourceType';

/**
 * Request builder class for operations supported on the {@link IntegrationSourceMappings} entity.
 */
export class IntegrationSourceMappingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntegrationSourceMappings<T>, T> {
  /**
   * Returns a request builder for querying all `IntegrationSourceMappings` entities.
   * @returns A request builder for creating requests to retrieve all `IntegrationSourceMappings` entities.
   */
  getAll(): GetAllRequestBuilder<IntegrationSourceMappings<T>, T> {
    return new GetAllRequestBuilder<IntegrationSourceMappings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IntegrationSourceMappings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntegrationSourceMappings`.
   */
  create(
    entity: IntegrationSourceMappings<T>
  ): CreateRequestBuilder<IntegrationSourceMappings<T>, T> {
    return new CreateRequestBuilder<IntegrationSourceMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntegrationSourceMappings` entity based on its keys.
   * @param sourceType Key property. See {@link IntegrationSourceMappings.sourceType}.
   * @param sourceId Key property. See {@link IntegrationSourceMappings.sourceId}.
   * @returns A request builder for creating requests to retrieve one `IntegrationSourceMappings` entity based on its keys.
   */
  getByKey(
    sourceType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailTeamsIntegrationSourceType'
    >,
    sourceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntegrationSourceMappings<T>, T> {
    return new GetByKeyRequestBuilder<IntegrationSourceMappings<T>, T>(
      this.entityApi,
      {
        SourceType: sourceType,
        SourceId: sourceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntegrationSourceMappings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntegrationSourceMappings`.
   */
  update(
    entity: IntegrationSourceMappings<T>
  ): UpdateRequestBuilder<IntegrationSourceMappings<T>, T> {
    return new UpdateRequestBuilder<IntegrationSourceMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntegrationSourceMappings`.
   * @param sourceType Key property. See {@link IntegrationSourceMappings.sourceType}.
   * @param sourceId Key property. See {@link IntegrationSourceMappings.sourceId}.
   * @returns A request builder for creating requests that delete an entity of type `IntegrationSourceMappings`.
   */
  delete(
    sourceType: RetailTeamsIntegrationSourceType,
    sourceId: string
  ): DeleteRequestBuilder<IntegrationSourceMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntegrationSourceMappings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntegrationSourceMappings` by taking the entity as a parameter.
   */
  delete(
    entity: IntegrationSourceMappings<T>
  ): DeleteRequestBuilder<IntegrationSourceMappings<T>, T>;
  delete(
    sourceTypeOrEntity: any,
    sourceId?: string
  ): DeleteRequestBuilder<IntegrationSourceMappings<T>, T> {
    return new DeleteRequestBuilder<IntegrationSourceMappings<T>, T>(
      this.entityApi,
      sourceTypeOrEntity instanceof IntegrationSourceMappings
        ? sourceTypeOrEntity
        : {
            SourceType: sourceTypeOrEntity!,
            SourceId: sourceId!
          }
    );
  }
}
