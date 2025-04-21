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
import { VendInvoicePriceTolerances } from './VendInvoicePriceTolerances';

/**
 * Request builder class for operations supported on the {@link VendInvoicePriceTolerances} entity.
 */
export class VendInvoicePriceTolerancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoicePriceTolerances<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoicePriceTolerances` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoicePriceTolerances` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoicePriceTolerances<T>, T> {
    return new GetAllRequestBuilder<VendInvoicePriceTolerances<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoicePriceTolerances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoicePriceTolerances`.
   */
  create(
    entity: VendInvoicePriceTolerances<T>
  ): CreateRequestBuilder<VendInvoicePriceTolerances<T>, T> {
    return new CreateRequestBuilder<VendInvoicePriceTolerances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoicePriceTolerances` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoicePriceTolerances.dataAreaId}.
   * @param priceToleranceItemNumber Key property. See {@link VendInvoicePriceTolerances.priceToleranceItemNumber}.
   * @param priceToleranceItemGroup Key property. See {@link VendInvoicePriceTolerances.priceToleranceItemGroup}.
   * @param priceToleranceAccountNumber Key property. See {@link VendInvoicePriceTolerances.priceToleranceAccountNumber}.
   * @param priceToleranceAccountGroup Key property. See {@link VendInvoicePriceTolerances.priceToleranceAccountGroup}.
   * @returns A request builder for creating requests to retrieve one `VendInvoicePriceTolerances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    priceToleranceItemNumber: DeserializedType<T, 'Edm.String'>,
    priceToleranceItemGroup: DeserializedType<T, 'Edm.String'>,
    priceToleranceAccountNumber: DeserializedType<T, 'Edm.String'>,
    priceToleranceAccountGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendInvoicePriceTolerances<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoicePriceTolerances<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PriceToleranceItemNumber: priceToleranceItemNumber,
        PriceToleranceItemGroup: priceToleranceItemGroup,
        PriceToleranceAccountNumber: priceToleranceAccountNumber,
        PriceToleranceAccountGroup: priceToleranceAccountGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoicePriceTolerances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoicePriceTolerances`.
   */
  update(
    entity: VendInvoicePriceTolerances<T>
  ): UpdateRequestBuilder<VendInvoicePriceTolerances<T>, T> {
    return new UpdateRequestBuilder<VendInvoicePriceTolerances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoicePriceTolerances`.
   * @param dataAreaId Key property. See {@link VendInvoicePriceTolerances.dataAreaId}.
   * @param priceToleranceItemNumber Key property. See {@link VendInvoicePriceTolerances.priceToleranceItemNumber}.
   * @param priceToleranceItemGroup Key property. See {@link VendInvoicePriceTolerances.priceToleranceItemGroup}.
   * @param priceToleranceAccountNumber Key property. See {@link VendInvoicePriceTolerances.priceToleranceAccountNumber}.
   * @param priceToleranceAccountGroup Key property. See {@link VendInvoicePriceTolerances.priceToleranceAccountGroup}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoicePriceTolerances`.
   */
  delete(
    dataAreaId: string,
    priceToleranceItemNumber: string,
    priceToleranceItemGroup: string,
    priceToleranceAccountNumber: string,
    priceToleranceAccountGroup: string
  ): DeleteRequestBuilder<VendInvoicePriceTolerances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoicePriceTolerances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoicePriceTolerances` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoicePriceTolerances<T>
  ): DeleteRequestBuilder<VendInvoicePriceTolerances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    priceToleranceItemNumber?: string,
    priceToleranceItemGroup?: string,
    priceToleranceAccountNumber?: string,
    priceToleranceAccountGroup?: string
  ): DeleteRequestBuilder<VendInvoicePriceTolerances<T>, T> {
    return new DeleteRequestBuilder<VendInvoicePriceTolerances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoicePriceTolerances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PriceToleranceItemNumber: priceToleranceItemNumber!,
            PriceToleranceItemGroup: priceToleranceItemGroup!,
            PriceToleranceAccountNumber: priceToleranceAccountNumber!,
            PriceToleranceAccountGroup: priceToleranceAccountGroup!
          }
    );
  }
}
