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
import { TeamsV2 } from './TeamsV2';

/**
 * Request builder class for operations supported on the {@link TeamsV2} entity.
 */
export class TeamsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TeamsV2<T>, T> {
  /**
   * Returns a request builder for querying all `TeamsV2` entities.
   * @returns A request builder for creating requests to retrieve all `TeamsV2` entities.
   */
  getAll(): GetAllRequestBuilder<TeamsV2<T>, T> {
    return new GetAllRequestBuilder<TeamsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TeamsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TeamsV2`.
   */
  create(entity: TeamsV2<T>): CreateRequestBuilder<TeamsV2<T>, T> {
    return new CreateRequestBuilder<TeamsV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TeamsV2` entity based on its keys.
   * @param name Key property. See {@link TeamsV2.name}.
   * @returns A request builder for creating requests to retrieve one `TeamsV2` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TeamsV2<T>, T> {
    return new GetByKeyRequestBuilder<TeamsV2<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TeamsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TeamsV2`.
   */
  update(entity: TeamsV2<T>): UpdateRequestBuilder<TeamsV2<T>, T> {
    return new UpdateRequestBuilder<TeamsV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TeamsV2`.
   * @param name Key property. See {@link TeamsV2.name}.
   * @returns A request builder for creating requests that delete an entity of type `TeamsV2`.
   */
  delete(name: string): DeleteRequestBuilder<TeamsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TeamsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TeamsV2` by taking the entity as a parameter.
   */
  delete(entity: TeamsV2<T>): DeleteRequestBuilder<TeamsV2<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<TeamsV2<T>, T> {
    return new DeleteRequestBuilder<TeamsV2<T>, T>(
      this.entityApi,
      nameOrEntity instanceof TeamsV2 ? nameOrEntity : { Name: nameOrEntity! }
    );
  }
}
