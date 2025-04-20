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
import { RetailChannelPaymentConnectorLines } from './RetailChannelPaymentConnectorLines';

/**
 * Request builder class for operations supported on the {@link RetailChannelPaymentConnectorLines} entity.
 */
export class RetailChannelPaymentConnectorLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailChannelPaymentConnectorLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailChannelPaymentConnectorLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailChannelPaymentConnectorLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailChannelPaymentConnectorLines<T>, T> {
    return new GetAllRequestBuilder<RetailChannelPaymentConnectorLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailChannelPaymentConnectorLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailChannelPaymentConnectorLines`.
   */
  create(
    entity: RetailChannelPaymentConnectorLines<T>
  ): CreateRequestBuilder<RetailChannelPaymentConnectorLines<T>, T> {
    return new CreateRequestBuilder<RetailChannelPaymentConnectorLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailChannelPaymentConnectorLines` entity based on its keys.
   * @param operatingUnitNumber Key property. See {@link RetailChannelPaymentConnectorLines.operatingUnitNumber}.
   * @param paymentConnectorName Key property. See {@link RetailChannelPaymentConnectorLines.paymentConnectorName}.
   * @returns A request builder for creating requests to retrieve one `RetailChannelPaymentConnectorLines` entity based on its keys.
   */
  getByKey(
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    paymentConnectorName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailChannelPaymentConnectorLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailChannelPaymentConnectorLines<T>, T>(
      this.entityApi,
      {
        OperatingUnitNumber: operatingUnitNumber,
        PaymentConnectorName: paymentConnectorName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailChannelPaymentConnectorLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailChannelPaymentConnectorLines`.
   */
  update(
    entity: RetailChannelPaymentConnectorLines<T>
  ): UpdateRequestBuilder<RetailChannelPaymentConnectorLines<T>, T> {
    return new UpdateRequestBuilder<RetailChannelPaymentConnectorLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailChannelPaymentConnectorLines`.
   * @param operatingUnitNumber Key property. See {@link RetailChannelPaymentConnectorLines.operatingUnitNumber}.
   * @param paymentConnectorName Key property. See {@link RetailChannelPaymentConnectorLines.paymentConnectorName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelPaymentConnectorLines`.
   */
  delete(
    operatingUnitNumber: string,
    paymentConnectorName: string
  ): DeleteRequestBuilder<RetailChannelPaymentConnectorLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailChannelPaymentConnectorLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelPaymentConnectorLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailChannelPaymentConnectorLines<T>
  ): DeleteRequestBuilder<RetailChannelPaymentConnectorLines<T>, T>;
  delete(
    operatingUnitNumberOrEntity: any,
    paymentConnectorName?: string
  ): DeleteRequestBuilder<RetailChannelPaymentConnectorLines<T>, T> {
    return new DeleteRequestBuilder<RetailChannelPaymentConnectorLines<T>, T>(
      this.entityApi,
      operatingUnitNumberOrEntity instanceof RetailChannelPaymentConnectorLines
        ? operatingUnitNumberOrEntity
        : {
            OperatingUnitNumber: operatingUnitNumberOrEntity!,
            PaymentConnectorName: paymentConnectorName!
          }
    );
  }
}
