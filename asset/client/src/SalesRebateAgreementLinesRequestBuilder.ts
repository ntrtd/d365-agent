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
import { SalesRebateAgreementLines } from './SalesRebateAgreementLines';

/**
 * Request builder class for operations supported on the {@link SalesRebateAgreementLines} entity.
 */
export class SalesRebateAgreementLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesRebateAgreementLines<T>, T> {
  /**
   * Returns a request builder for querying all `SalesRebateAgreementLines` entities.
   * @returns A request builder for creating requests to retrieve all `SalesRebateAgreementLines` entities.
   */
  getAll(): GetAllRequestBuilder<SalesRebateAgreementLines<T>, T> {
    return new GetAllRequestBuilder<SalesRebateAgreementLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesRebateAgreementLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesRebateAgreementLines`.
   */
  create(
    entity: SalesRebateAgreementLines<T>
  ): CreateRequestBuilder<SalesRebateAgreementLines<T>, T> {
    return new CreateRequestBuilder<SalesRebateAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesRebateAgreementLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesRebateAgreementLines.dataAreaId}.
   * @param rebateAgreementId Key property. See {@link SalesRebateAgreementLines.rebateAgreementId}.
   * @param lineNumber Key property. See {@link SalesRebateAgreementLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesRebateAgreementLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rebateAgreementId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SalesRebateAgreementLines<T>, T> {
    return new GetByKeyRequestBuilder<SalesRebateAgreementLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RebateAgreementId: rebateAgreementId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesRebateAgreementLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesRebateAgreementLines`.
   */
  update(
    entity: SalesRebateAgreementLines<T>
  ): UpdateRequestBuilder<SalesRebateAgreementLines<T>, T> {
    return new UpdateRequestBuilder<SalesRebateAgreementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesRebateAgreementLines`.
   * @param dataAreaId Key property. See {@link SalesRebateAgreementLines.dataAreaId}.
   * @param rebateAgreementId Key property. See {@link SalesRebateAgreementLines.rebateAgreementId}.
   * @param lineNumber Key property. See {@link SalesRebateAgreementLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesRebateAgreementLines`.
   */
  delete(
    dataAreaId: string,
    rebateAgreementId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<SalesRebateAgreementLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesRebateAgreementLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesRebateAgreementLines` by taking the entity as a parameter.
   */
  delete(
    entity: SalesRebateAgreementLines<T>
  ): DeleteRequestBuilder<SalesRebateAgreementLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rebateAgreementId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<SalesRebateAgreementLines<T>, T> {
    return new DeleteRequestBuilder<SalesRebateAgreementLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesRebateAgreementLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RebateAgreementId: rebateAgreementId!,
            LineNumber: lineNumber!
          }
    );
  }
}
