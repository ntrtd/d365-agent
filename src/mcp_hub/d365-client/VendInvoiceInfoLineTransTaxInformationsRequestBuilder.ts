/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { VendInvoiceInfoLineTransTaxInformations } from './VendInvoiceInfoLineTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link VendInvoiceInfoLineTransTaxInformations} entity.
 */
export class VendInvoiceInfoLineTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceInfoLineTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceInfoLineTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceInfoLineTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<
    VendInvoiceInfoLineTransTaxInformations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      VendInvoiceInfoLineTransTaxInformations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendInvoiceInfoLineTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceInfoLineTransTaxInformations`.
   */
  create(
    entity: VendInvoiceInfoLineTransTaxInformations<T>
  ): CreateRequestBuilder<VendInvoiceInfoLineTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<
      VendInvoiceInfoLineTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceInfoLineTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceInfoLineTransTaxInformations.dataAreaId}.
   * @param vendInvoiceInfoLineRecId Key property. See {@link VendInvoiceInfoLineTransTaxInformations.vendInvoiceInfoLineRecId}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceInfoLineTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendInvoiceInfoLineRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<VendInvoiceInfoLineTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<
      VendInvoiceInfoLineTransTaxInformations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      VendInvoiceInfoLineRecId: vendInvoiceInfoLineRecId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceInfoLineTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceInfoLineTransTaxInformations`.
   */
  update(
    entity: VendInvoiceInfoLineTransTaxInformations<T>
  ): UpdateRequestBuilder<VendInvoiceInfoLineTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<
      VendInvoiceInfoLineTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceInfoLineTransTaxInformations`.
   * @param dataAreaId Key property. See {@link VendInvoiceInfoLineTransTaxInformations.dataAreaId}.
   * @param vendInvoiceInfoLineRecId Key property. See {@link VendInvoiceInfoLineTransTaxInformations.vendInvoiceInfoLineRecId}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceInfoLineTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    vendInvoiceInfoLineRecId: BigNumber
  ): DeleteRequestBuilder<VendInvoiceInfoLineTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceInfoLineTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceInfoLineTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceInfoLineTransTaxInformations<T>
  ): DeleteRequestBuilder<VendInvoiceInfoLineTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendInvoiceInfoLineRecId?: BigNumber
  ): DeleteRequestBuilder<VendInvoiceInfoLineTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<
      VendInvoiceInfoLineTransTaxInformations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceInfoLineTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendInvoiceInfoLineRecId: vendInvoiceInfoLineRecId!
          }
    );
  }
}
