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
import { ExpenseReportPurposes } from './ExpenseReportPurposes';

/**
 * Request builder class for operations supported on the {@link ExpenseReportPurposes} entity.
 */
export class ExpenseReportPurposesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseReportPurposes<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseReportPurposes` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseReportPurposes` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseReportPurposes<T>, T> {
    return new GetAllRequestBuilder<ExpenseReportPurposes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpenseReportPurposes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseReportPurposes`.
   */
  create(
    entity: ExpenseReportPurposes<T>
  ): CreateRequestBuilder<ExpenseReportPurposes<T>, T> {
    return new CreateRequestBuilder<ExpenseReportPurposes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpenseReportPurposes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpenseReportPurposes.dataAreaId}.
   * @param purpose Key property. See {@link ExpenseReportPurposes.purpose}.
   * @returns A request builder for creating requests to retrieve one `ExpenseReportPurposes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purpose: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseReportPurposes<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseReportPurposes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Purpose: purpose
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseReportPurposes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseReportPurposes`.
   */
  update(
    entity: ExpenseReportPurposes<T>
  ): UpdateRequestBuilder<ExpenseReportPurposes<T>, T> {
    return new UpdateRequestBuilder<ExpenseReportPurposes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseReportPurposes`.
   * @param dataAreaId Key property. See {@link ExpenseReportPurposes.dataAreaId}.
   * @param purpose Key property. See {@link ExpenseReportPurposes.purpose}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseReportPurposes`.
   */
  delete(
    dataAreaId: string,
    purpose: string
  ): DeleteRequestBuilder<ExpenseReportPurposes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseReportPurposes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseReportPurposes` by taking the entity as a parameter.
   */
  delete(
    entity: ExpenseReportPurposes<T>
  ): DeleteRequestBuilder<ExpenseReportPurposes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purpose?: string
  ): DeleteRequestBuilder<ExpenseReportPurposes<T>, T> {
    return new DeleteRequestBuilder<ExpenseReportPurposes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpenseReportPurposes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Purpose: purpose!
          }
    );
  }
}
