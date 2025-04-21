/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { SalesAgreementPaymentOrders } from './SalesAgreementPaymentOrders';

/**
 * Request builder class for operations supported on the {@link SalesAgreementPaymentOrders} entity.
 */
export class SalesAgreementPaymentOrdersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesAgreementPaymentOrders<T>, T> {
  /**
   * Returns a request builder for querying all `SalesAgreementPaymentOrders` entities.
   * @returns A request builder for creating requests to retrieve all `SalesAgreementPaymentOrders` entities.
   */
  getAll(): GetAllRequestBuilder<SalesAgreementPaymentOrders<T>, T> {
    return new GetAllRequestBuilder<SalesAgreementPaymentOrders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesAgreementPaymentOrders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesAgreementPaymentOrders`.
   */
  create(
    entity: SalesAgreementPaymentOrders<T>
  ): CreateRequestBuilder<SalesAgreementPaymentOrders<T>, T> {
    return new CreateRequestBuilder<SalesAgreementPaymentOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesAgreementPaymentOrders` entity based on its keys.
   * @param legalEntity Key property. See {@link SalesAgreementPaymentOrders.legalEntity}.
   * @param salesAgreement Key property. See {@link SalesAgreementPaymentOrders.salesAgreement}.
   * @returns A request builder for creating requests to retrieve one `SalesAgreementPaymentOrders` entity based on its keys.
   */
  getByKey(
    legalEntity: DeserializedType<T, 'Edm.String'>,
    salesAgreement: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesAgreementPaymentOrders<T>, T> {
    return new GetByKeyRequestBuilder<SalesAgreementPaymentOrders<T>, T>(
      this.entityApi,
      {
        LegalEntity: legalEntity,
        SalesAgreement: salesAgreement
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesAgreementPaymentOrders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesAgreementPaymentOrders`.
   */
  update(
    entity: SalesAgreementPaymentOrders<T>
  ): UpdateRequestBuilder<SalesAgreementPaymentOrders<T>, T> {
    return new UpdateRequestBuilder<SalesAgreementPaymentOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesAgreementPaymentOrders`.
   * @param legalEntity Key property. See {@link SalesAgreementPaymentOrders.legalEntity}.
   * @param salesAgreement Key property. See {@link SalesAgreementPaymentOrders.salesAgreement}.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreementPaymentOrders`.
   */
  delete(
    legalEntity: string,
    salesAgreement: string
  ): DeleteRequestBuilder<SalesAgreementPaymentOrders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesAgreementPaymentOrders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreementPaymentOrders` by taking the entity as a parameter.
   */
  delete(
    entity: SalesAgreementPaymentOrders<T>
  ): DeleteRequestBuilder<SalesAgreementPaymentOrders<T>, T>;
  delete(
    legalEntityOrEntity: any,
    salesAgreement?: string
  ): DeleteRequestBuilder<SalesAgreementPaymentOrders<T>, T> {
    return new DeleteRequestBuilder<SalesAgreementPaymentOrders<T>, T>(
      this.entityApi,
      legalEntityOrEntity instanceof SalesAgreementPaymentOrders
        ? legalEntityOrEntity
        : {
            LegalEntity: legalEntityOrEntity!,
            SalesAgreement: salesAgreement!
          }
    );
  }
}
