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
import { EfDocumentReceivedXmlViewLines } from './EfDocumentReceivedXmlViewLines';

/**
 * Request builder class for operations supported on the {@link EfDocumentReceivedXmlViewLines} entity.
 */
export class EfDocumentReceivedXmlViewLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EfDocumentReceivedXmlViewLines<T>, T> {
  /**
   * Returns a request builder for querying all `EfDocumentReceivedXmlViewLines` entities.
   * @returns A request builder for creating requests to retrieve all `EfDocumentReceivedXmlViewLines` entities.
   */
  getAll(): GetAllRequestBuilder<EfDocumentReceivedXmlViewLines<T>, T> {
    return new GetAllRequestBuilder<EfDocumentReceivedXmlViewLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EfDocumentReceivedXmlViewLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EfDocumentReceivedXmlViewLines`.
   */
  create(
    entity: EfDocumentReceivedXmlViewLines<T>
  ): CreateRequestBuilder<EfDocumentReceivedXmlViewLines<T>, T> {
    return new CreateRequestBuilder<EfDocumentReceivedXmlViewLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EfDocumentReceivedXmlViewLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link EfDocumentReceivedXmlViewLines.dataAreaId}.
   * @param efDocumentReceivedXmlViewBr Key property. See {@link EfDocumentReceivedXmlViewLines.efDocumentReceivedXmlViewBr}.
   * @param lineNum Key property. See {@link EfDocumentReceivedXmlViewLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `EfDocumentReceivedXmlViewLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    efDocumentReceivedXmlViewBr: DeserializedType<T, 'Edm.Int64'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<EfDocumentReceivedXmlViewLines<T>, T> {
    return new GetByKeyRequestBuilder<EfDocumentReceivedXmlViewLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EFDocumentReceivedXmlView_BR: efDocumentReceivedXmlViewBr,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EfDocumentReceivedXmlViewLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EfDocumentReceivedXmlViewLines`.
   */
  update(
    entity: EfDocumentReceivedXmlViewLines<T>
  ): UpdateRequestBuilder<EfDocumentReceivedXmlViewLines<T>, T> {
    return new UpdateRequestBuilder<EfDocumentReceivedXmlViewLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EfDocumentReceivedXmlViewLines`.
   * @param dataAreaId Key property. See {@link EfDocumentReceivedXmlViewLines.dataAreaId}.
   * @param efDocumentReceivedXmlViewBr Key property. See {@link EfDocumentReceivedXmlViewLines.efDocumentReceivedXmlViewBr}.
   * @param lineNum Key property. See {@link EfDocumentReceivedXmlViewLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `EfDocumentReceivedXmlViewLines`.
   */
  delete(
    dataAreaId: string,
    efDocumentReceivedXmlViewBr: BigNumber,
    lineNum: BigNumber
  ): DeleteRequestBuilder<EfDocumentReceivedXmlViewLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EfDocumentReceivedXmlViewLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EfDocumentReceivedXmlViewLines` by taking the entity as a parameter.
   */
  delete(
    entity: EfDocumentReceivedXmlViewLines<T>
  ): DeleteRequestBuilder<EfDocumentReceivedXmlViewLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    efDocumentReceivedXmlViewBr?: BigNumber,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<EfDocumentReceivedXmlViewLines<T>, T> {
    return new DeleteRequestBuilder<EfDocumentReceivedXmlViewLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EfDocumentReceivedXmlViewLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EFDocumentReceivedXmlView_BR: efDocumentReceivedXmlViewBr!,
            LineNum: lineNum!
          }
    );
  }
}
