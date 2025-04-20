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
import { PayStatementEarningLines } from './PayStatementEarningLines';

/**
 * Request builder class for operations supported on the {@link PayStatementEarningLines} entity.
 */
export class PayStatementEarningLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayStatementEarningLines<T>, T> {
  /**
   * Returns a request builder for querying all `PayStatementEarningLines` entities.
   * @returns A request builder for creating requests to retrieve all `PayStatementEarningLines` entities.
   */
  getAll(): GetAllRequestBuilder<PayStatementEarningLines<T>, T> {
    return new GetAllRequestBuilder<PayStatementEarningLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayStatementEarningLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayStatementEarningLines`.
   */
  create(
    entity: PayStatementEarningLines<T>
  ): CreateRequestBuilder<PayStatementEarningLines<T>, T> {
    return new CreateRequestBuilder<PayStatementEarningLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayStatementEarningLines` entity based on its keys.
   * @param payStatementNumber Key property. See {@link PayStatementEarningLines.payStatementNumber}.
   * @param lineNumber Key property. See {@link PayStatementEarningLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PayStatementEarningLines` entity based on its keys.
   */
  getByKey(
    payStatementNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PayStatementEarningLines<T>, T> {
    return new GetByKeyRequestBuilder<PayStatementEarningLines<T>, T>(
      this.entityApi,
      {
        PayStatementNumber: payStatementNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayStatementEarningLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayStatementEarningLines`.
   */
  update(
    entity: PayStatementEarningLines<T>
  ): UpdateRequestBuilder<PayStatementEarningLines<T>, T> {
    return new UpdateRequestBuilder<PayStatementEarningLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayStatementEarningLines`.
   * @param payStatementNumber Key property. See {@link PayStatementEarningLines.payStatementNumber}.
   * @param lineNumber Key property. See {@link PayStatementEarningLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PayStatementEarningLines`.
   */
  delete(
    payStatementNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PayStatementEarningLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayStatementEarningLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayStatementEarningLines` by taking the entity as a parameter.
   */
  delete(
    entity: PayStatementEarningLines<T>
  ): DeleteRequestBuilder<PayStatementEarningLines<T>, T>;
  delete(
    payStatementNumberOrEntity: any,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PayStatementEarningLines<T>, T> {
    return new DeleteRequestBuilder<PayStatementEarningLines<T>, T>(
      this.entityApi,
      payStatementNumberOrEntity instanceof PayStatementEarningLines
        ? payStatementNumberOrEntity
        : {
            PayStatementNumber: payStatementNumberOrEntity!,
            LineNumber: lineNumber!
          }
    );
  }
}
