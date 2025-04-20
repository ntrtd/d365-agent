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
import { RetailSalesAgreementFulfillments } from './RetailSalesAgreementFulfillments';

/**
 * Request builder class for operations supported on the {@link RetailSalesAgreementFulfillments} entity.
 */
export class RetailSalesAgreementFulfillmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailSalesAgreementFulfillments<T>, T> {
  /**
   * Returns a request builder for querying all `RetailSalesAgreementFulfillments` entities.
   * @returns A request builder for creating requests to retrieve all `RetailSalesAgreementFulfillments` entities.
   */
  getAll(): GetAllRequestBuilder<RetailSalesAgreementFulfillments<T>, T> {
    return new GetAllRequestBuilder<RetailSalesAgreementFulfillments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailSalesAgreementFulfillments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailSalesAgreementFulfillments`.
   */
  create(
    entity: RetailSalesAgreementFulfillments<T>
  ): CreateRequestBuilder<RetailSalesAgreementFulfillments<T>, T> {
    return new CreateRequestBuilder<RetailSalesAgreementFulfillments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailSalesAgreementFulfillments` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailSalesAgreementFulfillments.dataAreaId}.
   * @param salesAgreementId Key property. See {@link RetailSalesAgreementFulfillments.salesAgreementId}.
   * @param lineNumber Key property. See {@link RetailSalesAgreementFulfillments.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailSalesAgreementFulfillments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesAgreementId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailSalesAgreementFulfillments<T>, T> {
    return new GetByKeyRequestBuilder<RetailSalesAgreementFulfillments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesAgreementId: salesAgreementId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailSalesAgreementFulfillments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailSalesAgreementFulfillments`.
   */
  update(
    entity: RetailSalesAgreementFulfillments<T>
  ): UpdateRequestBuilder<RetailSalesAgreementFulfillments<T>, T> {
    return new UpdateRequestBuilder<RetailSalesAgreementFulfillments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailSalesAgreementFulfillments`.
   * @param dataAreaId Key property. See {@link RetailSalesAgreementFulfillments.dataAreaId}.
   * @param salesAgreementId Key property. See {@link RetailSalesAgreementFulfillments.salesAgreementId}.
   * @param lineNumber Key property. See {@link RetailSalesAgreementFulfillments.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesAgreementFulfillments`.
   */
  delete(
    dataAreaId: string,
    salesAgreementId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailSalesAgreementFulfillments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailSalesAgreementFulfillments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesAgreementFulfillments` by taking the entity as a parameter.
   */
  delete(
    entity: RetailSalesAgreementFulfillments<T>
  ): DeleteRequestBuilder<RetailSalesAgreementFulfillments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesAgreementId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailSalesAgreementFulfillments<T>, T> {
    return new DeleteRequestBuilder<RetailSalesAgreementFulfillments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailSalesAgreementFulfillments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesAgreementId: salesAgreementId!,
            LineNumber: lineNumber!
          }
    );
  }
}
