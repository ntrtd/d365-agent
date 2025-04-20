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
import { ExpMobileExpenseLineAttachedToReports } from './ExpMobileExpenseLineAttachedToReports';

/**
 * Request builder class for operations supported on the {@link ExpMobileExpenseLineAttachedToReports} entity.
 */
export class ExpMobileExpenseLineAttachedToReportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileExpenseLineAttachedToReports<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileExpenseLineAttachedToReports` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileExpenseLineAttachedToReports` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileExpenseLineAttachedToReports<T>, T> {
    return new GetAllRequestBuilder<
      ExpMobileExpenseLineAttachedToReports<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpMobileExpenseLineAttachedToReports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileExpenseLineAttachedToReports`.
   */
  create(
    entity: ExpMobileExpenseLineAttachedToReports<T>
  ): CreateRequestBuilder<ExpMobileExpenseLineAttachedToReports<T>, T> {
    return new CreateRequestBuilder<
      ExpMobileExpenseLineAttachedToReports<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileExpenseLineAttachedToReports` entity based on its keys.
   * @param expTransNumber Key property. See {@link ExpMobileExpenseLineAttachedToReports.expTransNumber}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileExpenseLineAttachedToReports` entity based on its keys.
   */
  getByKey(
    expTransNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpMobileExpenseLineAttachedToReports<T>, T> {
    return new GetByKeyRequestBuilder<
      ExpMobileExpenseLineAttachedToReports<T>,
      T
    >(this.entityApi, { ExpTransNumber: expTransNumber });
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileExpenseLineAttachedToReports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileExpenseLineAttachedToReports`.
   */
  update(
    entity: ExpMobileExpenseLineAttachedToReports<T>
  ): UpdateRequestBuilder<ExpMobileExpenseLineAttachedToReports<T>, T> {
    return new UpdateRequestBuilder<
      ExpMobileExpenseLineAttachedToReports<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileExpenseLineAttachedToReports`.
   * @param expTransNumber Key property. See {@link ExpMobileExpenseLineAttachedToReports.expTransNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileExpenseLineAttachedToReports`.
   */
  delete(
    expTransNumber: string
  ): DeleteRequestBuilder<ExpMobileExpenseLineAttachedToReports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileExpenseLineAttachedToReports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileExpenseLineAttachedToReports` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileExpenseLineAttachedToReports<T>
  ): DeleteRequestBuilder<ExpMobileExpenseLineAttachedToReports<T>, T>;
  delete(
    expTransNumberOrEntity: any
  ): DeleteRequestBuilder<ExpMobileExpenseLineAttachedToReports<T>, T> {
    return new DeleteRequestBuilder<
      ExpMobileExpenseLineAttachedToReports<T>,
      T
    >(
      this.entityApi,
      expTransNumberOrEntity instanceof ExpMobileExpenseLineAttachedToReports
        ? expTransNumberOrEntity
        : { ExpTransNumber: expTransNumberOrEntity! }
    );
  }
}
