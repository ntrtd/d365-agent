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
import { VendorInvoiceTotalTolerances } from './VendorInvoiceTotalTolerances';

/**
 * Request builder class for operations supported on the {@link VendorInvoiceTotalTolerances} entity.
 */
export class VendorInvoiceTotalTolerancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorInvoiceTotalTolerances<T>, T> {
  /**
   * Returns a request builder for querying all `VendorInvoiceTotalTolerances` entities.
   * @returns A request builder for creating requests to retrieve all `VendorInvoiceTotalTolerances` entities.
   */
  getAll(): GetAllRequestBuilder<VendorInvoiceTotalTolerances<T>, T> {
    return new GetAllRequestBuilder<VendorInvoiceTotalTolerances<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorInvoiceTotalTolerances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorInvoiceTotalTolerances`.
   */
  create(
    entity: VendorInvoiceTotalTolerances<T>
  ): CreateRequestBuilder<VendorInvoiceTotalTolerances<T>, T> {
    return new CreateRequestBuilder<VendorInvoiceTotalTolerances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorInvoiceTotalTolerances` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorInvoiceTotalTolerances.dataAreaId}.
   * @param vendorAccount Key property. See {@link VendorInvoiceTotalTolerances.vendorAccount}.
   * @returns A request builder for creating requests to retrieve one `VendorInvoiceTotalTolerances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendorAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorInvoiceTotalTolerances<T>, T> {
    return new GetByKeyRequestBuilder<VendorInvoiceTotalTolerances<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VendorAccount: vendorAccount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorInvoiceTotalTolerances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorInvoiceTotalTolerances`.
   */
  update(
    entity: VendorInvoiceTotalTolerances<T>
  ): UpdateRequestBuilder<VendorInvoiceTotalTolerances<T>, T> {
    return new UpdateRequestBuilder<VendorInvoiceTotalTolerances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorInvoiceTotalTolerances`.
   * @param dataAreaId Key property. See {@link VendorInvoiceTotalTolerances.dataAreaId}.
   * @param vendorAccount Key property. See {@link VendorInvoiceTotalTolerances.vendorAccount}.
   * @returns A request builder for creating requests that delete an entity of type `VendorInvoiceTotalTolerances`.
   */
  delete(
    dataAreaId: string,
    vendorAccount: string
  ): DeleteRequestBuilder<VendorInvoiceTotalTolerances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorInvoiceTotalTolerances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorInvoiceTotalTolerances` by taking the entity as a parameter.
   */
  delete(
    entity: VendorInvoiceTotalTolerances<T>
  ): DeleteRequestBuilder<VendorInvoiceTotalTolerances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendorAccount?: string
  ): DeleteRequestBuilder<VendorInvoiceTotalTolerances<T>, T> {
    return new DeleteRequestBuilder<VendorInvoiceTotalTolerances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorInvoiceTotalTolerances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendorAccount: vendorAccount!
          }
    );
  }
}
