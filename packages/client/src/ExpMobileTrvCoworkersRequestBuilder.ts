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
import { ExpMobileTrvCoworkers } from './ExpMobileTrvCoworkers';

/**
 * Request builder class for operations supported on the {@link ExpMobileTrvCoworkers} entity.
 */
export class ExpMobileTrvCoworkersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileTrvCoworkers<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileTrvCoworkers` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileTrvCoworkers` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileTrvCoworkers<T>, T> {
    return new GetAllRequestBuilder<ExpMobileTrvCoworkers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpMobileTrvCoworkers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileTrvCoworkers`.
   */
  create(
    entity: ExpMobileTrvCoworkers<T>
  ): CreateRequestBuilder<ExpMobileTrvCoworkers<T>, T> {
    return new CreateRequestBuilder<ExpMobileTrvCoworkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileTrvCoworkers` entity based on its keys.
   * @param company Key property. See {@link ExpMobileTrvCoworkers.company}.
   * @param name Key property. See {@link ExpMobileTrvCoworkers.name}.
   * @param title Key property. See {@link ExpMobileTrvCoworkers.title}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileTrvCoworkers` entity based on its keys.
   */
  getByKey(
    company: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    title: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpMobileTrvCoworkers<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileTrvCoworkers<T>, T>(
      this.entityApi,
      {
        Company: company,
        Name: name,
        Title: title
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileTrvCoworkers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileTrvCoworkers`.
   */
  update(
    entity: ExpMobileTrvCoworkers<T>
  ): UpdateRequestBuilder<ExpMobileTrvCoworkers<T>, T> {
    return new UpdateRequestBuilder<ExpMobileTrvCoworkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileTrvCoworkers`.
   * @param company Key property. See {@link ExpMobileTrvCoworkers.company}.
   * @param name Key property. See {@link ExpMobileTrvCoworkers.name}.
   * @param title Key property. See {@link ExpMobileTrvCoworkers.title}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileTrvCoworkers`.
   */
  delete(
    company: string,
    name: string,
    title: string
  ): DeleteRequestBuilder<ExpMobileTrvCoworkers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileTrvCoworkers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileTrvCoworkers` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileTrvCoworkers<T>
  ): DeleteRequestBuilder<ExpMobileTrvCoworkers<T>, T>;
  delete(
    companyOrEntity: any,
    name?: string,
    title?: string
  ): DeleteRequestBuilder<ExpMobileTrvCoworkers<T>, T> {
    return new DeleteRequestBuilder<ExpMobileTrvCoworkers<T>, T>(
      this.entityApi,
      companyOrEntity instanceof ExpMobileTrvCoworkers
        ? companyOrEntity
        : {
            Company: companyOrEntity!,
            Name: name!,
            Title: title!
          }
    );
  }
}
