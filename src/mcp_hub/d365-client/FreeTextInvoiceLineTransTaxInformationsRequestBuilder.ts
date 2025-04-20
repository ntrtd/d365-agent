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
import { FreeTextInvoiceLineTransTaxInformations } from './FreeTextInvoiceLineTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link FreeTextInvoiceLineTransTaxInformations} entity.
 */
export class FreeTextInvoiceLineTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FreeTextInvoiceLineTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `FreeTextInvoiceLineTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `FreeTextInvoiceLineTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<
    FreeTextInvoiceLineTransTaxInformations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FreeTextInvoiceLineTransTaxInformations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FreeTextInvoiceLineTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FreeTextInvoiceLineTransTaxInformations`.
   */
  create(
    entity: FreeTextInvoiceLineTransTaxInformations<T>
  ): CreateRequestBuilder<FreeTextInvoiceLineTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<
      FreeTextInvoiceLineTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FreeTextInvoiceLineTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link FreeTextInvoiceLineTransTaxInformations.dataAreaId}.
   * @param parentRecId Key property. See {@link FreeTextInvoiceLineTransTaxInformations.parentRecId}.
   * @param lineNumber Key property. See {@link FreeTextInvoiceLineTransTaxInformations.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `FreeTextInvoiceLineTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    parentRecId: DeserializedType<T, 'Edm.Int64'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<FreeTextInvoiceLineTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<
      FreeTextInvoiceLineTransTaxInformations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ParentRecId: parentRecId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FreeTextInvoiceLineTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FreeTextInvoiceLineTransTaxInformations`.
   */
  update(
    entity: FreeTextInvoiceLineTransTaxInformations<T>
  ): UpdateRequestBuilder<FreeTextInvoiceLineTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<
      FreeTextInvoiceLineTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FreeTextInvoiceLineTransTaxInformations`.
   * @param dataAreaId Key property. See {@link FreeTextInvoiceLineTransTaxInformations.dataAreaId}.
   * @param parentRecId Key property. See {@link FreeTextInvoiceLineTransTaxInformations.parentRecId}.
   * @param lineNumber Key property. See {@link FreeTextInvoiceLineTransTaxInformations.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FreeTextInvoiceLineTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    parentRecId: BigNumber,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<FreeTextInvoiceLineTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FreeTextInvoiceLineTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FreeTextInvoiceLineTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: FreeTextInvoiceLineTransTaxInformations<T>
  ): DeleteRequestBuilder<FreeTextInvoiceLineTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    parentRecId?: BigNumber,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<FreeTextInvoiceLineTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<
      FreeTextInvoiceLineTransTaxInformations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof FreeTextInvoiceLineTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ParentRecId: parentRecId!,
            LineNumber: lineNumber!
          }
    );
  }
}
