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
import { RetailSalesTaxOverrides } from './RetailSalesTaxOverrides';

/**
 * Request builder class for operations supported on the {@link RetailSalesTaxOverrides} entity.
 */
export class RetailSalesTaxOverridesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailSalesTaxOverrides<T>, T> {
  /**
   * Returns a request builder for querying all `RetailSalesTaxOverrides` entities.
   * @returns A request builder for creating requests to retrieve all `RetailSalesTaxOverrides` entities.
   */
  getAll(): GetAllRequestBuilder<RetailSalesTaxOverrides<T>, T> {
    return new GetAllRequestBuilder<RetailSalesTaxOverrides<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailSalesTaxOverrides` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailSalesTaxOverrides`.
   */
  create(
    entity: RetailSalesTaxOverrides<T>
  ): CreateRequestBuilder<RetailSalesTaxOverrides<T>, T> {
    return new CreateRequestBuilder<RetailSalesTaxOverrides<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailSalesTaxOverrides` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailSalesTaxOverrides.dataAreaId}.
   * @param code Key property. See {@link RetailSalesTaxOverrides.code}.
   * @returns A request builder for creating requests to retrieve one `RetailSalesTaxOverrides` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailSalesTaxOverrides<T>, T> {
    return new GetByKeyRequestBuilder<RetailSalesTaxOverrides<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Code: code
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailSalesTaxOverrides`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailSalesTaxOverrides`.
   */
  update(
    entity: RetailSalesTaxOverrides<T>
  ): UpdateRequestBuilder<RetailSalesTaxOverrides<T>, T> {
    return new UpdateRequestBuilder<RetailSalesTaxOverrides<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailSalesTaxOverrides`.
   * @param dataAreaId Key property. See {@link RetailSalesTaxOverrides.dataAreaId}.
   * @param code Key property. See {@link RetailSalesTaxOverrides.code}.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesTaxOverrides`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<RetailSalesTaxOverrides<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailSalesTaxOverrides`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesTaxOverrides` by taking the entity as a parameter.
   */
  delete(
    entity: RetailSalesTaxOverrides<T>
  ): DeleteRequestBuilder<RetailSalesTaxOverrides<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<RetailSalesTaxOverrides<T>, T> {
    return new DeleteRequestBuilder<RetailSalesTaxOverrides<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailSalesTaxOverrides
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
