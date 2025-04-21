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
import { SalesAgreementLineFulfillment } from './SalesAgreementLineFulfillment';

/**
 * Request builder class for operations supported on the {@link SalesAgreementLineFulfillment} entity.
 */
export class SalesAgreementLineFulfillmentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesAgreementLineFulfillment<T>, T> {
  /**
   * Returns a request builder for querying all `SalesAgreementLineFulfillment` entities.
   * @returns A request builder for creating requests to retrieve all `SalesAgreementLineFulfillment` entities.
   */
  getAll(): GetAllRequestBuilder<SalesAgreementLineFulfillment<T>, T> {
    return new GetAllRequestBuilder<SalesAgreementLineFulfillment<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesAgreementLineFulfillment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesAgreementLineFulfillment`.
   */
  create(
    entity: SalesAgreementLineFulfillment<T>
  ): CreateRequestBuilder<SalesAgreementLineFulfillment<T>, T> {
    return new CreateRequestBuilder<SalesAgreementLineFulfillment<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesAgreementLineFulfillment` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesAgreementLineFulfillment.dataAreaId}.
   * @param salesAgreementId Key property. See {@link SalesAgreementLineFulfillment.salesAgreementId}.
   * @param lineNumber Key property. See {@link SalesAgreementLineFulfillment.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesAgreementLineFulfillment` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesAgreementId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SalesAgreementLineFulfillment<T>, T> {
    return new GetByKeyRequestBuilder<SalesAgreementLineFulfillment<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesAgreementId: salesAgreementId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesAgreementLineFulfillment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesAgreementLineFulfillment`.
   */
  update(
    entity: SalesAgreementLineFulfillment<T>
  ): UpdateRequestBuilder<SalesAgreementLineFulfillment<T>, T> {
    return new UpdateRequestBuilder<SalesAgreementLineFulfillment<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesAgreementLineFulfillment`.
   * @param dataAreaId Key property. See {@link SalesAgreementLineFulfillment.dataAreaId}.
   * @param salesAgreementId Key property. See {@link SalesAgreementLineFulfillment.salesAgreementId}.
   * @param lineNumber Key property. See {@link SalesAgreementLineFulfillment.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreementLineFulfillment`.
   */
  delete(
    dataAreaId: string,
    salesAgreementId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<SalesAgreementLineFulfillment<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesAgreementLineFulfillment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreementLineFulfillment` by taking the entity as a parameter.
   */
  delete(
    entity: SalesAgreementLineFulfillment<T>
  ): DeleteRequestBuilder<SalesAgreementLineFulfillment<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesAgreementId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<SalesAgreementLineFulfillment<T>, T> {
    return new DeleteRequestBuilder<SalesAgreementLineFulfillment<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesAgreementLineFulfillment
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesAgreementId: salesAgreementId!,
            LineNumber: lineNumber!
          }
    );
  }
}
