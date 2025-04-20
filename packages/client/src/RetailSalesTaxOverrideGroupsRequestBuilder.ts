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
import { RetailSalesTaxOverrideGroups } from './RetailSalesTaxOverrideGroups';

/**
 * Request builder class for operations supported on the {@link RetailSalesTaxOverrideGroups} entity.
 */
export class RetailSalesTaxOverrideGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailSalesTaxOverrideGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailSalesTaxOverrideGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailSalesTaxOverrideGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailSalesTaxOverrideGroups<T>, T> {
    return new GetAllRequestBuilder<RetailSalesTaxOverrideGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailSalesTaxOverrideGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailSalesTaxOverrideGroups`.
   */
  create(
    entity: RetailSalesTaxOverrideGroups<T>
  ): CreateRequestBuilder<RetailSalesTaxOverrideGroups<T>, T> {
    return new CreateRequestBuilder<RetailSalesTaxOverrideGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailSalesTaxOverrideGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailSalesTaxOverrideGroups.dataAreaId}.
   * @param code Key property. See {@link RetailSalesTaxOverrideGroups.code}.
   * @returns A request builder for creating requests to retrieve one `RetailSalesTaxOverrideGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailSalesTaxOverrideGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailSalesTaxOverrideGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Code: code
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailSalesTaxOverrideGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailSalesTaxOverrideGroups`.
   */
  update(
    entity: RetailSalesTaxOverrideGroups<T>
  ): UpdateRequestBuilder<RetailSalesTaxOverrideGroups<T>, T> {
    return new UpdateRequestBuilder<RetailSalesTaxOverrideGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailSalesTaxOverrideGroups`.
   * @param dataAreaId Key property. See {@link RetailSalesTaxOverrideGroups.dataAreaId}.
   * @param code Key property. See {@link RetailSalesTaxOverrideGroups.code}.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesTaxOverrideGroups`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<RetailSalesTaxOverrideGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailSalesTaxOverrideGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesTaxOverrideGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailSalesTaxOverrideGroups<T>
  ): DeleteRequestBuilder<RetailSalesTaxOverrideGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<RetailSalesTaxOverrideGroups<T>, T> {
    return new DeleteRequestBuilder<RetailSalesTaxOverrideGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailSalesTaxOverrideGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
