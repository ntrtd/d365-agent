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
import { RetailAffiliationPriceGroups } from './RetailAffiliationPriceGroups';

/**
 * Request builder class for operations supported on the {@link RetailAffiliationPriceGroups} entity.
 */
export class RetailAffiliationPriceGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailAffiliationPriceGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailAffiliationPriceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailAffiliationPriceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailAffiliationPriceGroups<T>, T> {
    return new GetAllRequestBuilder<RetailAffiliationPriceGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailAffiliationPriceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailAffiliationPriceGroups`.
   */
  create(
    entity: RetailAffiliationPriceGroups<T>
  ): CreateRequestBuilder<RetailAffiliationPriceGroups<T>, T> {
    return new CreateRequestBuilder<RetailAffiliationPriceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailAffiliationPriceGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailAffiliationPriceGroups.dataAreaId}.
   * @param affiliationName Key property. See {@link RetailAffiliationPriceGroups.affiliationName}.
   * @param priceCustomerGroupCode Key property. See {@link RetailAffiliationPriceGroups.priceCustomerGroupCode}.
   * @returns A request builder for creating requests to retrieve one `RetailAffiliationPriceGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    affiliationName: DeserializedType<T, 'Edm.String'>,
    priceCustomerGroupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailAffiliationPriceGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailAffiliationPriceGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AffiliationName: affiliationName,
        PriceCustomerGroupCode: priceCustomerGroupCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailAffiliationPriceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailAffiliationPriceGroups`.
   */
  update(
    entity: RetailAffiliationPriceGroups<T>
  ): UpdateRequestBuilder<RetailAffiliationPriceGroups<T>, T> {
    return new UpdateRequestBuilder<RetailAffiliationPriceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailAffiliationPriceGroups`.
   * @param dataAreaId Key property. See {@link RetailAffiliationPriceGroups.dataAreaId}.
   * @param affiliationName Key property. See {@link RetailAffiliationPriceGroups.affiliationName}.
   * @param priceCustomerGroupCode Key property. See {@link RetailAffiliationPriceGroups.priceCustomerGroupCode}.
   * @returns A request builder for creating requests that delete an entity of type `RetailAffiliationPriceGroups`.
   */
  delete(
    dataAreaId: string,
    affiliationName: string,
    priceCustomerGroupCode: string
  ): DeleteRequestBuilder<RetailAffiliationPriceGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailAffiliationPriceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailAffiliationPriceGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailAffiliationPriceGroups<T>
  ): DeleteRequestBuilder<RetailAffiliationPriceGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    affiliationName?: string,
    priceCustomerGroupCode?: string
  ): DeleteRequestBuilder<RetailAffiliationPriceGroups<T>, T> {
    return new DeleteRequestBuilder<RetailAffiliationPriceGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailAffiliationPriceGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AffiliationName: affiliationName!,
            PriceCustomerGroupCode: priceCustomerGroupCode!
          }
    );
  }
}
