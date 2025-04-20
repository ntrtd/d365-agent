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
import { CustomsShippingBillNumbers } from './CustomsShippingBillNumbers';

/**
 * Request builder class for operations supported on the {@link CustomsShippingBillNumbers} entity.
 */
export class CustomsShippingBillNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomsShippingBillNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `CustomsShippingBillNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `CustomsShippingBillNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<CustomsShippingBillNumbers<T>, T> {
    return new GetAllRequestBuilder<CustomsShippingBillNumbers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomsShippingBillNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomsShippingBillNumbers`.
   */
  create(
    entity: CustomsShippingBillNumbers<T>
  ): CreateRequestBuilder<CustomsShippingBillNumbers<T>, T> {
    return new CreateRequestBuilder<CustomsShippingBillNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomsShippingBillNumbers` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomsShippingBillNumbers.dataAreaId}.
   * @param shippingBill Key property. See {@link CustomsShippingBillNumbers.shippingBill}.
   * @returns A request builder for creating requests to retrieve one `CustomsShippingBillNumbers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shippingBill: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomsShippingBillNumbers<T>, T> {
    return new GetByKeyRequestBuilder<CustomsShippingBillNumbers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShippingBill: shippingBill
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomsShippingBillNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomsShippingBillNumbers`.
   */
  update(
    entity: CustomsShippingBillNumbers<T>
  ): UpdateRequestBuilder<CustomsShippingBillNumbers<T>, T> {
    return new UpdateRequestBuilder<CustomsShippingBillNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomsShippingBillNumbers`.
   * @param dataAreaId Key property. See {@link CustomsShippingBillNumbers.dataAreaId}.
   * @param shippingBill Key property. See {@link CustomsShippingBillNumbers.shippingBill}.
   * @returns A request builder for creating requests that delete an entity of type `CustomsShippingBillNumbers`.
   */
  delete(
    dataAreaId: string,
    shippingBill: string
  ): DeleteRequestBuilder<CustomsShippingBillNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomsShippingBillNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomsShippingBillNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: CustomsShippingBillNumbers<T>
  ): DeleteRequestBuilder<CustomsShippingBillNumbers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shippingBill?: string
  ): DeleteRequestBuilder<CustomsShippingBillNumbers<T>, T> {
    return new DeleteRequestBuilder<CustomsShippingBillNumbers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomsShippingBillNumbers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShippingBill: shippingBill!
          }
    );
  }
}
