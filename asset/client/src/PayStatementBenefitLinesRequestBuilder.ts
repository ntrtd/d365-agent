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
import { PayStatementBenefitLines } from './PayStatementBenefitLines';

/**
 * Request builder class for operations supported on the {@link PayStatementBenefitLines} entity.
 */
export class PayStatementBenefitLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayStatementBenefitLines<T>, T> {
  /**
   * Returns a request builder for querying all `PayStatementBenefitLines` entities.
   * @returns A request builder for creating requests to retrieve all `PayStatementBenefitLines` entities.
   */
  getAll(): GetAllRequestBuilder<PayStatementBenefitLines<T>, T> {
    return new GetAllRequestBuilder<PayStatementBenefitLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayStatementBenefitLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayStatementBenefitLines`.
   */
  create(
    entity: PayStatementBenefitLines<T>
  ): CreateRequestBuilder<PayStatementBenefitLines<T>, T> {
    return new CreateRequestBuilder<PayStatementBenefitLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayStatementBenefitLines` entity based on its keys.
   * @param payStatementNumber Key property. See {@link PayStatementBenefitLines.payStatementNumber}.
   * @param lineNumber Key property. See {@link PayStatementBenefitLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PayStatementBenefitLines` entity based on its keys.
   */
  getByKey(
    payStatementNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PayStatementBenefitLines<T>, T> {
    return new GetByKeyRequestBuilder<PayStatementBenefitLines<T>, T>(
      this.entityApi,
      {
        PayStatementNumber: payStatementNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayStatementBenefitLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayStatementBenefitLines`.
   */
  update(
    entity: PayStatementBenefitLines<T>
  ): UpdateRequestBuilder<PayStatementBenefitLines<T>, T> {
    return new UpdateRequestBuilder<PayStatementBenefitLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayStatementBenefitLines`.
   * @param payStatementNumber Key property. See {@link PayStatementBenefitLines.payStatementNumber}.
   * @param lineNumber Key property. See {@link PayStatementBenefitLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PayStatementBenefitLines`.
   */
  delete(
    payStatementNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PayStatementBenefitLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayStatementBenefitLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayStatementBenefitLines` by taking the entity as a parameter.
   */
  delete(
    entity: PayStatementBenefitLines<T>
  ): DeleteRequestBuilder<PayStatementBenefitLines<T>, T>;
  delete(
    payStatementNumberOrEntity: any,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PayStatementBenefitLines<T>, T> {
    return new DeleteRequestBuilder<PayStatementBenefitLines<T>, T>(
      this.entityApi,
      payStatementNumberOrEntity instanceof PayStatementBenefitLines
        ? payStatementNumberOrEntity
        : {
            PayStatementNumber: payStatementNumberOrEntity!,
            LineNumber: lineNumber!
          }
    );
  }
}
