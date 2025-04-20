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
import { EngineeringChangeSeverities } from './EngineeringChangeSeverities';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeSeverities} entity.
 */
export class EngineeringChangeSeveritiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeSeverities<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeSeverities` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeSeverities` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeSeverities<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangeSeverities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeSeverities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeSeverities`.
   */
  create(
    entity: EngineeringChangeSeverities<T>
  ): CreateRequestBuilder<EngineeringChangeSeverities<T>, T> {
    return new CreateRequestBuilder<EngineeringChangeSeverities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeSeverities` entity based on its keys.
   * @param severityName Key property. See {@link EngineeringChangeSeverities.severityName}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeSeverities` entity based on its keys.
   */
  getByKey(
    severityName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeSeverities<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringChangeSeverities<T>, T>(
      this.entityApi,
      { SeverityName: severityName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeSeverities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeSeverities`.
   */
  update(
    entity: EngineeringChangeSeverities<T>
  ): UpdateRequestBuilder<EngineeringChangeSeverities<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangeSeverities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeSeverities`.
   * @param severityName Key property. See {@link EngineeringChangeSeverities.severityName}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeSeverities`.
   */
  delete(
    severityName: string
  ): DeleteRequestBuilder<EngineeringChangeSeverities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeSeverities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeSeverities` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeSeverities<T>
  ): DeleteRequestBuilder<EngineeringChangeSeverities<T>, T>;
  delete(
    severityNameOrEntity: any
  ): DeleteRequestBuilder<EngineeringChangeSeverities<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangeSeverities<T>, T>(
      this.entityApi,
      severityNameOrEntity instanceof EngineeringChangeSeverities
        ? severityNameOrEntity
        : { SeverityName: severityNameOrEntity! }
    );
  }
}
