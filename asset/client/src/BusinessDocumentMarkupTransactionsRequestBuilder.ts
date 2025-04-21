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
import { BusinessDocumentMarkupTransactions } from './BusinessDocumentMarkupTransactions';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentMarkupTransactions} entity.
 */
export class BusinessDocumentMarkupTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentMarkupTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentMarkupTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentMarkupTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessDocumentMarkupTransactions<T>, T> {
    return new GetAllRequestBuilder<BusinessDocumentMarkupTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentMarkupTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentMarkupTransactions`.
   */
  create(
    entity: BusinessDocumentMarkupTransactions<T>
  ): CreateRequestBuilder<BusinessDocumentMarkupTransactions<T>, T> {
    return new CreateRequestBuilder<BusinessDocumentMarkupTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentMarkupTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link BusinessDocumentMarkupTransactions.dataAreaId}.
   * @param transRecId Key property. See {@link BusinessDocumentMarkupTransactions.transRecId}.
   * @param transTableId Key property. See {@link BusinessDocumentMarkupTransactions.transTableId}.
   * @param lineNum Key property. See {@link BusinessDocumentMarkupTransactions.lineNum}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentMarkupTransactions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transRecId: DeserializedType<T, 'Edm.Int64'>,
    transTableId: DeserializedType<T, 'Edm.Int32'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BusinessDocumentMarkupTransactions<T>, T> {
    return new GetByKeyRequestBuilder<BusinessDocumentMarkupTransactions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransRecId: transRecId,
        TransTableId: transTableId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessDocumentMarkupTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentMarkupTransactions`.
   */
  update(
    entity: BusinessDocumentMarkupTransactions<T>
  ): UpdateRequestBuilder<BusinessDocumentMarkupTransactions<T>, T> {
    return new UpdateRequestBuilder<BusinessDocumentMarkupTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentMarkupTransactions`.
   * @param dataAreaId Key property. See {@link BusinessDocumentMarkupTransactions.dataAreaId}.
   * @param transRecId Key property. See {@link BusinessDocumentMarkupTransactions.transRecId}.
   * @param transTableId Key property. See {@link BusinessDocumentMarkupTransactions.transTableId}.
   * @param lineNum Key property. See {@link BusinessDocumentMarkupTransactions.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentMarkupTransactions`.
   */
  delete(
    dataAreaId: string,
    transRecId: BigNumber,
    transTableId: number,
    lineNum: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentMarkupTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentMarkupTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentMarkupTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentMarkupTransactions<T>
  ): DeleteRequestBuilder<BusinessDocumentMarkupTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transRecId?: BigNumber,
    transTableId?: number,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentMarkupTransactions<T>, T> {
    return new DeleteRequestBuilder<BusinessDocumentMarkupTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BusinessDocumentMarkupTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransRecId: transRecId!,
            TransTableId: transTableId!,
            LineNum: lineNum!
          }
    );
  }
}
