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
import { EarningStatementLines } from './EarningStatementLines';

/**
 * Request builder class for operations supported on the {@link EarningStatementLines} entity.
 */
export class EarningStatementLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EarningStatementLines<T>, T> {
  /**
   * Returns a request builder for querying all `EarningStatementLines` entities.
   * @returns A request builder for creating requests to retrieve all `EarningStatementLines` entities.
   */
  getAll(): GetAllRequestBuilder<EarningStatementLines<T>, T> {
    return new GetAllRequestBuilder<EarningStatementLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EarningStatementLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EarningStatementLines`.
   */
  create(
    entity: EarningStatementLines<T>
  ): CreateRequestBuilder<EarningStatementLines<T>, T> {
    return new CreateRequestBuilder<EarningStatementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EarningStatementLines` entity based on its keys.
   * @param company Key property. See {@link EarningStatementLines.company}.
   * @param earningsStatementNumber Key property. See {@link EarningStatementLines.earningsStatementNumber}.
   * @param lineNumber Key property. See {@link EarningStatementLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `EarningStatementLines` entity based on its keys.
   */
  getByKey(
    company: DeserializedType<T, 'Edm.String'>,
    earningsStatementNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<EarningStatementLines<T>, T> {
    return new GetByKeyRequestBuilder<EarningStatementLines<T>, T>(
      this.entityApi,
      {
        Company: company,
        EarningsStatementNumber: earningsStatementNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EarningStatementLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EarningStatementLines`.
   */
  update(
    entity: EarningStatementLines<T>
  ): UpdateRequestBuilder<EarningStatementLines<T>, T> {
    return new UpdateRequestBuilder<EarningStatementLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EarningStatementLines`.
   * @param company Key property. See {@link EarningStatementLines.company}.
   * @param earningsStatementNumber Key property. See {@link EarningStatementLines.earningsStatementNumber}.
   * @param lineNumber Key property. See {@link EarningStatementLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EarningStatementLines`.
   */
  delete(
    company: string,
    earningsStatementNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<EarningStatementLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EarningStatementLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EarningStatementLines` by taking the entity as a parameter.
   */
  delete(
    entity: EarningStatementLines<T>
  ): DeleteRequestBuilder<EarningStatementLines<T>, T>;
  delete(
    companyOrEntity: any,
    earningsStatementNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<EarningStatementLines<T>, T> {
    return new DeleteRequestBuilder<EarningStatementLines<T>, T>(
      this.entityApi,
      companyOrEntity instanceof EarningStatementLines
        ? companyOrEntity
        : {
            Company: companyOrEntity!,
            EarningsStatementNumber: earningsStatementNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
