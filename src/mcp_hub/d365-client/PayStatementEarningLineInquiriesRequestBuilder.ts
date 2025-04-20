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
import { PayStatementEarningLineInquiries } from './PayStatementEarningLineInquiries';

/**
 * Request builder class for operations supported on the {@link PayStatementEarningLineInquiries} entity.
 */
export class PayStatementEarningLineInquiriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayStatementEarningLineInquiries<T>, T> {
  /**
   * Returns a request builder for querying all `PayStatementEarningLineInquiries` entities.
   * @returns A request builder for creating requests to retrieve all `PayStatementEarningLineInquiries` entities.
   */
  getAll(): GetAllRequestBuilder<PayStatementEarningLineInquiries<T>, T> {
    return new GetAllRequestBuilder<PayStatementEarningLineInquiries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayStatementEarningLineInquiries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayStatementEarningLineInquiries`.
   */
  create(
    entity: PayStatementEarningLineInquiries<T>
  ): CreateRequestBuilder<PayStatementEarningLineInquiries<T>, T> {
    return new CreateRequestBuilder<PayStatementEarningLineInquiries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayStatementEarningLineInquiries` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayStatementEarningLineInquiries.dataAreaId}.
   * @param payStatementNumber Key property. See {@link PayStatementEarningLineInquiries.payStatementNumber}.
   * @param lineNum Key property. See {@link PayStatementEarningLineInquiries.lineNum}.
   * @returns A request builder for creating requests to retrieve one `PayStatementEarningLineInquiries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    payStatementNumber: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PayStatementEarningLineInquiries<T>, T> {
    return new GetByKeyRequestBuilder<PayStatementEarningLineInquiries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PayStatementNumber: payStatementNumber,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayStatementEarningLineInquiries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayStatementEarningLineInquiries`.
   */
  update(
    entity: PayStatementEarningLineInquiries<T>
  ): UpdateRequestBuilder<PayStatementEarningLineInquiries<T>, T> {
    return new UpdateRequestBuilder<PayStatementEarningLineInquiries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayStatementEarningLineInquiries`.
   * @param dataAreaId Key property. See {@link PayStatementEarningLineInquiries.dataAreaId}.
   * @param payStatementNumber Key property. See {@link PayStatementEarningLineInquiries.payStatementNumber}.
   * @param lineNum Key property. See {@link PayStatementEarningLineInquiries.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `PayStatementEarningLineInquiries`.
   */
  delete(
    dataAreaId: string,
    payStatementNumber: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<PayStatementEarningLineInquiries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayStatementEarningLineInquiries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayStatementEarningLineInquiries` by taking the entity as a parameter.
   */
  delete(
    entity: PayStatementEarningLineInquiries<T>
  ): DeleteRequestBuilder<PayStatementEarningLineInquiries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    payStatementNumber?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<PayStatementEarningLineInquiries<T>, T> {
    return new DeleteRequestBuilder<PayStatementEarningLineInquiries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayStatementEarningLineInquiries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PayStatementNumber: payStatementNumber!,
            LineNum: lineNum!
          }
    );
  }
}
