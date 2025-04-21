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
import { EngineeringChangeReasons } from './EngineeringChangeReasons';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeReasons} entity.
 */
export class EngineeringChangeReasonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeReasons<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeReasons` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeReasons` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeReasons<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangeReasons<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeReasons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeReasons`.
   */
  create(
    entity: EngineeringChangeReasons<T>
  ): CreateRequestBuilder<EngineeringChangeReasons<T>, T> {
    return new CreateRequestBuilder<EngineeringChangeReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeReasons` entity based on its keys.
   * @param reasonName Key property. See {@link EngineeringChangeReasons.reasonName}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeReasons` entity based on its keys.
   */
  getByKey(
    reasonName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeReasons<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringChangeReasons<T>, T>(
      this.entityApi,
      { ReasonName: reasonName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeReasons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeReasons`.
   */
  update(
    entity: EngineeringChangeReasons<T>
  ): UpdateRequestBuilder<EngineeringChangeReasons<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangeReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeReasons`.
   * @param reasonName Key property. See {@link EngineeringChangeReasons.reasonName}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeReasons`.
   */
  delete(
    reasonName: string
  ): DeleteRequestBuilder<EngineeringChangeReasons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeReasons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeReasons` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeReasons<T>
  ): DeleteRequestBuilder<EngineeringChangeReasons<T>, T>;
  delete(
    reasonNameOrEntity: any
  ): DeleteRequestBuilder<EngineeringChangeReasons<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangeReasons<T>, T>(
      this.entityApi,
      reasonNameOrEntity instanceof EngineeringChangeReasons
        ? reasonNameOrEntity
        : { ReasonName: reasonNameOrEntity! }
    );
  }
}
