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
import { SalesAgreementLines } from './SalesAgreementLines';

/**
 * Request builder class for operations supported on the {@link SalesAgreementLines} entity.
 */
export class SalesAgreementLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesAgreementLines<T>, T> {
  /**
   * Returns a request builder for querying all `SalesAgreementLines` entities.
   * @returns A request builder for creating requests to retrieve all `SalesAgreementLines` entities.
   */
  getAll(): GetAllRequestBuilder<SalesAgreementLines<T>, T> {
    return new GetAllRequestBuilder<SalesAgreementLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesAgreementLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesAgreementLines`.
   */
  create(
    entity: SalesAgreementLines<T>
  ): CreateRequestBuilder<SalesAgreementLines<T>, T> {
    return new CreateRequestBuilder<SalesAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesAgreementLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesAgreementLines.dataAreaId}.
   * @param salesAgreementId Key property. See {@link SalesAgreementLines.salesAgreementId}.
   * @param lineNumber Key property. See {@link SalesAgreementLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesAgreementLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesAgreementId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SalesAgreementLines<T>, T> {
    return new GetByKeyRequestBuilder<SalesAgreementLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesAgreementId: salesAgreementId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesAgreementLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesAgreementLines`.
   */
  update(
    entity: SalesAgreementLines<T>
  ): UpdateRequestBuilder<SalesAgreementLines<T>, T> {
    return new UpdateRequestBuilder<SalesAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesAgreementLines`.
   * @param dataAreaId Key property. See {@link SalesAgreementLines.dataAreaId}.
   * @param salesAgreementId Key property. See {@link SalesAgreementLines.salesAgreementId}.
   * @param lineNumber Key property. See {@link SalesAgreementLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreementLines`.
   */
  delete(
    dataAreaId: string,
    salesAgreementId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<SalesAgreementLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesAgreementLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreementLines` by taking the entity as a parameter.
   */
  delete(
    entity: SalesAgreementLines<T>
  ): DeleteRequestBuilder<SalesAgreementLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesAgreementId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<SalesAgreementLines<T>, T> {
    return new DeleteRequestBuilder<SalesAgreementLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesAgreementLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesAgreementId: salesAgreementId!,
            LineNumber: lineNumber!
          }
    );
  }
}
