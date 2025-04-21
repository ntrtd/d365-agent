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
import { AlcoholActivityKinds } from './AlcoholActivityKinds';

/**
 * Request builder class for operations supported on the {@link AlcoholActivityKinds} entity.
 */
export class AlcoholActivityKindsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AlcoholActivityKinds<T>, T> {
  /**
   * Returns a request builder for querying all `AlcoholActivityKinds` entities.
   * @returns A request builder for creating requests to retrieve all `AlcoholActivityKinds` entities.
   */
  getAll(): GetAllRequestBuilder<AlcoholActivityKinds<T>, T> {
    return new GetAllRequestBuilder<AlcoholActivityKinds<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AlcoholActivityKinds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AlcoholActivityKinds`.
   */
  create(
    entity: AlcoholActivityKinds<T>
  ): CreateRequestBuilder<AlcoholActivityKinds<T>, T> {
    return new CreateRequestBuilder<AlcoholActivityKinds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AlcoholActivityKinds` entity based on its keys.
   * @param kindId Key property. See {@link AlcoholActivityKinds.kindId}.
   * @returns A request builder for creating requests to retrieve one `AlcoholActivityKinds` entity based on its keys.
   */
  getByKey(
    kindId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AlcoholActivityKinds<T>, T> {
    return new GetByKeyRequestBuilder<AlcoholActivityKinds<T>, T>(
      this.entityApi,
      { KindId: kindId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AlcoholActivityKinds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AlcoholActivityKinds`.
   */
  update(
    entity: AlcoholActivityKinds<T>
  ): UpdateRequestBuilder<AlcoholActivityKinds<T>, T> {
    return new UpdateRequestBuilder<AlcoholActivityKinds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AlcoholActivityKinds`.
   * @param kindId Key property. See {@link AlcoholActivityKinds.kindId}.
   * @returns A request builder for creating requests that delete an entity of type `AlcoholActivityKinds`.
   */
  delete(kindId: string): DeleteRequestBuilder<AlcoholActivityKinds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AlcoholActivityKinds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AlcoholActivityKinds` by taking the entity as a parameter.
   */
  delete(
    entity: AlcoholActivityKinds<T>
  ): DeleteRequestBuilder<AlcoholActivityKinds<T>, T>;
  delete(
    kindIdOrEntity: any
  ): DeleteRequestBuilder<AlcoholActivityKinds<T>, T> {
    return new DeleteRequestBuilder<AlcoholActivityKinds<T>, T>(
      this.entityApi,
      kindIdOrEntity instanceof AlcoholActivityKinds
        ? kindIdOrEntity
        : { KindId: kindIdOrEntity! }
    );
  }
}
