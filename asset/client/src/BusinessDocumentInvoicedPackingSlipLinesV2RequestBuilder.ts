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
import { BusinessDocumentInvoicedPackingSlipLinesV2 } from './BusinessDocumentInvoicedPackingSlipLinesV2';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentInvoicedPackingSlipLinesV2} entity.
 */
export class BusinessDocumentInvoicedPackingSlipLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentInvoicedPackingSlipLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentInvoicedPackingSlipLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentInvoicedPackingSlipLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    BusinessDocumentInvoicedPackingSlipLinesV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BusinessDocumentInvoicedPackingSlipLinesV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentInvoicedPackingSlipLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentInvoicedPackingSlipLinesV2`.
   */
  create(
    entity: BusinessDocumentInvoicedPackingSlipLinesV2<T>
  ): CreateRequestBuilder<BusinessDocumentInvoicedPackingSlipLinesV2<T>, T> {
    return new CreateRequestBuilder<
      BusinessDocumentInvoicedPackingSlipLinesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentInvoicedPackingSlipLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV2.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV2.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV2.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV2.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV2.lineNum}.
   * @param origSalesId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV2.origSalesId}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentInvoicedPackingSlipLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>,
    packingSlipId: DeserializedType<T, 'Edm.String'>,
    deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    origSalesId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessDocumentInvoicedPackingSlipLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<
      BusinessDocumentInvoicedPackingSlipLinesV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesId: salesId,
      PackingSlipId: packingSlipId,
      DeliveryDate: deliveryDate,
      LineNum: lineNum,
      OrigSalesId: origSalesId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessDocumentInvoicedPackingSlipLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentInvoicedPackingSlipLinesV2`.
   */
  update(
    entity: BusinessDocumentInvoicedPackingSlipLinesV2<T>
  ): UpdateRequestBuilder<BusinessDocumentInvoicedPackingSlipLinesV2<T>, T> {
    return new UpdateRequestBuilder<
      BusinessDocumentInvoicedPackingSlipLinesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentInvoicedPackingSlipLinesV2`.
   * @param dataAreaId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV2.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV2.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV2.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV2.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV2.lineNum}.
   * @param origSalesId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV2.origSalesId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentInvoicedPackingSlipLinesV2`.
   */
  delete(
    dataAreaId: string,
    salesId: string,
    packingSlipId: string,
    deliveryDate: Moment,
    lineNum: BigNumber,
    origSalesId: string
  ): DeleteRequestBuilder<BusinessDocumentInvoicedPackingSlipLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentInvoicedPackingSlipLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentInvoicedPackingSlipLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentInvoicedPackingSlipLinesV2<T>
  ): DeleteRequestBuilder<BusinessDocumentInvoicedPackingSlipLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesId?: string,
    packingSlipId?: string,
    deliveryDate?: Moment,
    lineNum?: BigNumber,
    origSalesId?: string
  ): DeleteRequestBuilder<BusinessDocumentInvoicedPackingSlipLinesV2<T>, T> {
    return new DeleteRequestBuilder<
      BusinessDocumentInvoicedPackingSlipLinesV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BusinessDocumentInvoicedPackingSlipLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesId: salesId!,
            PackingSlipId: packingSlipId!,
            DeliveryDate: deliveryDate!,
            LineNum: lineNum!,
            OrigSalesId: origSalesId!
          }
    );
  }
}
