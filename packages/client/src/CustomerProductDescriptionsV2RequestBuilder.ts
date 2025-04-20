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
import { CustomerProductDescriptionsV2 } from './CustomerProductDescriptionsV2';

/**
 * Request builder class for operations supported on the {@link CustomerProductDescriptionsV2} entity.
 */
export class CustomerProductDescriptionsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerProductDescriptionsV2<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerProductDescriptionsV2` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerProductDescriptionsV2` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerProductDescriptionsV2<T>, T> {
    return new GetAllRequestBuilder<CustomerProductDescriptionsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerProductDescriptionsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerProductDescriptionsV2`.
   */
  create(
    entity: CustomerProductDescriptionsV2<T>
  ): CreateRequestBuilder<CustomerProductDescriptionsV2<T>, T> {
    return new CreateRequestBuilder<CustomerProductDescriptionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerProductDescriptionsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerProductDescriptionsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link CustomerProductDescriptionsV2.itemNumber}.
   * @param productColorId Key property. See {@link CustomerProductDescriptionsV2.productColorId}.
   * @param productConfigurationId Key property. See {@link CustomerProductDescriptionsV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link CustomerProductDescriptionsV2.productSizeId}.
   * @param productStyleId Key property. See {@link CustomerProductDescriptionsV2.productStyleId}.
   * @param productVersionId Key property. See {@link CustomerProductDescriptionsV2.productVersionId}.
   * @param customerAccountNumber Key property. See {@link CustomerProductDescriptionsV2.customerAccountNumber}.
   * @param productDescriptionCustomerGroupId Key property. See {@link CustomerProductDescriptionsV2.productDescriptionCustomerGroupId}.
   * @returns A request builder for creating requests to retrieve one `CustomerProductDescriptionsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    productDescriptionCustomerGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerProductDescriptionsV2<T>, T> {
    return new GetByKeyRequestBuilder<CustomerProductDescriptionsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        ProductColorId: productColorId,
        ProductConfigurationId: productConfigurationId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId,
        CustomerAccountNumber: customerAccountNumber,
        ProductDescriptionCustomerGroupId: productDescriptionCustomerGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerProductDescriptionsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerProductDescriptionsV2`.
   */
  update(
    entity: CustomerProductDescriptionsV2<T>
  ): UpdateRequestBuilder<CustomerProductDescriptionsV2<T>, T> {
    return new UpdateRequestBuilder<CustomerProductDescriptionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerProductDescriptionsV2`.
   * @param dataAreaId Key property. See {@link CustomerProductDescriptionsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link CustomerProductDescriptionsV2.itemNumber}.
   * @param productColorId Key property. See {@link CustomerProductDescriptionsV2.productColorId}.
   * @param productConfigurationId Key property. See {@link CustomerProductDescriptionsV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link CustomerProductDescriptionsV2.productSizeId}.
   * @param productStyleId Key property. See {@link CustomerProductDescriptionsV2.productStyleId}.
   * @param productVersionId Key property. See {@link CustomerProductDescriptionsV2.productVersionId}.
   * @param customerAccountNumber Key property. See {@link CustomerProductDescriptionsV2.customerAccountNumber}.
   * @param productDescriptionCustomerGroupId Key property. See {@link CustomerProductDescriptionsV2.productDescriptionCustomerGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerProductDescriptionsV2`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string,
    customerAccountNumber: string,
    productDescriptionCustomerGroupId: string
  ): DeleteRequestBuilder<CustomerProductDescriptionsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerProductDescriptionsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerProductDescriptionsV2` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerProductDescriptionsV2<T>
  ): DeleteRequestBuilder<CustomerProductDescriptionsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string,
    customerAccountNumber?: string,
    productDescriptionCustomerGroupId?: string
  ): DeleteRequestBuilder<CustomerProductDescriptionsV2<T>, T> {
    return new DeleteRequestBuilder<CustomerProductDescriptionsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerProductDescriptionsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            CustomerAccountNumber: customerAccountNumber!,
            ProductDescriptionCustomerGroupId:
              productDescriptionCustomerGroupId!
          }
    );
  }
}
