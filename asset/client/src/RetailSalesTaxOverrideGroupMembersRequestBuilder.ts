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
import { RetailSalesTaxOverrideGroupMembers } from './RetailSalesTaxOverrideGroupMembers';

/**
 * Request builder class for operations supported on the {@link RetailSalesTaxOverrideGroupMembers} entity.
 */
export class RetailSalesTaxOverrideGroupMembersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailSalesTaxOverrideGroupMembers<T>, T> {
  /**
   * Returns a request builder for querying all `RetailSalesTaxOverrideGroupMembers` entities.
   * @returns A request builder for creating requests to retrieve all `RetailSalesTaxOverrideGroupMembers` entities.
   */
  getAll(): GetAllRequestBuilder<RetailSalesTaxOverrideGroupMembers<T>, T> {
    return new GetAllRequestBuilder<RetailSalesTaxOverrideGroupMembers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailSalesTaxOverrideGroupMembers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailSalesTaxOverrideGroupMembers`.
   */
  create(
    entity: RetailSalesTaxOverrideGroupMembers<T>
  ): CreateRequestBuilder<RetailSalesTaxOverrideGroupMembers<T>, T> {
    return new CreateRequestBuilder<RetailSalesTaxOverrideGroupMembers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailSalesTaxOverrideGroupMembers` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailSalesTaxOverrideGroupMembers.dataAreaId}.
   * @param salesTaxOverrideCode Key property. See {@link RetailSalesTaxOverrideGroupMembers.salesTaxOverrideCode}.
   * @param salesTaxOverrideGroupCode Key property. See {@link RetailSalesTaxOverrideGroupMembers.salesTaxOverrideGroupCode}.
   * @returns A request builder for creating requests to retrieve one `RetailSalesTaxOverrideGroupMembers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesTaxOverrideCode: DeserializedType<T, 'Edm.String'>,
    salesTaxOverrideGroupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailSalesTaxOverrideGroupMembers<T>, T> {
    return new GetByKeyRequestBuilder<RetailSalesTaxOverrideGroupMembers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesTaxOverrideCode: salesTaxOverrideCode,
        SalesTaxOverrideGroupCode: salesTaxOverrideGroupCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailSalesTaxOverrideGroupMembers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailSalesTaxOverrideGroupMembers`.
   */
  update(
    entity: RetailSalesTaxOverrideGroupMembers<T>
  ): UpdateRequestBuilder<RetailSalesTaxOverrideGroupMembers<T>, T> {
    return new UpdateRequestBuilder<RetailSalesTaxOverrideGroupMembers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailSalesTaxOverrideGroupMembers`.
   * @param dataAreaId Key property. See {@link RetailSalesTaxOverrideGroupMembers.dataAreaId}.
   * @param salesTaxOverrideCode Key property. See {@link RetailSalesTaxOverrideGroupMembers.salesTaxOverrideCode}.
   * @param salesTaxOverrideGroupCode Key property. See {@link RetailSalesTaxOverrideGroupMembers.salesTaxOverrideGroupCode}.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesTaxOverrideGroupMembers`.
   */
  delete(
    dataAreaId: string,
    salesTaxOverrideCode: string,
    salesTaxOverrideGroupCode: string
  ): DeleteRequestBuilder<RetailSalesTaxOverrideGroupMembers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailSalesTaxOverrideGroupMembers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesTaxOverrideGroupMembers` by taking the entity as a parameter.
   */
  delete(
    entity: RetailSalesTaxOverrideGroupMembers<T>
  ): DeleteRequestBuilder<RetailSalesTaxOverrideGroupMembers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesTaxOverrideCode?: string,
    salesTaxOverrideGroupCode?: string
  ): DeleteRequestBuilder<RetailSalesTaxOverrideGroupMembers<T>, T> {
    return new DeleteRequestBuilder<RetailSalesTaxOverrideGroupMembers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailSalesTaxOverrideGroupMembers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesTaxOverrideCode: salesTaxOverrideCode!,
            SalesTaxOverrideGroupCode: salesTaxOverrideGroupCode!
          }
    );
  }
}
