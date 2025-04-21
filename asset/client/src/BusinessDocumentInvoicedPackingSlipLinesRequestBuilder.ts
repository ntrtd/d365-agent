/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { BusinessDocumentInvoicedPackingSlipLines } from './BusinessDocumentInvoicedPackingSlipLines';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentInvoicedPackingSlipLines} entity.
 */
export class BusinessDocumentInvoicedPackingSlipLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentInvoicedPackingSlipLines<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentInvoicedPackingSlipLines` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentInvoicedPackingSlipLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    BusinessDocumentInvoicedPackingSlipLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BusinessDocumentInvoicedPackingSlipLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentInvoicedPackingSlipLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentInvoicedPackingSlipLines`.
   */
  create(
    entity: BusinessDocumentInvoicedPackingSlipLines<T>
  ): CreateRequestBuilder<BusinessDocumentInvoicedPackingSlipLines<T>, T> {
    return new CreateRequestBuilder<
      BusinessDocumentInvoicedPackingSlipLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentInvoicedPackingSlipLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link BusinessDocumentInvoicedPackingSlipLines.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentInvoicedPackingSlipLines.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentInvoicedPackingSlipLines.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentInvoicedPackingSlipLines.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentInvoicedPackingSlipLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentInvoicedPackingSlipLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>,
    packingSlipId: DeserializedType<T, 'Edm.String'>,
    deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BusinessDocumentInvoicedPackingSlipLines<T>, T> {
    return new GetByKeyRequestBuilder<
      BusinessDocumentInvoicedPackingSlipLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesId: salesId,
      PackingSlipId: packingSlipId,
      DeliveryDate: deliveryDate,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessDocumentInvoicedPackingSlipLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentInvoicedPackingSlipLines`.
   */
  update(
    entity: BusinessDocumentInvoicedPackingSlipLines<T>
  ): UpdateRequestBuilder<BusinessDocumentInvoicedPackingSlipLines<T>, T> {
    return new UpdateRequestBuilder<
      BusinessDocumentInvoicedPackingSlipLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentInvoicedPackingSlipLines`.
   * @param dataAreaId Key property. See {@link BusinessDocumentInvoicedPackingSlipLines.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentInvoicedPackingSlipLines.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentInvoicedPackingSlipLines.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentInvoicedPackingSlipLines.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentInvoicedPackingSlipLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentInvoicedPackingSlipLines`.
   */
  delete(
    dataAreaId: string,
    salesId: string,
    packingSlipId: string,
    deliveryDate: Moment,
    lineNum: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentInvoicedPackingSlipLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentInvoicedPackingSlipLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentInvoicedPackingSlipLines` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentInvoicedPackingSlipLines<T>
  ): DeleteRequestBuilder<BusinessDocumentInvoicedPackingSlipLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesId?: string,
    packingSlipId?: string,
    deliveryDate?: Moment,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentInvoicedPackingSlipLines<T>, T> {
    return new DeleteRequestBuilder<
      BusinessDocumentInvoicedPackingSlipLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BusinessDocumentInvoicedPackingSlipLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesId: salesId!,
            PackingSlipId: packingSlipId!,
            DeliveryDate: deliveryDate!,
            LineNum: lineNum!
          }
    );
  }
}
