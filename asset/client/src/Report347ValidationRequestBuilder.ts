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
import { Report347Validation } from './Report347Validation';

/**
 * Request builder class for operations supported on the {@link Report347Validation} entity.
 */
export class Report347ValidationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Report347Validation<T>, T> {
  /**
   * Returns a request builder for querying all `Report347Validation` entities.
   * @returns A request builder for creating requests to retrieve all `Report347Validation` entities.
   */
  getAll(): GetAllRequestBuilder<Report347Validation<T>, T> {
    return new GetAllRequestBuilder<Report347Validation<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Report347Validation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Report347Validation`.
   */
  create(
    entity: Report347Validation<T>
  ): CreateRequestBuilder<Report347Validation<T>, T> {
    return new CreateRequestBuilder<Report347Validation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Report347Validation` entity based on its keys.
   * @param dataAreaId Key property. See {@link Report347Validation.dataAreaId}.
   * @param salesTaxGroup Key property. See {@link Report347Validation.salesTaxGroup}.
   * @returns A request builder for creating requests to retrieve one `Report347Validation` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesTaxGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Report347Validation<T>, T> {
    return new GetByKeyRequestBuilder<Report347Validation<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesTaxGroup: salesTaxGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Report347Validation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Report347Validation`.
   */
  update(
    entity: Report347Validation<T>
  ): UpdateRequestBuilder<Report347Validation<T>, T> {
    return new UpdateRequestBuilder<Report347Validation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Report347Validation`.
   * @param dataAreaId Key property. See {@link Report347Validation.dataAreaId}.
   * @param salesTaxGroup Key property. See {@link Report347Validation.salesTaxGroup}.
   * @returns A request builder for creating requests that delete an entity of type `Report347Validation`.
   */
  delete(
    dataAreaId: string,
    salesTaxGroup: string
  ): DeleteRequestBuilder<Report347Validation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Report347Validation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Report347Validation` by taking the entity as a parameter.
   */
  delete(
    entity: Report347Validation<T>
  ): DeleteRequestBuilder<Report347Validation<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesTaxGroup?: string
  ): DeleteRequestBuilder<Report347Validation<T>, T> {
    return new DeleteRequestBuilder<Report347Validation<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Report347Validation
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesTaxGroup: salesTaxGroup!
          }
    );
  }
}
