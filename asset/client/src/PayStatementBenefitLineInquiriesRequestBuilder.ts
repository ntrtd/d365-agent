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
import { PayStatementBenefitLineInquiries } from './PayStatementBenefitLineInquiries';

/**
 * Request builder class for operations supported on the {@link PayStatementBenefitLineInquiries} entity.
 */
export class PayStatementBenefitLineInquiriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayStatementBenefitLineInquiries<T>, T> {
  /**
   * Returns a request builder for querying all `PayStatementBenefitLineInquiries` entities.
   * @returns A request builder for creating requests to retrieve all `PayStatementBenefitLineInquiries` entities.
   */
  getAll(): GetAllRequestBuilder<PayStatementBenefitLineInquiries<T>, T> {
    return new GetAllRequestBuilder<PayStatementBenefitLineInquiries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayStatementBenefitLineInquiries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayStatementBenefitLineInquiries`.
   */
  create(
    entity: PayStatementBenefitLineInquiries<T>
  ): CreateRequestBuilder<PayStatementBenefitLineInquiries<T>, T> {
    return new CreateRequestBuilder<PayStatementBenefitLineInquiries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayStatementBenefitLineInquiries` entity based on its keys.
   * @param payStatementNumber Key property. See {@link PayStatementBenefitLineInquiries.payStatementNumber}.
   * @param lineNum Key property. See {@link PayStatementBenefitLineInquiries.lineNum}.
   * @returns A request builder for creating requests to retrieve one `PayStatementBenefitLineInquiries` entity based on its keys.
   */
  getByKey(
    payStatementNumber: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PayStatementBenefitLineInquiries<T>, T> {
    return new GetByKeyRequestBuilder<PayStatementBenefitLineInquiries<T>, T>(
      this.entityApi,
      {
        PayStatementNumber: payStatementNumber,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayStatementBenefitLineInquiries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayStatementBenefitLineInquiries`.
   */
  update(
    entity: PayStatementBenefitLineInquiries<T>
  ): UpdateRequestBuilder<PayStatementBenefitLineInquiries<T>, T> {
    return new UpdateRequestBuilder<PayStatementBenefitLineInquiries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayStatementBenefitLineInquiries`.
   * @param payStatementNumber Key property. See {@link PayStatementBenefitLineInquiries.payStatementNumber}.
   * @param lineNum Key property. See {@link PayStatementBenefitLineInquiries.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `PayStatementBenefitLineInquiries`.
   */
  delete(
    payStatementNumber: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<PayStatementBenefitLineInquiries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayStatementBenefitLineInquiries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayStatementBenefitLineInquiries` by taking the entity as a parameter.
   */
  delete(
    entity: PayStatementBenefitLineInquiries<T>
  ): DeleteRequestBuilder<PayStatementBenefitLineInquiries<T>, T>;
  delete(
    payStatementNumberOrEntity: any,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<PayStatementBenefitLineInquiries<T>, T> {
    return new DeleteRequestBuilder<PayStatementBenefitLineInquiries<T>, T>(
      this.entityApi,
      payStatementNumberOrEntity instanceof PayStatementBenefitLineInquiries
        ? payStatementNumberOrEntity
        : {
            PayStatementNumber: payStatementNumberOrEntity!,
            LineNum: lineNum!
          }
    );
  }
}
