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
import { VendInvoicePackingSlipQuantityMatchBiEntities } from './VendInvoicePackingSlipQuantityMatchBiEntities';

/**
 * Request builder class for operations supported on the {@link VendInvoicePackingSlipQuantityMatchBiEntities} entity.
 */
export class VendInvoicePackingSlipQuantityMatchBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoicePackingSlipQuantityMatchBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoicePackingSlipQuantityMatchBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoicePackingSlipQuantityMatchBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    VendInvoicePackingSlipQuantityMatchBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      VendInvoicePackingSlipQuantityMatchBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendInvoicePackingSlipQuantityMatchBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoicePackingSlipQuantityMatchBiEntities`.
   */
  create(
    entity: VendInvoicePackingSlipQuantityMatchBiEntities<T>
  ): CreateRequestBuilder<VendInvoicePackingSlipQuantityMatchBiEntities<T>, T> {
    return new CreateRequestBuilder<
      VendInvoicePackingSlipQuantityMatchBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VendInvoicePackingSlipQuantityMatchBiEntities` entity based on its keys.
   * @param invoiceSourceDocumentLIne Key property. See {@link VendInvoicePackingSlipQuantityMatchBiEntities.invoiceSourceDocumentLIne}.
   * @param packingSlipSourceDocumentLine Key property. See {@link VendInvoicePackingSlipQuantityMatchBiEntities.packingSlipSourceDocumentLine}.
   * @returns A request builder for creating requests to retrieve one `VendInvoicePackingSlipQuantityMatchBiEntities` entity based on its keys.
   */
  getByKey(
    invoiceSourceDocumentLIne: DeserializedType<T, 'Edm.Int64'>,
    packingSlipSourceDocumentLine: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<
    VendInvoicePackingSlipQuantityMatchBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      VendInvoicePackingSlipQuantityMatchBiEntities<T>,
      T
    >(this.entityApi, {
      InvoiceSourceDocumentLIne: invoiceSourceDocumentLIne,
      PackingSlipSourceDocumentLine: packingSlipSourceDocumentLine
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoicePackingSlipQuantityMatchBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoicePackingSlipQuantityMatchBiEntities`.
   */
  update(
    entity: VendInvoicePackingSlipQuantityMatchBiEntities<T>
  ): UpdateRequestBuilder<VendInvoicePackingSlipQuantityMatchBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      VendInvoicePackingSlipQuantityMatchBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoicePackingSlipQuantityMatchBiEntities`.
   * @param invoiceSourceDocumentLIne Key property. See {@link VendInvoicePackingSlipQuantityMatchBiEntities.invoiceSourceDocumentLIne}.
   * @param packingSlipSourceDocumentLine Key property. See {@link VendInvoicePackingSlipQuantityMatchBiEntities.packingSlipSourceDocumentLine}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoicePackingSlipQuantityMatchBiEntities`.
   */
  delete(
    invoiceSourceDocumentLIne: BigNumber,
    packingSlipSourceDocumentLine: BigNumber
  ): DeleteRequestBuilder<VendInvoicePackingSlipQuantityMatchBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoicePackingSlipQuantityMatchBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoicePackingSlipQuantityMatchBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoicePackingSlipQuantityMatchBiEntities<T>
  ): DeleteRequestBuilder<VendInvoicePackingSlipQuantityMatchBiEntities<T>, T>;
  delete(
    invoiceSourceDocumentLIneOrEntity: any,
    packingSlipSourceDocumentLine?: BigNumber
  ): DeleteRequestBuilder<VendInvoicePackingSlipQuantityMatchBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      VendInvoicePackingSlipQuantityMatchBiEntities<T>,
      T
    >(
      this.entityApi,
      invoiceSourceDocumentLIneOrEntity instanceof
      VendInvoicePackingSlipQuantityMatchBiEntities
        ? invoiceSourceDocumentLIneOrEntity
        : {
            InvoiceSourceDocumentLIne: invoiceSourceDocumentLIneOrEntity!,
            PackingSlipSourceDocumentLine: packingSlipSourceDocumentLine!
          }
    );
  }
}
