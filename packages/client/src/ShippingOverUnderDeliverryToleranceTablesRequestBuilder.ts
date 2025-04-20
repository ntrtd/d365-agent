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
import { ShippingOverUnderDeliverryToleranceTables } from './ShippingOverUnderDeliverryToleranceTables';

/**
 * Request builder class for operations supported on the {@link ShippingOverUnderDeliverryToleranceTables} entity.
 */
export class ShippingOverUnderDeliverryToleranceTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingOverUnderDeliverryToleranceTables<T>, T> {
  /**
   * Returns a request builder for querying all `ShippingOverUnderDeliverryToleranceTables` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingOverUnderDeliverryToleranceTables` entities.
   */
  getAll(): GetAllRequestBuilder<
    ShippingOverUnderDeliverryToleranceTables<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ShippingOverUnderDeliverryToleranceTables<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ShippingOverUnderDeliverryToleranceTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingOverUnderDeliverryToleranceTables`.
   */
  create(
    entity: ShippingOverUnderDeliverryToleranceTables<T>
  ): CreateRequestBuilder<ShippingOverUnderDeliverryToleranceTables<T>, T> {
    return new CreateRequestBuilder<
      ShippingOverUnderDeliverryToleranceTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ShippingOverUnderDeliverryToleranceTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShippingOverUnderDeliverryToleranceTables.dataAreaId}.
   * @param vendorAccountNumber Key property. See {@link ShippingOverUnderDeliverryToleranceTables.vendorAccountNumber}.
   * @param vendorOverUnderdeliveryToleranceGroupId Key property. See {@link ShippingOverUnderDeliverryToleranceTables.vendorOverUnderdeliveryToleranceGroupId}.
   * @param itemNumber Key property. See {@link ShippingOverUnderDeliverryToleranceTables.itemNumber}.
   * @param itemOverUnderdeliveryToleranceGroupId Key property. See {@link ShippingOverUnderDeliverryToleranceTables.itemOverUnderdeliveryToleranceGroupId}.
   * @returns A request builder for creating requests to retrieve one `ShippingOverUnderDeliverryToleranceTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendorAccountNumber: DeserializedType<T, 'Edm.String'>,
    vendorOverUnderdeliveryToleranceGroupId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    itemOverUnderdeliveryToleranceGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShippingOverUnderDeliverryToleranceTables<T>, T> {
    return new GetByKeyRequestBuilder<
      ShippingOverUnderDeliverryToleranceTables<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      VendorAccountNumber: vendorAccountNumber,
      VendorOverUnderdeliveryToleranceGroupId:
        vendorOverUnderdeliveryToleranceGroupId,
      ItemNumber: itemNumber,
      ItemOverUnderdeliveryToleranceGroupId:
        itemOverUnderdeliveryToleranceGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingOverUnderDeliverryToleranceTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingOverUnderDeliverryToleranceTables`.
   */
  update(
    entity: ShippingOverUnderDeliverryToleranceTables<T>
  ): UpdateRequestBuilder<ShippingOverUnderDeliverryToleranceTables<T>, T> {
    return new UpdateRequestBuilder<
      ShippingOverUnderDeliverryToleranceTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingOverUnderDeliverryToleranceTables`.
   * @param dataAreaId Key property. See {@link ShippingOverUnderDeliverryToleranceTables.dataAreaId}.
   * @param vendorAccountNumber Key property. See {@link ShippingOverUnderDeliverryToleranceTables.vendorAccountNumber}.
   * @param vendorOverUnderdeliveryToleranceGroupId Key property. See {@link ShippingOverUnderDeliverryToleranceTables.vendorOverUnderdeliveryToleranceGroupId}.
   * @param itemNumber Key property. See {@link ShippingOverUnderDeliverryToleranceTables.itemNumber}.
   * @param itemOverUnderdeliveryToleranceGroupId Key property. See {@link ShippingOverUnderDeliverryToleranceTables.itemOverUnderdeliveryToleranceGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingOverUnderDeliverryToleranceTables`.
   */
  delete(
    dataAreaId: string,
    vendorAccountNumber: string,
    vendorOverUnderdeliveryToleranceGroupId: string,
    itemNumber: string,
    itemOverUnderdeliveryToleranceGroupId: string
  ): DeleteRequestBuilder<ShippingOverUnderDeliverryToleranceTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingOverUnderDeliverryToleranceTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingOverUnderDeliverryToleranceTables` by taking the entity as a parameter.
   */
  delete(
    entity: ShippingOverUnderDeliverryToleranceTables<T>
  ): DeleteRequestBuilder<ShippingOverUnderDeliverryToleranceTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendorAccountNumber?: string,
    vendorOverUnderdeliveryToleranceGroupId?: string,
    itemNumber?: string,
    itemOverUnderdeliveryToleranceGroupId?: string
  ): DeleteRequestBuilder<ShippingOverUnderDeliverryToleranceTables<T>, T> {
    return new DeleteRequestBuilder<
      ShippingOverUnderDeliverryToleranceTables<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShippingOverUnderDeliverryToleranceTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendorAccountNumber: vendorAccountNumber!,
            VendorOverUnderdeliveryToleranceGroupId:
              vendorOverUnderdeliveryToleranceGroupId!,
            ItemNumber: itemNumber!,
            ItemOverUnderdeliveryToleranceGroupId:
              itemOverUnderdeliveryToleranceGroupId!
          }
    );
  }
}
