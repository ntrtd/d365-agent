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
import { EngineeringChangeRequestSources } from './EngineeringChangeRequestSources';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeRequestSources} entity.
 */
export class EngineeringChangeRequestSourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeRequestSources<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeRequestSources` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeRequestSources` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeRequestSources<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangeRequestSources<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeRequestSources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeRequestSources`.
   */
  create(
    entity: EngineeringChangeRequestSources<T>
  ): CreateRequestBuilder<EngineeringChangeRequestSources<T>, T> {
    return new CreateRequestBuilder<EngineeringChangeRequestSources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeRequestSources` entity based on its keys.
   * @param engineeringChangeRequestNumber Key property. See {@link EngineeringChangeRequestSources.engineeringChangeRequestNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeRequestSources` entity based on its keys.
   */
  getByKey(
    engineeringChangeRequestNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeRequestSources<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringChangeRequestSources<T>, T>(
      this.entityApi,
      { EngineeringChangeRequestNumber: engineeringChangeRequestNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeRequestSources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeRequestSources`.
   */
  update(
    entity: EngineeringChangeRequestSources<T>
  ): UpdateRequestBuilder<EngineeringChangeRequestSources<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangeRequestSources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeRequestSources`.
   * @param engineeringChangeRequestNumber Key property. See {@link EngineeringChangeRequestSources.engineeringChangeRequestNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeRequestSources`.
   */
  delete(
    engineeringChangeRequestNumber: string
  ): DeleteRequestBuilder<EngineeringChangeRequestSources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeRequestSources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeRequestSources` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeRequestSources<T>
  ): DeleteRequestBuilder<EngineeringChangeRequestSources<T>, T>;
  delete(
    engineeringChangeRequestNumberOrEntity: any
  ): DeleteRequestBuilder<EngineeringChangeRequestSources<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangeRequestSources<T>, T>(
      this.entityApi,
      engineeringChangeRequestNumberOrEntity instanceof
      EngineeringChangeRequestSources
        ? engineeringChangeRequestNumberOrEntity
        : {
            EngineeringChangeRequestNumber:
              engineeringChangeRequestNumberOrEntity!
          }
    );
  }
}
