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
import { CustomerProductDescriptions } from './CustomerProductDescriptions';

/**
 * Request builder class for operations supported on the {@link CustomerProductDescriptions} entity.
 */
export class CustomerProductDescriptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerProductDescriptions<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerProductDescriptions` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerProductDescriptions` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerProductDescriptions<T>, T> {
    return new GetAllRequestBuilder<CustomerProductDescriptions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerProductDescriptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerProductDescriptions`.
   */
  create(
    entity: CustomerProductDescriptions<T>
  ): CreateRequestBuilder<CustomerProductDescriptions<T>, T> {
    return new CreateRequestBuilder<CustomerProductDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerProductDescriptions` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerProductDescriptions.dataAreaId}.
   * @param itemNumber Key property. See {@link CustomerProductDescriptions.itemNumber}.
   * @param productColorId Key property. See {@link CustomerProductDescriptions.productColorId}.
   * @param productConfigurationId Key property. See {@link CustomerProductDescriptions.productConfigurationId}.
   * @param productSizeId Key property. See {@link CustomerProductDescriptions.productSizeId}.
   * @param productStyleId Key property. See {@link CustomerProductDescriptions.productStyleId}.
   * @param customerAccountNumber Key property. See {@link CustomerProductDescriptions.customerAccountNumber}.
   * @param productDescriptionCustomerGroupId Key property. See {@link CustomerProductDescriptions.productDescriptionCustomerGroupId}.
   * @returns A request builder for creating requests to retrieve one `CustomerProductDescriptions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    productDescriptionCustomerGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerProductDescriptions<T>, T> {
    return new GetByKeyRequestBuilder<CustomerProductDescriptions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        ProductColorId: productColorId,
        ProductConfigurationId: productConfigurationId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        CustomerAccountNumber: customerAccountNumber,
        ProductDescriptionCustomerGroupId: productDescriptionCustomerGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerProductDescriptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerProductDescriptions`.
   */
  update(
    entity: CustomerProductDescriptions<T>
  ): UpdateRequestBuilder<CustomerProductDescriptions<T>, T> {
    return new UpdateRequestBuilder<CustomerProductDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerProductDescriptions`.
   * @param dataAreaId Key property. See {@link CustomerProductDescriptions.dataAreaId}.
   * @param itemNumber Key property. See {@link CustomerProductDescriptions.itemNumber}.
   * @param productColorId Key property. See {@link CustomerProductDescriptions.productColorId}.
   * @param productConfigurationId Key property. See {@link CustomerProductDescriptions.productConfigurationId}.
   * @param productSizeId Key property. See {@link CustomerProductDescriptions.productSizeId}.
   * @param productStyleId Key property. See {@link CustomerProductDescriptions.productStyleId}.
   * @param customerAccountNumber Key property. See {@link CustomerProductDescriptions.customerAccountNumber}.
   * @param productDescriptionCustomerGroupId Key property. See {@link CustomerProductDescriptions.productDescriptionCustomerGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerProductDescriptions`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    customerAccountNumber: string,
    productDescriptionCustomerGroupId: string
  ): DeleteRequestBuilder<CustomerProductDescriptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerProductDescriptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerProductDescriptions` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerProductDescriptions<T>
  ): DeleteRequestBuilder<CustomerProductDescriptions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    customerAccountNumber?: string,
    productDescriptionCustomerGroupId?: string
  ): DeleteRequestBuilder<CustomerProductDescriptions<T>, T> {
    return new DeleteRequestBuilder<CustomerProductDescriptions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerProductDescriptions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            CustomerAccountNumber: customerAccountNumber!,
            ProductDescriptionCustomerGroupId:
              productDescriptionCustomerGroupId!
          }
    );
  }
}
