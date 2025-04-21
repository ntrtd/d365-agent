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
import { ParsingSetups } from './ParsingSetups';

/**
 * Request builder class for operations supported on the {@link ParsingSetups} entity.
 */
export class ParsingSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ParsingSetups<T>, T> {
  /**
   * Returns a request builder for querying all `ParsingSetups` entities.
   * @returns A request builder for creating requests to retrieve all `ParsingSetups` entities.
   */
  getAll(): GetAllRequestBuilder<ParsingSetups<T>, T> {
    return new GetAllRequestBuilder<ParsingSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ParsingSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ParsingSetups`.
   */
  create(entity: ParsingSetups<T>): CreateRequestBuilder<ParsingSetups<T>, T> {
    return new CreateRequestBuilder<ParsingSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ParsingSetups` entity based on its keys.
   * @param identifier Key property. See {@link ParsingSetups.identifier}.
   * @returns A request builder for creating requests to retrieve one `ParsingSetups` entity based on its keys.
   */
  getByKey(
    identifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ParsingSetups<T>, T> {
    return new GetByKeyRequestBuilder<ParsingSetups<T>, T>(this.entityApi, {
      Identifier: identifier
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ParsingSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ParsingSetups`.
   */
  update(entity: ParsingSetups<T>): UpdateRequestBuilder<ParsingSetups<T>, T> {
    return new UpdateRequestBuilder<ParsingSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ParsingSetups`.
   * @param identifier Key property. See {@link ParsingSetups.identifier}.
   * @returns A request builder for creating requests that delete an entity of type `ParsingSetups`.
   */
  delete(identifier: string): DeleteRequestBuilder<ParsingSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ParsingSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ParsingSetups` by taking the entity as a parameter.
   */
  delete(entity: ParsingSetups<T>): DeleteRequestBuilder<ParsingSetups<T>, T>;
  delete(identifierOrEntity: any): DeleteRequestBuilder<ParsingSetups<T>, T> {
    return new DeleteRequestBuilder<ParsingSetups<T>, T>(
      this.entityApi,
      identifierOrEntity instanceof ParsingSetups
        ? identifierOrEntity
        : { Identifier: identifierOrEntity! }
    );
  }
}
