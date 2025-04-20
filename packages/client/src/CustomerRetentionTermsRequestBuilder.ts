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
import { CustomerRetentionTerms } from './CustomerRetentionTerms';

/**
 * Request builder class for operations supported on the {@link CustomerRetentionTerms} entity.
 */
export class CustomerRetentionTermsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerRetentionTerms<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerRetentionTerms` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerRetentionTerms` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerRetentionTerms<T>, T> {
    return new GetAllRequestBuilder<CustomerRetentionTerms<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerRetentionTerms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerRetentionTerms`.
   */
  create(
    entity: CustomerRetentionTerms<T>
  ): CreateRequestBuilder<CustomerRetentionTerms<T>, T> {
    return new CreateRequestBuilder<CustomerRetentionTerms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerRetentionTerms` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerRetentionTerms.dataAreaId}.
   * @param retentionTerm Key property. See {@link CustomerRetentionTerms.retentionTerm}.
   * @returns A request builder for creating requests to retrieve one `CustomerRetentionTerms` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    retentionTerm: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerRetentionTerms<T>, T> {
    return new GetByKeyRequestBuilder<CustomerRetentionTerms<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RetentionTerm: retentionTerm
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerRetentionTerms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerRetentionTerms`.
   */
  update(
    entity: CustomerRetentionTerms<T>
  ): UpdateRequestBuilder<CustomerRetentionTerms<T>, T> {
    return new UpdateRequestBuilder<CustomerRetentionTerms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerRetentionTerms`.
   * @param dataAreaId Key property. See {@link CustomerRetentionTerms.dataAreaId}.
   * @param retentionTerm Key property. See {@link CustomerRetentionTerms.retentionTerm}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerRetentionTerms`.
   */
  delete(
    dataAreaId: string,
    retentionTerm: string
  ): DeleteRequestBuilder<CustomerRetentionTerms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerRetentionTerms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerRetentionTerms` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerRetentionTerms<T>
  ): DeleteRequestBuilder<CustomerRetentionTerms<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    retentionTerm?: string
  ): DeleteRequestBuilder<CustomerRetentionTerms<T>, T> {
    return new DeleteRequestBuilder<CustomerRetentionTerms<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerRetentionTerms
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RetentionTerm: retentionTerm!
          }
    );
  }
}
