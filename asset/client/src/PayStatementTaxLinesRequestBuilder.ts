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
import { PayStatementTaxLines } from './PayStatementTaxLines';

/**
 * Request builder class for operations supported on the {@link PayStatementTaxLines} entity.
 */
export class PayStatementTaxLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayStatementTaxLines<T>, T> {
  /**
   * Returns a request builder for querying all `PayStatementTaxLines` entities.
   * @returns A request builder for creating requests to retrieve all `PayStatementTaxLines` entities.
   */
  getAll(): GetAllRequestBuilder<PayStatementTaxLines<T>, T> {
    return new GetAllRequestBuilder<PayStatementTaxLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayStatementTaxLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayStatementTaxLines`.
   */
  create(
    entity: PayStatementTaxLines<T>
  ): CreateRequestBuilder<PayStatementTaxLines<T>, T> {
    return new CreateRequestBuilder<PayStatementTaxLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayStatementTaxLines` entity based on its keys.
   * @param payStatementNumber Key property. See {@link PayStatementTaxLines.payStatementNumber}.
   * @param lineNumber Key property. See {@link PayStatementTaxLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PayStatementTaxLines` entity based on its keys.
   */
  getByKey(
    payStatementNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PayStatementTaxLines<T>, T> {
    return new GetByKeyRequestBuilder<PayStatementTaxLines<T>, T>(
      this.entityApi,
      {
        PayStatementNumber: payStatementNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayStatementTaxLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayStatementTaxLines`.
   */
  update(
    entity: PayStatementTaxLines<T>
  ): UpdateRequestBuilder<PayStatementTaxLines<T>, T> {
    return new UpdateRequestBuilder<PayStatementTaxLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayStatementTaxLines`.
   * @param payStatementNumber Key property. See {@link PayStatementTaxLines.payStatementNumber}.
   * @param lineNumber Key property. See {@link PayStatementTaxLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PayStatementTaxLines`.
   */
  delete(
    payStatementNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PayStatementTaxLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayStatementTaxLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayStatementTaxLines` by taking the entity as a parameter.
   */
  delete(
    entity: PayStatementTaxLines<T>
  ): DeleteRequestBuilder<PayStatementTaxLines<T>, T>;
  delete(
    payStatementNumberOrEntity: any,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PayStatementTaxLines<T>, T> {
    return new DeleteRequestBuilder<PayStatementTaxLines<T>, T>(
      this.entityApi,
      payStatementNumberOrEntity instanceof PayStatementTaxLines
        ? payStatementNumberOrEntity
        : {
            PayStatementNumber: payStatementNumberOrEntity!,
            LineNumber: lineNumber!
          }
    );
  }
}
