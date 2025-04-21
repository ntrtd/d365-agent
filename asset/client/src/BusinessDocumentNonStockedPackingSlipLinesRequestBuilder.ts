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
import { BusinessDocumentNonStockedPackingSlipLines } from './BusinessDocumentNonStockedPackingSlipLines';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentNonStockedPackingSlipLines} entity.
 */
export class BusinessDocumentNonStockedPackingSlipLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentNonStockedPackingSlipLines<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentNonStockedPackingSlipLines` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentNonStockedPackingSlipLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    BusinessDocumentNonStockedPackingSlipLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BusinessDocumentNonStockedPackingSlipLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentNonStockedPackingSlipLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentNonStockedPackingSlipLines`.
   */
  create(
    entity: BusinessDocumentNonStockedPackingSlipLines<T>
  ): CreateRequestBuilder<BusinessDocumentNonStockedPackingSlipLines<T>, T> {
    return new CreateRequestBuilder<
      BusinessDocumentNonStockedPackingSlipLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentNonStockedPackingSlipLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link BusinessDocumentNonStockedPackingSlipLines.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentNonStockedPackingSlipLines.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentNonStockedPackingSlipLines.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentNonStockedPackingSlipLines.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentNonStockedPackingSlipLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentNonStockedPackingSlipLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>,
    packingSlipId: DeserializedType<T, 'Edm.String'>,
    deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BusinessDocumentNonStockedPackingSlipLines<T>, T> {
    return new GetByKeyRequestBuilder<
      BusinessDocumentNonStockedPackingSlipLines<T>,
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
   * Returns a request builder for updating an entity of type `BusinessDocumentNonStockedPackingSlipLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentNonStockedPackingSlipLines`.
   */
  update(
    entity: BusinessDocumentNonStockedPackingSlipLines<T>
  ): UpdateRequestBuilder<BusinessDocumentNonStockedPackingSlipLines<T>, T> {
    return new UpdateRequestBuilder<
      BusinessDocumentNonStockedPackingSlipLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentNonStockedPackingSlipLines`.
   * @param dataAreaId Key property. See {@link BusinessDocumentNonStockedPackingSlipLines.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentNonStockedPackingSlipLines.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentNonStockedPackingSlipLines.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentNonStockedPackingSlipLines.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentNonStockedPackingSlipLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentNonStockedPackingSlipLines`.
   */
  delete(
    dataAreaId: string,
    salesId: string,
    packingSlipId: string,
    deliveryDate: Moment,
    lineNum: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentNonStockedPackingSlipLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentNonStockedPackingSlipLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentNonStockedPackingSlipLines` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentNonStockedPackingSlipLines<T>
  ): DeleteRequestBuilder<BusinessDocumentNonStockedPackingSlipLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesId?: string,
    packingSlipId?: string,
    deliveryDate?: Moment,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentNonStockedPackingSlipLines<T>, T> {
    return new DeleteRequestBuilder<
      BusinessDocumentNonStockedPackingSlipLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BusinessDocumentNonStockedPackingSlipLines
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
