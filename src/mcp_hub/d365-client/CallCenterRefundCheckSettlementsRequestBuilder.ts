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
import { CallCenterRefundCheckSettlements } from './CallCenterRefundCheckSettlements';

/**
 * Request builder class for operations supported on the {@link CallCenterRefundCheckSettlements} entity.
 */
export class CallCenterRefundCheckSettlementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterRefundCheckSettlements<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterRefundCheckSettlements` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterRefundCheckSettlements` entities.
   */
  getAll(): GetAllRequestBuilder<CallCenterRefundCheckSettlements<T>, T> {
    return new GetAllRequestBuilder<CallCenterRefundCheckSettlements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CallCenterRefundCheckSettlements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterRefundCheckSettlements`.
   */
  create(
    entity: CallCenterRefundCheckSettlements<T>
  ): CreateRequestBuilder<CallCenterRefundCheckSettlements<T>, T> {
    return new CreateRequestBuilder<CallCenterRefundCheckSettlements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CallCenterRefundCheckSettlements` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterRefundCheckSettlements.dataAreaId}.
   * @param salesId Key property. See {@link CallCenterRefundCheckSettlements.salesId}.
   * @param lineNumber Key property. See {@link CallCenterRefundCheckSettlements.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CallCenterRefundCheckSettlements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CallCenterRefundCheckSettlements<T>, T> {
    return new GetByKeyRequestBuilder<CallCenterRefundCheckSettlements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesId: salesId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterRefundCheckSettlements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterRefundCheckSettlements`.
   */
  update(
    entity: CallCenterRefundCheckSettlements<T>
  ): UpdateRequestBuilder<CallCenterRefundCheckSettlements<T>, T> {
    return new UpdateRequestBuilder<CallCenterRefundCheckSettlements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterRefundCheckSettlements`.
   * @param dataAreaId Key property. See {@link CallCenterRefundCheckSettlements.dataAreaId}.
   * @param salesId Key property. See {@link CallCenterRefundCheckSettlements.salesId}.
   * @param lineNumber Key property. See {@link CallCenterRefundCheckSettlements.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterRefundCheckSettlements`.
   */
  delete(
    dataAreaId: string,
    salesId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CallCenterRefundCheckSettlements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterRefundCheckSettlements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterRefundCheckSettlements` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterRefundCheckSettlements<T>
  ): DeleteRequestBuilder<CallCenterRefundCheckSettlements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CallCenterRefundCheckSettlements<T>, T> {
    return new DeleteRequestBuilder<CallCenterRefundCheckSettlements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterRefundCheckSettlements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesId: salesId!,
            LineNumber: lineNumber!
          }
    );
  }
}
